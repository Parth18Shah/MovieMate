<p align="center"><a href="https://moviemate-387420.wl.r.appspot.com/"><img alt="movieinfo app" src="https://github.com/Parth18Shah/MovieMate/blob/main/static/images/moviemate.png" width="300vw"/></a></p>
<br>
<p align="center">
	<a href="https://moviemate-387420.wl.r.appspot.com/">View Demo</a> |
	<a href="https://github.com/Parth18Shah/MovieMate/issues/new">Report Bug</a> |
	<a href="https://github.com/Parth18Shah/MovieMate/issues/new">Request Feature</a>
</p>

## About
A responsive and mobile-optimized web application that allows you to search for any movie or show data. 
Whether you're looking for the latest blockbuster, a classic film, or a popular TV show, moviemate has got you covered.

## Features
- Search for any movie or show data by title, keyword, or any relevant information.
- View detailed information about movies or shows, including synopsis, release date, cast, ratings, and more.
- Discover related movies or shows based on recommendations.
- Enjoy a responsive and user-friendly interface, optimized for mobile devices.

## How To Use
#### Software Requirements
- VSCode

## Installation

Hosted Application -> [Link](https://moviemate-387420.wl.r.appspot.com/)

Clone the repo
```html
git clone git@github.com:Parth18Shah/MovieMate.git
```

Install the dependencies by running:
```html  
npm install
```

Navigate to the project directory
```html  
npm cd MovieMate
```

#### Run using Command Prompt

```html
npm run dev
```

#### For testing
Note: Yoou can add more test cases in app.test.js file
```html
npm run test
```

Create an account on [TMDB](https://www.themoviedb.org/) and generate an API key. 
Create a constants.js file in the root directory and add the following lines:
```html
API_KEY = "your_api_key"


module.exports = { 
    API_KEY
}
```

Open your web browser and visit http://localhost:8080 to access the application (you can also avoid this process by using the hosted link provided above).

---
### Tech stack

`Frontend` : Vanilla JavaScript, HTML, CSS, Bootstrap   <br>
`Backend` : Node.js, Express.js, EJS, Jest  <br>
`API` : [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started) <br>
`Deployment Platform`: Google Cloud Platform (App Engine)
