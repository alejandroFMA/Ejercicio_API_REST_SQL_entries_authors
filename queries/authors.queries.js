const queriesAuthors = {
    getAuthorsByEmail: `
    SELECT 
        id_author,
        name,
        surname,
        email,
        image
    FROM authors
    WHERE email = $1;`,
    getAllAuthors: `SELECT * FROM authors;`,
    createAuthors: `INSERT INTO authors(name,surname,email,image) 
    VALUES ($1,$2,$3,$4)`,

    updateAuthors:`UPDATE authors
    SET name=$1, surname=$2, image=$3
    WHERE email=$4`,

    deleteAuthors: `DELETE FROM authors
    WHERE email=$1;`
}
module.exports = queriesAuthors;