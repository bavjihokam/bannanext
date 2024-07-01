"use server"
import {auth} from "auth";

export async function addNote(formdata){
  try{
    const {user} = await auth();
    const title = formdata.get('title');
    const note = formdata.get('content');
    console.log({user,title,note});
    return;
  }catch(error){
    console.log("Erorr:",error);
    return {error: "could not add the note"}
    
  }
}