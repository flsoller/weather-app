## A project for practicing the use of APIs / Async programming.

Stack:

- ReactJS (https://reactjs.org)
- Styled-Components (https://styled-components.com)

<img src="./mockups/mockup.png" width='700' height='350'>

## Project targets:

- Mobile friendly UI.
- Enter city into search field to get weather.
- Change background based on data (sunny, cloudy, rainy, snow).

Todo:

- [x] Wireframe / Layout
- [x] Define components
- [ ] Build + style components with dummy data
- [x] Implement weather API calls with fetch API
- [ ] Refactor API calls to Async / Await

## Remarks:

The SearchBox component is responsible for making the API calls and contains a nested Fetch method that depends on the previous promise. This is generally bad practice as it is similar to callbacks. It was only used to get around a limitation of the API service in order to get forecast data.

Todo:

- [ ] Find better solution to above problem.
