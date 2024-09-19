## Restaurant search

### Install deps
```npm install```

### Running the App

#### Backend sever
```npm run backend```
* Runs a **express.js** server on port `3002`
* Currently exposes a single end point `/yelp-query`


#### Front end server
```npm start```

* Runs the app in the development mode on port `3000`
* Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
* The page will reload if you make edits.<br>
* You will also see any lint errors in the console.


### Notes about the code
#### Backend
* Backend is small, most of the code in `src/server.js`
* Separate backend is needed to workaround `CORS` issue and to `rateLimit` the  access to *Yelp API*
* Server *doesn't* auto reload, ideally there will be no changes in here, if changed you need restart using the command mentioned above

#### Frontend
* Almost all of the logic is in front end like most node apps, entry point in `index.js`
* Core container component is  `App.js`
	* Defines core state using `UseState` from [React Hooks](https://reactjs.org/docs/hooks-intro.html)
* Two main components
	* `MapView`
		* Has the `google-react-maps` imported with a sample map rendering
		* Has markers of the restaurants listed from the ListView
		* When a marker is clicked, the marker and the respective restaurant in the list will be highlighted
	* `ListView`
		* Displays name of the restuarants
		* When a restaurant is clicked, the restaurant and the marker in the map will be highlighted
	* `SearchBox`
		* Enables user to search for a place from the restaurant list
		* Filters the place in map and restaurant list