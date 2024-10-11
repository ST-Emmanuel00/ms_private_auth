export const logout = async (token: string) => {
    try {
        return { message: 'Logout successful', info: { deletedToken: token } }
    } catch (error) {
        console.error("Error log out in the service:", error);
        throw new Error("Failed to log out");
    }
};