import React from 'react';
import './App.scss';
import Task from "./components/Task/Task"

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
        <h1>Hello World</h1>
        <form onSubmit={this.addItem}>
          <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.titlehandler}></input>
          <input type="text" placeholder="Description" name="description" value={this.state.description} onChange={this.descriptionhandler}></input>
          <button type="submit">Add</button>
        </form>
        {this.state.itemList ? this.state.itemList.map(list => (<Task key={list.key} taskDetails={list} deleteItem={this.deleteItem} updateItem={this.updateItem}/>)) : null}
      </div>
    );
  }
}

export default ToDoList;
