const queries = {

    getAllEntries: 
                `SELECT 
                    e.title,
                    e.content,
                    e.date,
                    e.category,
                    a.name,
                    a.surname,
                    a.image
                FROM entries AS e
                JOIN authors AS a ON e.id_author = a.id_author;`,


    createEntry: `INSERT INTO entries(title,content,id_author,category) 
                  VALUES ($1,$2,
                  (SELECT id_author FROM authors WHERE email=$3),$4)`,

    updateEntry:   `UPDATE entries
                    SET content = $2, category = $3, date=$4
                    WHERE title = $1`,

    deleteEntry:   `DELETE FROM entries
                    WHERE title=$1;`
}

module.exports = queries;