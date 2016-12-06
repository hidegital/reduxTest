import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configStore';
import App from './containers/app'; // componentsの方ではないことに注意

const store = configureStore();
const rootEl = document.getElementById('root'); // 流しこむ対象の要素

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootEl
);


//下記immutableテスト
import {List,Map} from 'immutable';

var a = [
	"Hydrogen",
	"Helium",
	"Lithium",
	"Beryl­lium"
];

var b = List(a);
//object

var c = b.toArray();

b.push('fugafuga') ;

// console.log(typeof b);
// object

// console.log(c);
// console.log(d.toArray());


var a2 = a.map(function(s){ return s.length });
var a3 = a.map( s => s.length );

// console.log(a2);
// console.log(a3);


var aa = [1,2,3];
var bb = aa.push(4);

console.log(aa);
console.log(bb);

//.toJSで通常のオブジェクトとしてコンソールで確認できる

const todo = Map({ id: 0, text: 'foo', isDone: false });
todo.update('isDone', isDone => !isDone);
console.log(todo.toJS());
