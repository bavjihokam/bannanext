import NextAuth from 'next-auth';
import {authConfig} from "./auth.config";
import Credential from "next-auth/providers/credentials";

export const {auth,signIn,signOut} = NextAuth({
  ...authConfig,
  providers: [
    Credential({
      async authorize(credentials){
        console.log("these ate the credentials:",credentials)
      }
      
    })
    ]
})