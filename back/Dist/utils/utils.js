"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let catchErros = (controller) => {
    return (req, res, next) => {
        return controller(req, res, next).catch(next);
    };
};
exports.default = catchErros;
