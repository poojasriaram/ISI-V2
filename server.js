import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import handler from './api/jira.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Jira Lead Webhook endpoint
app.all('/api/jira', (req, res) => {
  return handler(req, res);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Jira Integration Server running on http://localhost:${PORT}`);
});
