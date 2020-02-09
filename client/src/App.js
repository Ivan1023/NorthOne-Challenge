import React from 'react';
import './App.scss';
import Task from "./components/Task/Task"
import Board from './components/Board/Board'
import Card from './components/Card/Card'

class ToDoList extends React.Component  {
  state = {
    itemList:[],
    title:"",
    description:""
  }

  titlehandler = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  descriptionhandler = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  addItem = (e) => {
    e.preventDefault(); 
    const newTitle = this.state.title;
    const newDescription = this.state.description;

    const newObject = {
      title: newTitle,
      description: newDescription,
      key: Date.now()
    }
     
    if( newTitle && newDescription  !== ""){
      const newArray = [...this.state.itemList, newObject];
      this.setState ({
        itemList: newArray,
        title:"",
        description:""
      })
    }
  }

  deleteItem = (key) => {
    const fliterItem = this.state.itemList.filter(item =>
      item.key!==key);
    
    this.setState({
      itemList: fliterItem
    })
  }

  updateItem = (key) => {
    console.log(key)
    console.log("Clicked")
    let text = prompt("Please Enter New Text", "")
    const items = this.state.itemList
    
    items.map(item => {      
      if(item.key===key){
        item.description= text;
      }
    })
    this.setState({
      itemList: items
    })

    console.log(text)
  }

  render (){

    console.log(this.state)
    return (
      <div className="App">
        <h1 className="App__header">North One Development Challenge</h1>
        <form onSubmit={this.addItem} className="App__form">
          <input className="App__title" type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.titlehandler}></input>
          <input className="App__description" type="text" placeholder="Description" name="description" value={this.state.description} onChange={this.descriptionhandler}></input>
          <button className="App__form-button" type="submit">Add</button>
        </form>
        <div className="App__container">
          <div>
          <h1>Project 1</h1>
          <Board className="App__map">
              {this.state.itemList ? this.state.itemList.map(list => (
              <Card id={list.key} className="card" draggable="true">
                <Task key={list.key} taskDetails={list} deleteItem={this.deleteItem} updateItem={this.updateItem}></Task>
              </Card>
              )) : null}
          </Board>
          </div>
          <div>
          <h1>Project 2</h1>
          <Board className="App__map2">
            <Card id="card-2" className="card" draggable="true">
                
            </Card>
          </Board>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoList;
