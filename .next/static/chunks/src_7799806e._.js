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
"[project]/src/app/create/data:db92b1 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"405111aa3133d5c30e73b4e3eb7edb1475e238d423":"createCharacter"},"src/app/create/action.ts",""] */ __turbopack_context__.s({
    "createCharacter": ()=>createCharacter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createCharacter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("405111aa3133d5c30e73b4e3eb7edb1475e238d423", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createCharacter"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuaW1wb3J0IGF4aW9zSW5zdGFuY2UgZnJvbSBcIkAvdXRpbHMvYXhpb3NJbnRhbmNlXCI7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcbmltcG9ydCB7IGNsZWFyVGVtcENoYXJhY3RlckRhdGEgfSBmcm9tIFwiLi90ZW1wLWNoYXJhY3Rlci1kYXRhLWFjdGlvblwiO1xyXG5cclxuaW50ZXJmYWNlIENyZWF0ZUNoYXJhY3RlckRhdGEge1xyXG4gIG5vbWU6IHN0cmluZztcclxuICBnZW5lcm86IHN0cmluZztcclxuICBpZF9yYWNhOiBzdHJpbmc7XHJcbiAgaWRfY2xhc3NlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDaGFyYWN0ZXIoZGF0YTogQ3JlYXRlQ2hhcmFjdGVyRGF0YSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKTtcclxuICAgIGNvbnN0IHVzZXJDb29raWUgPSBjb29raWVTdG9yZS5nZXQoXCJ1c2VyXCIpO1xyXG4gICAgaWYgKCF1c2VyQ29va2llKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzdcOhcmlvIG7Do28gZW5jb250cmFkbyBub3MgY29va2llcy5cIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZSh1c2VyQ29va2llLnZhbHVlKTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zSW5zdGFuY2UucG9zdChcIi9jaGFyYWN0ZXJzXCIsIHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgaWRfdXN1YXJpbzogdXNlci5pZCxcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgY2xlYXJUZW1wQ2hhcmFjdGVyRGF0YSgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiUGVyc29uYWdlbSBjcmlhZG8gY29tIHN1Y2Vzc286XCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY2hhcmFjdGVyOiByZXNwb25zZS5kYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRXJybyBhbyBjcmlhciBwZXJzb25hZ2VtLlwiIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVNBYXNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/create/data:4dd130 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"00c909d8224b315e25293470f7a7d6ec85fab8826e":"getTempCharacterData"},"src/app/create/temp-character-data-action.ts",""] */ __turbopack_context__.s({
    "getTempCharacterData": ()=>getTempCharacterData
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getTempCharacterData = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00c909d8224b315e25293470f7a7d6ec85fab8826e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getTempCharacterData"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdGVtcC1jaGFyYWN0ZXItZGF0YS1hY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2FwcC9jcmVhdGUvYWN0aW9ucy90ZW1wLWNoYXJhY3Rlci1kYXRhLWFjdGlvbi50c1xyXG5cInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcblxyXG5pbnRlcmZhY2UgVGVtcENoYXJhY3RlckRhdGEge1xyXG4gIG5vbWU/OiBzdHJpbmc7XHJcbiAgZ2VuZXJvPzogc3RyaW5nO1xyXG4gIGlkX3JhY2E/OiBzdHJpbmc7XHJcbiAgaWRfY2xhc3NlPzogc3RyaW5nO1xyXG4gIG5pdmVsPzogbnVtYmVyO1xyXG4gIGV4cGVyaWVuY2lhPzogbnVtYmVyO1xyXG4gIHZpZGFfYXR1YWw/OiBudW1iZXI7XHJcbiAgbWFuYV9hdHVhbD86IG51bWJlcjtcclxuICBmb3JjYT86IG51bWJlcjtcclxuICB2aXRhbGlkYWRlPzogbnVtYmVyO1xyXG4gIGFnaWxpZGFkZT86IG51bWJlcjtcclxuICBpbnRlbGlnZW5jaWE/OiBudW1iZXI7XHJcbiAgdmVsb2NpZGFkZT86IG51bWJlcjtcclxuICBkaW5oZWlybz86IG51bWJlcjtcclxuICBpZF91c3VhcmlvPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBURU1QX0NIQVJBQ1RFUl9LRVkgPSBcInRlbXBDaGFyYWN0ZXJEYXRhXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZVRlbXBDaGFyYWN0ZXJEYXRhKGRhdGE6IFRlbXBDaGFyYWN0ZXJEYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xyXG4gICAgY29uc3QgZXhpc3RpbmdEYXRhID0gY29va2llU3RvcmUuZ2V0KFRFTVBfQ0hBUkFDVEVSX0tFWSk7XHJcbiAgICBsZXQgcGFyc2VkRXhpc3RpbmdEYXRhOiBUZW1wQ2hhcmFjdGVyRGF0YSA9IHt9O1xyXG4gICAgaWYgKGV4aXN0aW5nRGF0YSkge1xyXG4gICAgICBwYXJzZWRFeGlzdGluZ0RhdGEgPSBKU09OLnBhcnNlKGV4aXN0aW5nRGF0YS52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3RGF0YSA9IHsgLi4ucGFyc2VkRXhpc3RpbmdEYXRhLCAuLi5kYXRhIH07XHJcblxyXG4gICAgY29va2llU3RvcmUuc2V0KFRFTVBfQ0hBUkFDVEVSX0tFWSwgSlNPTi5zdHJpbmdpZnkobmV3RGF0YSksIHtcclxuICAgICAgbWF4QWdlOiA2MCAqIDEwLFxyXG4gICAgICBwYXRoOiBcIi9cIixcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gc2FsdmFyIGRhZG9zIHRlbXBvcsOhcmlvcyBkbyBwZXJzb25hZ2VtOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJFcnJvIGFvIHNhbHZhciBkYWRvcyB0ZW1wb3LDoXJpb3MuXCIgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUZW1wQ2hhcmFjdGVyRGF0YSgpOiBQcm9taXNlPFRlbXBDaGFyYWN0ZXJEYXRhIHwgbnVsbD4ge1xyXG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xyXG4gIGNvbnN0IHRlbXBDb29raWUgPSBjb29raWVTdG9yZS5nZXQoVEVNUF9DSEFSQUNURVJfS0VZKTtcclxuICBpZiAodGVtcENvb2tpZSkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UodGVtcENvb2tpZS52YWx1ZSk7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckNvb2tpZSgpIHtcclxuICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKTtcclxuICBjb25zdCB1c2VyQ29va2llID0gY29va2llU3RvcmUuZ2V0KFwidXNlclwiKTtcclxuICBpZiAodXNlckNvb2tpZSkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UodXNlckNvb2tpZS52YWx1ZSk7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xlYXJUZW1wQ2hhcmFjdGVyRGF0YSgpIHtcclxuICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKTtcclxuICBjb29raWVTdG9yZS5kZWxldGUoVEVNUF9DSEFSQUNURVJfS0VZKTtcclxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIwVEFnRHNCIn0=
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$create$2f$data$3a$db92b1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/create/data:db92b1 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$create$2f$data$3a$4dd130__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/create/data:4dd130 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
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
                        const dataFromCookie = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$create$2f$data$3a$4dd130__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getTempCharacterData"])();
                        setTempCharacterData(dataFromCookie);
                        console.log(dataFromCookie);
                        if (!dataFromCookie || !dataFromCookie.nome || !dataFromCookie.id_raca) {
                            setErrorMessage("Dados de personagem incompletos. Por favor, reinicie a criação.");
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].replace("/create");
                            return;
                        }
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
        if (roll <= 1) {
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
                    lineNumber: 124,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, this);
        }
        setIsLoading(true);
        const finalCharacterData = {
            nome: tempCharacterData.name,
            genero: tempCharacterData.gender,
            id_raca: tempCharacterData.id_race,
            id_classe: selectedClasses,
            nivel: tempCharacterData.nivel,
            experiencia: tempCharacterData.experiencia,
            vida_atual: tempCharacterData.vida_atual,
            mana_atual: tempCharacterData.mana_atual,
            forca: tempCharacterData.forca,
            vitalidade: tempCharacterData.vitalidade,
            agilidade: tempCharacterData.agilidade,
            inteligencia: tempCharacterData.inteligencia,
            velocidade: tempCharacterData.velocidade,
            dinheiro: tempCharacterData.dinheiro,
            id_usuario: tempCharacterData.id_user
        };
        console.log("Dados do personagem final:", finalCharacterData);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$create$2f$data$3a$db92b1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCharacter"])(finalCharacterData);
        setIsLoading(false);
        if (result.success) {
            alert("Personagem criado com sucesso!");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].replace("/dashboard");
        } else {
            setErrorMessage(result.message || "Erro desconhecido ao criar personagem.");
        }
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
                        lineNumber: 172,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
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
                lineNumber: 184,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
            lineNumber: 180,
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
                    lineNumber: 197,
                    columnNumber: 9
                }, this),
                hasRolledSpecial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#DFC492] border-2 border-[#F3B43F] p-4 rounded-md mb-6 h-10 flex items-center justify-center text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-1xl text-center text-[#292018]",
                        children: "Ao reencarnar você sente um toque sutil, e os Deuses o abençoaram...."
                    }, void 0, false, {
                        fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                        lineNumber: 202,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                    lineNumber: 201,
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
                                                lineNumber: 231,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center text-xl text-[#F3B43F]",
                                            children: cls.nome
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                                            lineNumber: 234,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, cls.id, true, {
                                    fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#DFC492] border-2 border-[#F3B43F] p-4 rounded-md mb-6 h-32 flex items-center justify-center text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-[#1f1813] leading-relaxed",
                                children: currentClassDescription
                            }, void 0, false, {
                                fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this),
                        errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-center mb-4 text-lg",
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                            lineNumber: 246,
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
                                lineNumber: 252,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
            lineNumber: 196,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/classselection/components/ClassSelection/ClassSelection.tsx",
        lineNumber: 192,
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

//# sourceMappingURL=src_7799806e._.js.map