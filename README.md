# Currency Converter

A simple currency converter application built with React, TypeScript, Tailwind CSS, Material-UI, Axios, and the [freecurrencyapi.com](https://freecurrencyapi.com) API.

## Features

- Convert between various currencies using live exchange rates.
- User-friendly interface built with Material-UI.
- Responsive design with Tailwind CSS.
- TypeScript for type safety.
- Fetches live data using Axios.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a free API key from [freecurrencyapi.com](https://freecurrencyapi.com).

## Getting Started

Follow these steps to get the application up and running:

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/ecali/currency-converter.git
    cd currency-converter
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up your API key**

   Create a `.env` file in the root directory of the project and add your `FREECURRENCYAPI_KEY`:

    ```env
    REACT_APP_API_KEY=your_api_key_here
    ```

### Running the Application

1. **Start the development server**

    ```bash
    npm run start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Usage

- **CurrencyConverter Component**: The main component that handles currency conversion logic.
- **CurrencyInput Component**: A reusable input component for selecting currencies and entering amounts.
- **API Service**: Handles all API requests to [freecurrencyapi.com](https://freecurrencyapi.com).

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **Material-UI**: A popular React UI framework with pre-designed components.
- **Axios**: A promise-based HTTP client for the browser and Node.js.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [freecurrencyapi.com](https://freecurrencyapi.com) for providing the free currency conversion API.
- The open-source community for providing the libraries and tools used in this project.
