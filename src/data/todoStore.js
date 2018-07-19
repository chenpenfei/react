import {ReduceStore} from 'flux/utils'
import Dispatcher from './Dispatcher'

class TodoStore extends ReduceStore {
    constructor(){
        super(Dispatcher)
    }
    getInitialState(){
        return[
            {title:'打游戏'}
        ]
    }

    reduce (state,action){
        switch (action.type) {
            case 'ADD_TODO':
                let arr = [...state]
                arr.push({title:action.inputText})
                return arr;
            case 'DELETE_TODO':
                state.splice(action.index,1);
                return [...state];
            default:
                return state;
        }
    }
}

export default new TodoStore();
