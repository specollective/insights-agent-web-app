# Insights Agent Web App

Code repository for the Insights Agent web application.

## Development Dependencies
- Node
- npm
- git
- nvm

## Contributing

### Clone the repository

```
git clone git@github.com:specollective/insights-agent-web-app.git
cd insights-agent-web-app
```

### Use required node version via nvm.

```
nvm use
```

### Install JavaScript dependencies.

```
npm install
```

### Start development server

Run the following command and the app should open should open on http://localhost:3000.

```
npm start
```

### Running development server with mock API

```
npm run start:mirage
```

### Running development server with SSL encryption

Useful for testing certain authentication flows. Please follow the steps in this tutorial to generate your SSL certificate for localhost.

https://www.mariokandut.com/how-to-setup-https-ssl-in-localhost-react

Once you've installed the certificates, run the following command and the app should open on https://localhost:3000.

```
npm run start:ssl
```

### Run tests

```
npm test
```
