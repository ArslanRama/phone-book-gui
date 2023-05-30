# Phone Book GUI

This project implements an attractive graphical user interface (GUI) for searching contacts in a phone book. The GUI allows users to enter a search term and displays matching results from the phone book, including the complete name and telephone number of each contact.

## Technologies Used

- JavaScript
- React
- Material UI

## Features

- Free text field for entering search terms
- Case-insensitive search
- Responsive design for seamless experience across devices
- Optional client-server architecture
- JSON file as the data source for the phone book

## Prerequisites

- Node.js (version 14.0.0 or above)
- Git

## Getting Started

To get started with the application, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/phone-book.git
   ```

2. Change to the project directory:

   ```bash
   cd phone-book
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

5. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Project Structure

The project structure is organized as follows:

```
Phone-Book-GUI
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   ├── Phonebook.css
│   │   ├── App.js
│   │   └── index.js
│   ├── .gitignore
│   ├── package.json
│   └── README.md
├── server/
│   ├── data/
│   │   └── phonebook.json
│   ├── .gitignore
│   ├── package.json
│   ├── server/
│   │   └── server.js
│   └── setupProxy.js
└── README.md

```

Sure! Here's the description in Markdown format:

**Frontend directory:**
The Frontend directory contains the frontend code. Inside it, the `public` directory holds the `index.html` file, and the `src` directory contains the `components` directory where your React components are located, along with `Phonebook.css` for styling. The `App.js` file is the main component, and `index.js` is the entry point of the application.

**Backend(server) directory:**
The Backend directory contains the backend code. The `data` directory holds the `phonebook.json` file as the data source. Inside the `server` directory, you can put your backend server file (`server.js`). Additionally, there is a `setupProxy.js` file that can be used for proxying requests from the frontend to the backend during development.

**Both frontend and backend directories:**
Both the frontend and backend directories have their respective `.gitignore` and `package.json` files.

**Root directory:**
Finally, the root directory contains the main `README.md` file for the project.

## Usage

1. Enter the name you want to search for in the provided free text field.
2. As you type, the application will check the phone book for matches, ignoring case differences.
3. The matching results will be displayed below the text field, showing the complete name and telephone number of each contact.

## Client-Server Architecture

The application can optionally be used in a client-server architecture. In this case, the phone book data is stored on the server, and the frontend application queries the server for search results during runtime. To implement this architecture, you will need to set up a backend server that exposes an API endpoint for searching the phone book.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
- [Node.js](https://nodejs.org/)

---

**Note:** The phone book data provided in the `phoneBook.json` file is for demonstration purposes only. Feel free to replace it with your own data or modify it as needed.