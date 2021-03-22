# Ravyyn

Vue 2 project

## Notes
* You can use either css or sass for styling. Project also makes use of [bootstrap-vue](https://bootstrap-vue.org/)
* We are using [axios](https://github.com/axios/axios) as HTTP client. 
* HTTP errors are intercepted and displayed via bootstrap toast alert. No need for manual _.catch_ statements.
* Authentication is done via bearer jwt token
* Since PHP/Laravel backed uses snake_case variables axios is set up to transform requests and responses to and from snake_case to camelCase.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
Project runs on **port 3000** to match the facebook social login callback URL. 
Facebook requires HTTPS. To test set https: true in vue.config.js

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
