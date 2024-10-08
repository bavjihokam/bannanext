"use server"
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(prevState,formData){
  try {
    await signIn('credentials',formData)
  } catch (error) {
    if(error instanceof AuthError){
      switch (error.type) {
        case 'CredentialsSignin':
          return "Invalid credentials,";
          break;
        
        default:
          return "Something went wrong,";
      }
    }
    
    throw error;
  }
}

export async function registerUser(info){
  try {
    await connectToDB();
    const {username,email,password} = info;
    const exists = await User.findOne({$or:[{email},{username}]});
    cosole.log({error});
  } catch (error) {
    
  }
}