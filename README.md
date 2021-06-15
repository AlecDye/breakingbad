[Live Site](https://badbreakchars.netlify.app/)

React app using the [Breaking Bad API](https://breakingbadapi.com/documentation)

Dev Notes:
* App is not mobile friendly in this version, the character data is displayed on the card's "back" via a CSS hover transistion. To make this work for a mobile browser without a hover state, an onClick event will need to be attached to the card component
* Search currently only works for the character's true name and not the associated actor or alias
