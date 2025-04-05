// Imports
import { type JsonCompatible } from "../types"
// Function
export default function isJsonCompatible(checking: unknown): checking is JsonCompatible {
    return (
        typeof checking === "string" ||
        typeof checking === "number" ||
        typeof checking === "boolean" ||
        checking === null ||
        (Array.isArray(checking) && checking.every(isJsonCompatible)) ||
        (typeof checking === "object" && checking !== null && Object.values(checking).every(isJsonCompatible))
    )
}