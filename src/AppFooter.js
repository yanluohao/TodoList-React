import React,{Component} from "react";

class TodoFooter extends Component{
  changeStateAll(e){
    this.props.changeState(null,e.target.checked,true);
  }
  removeDone(){
    this.props.clearDone();
  }
  render(){
    return (
      <div className="todoFooter">
        <label>
          <input type="checkbox" onChange={this.changeStateAll.bind(this)}  checked={this.props.isAllChecked}/>
          <span>全选</span>
        </label>
        <span className="progress">当前任务进度{this.props.todoDoneCount}/{this.props.todoCount}</span>
        <button onClick={this.removeDone.bind(this)}>清除已完成的任务</button>
      </div>
    )
  }
}

export default TodoFooter;