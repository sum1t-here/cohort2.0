"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// Async function to insert data into a table
function insertData(username, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: 'postgresql://neondb_owner:1zAfZcD7EPdl@ep-withered-tree-a5ufs1pk.us-east-2.aws.neon.tech/neondb?sslmode=require',
        });
        try {
            yield client.connect(); // Ensure client connection is established
            // Use parameterized query to prevent SQL injection
            const insertQuery = 'INSERT INTO users2 (username, email) VALUES ($1, $2)';
            const values = [username, email];
            const res = yield client.query(insertQuery, values);
            console.log('Insertion success:', res); // Output insertion result
        }
        catch (err) {
            console.error('Error during the insertion:', err);
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
// Example usage
insertData('username5', 'user5@example.com').catch(console.error);
