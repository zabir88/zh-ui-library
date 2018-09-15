import React, { Component } from 'react';
import Form from './lib/Form';
import FlashMessage from './lib/FlashMessage';
import Pagination from './lib/Pagination';

class App extends Component {
  state = {
    flashMessage: {
      message: 'Thank You!',
      messageType: 'success',  
    },
    links: [
      { route: '#',
        displayValue: '1',
        active: true
      },
      {
        route: '#',
        displayValue: '2',
        active: false
      },
      {
        route: '#',
        displayValue: '3',
        active: false
      },
      {
        route: '#',
        displayValue: '4',
        active: false
      }
    ],
    formInputs: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          value: '',
          placeholder: 'Name',
          id: 'name',
          className: 'form-control'
        }
      },
      usCitizenship: {
        elementType: 'select',
        label: 'US Citizenship',
        elementConfig: {
          value: 'Please select one',
          id: 'usCitizenship',
          className: 'form-control' 
        },
        options: [
          {value: 'Please select one', displayValue: 'Please select one', disabled: true},
          {value: 'Yes', displayValue: 'Yes', disabled: false},
          {value: 'No', displayValue: 'No', disabled: false}
        ]
      },
      description: {
        elementType:'textarea',
        label: 'Description',
        elementConfig: {
          value: '',
          id:'description',
          placeholder: 'Please enter description...',
          className: 'form-control'
        }
      }
    } 
  }

  inputChangeHandler = (event) => {
    const updatedFormInputs = {...this.state.formInputs};
    updatedFormInputs[event.target.id].elementConfig.value = event.target.value
    this.setState({formInputs: updatedFormInputs});
  }

  closeFlashHandler = () => {
    const updatedFlashMessage = {...this.state.flashMessage};
    updatedFlashMessage.message = null;
    updatedFlashMessage.messageType = null;
    this.setState({flashMessage: updatedFlashMessage});
  }

  pageChangedHandler = (event) => {
    console.log(event.target.text);
  }

  render() {
    let display =  (
      <div className="container" style={{paddingTop: '50px'}}>
        <h1 className="text-center">Welcome to ZH-UI-Library</h1>
        <br/>
        <FlashMessage message={this.state.flashMessage.message} messageType={this.state.flashMessage.messageType} dismiss={this.closeFlashHandler.bind(this)} />
        <br/>
        <Form formInputs={this.state.formInputs} changed={this.inputChangeHandler.bind(this)} />
        <br/>
        <Pagination links={this.state.links} pageChange={this.pageChangedHandler} />        
      </div>
    );
    return display
  }
}

export default App;
