import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

// NeonDB always requires SSL — use it unconditionally
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

// Test the connection
pool.on('connect', () => {
    console.log('✅ Connected to the PostgreSQL database');
});

export const query = (text, params) => pool.query(text, params);