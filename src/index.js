import React from 'react'; // the react machine under the hood
import ReactDOM from 'react-dom'; // dom for website view manipulation; native for mobile
import './index.css';
// import App from './App'; // assumes .js file
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { robots } from './robots'; // {robots} called destructuring (need if export >= 1 from js file)

ReactDOM.render(<div>
					<Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
					<Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
					<Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
					<Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/>
				</div>, 
document.getElementById('root')); // Hello component with property greeting

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
