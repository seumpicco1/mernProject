import mongoose from "mongoose";

import uniqueValidator from"mongoose-unique-validator";
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        require:true
        
    },
    author: {
        type: String,
        unique: false,
        require: true
        

    },
    publishYear: {
        type: String,
        unique: false,
       require : true
    
    },

} ,
        {
            timestamps: true
        }
,
    
);
bookSchema.plugin(uniqueValidator)
export const Book = mongoose.model("cat", bookSchema);
