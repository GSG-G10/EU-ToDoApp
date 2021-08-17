BEGIN;

DROP TABLE IF EXISTS users , tasks CASCADE;

CREATE TABLE users (
  id           SERIAL       PRIMARY KEY ,
  name         VARCHAR(255) NOT NULL,
  email        VARCHAR(255) NOT NULL,
  password     VARCHAR(255) NOT NULL           
);

CREATE TABLE tasks  (
  id           SERIAL       PRIMARY KEY ,
  user_id    INTEGER      REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  task_description VARCHAR(255) NOT NULL,
  due_time DATETIME NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT FALSE,
);

COMMIT;