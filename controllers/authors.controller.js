const author= require("../models/authors.model")


const getAuthors = async (req, res) => {
    let authors;
    if (req.query.email) {
        authors = await author.getAuthorsByEmail(req.query.email);
    }
    else {
        authors = await author.getAllAuthors();
    }
    res.status(200).json(authors); // [] con las entries encontradas
}



const createAuthor = async (req, res) => {
    const newAuthor = req.body; // {title,content,email,category}
    const response = await author.createAuthors(newAuthor);
    res.status(201).json({
        message: `usuario creado: ${newAuthor.email}`
    });
}



const deleteAuthor = async (req, res) => {
    const { id_author } = req.params; 
    try{
    const response = await author.deleteAuthors(id_author);
    if(response > 0){
    res.status(200).json({
        message: `usuario creado: ${id_author.email}`
        
    });
    }else{
        res.status(404).json({message: "Author not found"});
    }

} catch(err) {
    console.error(err);
    res.status(500).json({error: "Internal Server Error"});
}
}

const updateAuthor = async (req, res) => {
    const updateAuthor = req.body; // {title,content,email,category}
    const response = await author.updateAuthors(updateAuthor);
    res.status(200).json({
        message: `usuario actualizado ${id_author.email}`
    
    });
}


module.exports = {
    getAuthors,
    createAuthor,
    deleteAuthor, 
    updateAuthor 
}