"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = __importDefault(require("ws"));
var wss = new ws_1.default.Server({ port: 41920 });
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log(message);
    });
});
