/*
information = {
    name ,
    Description,
    Interests = {
        list of interests
    }
    
    linkedin , Twitter
}
*/

const zod = require("zod")

const infoCheck = zod.object({
    name : zod.string().min(1, "Name cant be Empty"),
    description : zod.string().min(1 , "Description Cant be Empty"),
    interest : zod.array(zod.string()).nonempty(1 , "Atleast add one Interests"),
    linkedin : zod.string().url("Invalid linedIn url"),
    twitter : zod.string().url("Invalid X url")
})

// module.exports ={ info : info} or when the name of attribute is same  and only one entity
module.exports = infoCheck