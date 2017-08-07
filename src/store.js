import {createStore} from 'redux';
import update from 'immutability-helper';

const reducer = (state, action) => {

    if(action.type === 'VISIBLE') {

        return (state = update(state, {
                            visible: {$set: action.visible}
                        })
                )
    }
    return state;
}

const store = createStore(reducer, {visible: false});

export default store