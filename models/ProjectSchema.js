import { Schema, model, models } from 'mongoose'



const ProjectSchema = new Schema({
  title: String,
  img:String,
  description:String,
  urlRepo:String,
  urlDeploy:String,
  reverse:Boolean,
  img2:String,
  img3:String,
  img4:String,
  img5:String,
})

const Project = models?.Project || model('Project', ProjectSchema)

export default Project