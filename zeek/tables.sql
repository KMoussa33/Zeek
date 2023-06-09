DROP DATABASE IF EXISTS zeek;
CREATE DATABASE zeek;

--create tables

CREATE TABLE users 
(
    id SERIAL,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    private BOOLEAN NOT NULL,
    email TEXT UNIQUE,
    PRIMARY KEY (id)
);

CREATE TABLE lists 
(
    id SERIAL,
    title TEXT UNIQUE NOT NULL,
    genre TEXT,
    private BOOLEAN,
    release_date TIMESTAMP,
    developer TEXT,
    game_title TEXT NOT NULL UNIQUE,
    PRIMARY KEY (id)
);

CREATE TABLE comments 
(
    id SERIAL,
    author TEXT NOT NULL,
    private BOOLEAN,
    datetime TIMESTAMP NOT NULL,
    text_body TEXT NOT NULL,
    PRIMARY KEY (id)
);

--ADD TABLES FOR ONE TO MANY RELATIONSHIPS