# Express TypeScript CRUD API

Backend application built using **Node.js**, **Express**, and **TypeScript**. It implements basic **CRUD** (Create, Read, Update, Delete) operations for managing resources, with **MongoDB** for data persistence.

---

## Table of Contents 📝

- [Prerequisites](#prerequisites)
- [Installation](#installation-⬇️)
- [Running application](#running-application)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)

---

## Prerequisites

Make sure to have the following software installed:

- **Node.js** (v12 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **Yarn** - Package manager for Node.js
- **MongoDB** - Local or remote MongoDB instance for data storage

---

## Installation ⬇️

### 1. Clone the repository:

```bash
git clone https://github.com/marianacondef/Mariana-Conde-Fidelis.git
cd Mariana-Conde-Fidelis/src/problem5
```
### 2. Install dependencies
```
npm install
```

### 3. Set up MongoDB:
Make sure MongoDB is installed and running.

## Running application
To run the server in **production** mode (not development mode):
1. Build the TypeScript code into JavaScript
```
npm run build
```
2. Start the server
```
npm run start
```

## Environment Variables
Configure the following environment variables in a ``.env`` file for MongoDB connection. Create a ``.env`` file in the root directory and add:
```
MONGO_URI=mongodb://localhost:27017/problem5
PORT=5000
```
## API Endpoints
### 1. **Create** a new resource
- `` POST ``  ``/api/resources`` 
- Request Body:
```
{
  "name": "Resource Name",
  "description": "Resource Description",
  "status": "active"
}
```
→ Returns the created resource.
### 2. **Read** all resources
Retrieves *all* resources available.
- `` GET ``  ``/api/resources`` 
→ Returns an array of resources.
### 3. **Read** a specific resource (by ID)
- `` GET `` `` /api/resources/:id``
→ Returns requested resource (if found).

### 4. **Update** a resource
- `` PUT `` `` /api/resources/:id``
- Example of request body:
```
{
  "name": "Updated Resource Name",
  "description": "Updated Resource Description",
  "status": "inactive"
}
```
→ Returns updated resource. 
### 5. **Delete** a specific resource
- `` DELETE `` `` /api/resources/:id``

→ Returns a message that says if the resource was deleted.


