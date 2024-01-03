import { io } from "socket.io-client";
import { NEST_URL } from "./configs/config";

export const socket = io(NEST_URL, { transports: ["websocket"] });
