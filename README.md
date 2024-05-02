# Leaderboard Backend Project

This backend project provides API endpoints to manage and retrieve leaderboard data for a gaming platform. It utilizes Node.js, Express.js, and MongoDB to create a RESTful API for leaderboard functionalities.

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies 
4. Start the server


## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure

The project structure is organized as follows:

- **models**: Contains Mongoose models for defining the schema of leaderboard data.
- **routes**: Contains Express.js route handlers for handling leaderboard-related requests.
- **server.js**: Entry point of the application where the server is configured and initialized.

## API Endpoints

### Get Leaderboard Data

- **GET /api/leaderboard**

Fetches the leaderboard data sorted by score in descending order. Additionally, it adds badges to the top 3 teams (Gold, Silver, Bronze) based on their ranks.
