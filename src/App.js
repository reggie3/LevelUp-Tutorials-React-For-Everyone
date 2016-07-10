import React from 'react';
import {render} from 'react-dom';
import ContactsList from './ContactsList';

let contacts =[
     {id: 0, name: "reggie",    phone: '231 222 9999'},
     {id: 1, name: "mon",       phone: '575 222 4525'},
     {id: 2, name: "angie",     phone: '575 333 9999'},
     {id: 3, name: "sarah",     phone: '575 222 7777'},
     {id: 4, name: "jordan",    phone: '575 444 9999'},
     {id: 5, name: "bob",       phone: '333 222 9999'}
];
class App extends React.Component{
     render(){

          return (
               <div>
                    <h1>Contacts List</h1>
                    <ContactsList contacts={this.props.contacts}/>
               </div>
          )
     }
}

render(<App contacts={contacts}/>, document.getElementById('app'));
