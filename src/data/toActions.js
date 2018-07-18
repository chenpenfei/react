import dispatcher from './Dispatcher'

const Actions = {
    addTodo(inputText) {
        Dispatcher.dispatch({type: 'ADD_TODO', inputText})
    },
    deleteTodo(index) {
        Dispather.dispatch({type: 'DELETE_TODD', index})
    }
}

export default Actions;