"use server"
//import {auth} from "next/auth";

export async function addNote(formdata){
  try{
   // const {user} = await auth();
    const title = formdata.get('title');
    const note = formdata.get('content');
    console.log({title,note});
    return;
  }catch(error){
    console.log("Erorr:",error);
    return {error: "could not add the note"}
    
  }
}