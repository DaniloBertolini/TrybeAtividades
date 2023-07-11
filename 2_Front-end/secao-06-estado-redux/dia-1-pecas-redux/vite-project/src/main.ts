import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore as createStore } from "redux";

type ActionType = {
  type: string
}

const imgLampada = document.getElementById('lampada')

const reducer = (state = { mode: 'lampadaLight' }, action: ActionType) => {
  switch (action.type) {
    case 'ALTERNAR_LUZ':
      return {mode: state.mode === 'lampadaLight' ? 'lampadaDark' : 'lampadaLight'}
  
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools())

const acao = {
  type: 'ALTERNAR_LUZ'
}

const botaoInt = document.querySelector('button') as HTMLButtonElement
botaoInt.addEventListener('click', () => {
  store.dispatch(acao)
});

store.subscribe(() => {
  const globalStore = store.getState()
  imgLampada?.setAttribute('src', `/${globalStore.mode}.png`)
})
