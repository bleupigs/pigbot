// Imports
import Runtime from "../runtime"
import Stringify from "./stringify"
// Types
type LogType = "debug" | "info" | "warn" | "error" | "fatal"
// Constants
const LOG_COLOR: Record<LogType | "reset", string> = {
    reset: "\x1b[0m",
    debug: "\x1b[37m",
    info: "\x1b[36m",
    warn: "\x1b[33m",
    error: "\x1b[31m",
    fatal: "\x1b[31m"
}
// Function
export default function writeLog(logType: LogType, ...args: any[]): Error | void {
    if (logType === "debug" && Runtime.Environment.BRANCH === "production") {
        return
    }

    const formattedLogMessage = `[${new Date().toISOString()}-${logType.toUpperCase()}] ${args.map(Stringify).join(" ")}`
    console.write(`${LOG_COLOR[logType]}${formattedLogMessage}${LOG_COLOR.reset}\n`)

    if (logType === "fatal") {
        return new Error(formattedLogMessage)
    }
}