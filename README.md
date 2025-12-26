# Airports API Project

## Overview

This project is designed to help you learn how to handle APIs using Vanilla JavaScript, Axios, and HTML. It focuses on building a simple application to fetch and display airport data from an external API.

## Features

- Fetch airport data from the [AirportGap API](https://airportgap.com/api).
- Display a list of airports dynamically using HTML templates.
- Search for specific airports by their ICAO or IATA codes.
- Learn to handle API requests and responses using Axios.

## Technologies Used

- **Vanilla JavaScript**: For DOM manipulation and application logic.
- **Axios**: For making HTTP requests to the API.
- **HTML**: For structuring the application.
- **CSS/SCSS**: For styling the application.

## Project Structure

```
index.html
package.json
pnpm-lock.yaml
assets/
scripts/
  api.js
  script.js
styles/
  _airport-card.scss
  _header.scss
  main.css
  main.scss
  mixins.css
  mixins.scss
  variables.css
  variables.scss
templates/
  airport_card.html
```

## How to Run

1. Clone the repository.
2. Open `index.html` in your browser.
3. Use the search bar to find airports by their ICAO or IATA codes.

## Learning Goals

- Understand how to interact with APIs using Axios.
- Learn to dynamically update the DOM using JavaScript.
- Use HTML templates to render dynamic content.

## Next Steps

- Add more features, such as filtering airports by country or timezone.
- Implement error handling for edge cases.
- Refactor the code to improve modularity and reusability.

## Credits

- [AirportGap API](https://airportgap.com/api) for providing the data.
- EBAC for the learning opportunity.
