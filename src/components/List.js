import React,{Component} from "react";

export default class List extends Component {
    constructor(props) {
        super(props)
    }
    hanleDelete = (event) =>{
        let index = event.target.dataset.index;
        this.props.deleteTodo(index)
    }
    render() {
        let {todoList} = this.props;
        return (
            <div>
                <ul>
                    {todoList.map((todo,index)=>(

                        <li key={index}>
                            {todo.title}
                            <button data-index={index} onClick={this.hanleDelete}>删除</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
