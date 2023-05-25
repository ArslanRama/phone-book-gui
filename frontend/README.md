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
phone-book/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── ContactList.js
│   ├── data/
│   │   └── phoneBook.json
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
└── README.md
```

- The `public` directory contains the HTML template for the application.
- The `src` directory contains the main source code.
- The `components` directory holds the React components used in the application.
- The `data` directory contains the `phoneBook.json` file, which serves as the data source.
- `App.js` is the main component that renders the user interface.
- `index.js` is the entry point of the application.
- `index.css` contains the styling for the application.
- `.gitignore` specifies files and directories to ignore when committing changes to Git.
- `package.json` lists the project dependencies and provides scripts for running the application.

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