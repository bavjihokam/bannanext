import NextAuth from 'next-auth';
import {authConfig} from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { connectToDB } from "./utils/connectdb";
import User from "./models/userModel";

export const {auth,signIn,signOut} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials){
        try {
          await connectToDB();
          const user = await User.findOne({email: credentials.email});
          if(!user) return null;
        } catch (error) {
          
        }
      }
      
    })
    ]
})