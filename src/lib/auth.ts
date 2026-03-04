import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Admin Login",
            credentials: {
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (credentials?.password === process.env.ADMIN_PASSWORD) {
                    return { id: "1", name: "Admin" };
                }
                return null;
            }
        })
    ],
    pages: {
        signIn: "/admin", // Redirect to our custom admin page
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};
