// import express, { Request, Response } from 'express';
// import { Pool } from 'pg';

// const app = express();
// const pool = new Pool({
//     user: 'your_username',
//     host: 'localhost',
//     database: 'your_database',
//     password: 'your_password',
//     port: 5432
// });

// app.use(express.json());

// app.post('/posts', async (req: Request, res: Response) => {
//     const { id, username, description, tags } = req.body;

//     const query = `
//         INSERT INTO posts (id, username, description, tech, beauty, sports, entertainment, others)
//         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
//     `;

//     const values = [
//         id,
//         username,
//         description,
//         tags.tech,
//         tags.beauty,
//         tags.sports,
//         tags.entertainment,
//         tags.others
//     ];

//     try {
//         await pool.query(query, values);
//         res.status(201).send('Post created successfully!');
//     } catch (err) {
//         console.error('Error saving post:', err);
//         res.status(500).send('Error saving post');
//     }
// });

// const PORT = 8000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
