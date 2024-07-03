"user server"
import { signIn } from "@/auth"

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
  }
}