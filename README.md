# Project Weather

Project Weather is a website to consult current, max and min temperatures.

## Features

On index page is possible get the forcast of temperatude and a short descriptiion of the weather by GeoLocation if allowed by user or consult by inputing the name of the city.

## Technologies

- HTML
  - The structure of the Website was developed using HTML.
- CSS
  - The Website was styled using custom CSS in an external file.
- JavaScript
  - The Website was developed using JavaScript as main laguage.
- GitHub
  - Source code is hosted on GitHub and delpoyed using Git Pages.
- Git
  - Used to commit and push code during the development opf the Website.
- Visual Studio Code IDE
  - The code was developed using Visual Studio Code IDE
- Skycons
  - I used a set of ten animated weather glyphs from <https://darkskyapp.github.io/skycons/#>
- Visual Crossing Weather API 
  - The Timeline Weather API is the simplest way to retrieve weather data, free plan is possible to get 1000 records a day without cost. <https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/>

## Testing

### Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards as defined in [WCAG 2.1 Reflow criteria for responsive design](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) on Chrome, Edge, Firefox, Opera, and Safari browsers.

Steps to test:

1. Open browser and navigate to [Weather Project](https://jrakau.github.io/weather-javascript-project/index.html)
2. Click on Weather
3. Load page

Expected:

Load a xxx.html page properly

Actual:

Load a xxx.html page properly without any issues

### Accessibility

Developer tools from Chrome was used throughout development and for final testing of the deployed website to check for any aid accessibility testing. Using diferents screen sizes and device simulator

### Pages Testing

![Home screen](https://jrakau.github.io/weather-javascript-project/docs/testing/index_screen.png)

### Functional Testing

-**Navigation Links**

Testing was performed to ensure all navigation links on the respective pages, navigated to the correct pages as per design. This was done by clicking on the navigation links on each page.

| Navigation Link | Page to Load       |
| --------------- | ------------------ |
| Weather          | index.html         |


Links on all pages navigated to the correct pages as exptected.

-**Index Testing**

The home page was tested to ensure it functioned as expected when correct data was input and when incorrect data was input. The following test scenarios were covered:

Steps to test:

1. Open browser and navigate to [Weather Project](https://jrakau.github.io/weather-javascript-project/index.html)
2. Load page

Expected:

Load a index.html page, with a Weather animation current weather and temperature forecast

Actual:

Load a index.html page without issues, with a Weather animation and tempeture forcast

-**Temperature by GeoLocation**

On the index page was tested to ensure it functionality as expected when geolocation is allowed. The following test scenarios were covered:

Steps to test:

1. Open browser and navigate to [Weather Project](https://jrakau.github.io/weather-javascript-project/index.html)
2. Allow the page to use your geolocation information
3. Load information with geolocation data

Expected:

Load a index.html page, Animation of the current weather, current, max, min temperatures, a short description

Actual:

Load a index.html page without issues, with a Animation of the current weather, current, max, min temperatures, a short description

-**Temperature by search city name**

On the index page was tested to ensure it functionality as expected when input the city name and search. The following test scenarios were covered:

Steps to test:

1. Open browser and navigate to [Weather Project](https://jrakau.github.io/weather-javascript-project/index.html)
2. Input the city name and press the search button
3. Load the information with city name 

Expected:

Load a information on the page, Animation of the current weather, current, max, min temperatures, a short description

Actual:

Load a index.html page without issues, with a Animation of the current weather, current, max, min temperatures, a short description

-**Temperature by search (scenario: blank city name)**

On the index page was tested to ensure it functionality as expected when input the city name and search. The following test scenarios were covered:

Steps to test:

1. Open browser and navigate to [Weather Project](https://jrakau.github.io/weather-javascript-project/index.html)
2. Press the search button without input city name
3. Show a alert message "please enter a city name"

Expected:

Shows a alert message "please enter a city name"

Actual:

Shows a alert message "please enter a city name"

-**Temperature by search (scenario: wrong city name)**

On the index page was tested to ensure it functionality as expected when input the city name and search. The following test scenarios were covered:

Steps to test:

1. Open browser and navigate to [Weather Project](https://jrakau.github.io/weather-javascript-project/index.html)
2. Press the search button with city name not valid
3. Show a alert message "City not found"

Expected:

Shows a alert message "City not found"

Actual:

Shows a alert message "City not found"

### Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org)

![Index HTML Validator Results](https://jrakau.github.io/weather-javascript-project/docs/testing/nu_html_checker_index.png)

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org)

![CSS Validator Results](https://jrakau.github.io/weather-javascript-project/docs/testing/jigsaw_validator.png)

### Unfixed Bugs

Responsiveness of the website was tested on Safari MacOs and IOS, Chrome, and worked perfect in diferents resolutions.

## Deployment

### Version Control

The site was created using the Codeanywhere editor and pushed to github to the remote repository ‘weather-javascript-project’.

The following git commands were used throughout development to push code to the remote repo:

`git add <file>` - This command was used to add the file(s) to the staging area before they are committed.

`git commit -m “commit message”` - This command was used to commit changes to the local repository queue ready for the final step.

`git push` - This command was used to push all committed code to the remote repository on github.

### Deployment to Github Pages

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the menu on left select 'Pages'
  - From the source section drop-down menu, select the Branch: main
  - Click 'Save'
  - A live link will be displayed in a green banner when published successfully.

The live link can be found here - <https://jrakau.github.io/weather-javascript-project/>

### Clone the Repository Code Locally

Navigate to the GitHub Repository you want to clone to use locally:

- Click on the code drop down button
- Click on HTTPS
- Copy the repository link to the clipboard
- Open your IDE of choice (git must be installed for the next steps)
- Type git clone copied-git-url into the IDE terminal

The project will now of been cloned on your local machine for use.