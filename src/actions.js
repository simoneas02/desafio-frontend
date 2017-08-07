import store from './store'

export const changeVisble = (state) => {
    store.dispatch({type: 'VISIBLE', visible: state});
  }