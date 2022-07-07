# Insights Agent Web App

Code repository for the Insights Agent web application.

## Development Dependencies
- Node
- npm
- git
- nvm

## Contributing

Clone the repository

```
git clone git@github.com:specollective/insights-agent-web-app.git
cd insights-agent-web-app
```

Use required node version via nvm.

```
nvm use
```

Install JavaScript dependencies.

```
npm install
```

Start development server

```
npm start
```

Run tests

```
npm test
```

Local SSL setup

Please follow the steps in this tutorial to generate your SSL certificate for localhost.

https://www.mariokandut.com/how-to-setup-https-ssl-in-localhost-react/

Once you've installed the certificates, run the following command:

```
npm run dev
```

The app should open on https://localhost:3000/
