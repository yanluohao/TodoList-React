import React, { Component } from 'react';

class TodoHeader extends Component{
  handlerKeyUp(e){
    if(e.keyCode===13){
      let value=e.target.value.trim();
      if(!value) return false;
      let date=new Date().Format("yyyy-MM-dd hh:mm:ss");
      let newTodoItem={
        text:value,
        isDone:false,
        time:date
      }
      e.target.value="";
      this.props.addTodo(newTodoItem);
    }
  }
  componentWillMount(){
    Date.prototype.Format=function(fmt){
      var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
    }
  }
  render(){
    return (
      <div className="todoHeader">
        <input type="text" placeholder="请输入你的任务名称，按回车确认" onKeyUp={this.handlerKeyUp.bind(this)}/>
      </div>
    )
  }
}

export default TodoHeader;