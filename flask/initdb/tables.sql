
SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET default_tablespace = '';
SET default_with_oids = false;

DROP DATABASE IF EXISTS zeek;
CREATE DATABASE zeek;

\connect zeek

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
    private BOOLEAN,
    user_id INT NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE lists
ADD CONSTRAINT fk_lists_users
FOREIGN KEY (user_id)
REFERENCES users;

CREATE TABLE games
(
    id SERIAL,
    game_title TEXT NOT NULL UNIQUE,
    release_date TIMESTAMP,
    developer TEXT,
    genre TEXT,
    list_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE comments 
(
    id SERIAL,
    author TEXT NOT NULL,
    private BOOLEAN,
    created_at TIMESTAMP NOT NULL,
    content TEXT NOT NULL,
    list_id INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE comments
ADD CONSTRAINT fk_comments_users
FOREIGN KEY (user_id)
REFERENCES users;

ALTER TABLE comments
ADD CONSTRAINT fk_comments_lists
FOREIGN KEY (list_id)
REFERENCES lists;

