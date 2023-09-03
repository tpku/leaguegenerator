# FusbApp League Generator

This is a web application that allows you to follow and compare football clubs from around the world.

<img width="1000" alt="Screenshot FusbApp start page" src="https://github.com/tpku/leaguegenerator/assets/112587454/0b623adc-77a9-4e39-bc31-8e3528654827">
<img width="1000" alt="Screenshot FusbApp search page" src="https://github.com/tpku/leaguegenerator/assets/112587454/f5ffef3f-3386-4060-a675-dbdd34a8d3b3">

## About

School project, React Assignment: Create a small web application with a nice graphical user interface using ReactJS, which includes at least three react components, uses state and props, makes at least one API call, and is error-free.
<br>
Built with ReactJS.

## Setup

1. Fork the FusbApp repository to your own account.
2. Clone the forked repository to your local machine. Use the CLI or "Open with GitHub Desktop".

```bash
gh repo clone tpku/leaguegenerator
```

3. Navigate to the project directory.

```bash
cd leaguegenerator
```

4. Install the required dependencies.

```
npm install
```

5. Create a .env file in the root directory of the project, and add your RapidAPI access key as follows:

```
REACT_APP_API_KEY=your-access-key-here
```

> **NOTE:** You will need to sign up for a RapidAPI account and create an App, subscribe to the API-FOOTBALL API to obtain an access key.
> <br>If you prefer to use static test data instead of dynamic data fetched from an API, you can uncomment the section from 'REAL DATA' to 'ONLY FOR TEST DATA' in the code and select England as the country in the dropdown menu.\*

6. Start the development server.

```
npm start
```

## Usage

When you open FusbApp, you will be prompted to enter your name. Once you do so, you will be able to explore and compare football clubs from around the world.
