import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App props={this.user}/>, document.getElementById('root'));
registerServiceWorker();

const user = {
  userName: "Liam",
  friends:[
    {name:"Rebs",lastDateSeen:"9/23/2018",desiredFrequency:14,notes: "Likes concerts"},
    {name:"Dana",lastDateSeen:"9/12/2018",desiredFrequency:21,notes: "Likes going out to eat"},
    {name:"Todd",lastDateSeen:"9/15/2018",desiredFrequency:7,notes:"Likes riding bikes"},
    {name:"Liz",lastDateSeen:"8/21/2018",desiredFrequency:11,notes:"Likes going to bars"},
    {name:"Sebastian",lastDateSeen:"8/28/2018",desiredFrequency:11,notes:"Likes playing videogames"}
  ]
}
