import React from "react";

export default function Login() {
    return (
        <div className="bg-[#292018] p-8 rounded-lg shadow-md w-[443px] max-w-sm inset-0 m-auto absolute h-[500px] border-[#F3B43F] border-4">
            <h1 className="text-2xl font-bold mb-6 text-center font-imFeel text-[86px] bg-gradient-to-b from-[#F3B43F] to-[#8D6825] bg-clip-text text-transparent">LOGIN</h1>
            <form>
                <div className="flex justify-center mb-4">
                    <input
                        type="email"
                        id="email"
                        className="w-[364px] px-3 py-2 text-black bg-[#DFC492] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-[#DFC492] font-imFeel text-[18px]"
                        placeholder="Usuário"
                    />
                </div>
                <div className="flex justify-center mb-4">
                    <input
                        type="password"
                        id="password"
                        className="w-[364px] px-3 py-2 text-black bg-[#DFC492] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-imFeel text-[18px] focus:bg-[#DFC492]"
                        placeholder="Senha"
                    />
                </div>
                <div className="flex justify-center flex-wrap">
                    <button className="w-[258px] h-[51px] bg-[#8D6825] font-imFeel text-white text-4xl mb-4 hover:bg-gradient-to-b rounded-2xl cursor-pointer hover:to-[#8D6825] hover:from-[#684424] ">LOGAR</button>
                    <button className="w-[258px] h-[51px] bg-[#8D6825] font-imFeel text-white text-4xl hover:bg-gradient-to-b rounded-2xl hover:to-[#8D6825] hover:from-[#684424] cursor-pointer">REGISTRAR</button>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <input className="mr-2 border-[#F3B43F] border-2 appearance-none w-5 h-5 rounded-sm checked:bg-yellow-500 checked:border-yellow-700 focus:outline-none" type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember" className="font-imFeel text-2xl">Lembrar-me a senha</label>
                </div>
            </form>
        </div>
    );
}