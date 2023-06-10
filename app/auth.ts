import {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const isCorrectCredentials = (credentials: any) => credentials.password === process.env.NEXTAUTH_PASSWORD;

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Password",
            credentials: {
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (isCorrectCredentials(credentials)) {
                    return Promise.resolve({id: "1", name: "Admin", email: "admin@admin.com"});
                }
                else return Promise.resolve(null);
            },
        }),
    ],
};