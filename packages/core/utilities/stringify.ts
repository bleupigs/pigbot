// Imports
import isJsonCompatible from "../typeGuards/isJsonCompatible";
// Function
export default function Stringify(value) {
    if (typeof value === "string") {
        return value;
    } else if (isJsonCompatible(value)) {
        return JSON.stringify(value);
    }
    return String(value);
}