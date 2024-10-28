Project Setup Instructions
This project consists of a frontend and backend directory, each containing code required to run the application. To run the project locally, follow the steps below.

Prerequisites
Node.js and npm installed on your machine. Download and install them from https://nodejs.org/.
Two terminal windows or tabs to start both frontend and backend services separately.
Steps to Run the Project
Navigate to the Project Directory
Open your terminal and navigate to the main project folder containing the frontend and backend subdirectories.

Install Dependencies
In both the frontend and backend directories, you will need to install the necessary dependencies. Run the following commands in each directory:

Open a terminal, navigate to the frontend folder, and run npm install.
Open another terminal, navigate to the backend folder, and run npm install.
Start the Project

After dependencies are installed, use the following commands to run each part of the application:

Frontend: In the terminal where you navigated to frontend, run npm start.
Backend: In the terminal where you navigated to backend, run npm run dev.
Accessing the Application
Once both frontend and backend servers are running, open your web browser and go to http://localhost:3000 (or the designated frontend port) to view the application.

Notes
Frontend is expected to run on http://localhost:3000.
Backend server typically runs on a different port, such as http://localhost:1337. Check the backend configuration if unsure.
If there are environment variables required, make sure they are correctly set up in .env files within each directory.