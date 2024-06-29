# Mt Football APP

## Description

The My Football APP is a web application that consumes the [Football Data Org](https://www.football-data.org/) API

## Stacks

- React
- TypeScript
- Chakra UI
- React Router Dom
- Axios
- Lottie React

## Features

- **List the main World's Championships**
- **List all matches in all rounds from a Championship**
- **Filter the matches by Team**
- **Filter the matches by Round**

## Prerequisites

- [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm)

## Deploy

- You can see the project here: 🟢 [My Football APP](https://my-football-app.netlify.app/)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/nikolaslopes/my-football-app.git
   cd my-football-app
   ```

2. This application uses the `Node version Manager (NVM)` to manage the Node.js version to avoid dependency conflict. To use the correct Node.js version, after having installed [NVM](https://github.com/nvm-sh/nvm), just run:

   ```**sh**
   nvm use
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Add environment variables:
    The [Football Data Org](https://www.football-data.org/) API needs a token to make authorize the requests. So you need to add your personal token to run the application. To do that you need:
    - Create a `.env.local` in the project source
    - Inside this file, past it:

      ```
        REACT_APP_API_URL=https://football-api-five.vercel.app
        REACT_APP_API_TOKEN=FOOTBALL_API_PERSONAL_TOKEN
      ```

    - Now you just need to past your personal token in this var env: `REACT_APP_API_TOKEN=PASTE_YOUR_TOKEN_HERE`

## Usage

1. After install:

   ```sh
   npm start
   ```

## Preview

<div align="center">
  <img src=".github/preview.gif" alt="Preview" />
</div>

## Author

[![Static Badge](https://img.shields.io/badge/nikolas%20lopes-c1c1c1?style=for-the-badge&logo=linkedin&label=linkedin&labelColor=2371B7)](https://www.linkedin.com/in/nikolaslopes/)

[![Static Badge](https://img.shields.io/badge/nikolaslopes-c1c1c1?style=for-the-badge&logo=github&label=github&labelColor=%23222)](https://github.com/nikolaslopes)
