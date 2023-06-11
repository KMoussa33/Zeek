
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
    genre TEXT,
    private BOOLEAN,
    release_date TIMESTAMP,
    developer TEXT,
    game_title TEXT NOT NULL UNIQUE,
    user_id INT NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE lists
ADD CONSTRAINT fk_lists_users
FOREIGN KEY (user_id)
REFERENCES users;

CREATE TABLE comments 
(
    id SERIAL,
    author TEXT NOT NULL,
    private BOOLEAN,
    datetime TIMESTAMP NOT NULL,
    text_body TEXT NOT NULL,
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

