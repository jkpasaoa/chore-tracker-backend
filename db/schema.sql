-- IF DATABASE EXISTS -- DROP IT
DROP DATABASE IF EXISTS chores_dev WITH (FORCE);

-- Create database
CREATE DATABASE chores_dev;

-- Connect to DB
\c chores_dev;

CREATE TABLE chores (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  due_date DATE,
  status TEXT NOT NULL,
  points INT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
