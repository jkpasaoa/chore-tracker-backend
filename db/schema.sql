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
  due_date VARCHAR(30),
  status TEXT NOT NULL,
  points INT CHECK (points >= 1 AND points <= 5) NOT NULL,
  priority VARCHAR(30),
  category VARCHAR(30)
);
