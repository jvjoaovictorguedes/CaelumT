(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/utils/axiosIntance.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [app-client] (ecmascript)");
;
;
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "http://localhost:3001/api",
    timeout: 5000
});
axiosInstance.interceptors.request.use((config)=>{
    const token = localStorage.getItem("authToken");
    if (token) {
        config.headers.Authorization = "Bearer ".concat(token);
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
});
axiosInstance.interceptors.response.use((response)=>response, (error)=>{
    if (error.response && error.response.status === 403) {
        console.log("Token expirado ou inválido. Redirecionando para o login.");
        localStorage.removeItem("authToken");
        localStorage.removeItem("currentUser");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])().push("/login");
    }
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = axiosInstance;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/images/human.webp (static in ecmascript)": ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/human.d2d4585b.webp");}),
"[project]/public/images/human.webp.mjs { IMAGE => \"[project]/public/images/human.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$human$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/human.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$human$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 458,
    height: 458,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRhMBAABXRUJQVlA4TAcBAAAvB8ABAM1VICICHgiADQIAAIDvValeL5IAOQQAAAAAAAAAAAEAAAAAAAAAAAAAAACCQF4p+AFiz3YAAAAPBNiGAQAA4PyTdnVgBwAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+3JrGAwHIQQAAADj/+6+v0dYKAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAsArzfv+LXJ+nQvwtXkcG77LDcgRygI/4U46p1hcqwVkLTNJS0zlpuZvZL5NaGknYrDiGq+tStawpK+k0HE1M9KNgSE9tJSICIuLqvKsi6ANvuu/OIkKmO27vJPud51seJ8c9jRGMsf45mvgj6TDZpvoCGQA="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/images/female-human.webp (static in ecmascript)": ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/female-human.9f91e409.webp");}),
"[project]/public/images/female-human.webp.mjs { IMAGE => \"[project]/public/images/female-human.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$female$2d$human$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/female-human.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$female$2d$human$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 458,
    height: 458,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRhIBAABXRUJQVlA4TAYBAAAvB8ABAM1VICICHgiADQIAAIC9R9VzSJIAAAkAAAAAAAAAgAAAAAAAAAAAAAAAAACAWIHAr/5arR0AAMADAThCAAAAOP+7VvZeAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIACbbfzQABsEAAAAM5/+7Z/FSsAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAMABBXXvb4tcnrOG/8Veq7bbq2UxIqm0yy+xFWE7jbqkygWcRyrOA1u33/5+nNVwsESUcgSR22zm/BwUCCwSIoG8ylXZ9RJGxJAAQMeyexgYih7Mm3Y4QsX/MMng+h342jd0QnTMlzise1q1mW7d56xjXgwE"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/images/elf.webp (static in ecmascript)": ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/elf.1fa19b23.webp");}),
"[project]/public/images/elf.webp.mjs { IMAGE => \"[project]/public/images/elf.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$elf$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/elf.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$elf$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 458,
    height: 458,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRhIBAABXRUJQVlA4TAYBAAAvB8ABAM1VICICHggADiIAAIDbWlZZgkFIAQAAAAAAAAAAQAAAAAAAAAAAAAAAAAAARIbIXzaxdrs/AAAADwTYhgEAAOD8k3wbuwMAAACAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcB+S1gMBSGEAAAA4//v+97U2AQAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAKBZaNX3kfv7DNgciUkAjKNrzcxgsf/R6HxUOVGyk/Jh4bVEARezv/vyfI+iITjCzU5jWv+8m5vDDOs5uYMAFYQnUYUvnI4KIQDQ0VHLCpiaRLhzAl1r/aAvOXxX+O9ExtbmsgLys616W1vntan61agJ"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/images/female-elf.webp (static in ecmascript)": ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/female-elf.eb58459a.webp");}),
"[project]/public/images/female-elf.webp.mjs { IMAGE => \"[project]/public/images/female-elf.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$female$2d$elf$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/female-elf.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$female$2d$elf$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 570,
    height: 570,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRhYBAABXRUJQVlA4TAoBAAAvB8ABAM1VICICHgiADQIAAIC2vRyOnKQAXAAAAAAAAAAAAAACAAAAAAAAAAAAAEAgAIFX/RHVtx8AAMADAaiBAAAAOP/btdobAAAAAADgAQAAAAAAAAAAAAAAAAAAAAAAAAAAAACeN63KAwGwQQAAADj/b+71ZXUEIQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAIBC1Aulat8i53fSDXJDDEao0ZvkeWmqHd/68LR84/oPwTlFpMZUVQXng9vn7PZ2JSGMK+TyNYqijHs1eiG1EZHyABOgP+nJeEdznrY0AAxYYpG2F4fmBlIJQUghfj8Ap2ze79kV0Q9I8vMwu3a3ln4eg+TJZmtZYA=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/images/dwarf.png (static in ecmascript)": ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/dwarf.dea5129e.png");}),
"[project]/public/images/dwarf.png.mjs { IMAGE => \"[project]/public/images/dwarf.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$dwarf$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/dwarf.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$dwarf$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/ALh6Fr+CHbR8HKJtFqNuF7R7HLx/GrR3FAC6fhm0fB2ibBiTXA+TXQ+lbxmzexy3excAs3kZu4EgnmcVrHAaq28aoWkWu4EgsXcXAK52GcOIJKBoFaNpFaNoFaJqFsGGIqx0FwCtdRi+hCGMWA19SQV8SQWOWg29gh+rchYAr3UWlF8PekgEeUcDeEYDfEkFkl0Oq3ETALV5FqBoEoFNBnhGA3dGA4FNBp5nELJ1EwCydRO3eheqcRWYYg+YYg+qcRW2eRavcxKcJ0i0er0pXwAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/images/female-dwarf.webp (static in ecmascript)": ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/female-dwarf.db45045c.webp");}),
"[project]/public/images/female-dwarf.webp.mjs { IMAGE => \"[project]/public/images/female-dwarf.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$female$2d$dwarf$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/female-dwarf.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$female$2d$dwarf$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 458,
    height: 458,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRhEBAABXRUJQVlA4TAUBAAAvB8ABAM1VICICHggADiIAAIDp5jpRyIAEwAcAAAAAAAAAAACAAAAAAAAAAAAAAACAFrABALtt3f0OAADAAwG2YQAAADj/pO38PwAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwLem8UAAbBAAAADOf/u2r9BDBwAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAADgAJU4rTaPvL9GM6W1SR2AyqCsMoGh98rS5JK9Vel3Fu8pyjP/ghxyhBjVjAyVDBEyFvqW71pGCGT8TUYYxGLpw22YwQYwoIt4/pq7sIVHUu/vri5iKodwdYr7iKeKyccH6QIM1/17+rGuc53X2/f7USAA"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/images/orc.png (static in ecmascript)": ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/orc.765fe1dd.png");}),
"[project]/public/images/orc.png.mjs { IMAGE => \"[project]/public/images/orc.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$orc$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/orc.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$orc$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AK96IriEK7OCLah5KKh5KLOCLLiEKq96IgC1gSixgCuwgC2eahufaxyxgS2xgSy2gigAsH4os4MumWkejVsTjVsSmmoetIQusX8pAK59KcOSN6BvIZBeFJBdFKFwIsORNq59KQCtfCm8izOebiCSXxSRXhOfbyG8izKtfCgArXsmh1oUfE4MiVgQiFcQfE4MiFoUrXolALN+Jp5uH31QDXJHCXJHCX1QDZ9uH7N/JgCsdyC0gCeseiabax6bbB+teya1gSiteCFhyk13GiLBRgAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/images/female-orc.webp (static in ecmascript)": ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/female-orc.830787c6.webp");}),
"[project]/public/images/female-orc.webp.mjs { IMAGE => \"[project]/public/images/female-orc.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$female$2d$orc$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/female-orc.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$female$2d$orc$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 458,
    height: 458,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRg0BAABXRUJQVlA4TAEBAAAvB8ABAM1VICICHgiADQIAAIBbq7cO4AAAEuAAAAAAAAAAAAACAAAAAAAAAAAAAICKgBA60aRn+wAAADwQYCIIAACA89+qDwAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALxq80AAchAAAADOf3/7rcqSAQAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAACAgoIC7f//I+d3DA7dwjs3cKoBJS/hHTL12ra4b+j3rjrF2/XYOR1uWNJ9/4nFASquziG0pfWpwMDwEFIFQ/rMrGpOCnpuUpGRLHzXXpAFEIFd1utGh1SKgbT8tzwb0igHpBUg9pv6HOuZ8k59xf5+AgA="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/CharacterCreation/CharacterCreation.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>CharacterCreation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$axiosIntance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/axiosIntance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$human$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$human$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/human.webp.mjs { IMAGE => "[project]/public/images/human.webp (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$female$2d$human$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$female$2d$human$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/female-human.webp.mjs { IMAGE => "[project]/public/images/female-human.webp (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$elf$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$elf$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/elf.webp.mjs { IMAGE => "[project]/public/images/elf.webp (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$female$2d$elf$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$female$2d$elf$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/female-elf.webp.mjs { IMAGE => "[project]/public/images/female-elf.webp (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$dwarf$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$dwarf$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/dwarf.png.mjs { IMAGE => "[project]/public/images/dwarf.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$female$2d$dwarf$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$female$2d$dwarf$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/female-dwarf.webp.mjs { IMAGE => "[project]/public/images/female-dwarf.webp (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$orc$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$orc$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/orc.png.mjs { IMAGE => "[project]/public/images/orc.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$female$2d$orc$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$female$2d$orc$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/female-orc.webp.mjs { IMAGE => "[project]/public/images/female-orc.webp (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function CharacterCreation() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [characterName, setCharacterName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [gender, setGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("masculino");
    const [selectedRace, setSelectedRace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [racesData, setRacesData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingRaces, setLoadingRaces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const maleImages = {
        humano: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$human$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$human$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        elfo: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$elf$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$elf$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        anao: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$dwarf$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$dwarf$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        ogro: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$orc$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$orc$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    };
    const femaleImages = {
        humana: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$female$2d$human$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$female$2d$human$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        elfa: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$female$2d$elf$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$female$2d$elf$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        ana: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$female$2d$dwarf$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$female$2d$dwarf$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        ogra: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$female$2d$orc$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$female$2d$orc$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CharacterCreation.useEffect": ()=>{
            const fetchRaces = {
                "CharacterCreation.useEffect.fetchRaces": async ()=>{
                    try {
                        setLoadingRaces(true);
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$axiosIntance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/races");
                        const rawRacesObject = response.data.data;
                        if (rawRacesObject && typeof rawRacesObject === "object" && !Array.isArray(rawRacesObject)) {
                            const fetchedRacesArray = Object.values(rawRacesObject);
                            const racesWithImages = fetchedRacesArray.map({
                                "CharacterCreation.useEffect.fetchRaces.racesWithImages": (race)=>{
                                    var _race_nome_masculino, _race_nome_feminino;
                                    const nomeMasculino = (_race_nome_masculino = race.nome_masculino) === null || _race_nome_masculino === void 0 ? void 0 : _race_nome_masculino.toLowerCase();
                                    const nomeFeminino = (_race_nome_feminino = race.nome_feminino) === null || _race_nome_feminino === void 0 ? void 0 : _race_nome_feminino.toLowerCase();
                                    return {
                                        ...race,
                                        imagem_masculina_url: race.imagem_masculina_url || nomeMasculino || "",
                                        imagem_feminina_url: race.imagem_feminina_url || [
                                            nomeFeminino
                                        ] || ""
                                    };
                                }
                            }["CharacterCreation.useEffect.fetchRaces.racesWithImages"]);
                            setRacesData(racesWithImages);
                            if (racesWithImages.length > 0) {
                                setSelectedRace(racesWithImages[0].id);
                            }
                        } else {
                            setErrorMessage("Formato de dados inesperado da API de raças.");
                        }
                    } catch (error) {
                        console.error("Erro ao carregar as raças:", error);
                        setErrorMessage("Erro ao carregar as raças. Tente novamente mais tarde.");
                    } finally{
                        setLoadingRaces(false);
                    }
                }
            }["CharacterCreation.useEffect.fetchRaces"];
            fetchRaces();
        }
    }["CharacterCreation.useEffect"], []);
    const currentRace = racesData.find((race)=>race.id === selectedRace);
    console.log(currentRace);
    const currentRaceDescription = currentRace ? gender === "masculino" ? currentRace.descricao_masculina : currentRace.descricao_feminina : "Selecione uma raça para ver a descrição.";
    const currentRaceImage = currentRace ? gender === "masculino" ? currentRace.imagem_masculina_url : currentRace.imagem_feminina_url : null;
    async function CreateCharacter(characterDetails) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$axiosIntance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/characters", characterDetails);
            alert('Personagem "'.concat(characterDetails.name, '" criado com sucesso!'));
            router.replace("/dashboard");
        } catch (error) {
            var _error_response_data, _error_response;
            console.error("Erro ao criar personagem:", error);
            setErrorMessage(((_error_response = error.response) === null || _error_response === void 0 ? void 0 : (_error_response_data = _error_response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.message) || "Erro ao criar personagem. Verifique o nome e tente novamente.");
        }
    }
    const handleConfirm = (event)=>{
        event.preventDefault();
        setErrorMessage("");
        if (characterName.trim() === "") {
            setErrorMessage("Por favor, digite o nome do personagem.");
            return;
        }
        if (!selectedRace) {
            setErrorMessage("Por favor, selecione uma raça.");
            return;
        }
        const characterData = {
            name: characterName,
            gender,
            id_race: selectedRace
        };
        CreateCharacter(characterData);
    };
    if (loadingRaces) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen bg-cover bg-center",
            style: {
                backgroundImage: "url('/images/homeMedieval.png')"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white text-3xl",
                children: "Carregando raças..."
            }, void 0, false, {
                fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
            lineNumber: 152,
            columnNumber: 7
        }, this);
    }
    if (errorMessage && racesData.length === 0) {
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
                        fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
                lineNumber: 167,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
            lineNumber: 163,
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
                    children: "Escolha sua Raça"
                }, void 0, false, {
                    fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleConfirm,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "characterName",
                                className: "w-full px-4 py-2 bg-[#DFC492] text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#F3B43F] text-xl",
                                placeholder: "Digite o nome do seu personagem",
                                value: characterName,
                                onChange: (e)=>setCharacterName(e.target.value),
                                maxLength: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 flex items-center justify-center space-x-8",
                            children: [
                                {
                                    label: "Masculino",
                                    value: "masculino"
                                },
                                {
                                    label: "Feminino",
                                    value: "feminino"
                                }
                            ].map((param)=>{
                                let { label, value } = param;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center cursor-pointer text-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "radio",
                                            name: "gender",
                                            value: value,
                                            checked: gender === value,
                                            onChange: ()=>setGender(value),
                                            className: "hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-6 h-6 border-2 border-[#F3B43F] rounded-full flex items-center justify-center mr-2",
                                            children: gender === value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-3 h-3 bg-[#F3B43F] rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
                                                lineNumber: 217,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this),
                                        label
                                    ]
                                }, value, true, {
                                    fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 gap-4 mb-6",
                            children: racesData.map((race)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative p-2 rounded-lg cursor-pointer transition-all duration-200 ".concat(selectedRace === race.id ? "border-4 border-[#F3B43F] bg-[#3a2f24]" : "border-4 border-transparent hover:border-[#F3B43F]/50"),
                                    onClick: ()=>setSelectedRace(race.id),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-24 h-24 mx-auto mb-2 bg-gray-700 rounded-full overflow-hidden flex items-center justify-center",
                                            style: {
                                                backgroundImage: "url(".concat(gender === "masculino" ? race.imagem_masculina_url : race.imagem_feminina_url, ")"),
                                                backgroundSize: "cover",
                                                backgroundPosition: "center"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center text-xl text-[#F3B43F]",
                                            children: gender === "masculino" ? race.nome_masculino : race.nome_feminino
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, race.id, true, {
                                    fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#DFC492] border-2 border-[#F3B43F] p-4 rounded-md mb-6 h-32 flex items-center justify-center text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-[#1f1813] leading-relaxed",
                                children: currentRaceDescription
                            }, void 0, false, {
                                fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, this),
                        errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-center mb-4 text-xl",
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
                            lineNumber: 264,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "w-[258px] h-[51px] bg-[#8D6825] font-imFeel text-white text-4xl hover:bg-gradient-to-b rounded-2xl cursor-pointer hover:to-[#8D6825] hover:from-[#684424] border-[#F3B43F] border-4 transition-all duration-200",
                                children: "CONFIRMAR"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
            lineNumber: 180,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CharacterCreation/CharacterCreation.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_s(CharacterCreation, "dl8/jfg0Pm/A94Rxqet38fRSs9Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CharacterCreation;
var _c;
__turbopack_context__.k.register(_c, "CharacterCreation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_280a9684._.js.map