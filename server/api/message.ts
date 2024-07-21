import thread from "./thread";

export default defineEventHandler(async (event) => {
    const threadID = getCookie(event, "thread-id");
    const runID = getCookie(event, "run-id");

    if (!threadID || !runID) {
        return;
    }
});