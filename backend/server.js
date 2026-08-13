// backend/server.js
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize SQLite Database
const dbPath = path.resolve(__dirname, '../database/school.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error('Database connection error:', err.message);
    else console.log('Connected to SQLite database.');
});

// Create tables if they don't exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT, role TEXT)`);
    db.run(`CREATE TABLE IF NOT EXISTS notices (id INTEGER PRIMARY KEY, title TEXT, content TEXT, date_posted DATE DEFAULT CURRENT_DATE)`);
    
    // Seed admin if table is empty
    db.get("SELECT COUNT(*) as count FROM users", (err, row) => {
        if (row.count === 0) {
            db.run(`INSERT INTO users (username, password, role) VALUES ('admin', 'admin123', 'admin')`);
        }
    });
});

// --- API ROUTES ---

// Auth Route
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    db.get(`SELECT id, username, role FROM users WHERE username = ? AND password = ?`, [username, password], (err, user) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!user) return res.status(401).json({ error: 'Invalid credentials' });
        res.json({ message: 'Login successful', user });
    });
});

// Notices Route
app.get('/api/notices', (req, res) => {
    db.all(`SELECT * FROM notices ORDER BY id DESC`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.post('/api/notices', (req, res) => {
    const { title, content } = req.body;
    db.run(`INSERT INTO notices (title, content) VALUES (?, ?)`, [title, content], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID, title, content });
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));