const Comments = require('../models/Comments.model');
// Sozdanie kontrollera commentov
module.exports.commentsController={
    getComments: async(req, res)=>{
        try {
            const comments = await Comments.find({})
            res.json(comments)
        } catch (error) {
            res.json(error)
        }
    },
    postComments: async(req, res)=>{
        const {text,user} = req.body
        // const {user}=req.user.id
        try {
            
            const comments = await Comments.create({
                text,
                user
            })
            res.json(comments)
        } catch (error) {
            res.json(error)
        }
    },
    deleteComments: async (req, res)=>{
        const {id}=req.params
        try {
            const comments = await Comments.findById({id});
            if(comments.user.toString()===req.user.id){
                Comments.findByIdAndDelete(id)
              return  res.json('Комментарий удалён')
            } 
            return res.status(401).json('Вы не можете удалить чужой комментарий')
           
        } catch (error) {
            res.json(error)
        }
    }

}


