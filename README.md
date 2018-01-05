# fetch-middleware-redux
Redux Middleware to fetch api

This Middleware is used with [Create-react-app](https://github.com/facebookincubator/create-react-app)

## installation
   ```
   npm install fetch-middleware-redux --save
   ```
   
   Example on how to use fetch middleware redux in create react app
   
   import fetchApi from fetch-middleware-redux
   
```
import rootReducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { fetchApi } from 'fetch-middleware-redux';

const createStoreWithMiddleware = applyMiddleware(fetchApi)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <App />
    </Provider>
    , document.getElementById('root'));
    
```

After importing and wrapping with store we can use it in action creator

```
 request: {
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    types:['SUCCESS','ERROR'],
 }
```
## Required field
  #### `method :`
  Request method to api
  #### `url :`
  Request URL
  #### `types :`
  action to be called after Request ( type[0] is success and type[1] is for error)
  
## Optional includes
  #### `body :`
  Data to post/put/patch method
  #### `credentials :`
  Requesting Url with credentials
  #### `headers :`
  Requesting with headers
