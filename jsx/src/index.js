// import the react and reactDOM
import React from 'react';
import ReactDOM from 'react-dom';

function getMe(){
    return 'GO'
}
// create a react component
const App = () => {
    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'blue', color:'white'}}>{getMe()}</button>
        </div>
    );
};

// take the react component and show it on the screen
ReactDOM.render( <App />, document.querySelector('#root'));