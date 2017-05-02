import React,{Component} from "react";
import TodoItem from "./AppItem";

class TodoMain extends Component{
  delete(){
    console.log('删除');
  }  
  render(){
    if(this.props.lists.length===0){
      return (
        <div>当前没有任务等待完成</div>
      )
    }
    else{
      return (
        <ul className="todo-main">
          {
            this.props.lists.map((todo,index)=>{
              return (
                //用来传递todoMain的todos属性和delete、change方法。
                <TodoItem index={index} key={index} text={todo.text} isDone={todo.isDone} time={todo.time} delete={todo} {...this.props}/>
              )
            })
          }
        </ul>
      )
    }
  }
}


export default TodoMain;