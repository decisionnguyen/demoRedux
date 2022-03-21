import * as React from 'react';
import Routes from "./src/Routes";
import {Provider} from 'react-redux'
import {store} from "./src/store";


const App = () => {
    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    )
}

export default App;
