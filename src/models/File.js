import { Schema, model } from 'mongoose';

const FileSchema = new Schema({
    name: String,
    path: String
}, {
    toJSON:{
        virtuals:true
    }
})



FileSchema.virtual('url').get(function(){
    return `http://localhost:3333/files/${this.path}`
})

export default model('File', FileSchema);

