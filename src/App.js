import React, { Component } from 'react';
import Header from './components/Header'
import List from './components/list/List'

class App extends Component {
  constructor (props){
  super(props)
  this.state={
    task:'',
    list:[],


  }
}




updateTask=(e)=>{
  // console.log(e.target.value);
  this.setState({
    task: e.target.value
  })
  if(e.key==='Enter'){
    this.addTaskToList()
  }
// update.this.state.task
}

addTaskToList=()=>{
  // add task to this.state.list
  if (this.state.task){
  let newList=this.state.list
  
  newList.push({
    task: this.state.task,
    completed: false,
    likeCounter:0
  })

  this.setState({
    task:'',
    list:newList
  })
  }
  
}


removeItemFromList=(index)=>{
let newList=this.state.list

newList.splice(index, 1)
this.setState({
  list:newList
})
}

likeSubmitter=(index)=>{
  let newList=this.state.list

  newList[index].likeCounter++
  this.setState({
    list: newList
  })

}


markTaskCompleted=(index)=>{
  let newList=this.state.list

  newList[index].completed=!newList[index].completed

  this.setState({
    list: newList
  })
}

  render() {
    return (
      <div className="container">
      
        <Header
          inputHandler={this.updateTask} 
          taskValue={this.state.task}
          clickHandler={this.addTaskToList}
        />
        <List
          listItems={this.state.list}
          removeItemFromList={this.removeItemFromList} 
          markTaskCompleted={this.markTaskCompleted}
          likeSubmitter={this.likeSubmitter}
          />
        
      </div>
    //  <Title>Hello world!</Title> 
    // //  size={'large'}
    // //  color={'red'} etc..
    // //  content={'Hello world'} />
    );
  }
}

export default App;
