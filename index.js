"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tiny = void 0;
const tiny = (string) => {
    if (typeof string !== "string")
        throw new TypeError("Tiny wants a string!");
    return string.replace(/\s/g, "");
};
exports.tiny = tiny;
