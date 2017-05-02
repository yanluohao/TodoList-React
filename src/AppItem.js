import React,{Component} from "react";

class TodoItem extends Component{
  delete(){
    this.props.deleteItem(this.props.index);
  }
  changeState(){
    let isDone=!this.props.isDone;
    this.props.changeState(this.props.index,isDone);
  }
  render(){
    let className=this.props.isDone?'done':'';
    return (
      <li className={className}>
        <label>
          <input type="checkbox" checked={this.props.isDone} onChange={this.changeState.bind(this)}/>
          <span className="time">{this.props.time}</span>
          <span>{this.props.text}</span>
          <button onClick={this.delete.bind(this)}>删除</button>
        </label>
      </li>
    )
  }
}



export default TodoItem;