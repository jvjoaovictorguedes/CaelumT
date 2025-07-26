"use server";

import { cookies } from "next/headers";
import { TOKEN_KEY } from "../../constants/index";
import axiosInstance from "@/utils/axiosIntance";

interface LoginResponseData {
  token: string;
  data: {
    user: {
      id: string;
    };
  };
}

interface CookiesData {
  email: string;
  password: string;
}
export async function login(data: CookiesData) {
  try {
    const response = await axiosInstance.post<LoginResponseData>(
      "/users/login",
      {
        email: data.email,
        password: data.password,
      }
    );

    const character = await axiosInstance.get(
      `/characters/${response.data.data.user.id}`,
      {
        validateStatus: (status) => status <= 404,
      }
    );

    const { token, data: userData } = response.data;

    const cookieStore = await cookies();
    cookieStore.set("user", JSON.stringify(userData.user), {
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    cookieStore.set(TOKEN_KEY, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    if (character.status === 200) {
      const cookieStore = await cookies();
      const notCharacter = false;
      cookieStore.set("notCharacter", JSON.stringify(notCharacter), {
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });
    }
    if (character.status === 404) {
      const cookieStore = await cookies();
      const notCharacter = true;
      cookieStore.set("notCharacter", JSON.stringify(notCharacter), {
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });
    }

    console.log(
      "Usuário logado com sucesso (Server Action):",
      userData.user.id
    );
    return {
      success: true,
      userId: userData.user.id,
      character: character.status,
    };
  } catch (error: any) {
    console.error(
      "Erro ao logar usuário (Server Action):",
      error.response ? error.response.data : error.message
    );
    return {
      success: false,
      message:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "Email ou senha incorretos. Tente novamente.",
    };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(TOKEN_KEY);
  cookieStore.delete("user");
  return { success: true };
}
