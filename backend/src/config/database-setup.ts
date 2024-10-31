import { Pool } from "pg";
const pool = new Pool({
  user: "postgres.ekufionusliuvbxkmcme", // replace with your database username
  host: "aws-0-ap-southeast-1.pooler.supabase.com", // replace with your database host
  database: "postgres", // replace with your database name
  password: "pUObCRuEYtsaZ6n", // replace with your database password
  port: 6543,
  ssl: {
    rejectUnauthorized: false, // This is a common setting. Adjust if necessary.
  }, // default PostgreSQL port
});

export default pool;
