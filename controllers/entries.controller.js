const entry = require('../models/entries.model'); // Importar el modelo de la BBDD



const getEntries = async (req, res) => {
    try {
        let entries = await entry.getAllEntries();
        res.status(200).json(entries); // Envía las entries encontradas
    } catch (err) {
        console.error("Error al obtener las entradas:", err); // Registra el error
        res.status(500).json({ message: "Error al obtener las entradas" }); // Envía un mensaje de error
    }
}


//createEntry
// POST http://localhost:3000/api/entries
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

// Crear entry por email

const createEntry = async (req, res) => {
    const newEntry = req.body; // {title,content,email,category}
    const response = await entry.createEntry(newEntry);
    res.status(201).json({
        "entry_created": response,
        data: newEntry
    });
}

const deleteEntry = async (req, res) => {
    const { id_entry } = req.params; 
    try{
    const response = await entry.deleteEntry(id_entry);
    if(response > 0){
    res.status(200).json({
        "entry_deleted": response,
        
    });
    }else{
        res.status(404).json({message: "Entry not found"});
    }

} catch(err) {
    console.error(err);
    res.status(500).json({error: "Internal Server Error"});
}
}

const updateEntry = async (req, res) => {
    const editEntry = req.body; // {title,content,email,category}
    const response = await entry.updateEntry(editEntry);
    res.status(201).json({
        "entry": response,
        data: editEntry
    });
}


module.exports = {
    getEntries,
    createEntry,
    deleteEntry, 
    updateEntry 
}