import React, { Component } from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import EditCard from './components/editCard/editCard';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      name: 'Bogdan',
      allData: [],
      title: 'Super Bogdan',
      setEditMode: false,
      selectedId: null
    }
  }

  componentDidUpdate() {
    console.log('mode: ', this.state.setEditMode)
  }

  componentDidMount = async () => {
    let  data;
    try {
      data = await (await fetch('http://172.18.0.2:4000/products')).json();
    } catch(err) {
      data = [];
    } 
    this.setState({
      allData: data
    });
  }
  
  handleClick(id, data = null) {
    this.setState(prevState => {
      const newState = { ...prevState }
      newState.selectedId = id;
      newState.setEditMode = !prevState.setEditMode;
      if (data) {
        const index = newState.allData.findIndex(prod => prod.id === id);
        newState.allData[index] = data;
      }
      return newState;
    });
  }

  render() {
    console.log('render App')
    const { title, allData, selectedId, name} = this.state;
    return (
      <div className="App">
        <Header />
        { this.state.setEditMode 
          ? <EditCard 
              id={selectedId} 
              handleClick={this.handleClick}
            /> 
          : <Content 
              name={name} 
              handleClick={this.handleClick} 
              allData={allData} 
              title={title}
              handleChangeTitle={()=> {}}
            />
        }
      </div>
    );
  }
}

export default App;
