// function to create a users table in database

import { Client } from 'pg';

const client = new Client({
  connectionString:
    'postgresql://neondb_owner:1zAfZcD7EPdl@ep-withered-tree-a5ufs1pk.us-east-2.aws.neon.tech/neondb?sslmode=require',
});

async function createUsersTable() {
  await client.connect();
  const result = await client.query(`
        CREATE TABLE users2(
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
    `);
  console.log(result);
}

createUsersTable();
