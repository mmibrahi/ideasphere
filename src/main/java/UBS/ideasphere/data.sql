-- Create the users table if it doesn't exist
CREATE TABLE IF NOT EXISTS user (
    username VARCHAR(50) PRIMARY KEY,
    password VARCHAR(255) NOT NULL
);

-- Insertinggg 10 default users
INSERT INTO user (username, password) VALUES ('maloka', 'malak');
INSERT INTO user (username, password) VALUES ('user2', 'password2');
INSERT INTO user (username, password) VALUES ('user3', 'password3');
INSERT INTO user (username, password) VALUES ('user4', 'password4');
INSERT INTO user (username, password) VALUES ('user5', 'password5');
INSERT INTO user (username, password) VALUES ('user6', 'password6');
INSERT INTO user (username, password) VALUES ('user7', 'password7');
INSERT INTO user (username, password) VALUES ('user8', 'password8');
INSERT INTO user (username, password) VALUES ('user9', 'password9');
INSERT INTO user (username, password) VALUES ('user10', 'password10');
