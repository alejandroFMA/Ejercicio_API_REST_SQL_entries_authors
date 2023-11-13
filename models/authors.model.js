const queries = require('../queries/authors.queries')
const pool = require('../config/db_pgsql')


// GET
const getAuthorsByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAuthorsByEmail, [email])
        result = data.rows
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result
}

// GET
const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllAuthors)
        result = data.rows
    } catch (error) {
        console.log(error);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// CREATE
const createAuthors = async (entry) => {
    const { name, surname, email, image } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createAuthors,[name, surname, email, image])
        result = data.rowCount
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result
}


const deleteAuthors = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteAuthors,[email])
        result = data.rowCount
    } catch (error) {
        console.log(error);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const updateAuthors = async (editAuthors) => {
    const { name, surname, image, email } = editAuthors;
    let client, result; 
    try {
      client = await pool.connect();
  
      const data = await client.query(queries.updateAuthors, [name, surname, image, email]);
      result = data.rowCount;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      client.release();
    }
  
    return result;
  };

const authors = {
    getAuthorsByEmail,
    getAllAuthors,
    createAuthors,
    deleteAuthors,
    updateAuthors
}

module.exports = authors;