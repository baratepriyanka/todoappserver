const Todo = require("../model/todo");
const ObjectId = require('mongodb').ObjectId;


// const getAdd = async (req, res) => {
function getAdd(req, res) {
   
    const createData = {
        todoname: req.body.todoname,
        author: req.body.author,
        description: req.body.description,
    }
   
    Todo.create(createData).then((reuslt) => {
        res.status(200).json({
            massage: " add successfully",
            post: reuslt,
        })
    }).catch((error) => {
        res.status(400).json({
            massage: "is invalid data ",
            post: error
        })
    })
}

// get all data    
function getAlltodo(req, res) {
   
    Todo.find().then((result) => {
        res.status(200).json(result)
    }).catch((error) => {
        res.status(400).json({
            massage: "is invalid data ",
            post: error
        })
    })

}

// update todo
function getUpdateTodo(req, res) {
    const id = req.params.id;

    const updateData = {
        todoname: req.body.todoname,
        author: req.body.author,
        description: req.body.description,
    };

    Todo.findByIdAndUpdate(id, updateData, { new: true }) // The { new: true } option returns the updated document
        .then((result) => {
            if (!result) {
                return res.status(404).json({
                    message: "Document not found",
                });
            }

            res.status(200).json({
                message: "Update successful",
                data: result,
            });
        })
        .catch((error) => {
            res.status(400).json({
                message: "Invalid data",
                error: error,
            });
        });
}

// delete 
function getDeleteTodo(req, res) {
    const id = req.params.id
    Todo.findByIdAndDelete(id).then((result) => {
        res.status(200).json({
            massage: "delete successfully",
            post:result
        })
    }).catch((error) => {
        res.status(400).json({
            massage: "is invalid data",
            post: error
        })
    })

}
function getOnetodo (req, res) {
   
    const id = req.params.id
    console.log('Requested _id:', id);
   
    Todo.findOne({ _id: new ObjectId(id) }).then((result) => {
        console.log(result)
        res.status(200).json(result)
    }).catch((error) => {
        res.status(400).json({
            massage: "is invalid data ",
            post: error
        })
    })
}
module.exports = {
    getAdd: getAdd,
    getAlltodo: getAlltodo,
    getUpdateTodo: getUpdateTodo,
    getDeleteTodo: getDeleteTodo,
    getOnetodo:getOnetodo
};