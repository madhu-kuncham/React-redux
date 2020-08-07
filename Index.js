const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake () {
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}

function buyIceCream() {
    return{
        type: BUY_ICECREAM
    }
}

// (previousState , action) => newState

// const initialState= {
//     numOfCakes : 10,
//     numOfIcecreams: 20
// }

const InitialCakeState = {
    numOfCakes: 10
}

const InitialIceCreamState = {
    numOfIceCreams: 20
}

// const reducer = (state= initialState , action) => {
//     switch (action.type) {
//         case BUY_CAKE: return{
//             ...state,
//             numOfCakes: state.numOfCakes-1
//         }
//         case BUY_ICECREAM: return{
//             ...state,
//             numOfIceCreams: state.numOfIcecreams-1
//         }

//         default: return state
//     }
// }

const cakeReducer = (state= InitialCakeState , action) => {
    switch (action.type) {
        case BUY_ICECREAM: return{
            ...state,
            numOfIceCreams: state.numOfIcecreams-1
        }

        default: return state
    }
}

const IceCreamReducer = (state= InitialIceCreamState , action) => {
    switch (action.type) {
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes-1
        }

        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream : IceCreamReducer
})

const store = createStore(rootReducer)
console.log('Initial state' , store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state' , store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()