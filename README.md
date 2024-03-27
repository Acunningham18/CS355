# Dog API and Hit Counter Server

This repository contains two projects: a Dog API and a Hit Counter Server, both built using Node.js and Express.js.

## Dog API

The Dog API is a simple API that provides information about dog breeds and serves random images of dogs for each breed.

### Setup

1. Install Node.js from [https://nodejs.org](https://nodejs.org).


2. Navigate to the `dog-api` directory:

   ```bash
   cd dog-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   node index.js
   ```

5. Access the API at [http://localhost:3000](http://localhost:3000).

### Endpoints

- `GET /breeds`: Returns a list of dog breeds.
- `GET /image/{breed}`: Returns a random image for the specified breed.