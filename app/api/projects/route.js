import db from "@/lib/mongoose";
import Project from "@/models/ProjectSchema";




export async function GET(){

  db.connect()

  try{

    const projects = await Project.find({}).exec()

    return new Response(JSON.stringify(projects), {status:200})

  }catch(error){
    return new Response(JSON.stringify(null), {status: 500})
  }
}