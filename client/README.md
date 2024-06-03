# HomeHoppers

HomeHoppers is a web application that allows users to search, book, and manage home rentals. It consists of a client-side React application and a server-side Express.js API.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
git clone https://github.com/GeorgeHolas/homehoppers.git


2. Navigate to the project directory:
cd homehoppers

3. Install dependencies for the client and server:
cd client
npm install
cd ../server
npm install

### Running the Application

1. Start the server:
cd server
npm start

The server will start running on `http://localhost:5000`.

2. Start the client (in a separate terminal):
cd client
npm start


The client will start running on `http://localhost:3000`.

## Project Structure

- `client/`: Contains the React client-side application
- `server/`: Contains the Express.js server-side API

## Client

The client is a React application that provides the user interface for HomeHoppers. It allows users to search for properties, view property details, create listings, manage their trips, wishlists, and reservations.

## Server

The server is an Express.js application that serves as the API for HomeHoppers. It handles user authentication, property listings, and reservation management.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).