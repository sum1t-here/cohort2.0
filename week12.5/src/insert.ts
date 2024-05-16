import { Client } from 'pg';

// Async function to insert data into a table
async function insertData(username: string, email: string) {
  const client = new Client({
    connectionString:
      'postgresql://neondb_owner:1zAfZcD7EPdl@ep-withered-tree-a5ufs1pk.us-east-2.aws.neon.tech/neondb?sslmode=require',
  });
  try {
    await client.connect(); // Ensure client connection is established
    // Use parameterized query to prevent SQL injection
    const insertQuery = 'INSERT INTO users2 (username, email) VALUES ($1, $2)';
    const values = [username, email];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
insertData('username5', 'user5@example.com').catch(console.error);
