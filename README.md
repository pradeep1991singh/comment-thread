# Comment Thread

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

In the project directory, you can run:

### `npm install`

This will install all required dependencies.\

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the client app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run server`

Runs the nodejs server app
Open [http://localhost:9000](http://localhost:9000) or
Open [http://localhost:9000/api/comment](http://localhost:9000/api/comment) to view it in the browser.


## File structure

<pre>
comment-thread
├── README.md
├── coverage
├── output.txt
├── package-lock.json
├── package.json
├── public
|  ├── favicon.ico
|  ├── index.html
|  ├── logo192.png
|  ├── logo512.png
|  ├── manifest.json
|  └── robots.txt
├── server
|  ├── constants
|  |  ├── comments.json
|  |  └── index.js
|  ├── db
|  |  ├── index.js
|  |  └── models
|  |     ├── comment.js
|  |     └── index.js
|  ├── index.js
|  ├── router
|  |  ├── comment
|  |  |  ├── commentController.js
|  |  |  └── index.js
|  |  └── index.js
|  └── services
|     ├── db-service
|     |  ├── comment.js
|     |  └── index.js
|     └── logger
|        └── index.js
├── src
|  ├── App.css
|  ├── App.js
|  ├── App.test.js
|  ├── comment
|  |  ├── CommentBox.js
|  |  ├── CommentList.js
|  |  ├── comment.css
|  |  ├── services
|  |  |  └── commentApi.js
|  |  └── store
|  |     ├── actions-types.js
|  |     ├── actions.js
|  |     ├── reducer.js
|  |     └── saga.js
|  ├── index.css
|  ├── index.js
|  ├── logo.svg
|  ├── reportWebVitals.js
|  ├── services
|  |  ├── request.js
|  |  └── utils.js
|  ├── setupTests.js
|  └── store
|     ├── index.js
|     └── reducers.js
└── yarn.lock


## Client React app

Client React app source is inside `src` directory and runs on `3000` port by default;

## Server React app

Server NodeJs app source is inside `server` directory and runs on `9000` port by default;
</pre>
