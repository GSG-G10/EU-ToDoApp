
BEGIN;
DROP TABLE IF EXISTS users,
tasks CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  task_description VARCHAR(255) NOT NULL,
  due_time DATE NOT NULL,
  completed BOOLEAN DEFAULT FALSE
);
INSERT INTO users (name, email, password)
VALUES ('Muhammed', 'a@gmail.com', '1234');

INSERT INTO tasks (user_id, due_time, title, task_description)
VALUES (1, '10/10/2020', 'DOne', 'Done');
COMMIT;