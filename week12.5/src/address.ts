import { Client } from 'pg';

const client = new Client({
  connectionString:
    'postgresql://neondb_owner:1zAfZcD7EPdl@ep-withered-tree-a5ufs1pk.us-east-2.aws.neon.tech/neondb?sslmode=require',
});

async function createAddressTable() {
  await client.connect();
  const result = await client.query(`
   CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users2(id) ON DELETE CASCADE
)`);
  console.log(result);
}

// CASCADE OR RESTRICT
//  if restrict delete the reference and then delete the user

createAddressTable();
