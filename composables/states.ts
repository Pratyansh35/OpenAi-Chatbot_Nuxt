import { type IMessage } from "~/interfaces/IMessage";

export const useisChatting = () => useState("isChatting", () => false );
export const useMessages = () => useState<IMessage[]>("messages", () => [] );