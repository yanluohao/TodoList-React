import React, { Component } from 'react';
import './App.css';
import TodoHeader from './AppHeader';
import TodoMain from './AppMain';
import TodoFooter from "./AppFooter";

class App extends Component{
    constructor(){
      super()
      this.state={
        todos:[],
        isAllChecked:false
      }
    }
    addTodo(item){
      this.state.todos.push(item);
      this.setState({
        todos:this.state.todos
      })
    }
    deleteItem(index){
      this.state.todos.splice(index,1);
      this.setState({
        todos:this.state.todos
      })
    }
    changeState(index,isDone,isChangeAll=false){
      if(isChangeAll){
        this.state.todos.map((item,index)=>{
          item.isDone=isDone;
        })
        this.setState({
          todos:this.state.todos,
          isAllChecked:isDone
        })
      }
      else{
        this.state.todos[index].isDone=isDone;
        this.allChecked();
      }
    }
    allChecked(){
      let allChecked=false;
      if(this.state.todos.filter((item)=>!item.isDone).length===0){
        allChecked=true;
      }
      this.setState({
        todos:this.state.todos,
        isAllChecked:allChecked
      })
    }
    clearDone(){
      let todos=this.state.todos.filter((item)=>!item.isDone);
      this.setState({
        todos:todos
      })
    }
    render(){
      let info={
        isAllChecked:this.state.isAllChecked,
        todoCount:this.state.todos.length||0,
        todoDoneCount:this.state.todos.filter((todo)=>todo.isDone).length||0
      }
      return (
        <div className="todoList">
          <TodoHeader addTodo={this.addTodo.bind(this)}/>
          <TodoMain lists={this.state.todos} deleteItem={this.deleteItem.bind(this)} changeState={this.changeState.bind(this)}/>
          <TodoFooter {...info} changeState={this.changeState.bind(this)} clearDone={this.clearDone.bind(this)}/>
        </div>
      )
    }
}

export default App;