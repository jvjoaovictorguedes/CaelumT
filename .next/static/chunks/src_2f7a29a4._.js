(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/utils/axiosIntance.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "http://localhost:3001/api",
    timeout: 5000
});
const __TURBOPACK__default__export__ = axiosInstance;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ClassSelection
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$axiosIntance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/axiosIntance.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ClassSelection() {
    var _rawClassesObject_find;
    _s();
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loadingClassess, setLoadingClassess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [rawClassesObject, setRawClassesObject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [classesData, setClassesData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedClasses, setSelectedClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loadingClasses, setLoadingClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [hasRolledSpecial, setHasRolledSpecial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [specialClasses, setSpecialClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [visibleClasses, setVisibleClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [acceptedSpecialClasses, setAcceptedSpecialClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tempCharacterData, setTempCharacterData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClassSelection.useEffect": ()=>{
            const fetchClasses = {
                "ClassSelection.useEffect.fetchClasses": async ()=>{
                    try {
                        setLoadingClassess(true);
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$axiosIntance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/classes");
                        const rawClassesObject = response.data.data;
                        if (rawClassesObject && typeof rawClassesObject === "object" && !Array.isArray(rawClassesObject)) {
                            const fetchedClassesArray = Object.values(rawClassesObject);
                            setRawClassesObject(rawClassesObject.classes);
                            if (rawClassesObject.classes.length >= 2) {
                                setClassesData(rawClassesObject.classes.slice(0, 2));
                                setVisibleClasses(rawClassesObject.classes.slice(0, 2));
                            } else {
                                setErrorMessage("Não há classes suficientes disponíveis.");
                            }
                            if (fetchedClassesArray.length > 0) {
                                setSelectedClasses(fetchedClassesArray[0].id);
                            }
                        } else {
                            console.error("A API /races não retornou um objeto ou array de raças esperado:", rawClassesObject);
                            setErrorMessage("Formato de dados inesperado da API de raças.");
                        }
                    } catch (error) {
                        console.error("Erro ao carregar as raças:", error);
                        setErrorMessage("Erro ao carregar as raças. Tente novamente mais tarde.");
                    } finally{
                        setLoadingClasses(false);
                    }
                }
            }["ClassSelection.useEffect.fetchClasses"];
            fetchClasses();
        }
    }["ClassSelection.useEffect"], []);
    //roll 100%
    const rollSpecialClasses = ()=>{
        if (hasRolledSpecial) return;
        const roll = Math.random() * 100;
        if (roll <= 100) {
            const nonDefaultClasses = rawClassesObject.slice(2, 4);
            if (nonDefaultClasses.length >= 2) {
                setSpecialClasses(nonDefaultClasses);
                setHasRolledSpecial(true);
                setVisibleClasses(nonDefaultClasses);
            }
        }
    };
    const currentClassDescription = ((_rawClassesObject_find = rawClassesObject.find((cls)=>cls.id === selectedClasses)) === null || _rawClassesObject_find === void 0 ? void 0 : _rawClassesObject_find.descricao) || "Selecione uma classe para ver a descrição.";
    const handleCreateFinalCharacter = async (event)=>{
        event.preventDefault();
        setErrorMessage("");
        rollSpecialClasses();
        if (!tempCharacterData || !tempCharacterData.name || !tempCharacterData.id_race) {
            setErrorMessage("Dados de personagem incompletos. Por favor, reinicie a criação.");
            // router.replace("/create");
            return;
        }
        if (!selectedClasses) {
            setErrorMessage("Por favor, selecione uma classe.");
            return;
        }
        if (loadingClasses) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center min-h-screen bg-cover bg-center",
                style: {
                    backgroundImage: "url('/images/homeMedieval.png')"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white text-3xl",
                    children: "Carregando classes..."
                }, void 0, false, {
                    fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                lineNumber: 119,
                columnNumber: 9
            }, this);
        }
        setIsLoading(true);
        const finalCharacterData = {
            name: tempCharacterData.name,
            gender: tempCharacterData.gender,
            id_race: tempCharacterData.id_race,
            id_class: selectedClasses
        };
        // const result = await createCharacter(finalCharacterData);
        setIsLoading(false);
    // if (result.success) {
    //   alert("Personagem criado com sucesso!");
    //   router.replace("/dashboard");
    // } else {
    //   setErrorMessage(
    //     result.message || "Erro desconhecido ao criar personagem."
    //   );
    // }
    };
    if (errorMessage && rawClassesObject.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen bg-cover bg-center",
            style: {
                backgroundImage: "url('/images/homeMedieval.png')"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-red-500 text-3xl text-center",
                children: [
                    errorMessage,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl mt-4",
                        children: "Por favor, recarregue a página."
                    }, void 0, false, {
                        fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
            lineNumber: 152,
            columnNumber: 7
        }, this);
    }
    if (!rawClassesObject || classesData.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen bg-cover bg-center",
            style: {
                backgroundImage: "url('/images/homeMedieval.png')"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white text-3xl",
                children: "Nenhuma classe encontrada ou erro de carregamento."
            }, void 0, false, {
                fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                lineNumber: 170,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
            lineNumber: 166,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen bg-cover bg-center",
        style: {
            backgroundImage: "url('/images/homeMedieval.png')"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#292018] p-8 rounded-lg shadow-xl w-[600px] border-[#F3B43F] border-4 font-imFeel text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl text-center text-[#F3B43F] mb-6",
                    children: "Escolha sua Classe"
                }, void 0, false, {
                    fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this),
                hasRolledSpecial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#DFC492] border-2 border-[#F3B43F] p-4 rounded-md mb-6 h-10 flex items-center justify-center text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-1xl text-center text-[#292018]",
                        children: "Ao reencarnar você sente um toque sutil, e os Deuses o abençoaram...."
                    }, void 0, false, {
                        fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                        lineNumber: 188,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                    lineNumber: 187,
                    columnNumber: 11
                }, this),
                tempCharacterData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-xl mb-4",
                    children: [
                        "Você escolheu: **",
                        tempCharacterData.name,
                        "** (",
                        tempCharacterData.gender,
                        ", ",
                        tempCharacterData.id_race,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                    lineNumber: 195,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleCreateFinalCharacter,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-8 mb-6",
                            children: visibleClasses.map((cls)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative p-4 rounded-lg cursor-pointer transition-all duration-200\n                                ".concat(selectedClasses === cls.id ? "border-4 border-[#F3B43F] bg-[#3a2f24]" : "border-4 border-transparent hover:border-[#F3B43F]/50"),
                                    onClick: ()=>setSelectedClasses(cls.id),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-32 h-32 mx-auto mb-2 bg-gray-700 rounded-full overflow-hidden flex items-center justify-center",
                                            style: {
                                                backgroundImage: "url(".concat(cls.imagem_url, ")"),
                                                backgroundSize: "cover",
                                                backgroundPosition: "center"
                                            },
                                            children: !cls.imagem_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white text-lg",
                                                children: cls.nome
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                                                lineNumber: 223,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center text-xl text-[#F3B43F]",
                                            children: cls.nome
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, cls.id, true, {
                                    fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#DFC492] border-2 border-[#F3B43F] p-4 rounded-md mb-6 h-32 flex items-center justify-center text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-[#1f1813] leading-relaxed",
                                children: currentClassDescription
                            }, void 0, false, {
                                fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this),
                        errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-center mb-4 text-lg",
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                            lineNumber: 238,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "w-max h-[51px] bg-[#8D6825] font-imFeel text-white text-4xl hover:bg-gradient-to-b rounded-2xl cursor-pointer hover:to-[#8D6825] hover:from-[#684424] border-[#F3B43F] border-4 transition-all duration-200",
                                disabled: isLoading,
                                children: isLoading ? "CRIANDO PERSONAGEM..." : "CONFIRMAR"
                            }, void 0, false, {
                                fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
            lineNumber: 182,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
_s(ClassSelection, "0+UHjjFNGZ3cvEDGOvLsRxMEexU=");
_c = ClassSelection;
var _c;
__turbopack_context__.k.register(_c, "ClassSelection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_2f7a29a4._.js.map