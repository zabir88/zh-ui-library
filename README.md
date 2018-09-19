# ZH-UI-Library
A library of UI components created using `react.js` and `bootstrap`.

## Installation
Run the following command:
`npm install zh-ui-library --save`

## Dependecies 
Bootswatch (a variation of the bootstrap framework). For more info please visit [https://bootswatch.com](https://www.bootswatch.com)

## How to use
Import these files in the index.js file 
```
import 'bootswatch/dist/<theme of your choice>/bootstrap.min.css';
import 'zh-ui-library/dist/<name of component you want to use>';
```
## List of UI Components currently available
## Dynamic Form
Takes the following props attributes: 
1. formInputs: takes an object. 
2. changed: takes input event handler function to set/update form input values. 
3. sort(boolean value accepted): true or false.
4. formStyling: takes style object.
5. submit: takes submit handler function to submit the data.

Currently the form supports dropdowns, date field, number field, text field, password field, email field, textareas and check-boxes.

Use case example: 
```
this.state = {
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
	};
};
```
Finally call the component
```
<Form formInputs={this.state.formInputs} changed={this.inputChangeHandler.bind(this)} sort={true} formStyling={{topPadding: '20px'}} submit={this.submitDataHandler.bind(this))}/>
```
## Flash Message
Takes the following props attributes:
1. message: Displayed Message srting.
2. messageType: One of these strings 'success', 'warning', 'primary', 'danger', 'info', 'secondary' or 'light'.
3. dismiss: takes dismiss handler to set message and messageType to null in the state of the parent component.

Use case example: 
```
state = {
	flashMessage: {
		message: 'Thank You!',
		messageType: 'success'
	}
};

closeFlashHandler = () => {
	this.setState(flashMessage: {message: null, messageType: null});
}
```

Finally call the component
```
<FlashMessage message={this.state.flashMessage.message} messageType={this.state.flashMessage.messageType} dismiss={this.closeFlashHandler.bind(this)}/>
```
## Pagination
Takes the following props attributes:
1. links: Takes an object.
2. pageChange: takes page change handler function to change the page and query data.
3. position: takes 'left' or 'right' string.
4. perPage: takes integer value to display count at the bottom.
5. currentPage: takes integer value to display count at the bottom.
6. total: takes integer value to display total count at the bottom.

Use case example:
```
state = {
  perPageData: 5,
  totalData: 10,
  currentPageData: 5,
	links: {
    1: { 
      route: '#',
      displayValue: '1',
      id: 1,
      active: true
    },
    2: {
      route: '#',
      displayValue: '2',
      id: 2,
      active: false
    },
    3: {
      route: '#',
      displayValue: '3',
      id: 3,
      active: false
    },
    4: {
      route: '#',
      displayValue: '4',
      id: 4,
      active: false
    }
  }
};

pageChangedHandler = (event) => {
  const updatedPagination = {...this.state.links};
  let currentLinkId = null;
  const updatedPaginationValueArray = Object.keys(updatedPagination);
  for (let key in updatedPagination) {
    if (updatedPagination[key].active === true) {
      currentLinkId = updatedPagination[key].id;
    };
  };
  if (event.target.id === 'back') { 
    if (currentLinkId > 1) {
      updatedPagination[currentLinkId].active = false;
      updatedPagination[currentLinkId-1].active = true;
    };
  } 
  else if (event.target.id === 'next') {
    if (currentLinkId < updatedPaginationValueArray[updatedPaginationValueArray.length - 1]) {
      updatedPagination[currentLinkId].active = false;
      updatedPagination[currentLinkId+1].active = true;
    };
  }
  else {
    updatedPagination[currentLinkId].active = false;
    updatedPagination[Number(event.target.id)].active = true;
  };
  this.setState({links: updatedPagination});
}
```
Finally call the component

```
<Pagination links={this.state.links} pageChange={this.pageChangedHandler} position={'right'}  perPage={this.state.perPageData} currentPage= {this.state.currentPageData} total={this.state.totalData}/>
```
