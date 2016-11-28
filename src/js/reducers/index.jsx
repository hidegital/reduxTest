//
let url = window.location.href;

// 初期ステート設定
let initialState = {
	fuga: 0,
	hoge: 0
};

//reload時
if ( url.indexOf('?') >= 0) {
	initialState = {
		fuga: 3,
		hoge: 0
	};
	console.log('hogehoge');
}

export function foo(state = initialState /* globalState.foo */, action) {
	switch(action.type) {
		case 'INCREMENT': {
			return { fuga: state.fuga + 1 }
		}
		default:
			return state
	}
}

export function bar(state = initialState  /* globalState.bar */, action) {
	switch(action.type) {
		case 'DECREMENT': {
			return { hoge: state.hoge - 1 }
		}
		default:
			return state
	}
}



// export default combineReducers({
// 	foo, bar
// });
