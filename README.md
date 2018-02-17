# learning-vuejs

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

Firebase was used on HTTP classes to create a remote test server
- https://firebase.google.com/
- Go to the console and create a new project
- Open the Develop > Database > Rules and set the following config

{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}

