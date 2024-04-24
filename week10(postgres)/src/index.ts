// write a function to create a user table on your database

import { Client } from 'pg';

const client = new Client({
  connectionString:
    'postgresql://neondb_owner:1zAfZcD7EPdl@ep-withered-tree-a5ufs1pk.us-east-2.aws.neon.tech/neondb?sslmode=require',
});

async function createUserTable() {
  await client.connect();
  const result = await client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `);
  console.log(result);
}

createUserTable();
