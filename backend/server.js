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

// Create tables and force reset the users table
db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS users`);
    db.run(`CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT, role TEXT, full_name TEXT, email TEXT, class_grade TEXT)`);
    db.run(`CREATE TABLE IF NOT EXISTS notices (id INTEGER PRIMARY KEY, title TEXT, content TEXT, date_posted DATE DEFAULT CURRENT_DATE)`);
    db.run(`CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY, title TEXT, event_date DATE, description TEXT)`);
    db.run(`CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY, name TEXT, email TEXT, message TEXT, date_sent DATE DEFAULT CURRENT_DATE)`);
    
    // NEW: Admissions Table
    db.run(`CREATE TABLE IF NOT EXISTS admissions (id INTEGER PRIMARY KEY, student_name TEXT, parent_name TEXT, email TEXT, phone TEXT, grade_applying TEXT, date_submitted DATE DEFAULT CURRENT_DATE)`);
    
    // Inject profiles
    db.run(`INSERT INTO users (username, password, role, full_name, email, class_grade) VALUES ('Syedsadiq7081', 'Sadiq@7081', 'student', 'Al Sadiq', 'sadiq@studypoint.edu', '12th Grade Science')`);
    db.run(`INSERT INTO users (username, password, role, full_name, email, class_grade) VALUES ('student2', 'pass123', 'student', 'Priya Sharma', 'priya@studypoint.edu', '10th Grade')`);
    db.run(`INSERT INTO users (username, password, role, full_name, email, class_grade) VALUES ('admin', 'admin123', 'admin', 'System Admin', 'admin@studypoint.edu', '')`);
    db.run(`INSERT INTO users (username, password, role, full_name, email, class_grade) VALUES ('teacher1', 'teach123', 'teacher', 'Sarah Jenkins', 's.jenkins@studypoint.edu', '')`);
});

// --- API ROUTES ---

// Auth Route
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    db.get(`SELECT id, username, role, full_name, email, class_grade FROM users WHERE username = ? AND password = ?`, [username, password], (err, user) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!user) return res.status(401).json({ error: 'Invalid credentials' });
        res.json({ message: 'Login successful', user });
    });
});

// Notices Routes
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

// NEW: Admissions Routes
app.get('/api/admissions', (req, res) => {
    db.all(`SELECT * FROM admissions ORDER BY id DESC`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.post('/api/admissions', (req, res) => {
    const { student_name, parent_name, email, phone, grade_applying } = req.body;
    db.run(`INSERT INTO admissions (student_name, parent_name, email, phone, grade_applying) VALUES (?, ?, ?, ?, ?)`, 
    [student_name, parent_name, email, phone, grade_applying], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Application submitted successfully!", id: this.lastID });
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));