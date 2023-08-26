# usersAPI

The `usersAPI` is a specialized API designed to provide mock user data for developers seeking object-oriented information to use as placeholder content in their frontend applications.

## Purpose

Modern frontend development often requires realistic data to populate user interfaces during the development and testing phases. Creating such data manually can be time-consuming and repetitive. The `usersAPI` aims to alleviate this challenge by offering a curated collection of mock user information.

## Routes

Fetch All Users
Fetches a list of all users with related address information.

URL: /users
Method: GET
Response Format: JSON

Fetch User by ID
Fetches a specific user with related address information based on their ID.

URL: /users/:id (e.g., /users/1)
Method: GET
Response Format: JSON

## Tables

# Addresses Table

| Column    | Type    | Description           |
| --------- | ------- | --------------------- |
| id        | integer | Primary key           |
| street    | string  | Street address        |
| suite     | string  | Suite or apartment    |
| city      | string  | City name             |
| zipcode   | string  | Postal code           |
| lat       | string  | Latitude coordinate   |
| lng       | string  | Longitude coordinate  |
| createdAt | date    | Creation timestamp    |
| updatedAt | date    | Last update timestamp |

# Users Table

| Column       | Type    | Description              |
| ------------ | ------- | ------------------------ |
| id           | integer | Primary key              |
| name         | string  | User's name              |
| username     | string  | Username                 |
| email        | string  | Email address            |
| phone        | string  | Phone number             |
| website      | string  | Personal website         |
| company_name | string  | Company name             |
| catch_phrase | string  | Catch phrase or slogan   |
| bs           | string  | Business description     |
| address_id   | integer | Foreign key to Addresses |
| createdAt    | date    | Creation timestamp       |
| updatedAt    | date    | Last update timestamp    |
