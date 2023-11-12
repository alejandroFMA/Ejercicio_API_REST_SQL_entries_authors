// const { Pool } = require('pg');
const queries = require('../queries/entries.queries')
const pool = require('../config/db_pgsql')

// GET

const getAllEntries = async () => {   
    let client, result;
    try {
        client = await pool.connect(); 
        const data = await client.query(queries.getAllEntries)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// CREATE
const createEntry = async (entry) => {
    const { title, content, email, category } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createEntry,[title, content, email, category])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}


// DELETE
const deleteEntry = async (id_entry) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteEntry,[id_entry])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//UPDATE

const updateEntry = async (editEntry) => {
    const { title, content,  category } = editEntry;
    let client, result;
  
    try {
      client = await pool.connect();
  
      const data = await client.query(queries.updateEntry, [title, content, category ]);
      result = data.rowCount;
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      client.release();
    }
  
    return result;
  };




const entries = {
    getAllEntries,
    createEntry,
    deleteEntry,
    updateEntry
}







module.exports = entries;