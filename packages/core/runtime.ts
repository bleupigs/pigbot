// Types
interface EnvironmentVariables {
    DISCORD_TOKEN: string,
    ROBLOX_GROUP_API_TOKEN: string,
    POSTGRES_PASSWORD: string,
    POSTGRES_USER: string,
    POSTGRES_DB: string,
    POSTGRES_URL: string,
    ADMIN_GUILD: string,
    BRANCH: "develop" | "production",
}
interface Runtime {
    Environment: EnvironmentVariables,
    SessionId: string,
}
// Helper Functions
function validateVariable<T extends keyof EnvironmentVariables>(variable: T): EnvironmentVariables[T] {
    if (!process.env[variable]) {
        throw new Error(`Missing environment variable: ${variable}`);
    }
    if (typeof process.env[variable] !== "string") {
        throw new Error(`Invalid environment variable: ${variable}`);
    }
    return process.env[variable] as EnvironmentVariables[T];
}
// Constants
const Runtime: Runtime = {
    Environment: {
        DISCORD_TOKEN: validateVariable("DISCORD_TOKEN"),
        ROBLOX_GROUP_API_TOKEN: validateVariable("ROBLOX_GROUP_API_TOKEN"),
        POSTGRES_PASSWORD: validateVariable("POSTGRES_PASSWORD"),
        POSTGRES_USER: validateVariable("POSTGRES_USER"),
        POSTGRES_DB: validateVariable("POSTGRES_DB"),
        POSTGRES_URL: validateVariable("POSTGRES_URL"),
        ADMIN_GUILD: validateVariable("ADMIN_GUILD"),
        BRANCH: validateVariable("BRANCH"),
    },
    SessionId: crypto.randomUUID(),
}
// Initialization
/// Export
export default Runtime;