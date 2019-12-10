import React from 'react';
import { Info } from "./Info";
import { Home } from "./Home";
import { Header } from "./Header";
import { Contact } from "./Contact";
import { Todos } from "./Todos";
import { Reminders } from "./Reminders";

import { Route, Switch } from "react-router-dom";


export class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      days: [
        "monday",
        "tuesday",
        "wednesday"
      ],
      person: {
        name: "Laki",
        e_mail: "laki@yahoo.com"
      },
      todos: [ ///niza od stringovi
        {
          id: 1,
          todo: "Drink water",
          done: false
        },
        {
          id: 2,
          todo: "Learn React",
          done: false
        },
        {
          id: 3,
          todo: "Walk the dog",
          done: false
        }
        
      ],
      todoItem: ""
    }
  }



///so tri tocki vleguva i pravi kopija od prevState pa vleguva vo days (niza) i od desna strana  sto da dodademe
  AddThursday = () => {
    this.setState(prevState =>({
      days: [...prevState.days, "Thursday", "Friday"]
    }));
  }
///email desno e toa vo zagradi i od person e levo
  ChangeEmail = (email, name) => {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        e_mail: email,
        name: name
      }
    }))
  }
///"e" e event parametar skrateno
  TodoChangeHandler = (e) => {
    this.setState({
      todoItem: e.target.value
    });
  }

  AddTodo = (todo_item) =>{
    let item = {
      id: this.state.todos.length + 1,
      todo: todo_item
    }

    this.setState(prevState => ({
      todos: [
        item,
        ...prevState.todos
      ],
      todoItem: ""
    }))
  }

  MarkTodoAsDone = (to_do) => {
    this.setState(prevState => ({
      todos: [
        ...prevState.todos.map(t => 
          (
            t.id === to_do.id 
            ?
            {id: t.id, todo: t.todo, done: !t.done}
            :
            t
          )
          )
      ]
    }));
  }

    render() {
      console.log("STATEEEE =>", this.state);
      return(
        
        <div id="app">
          <Header />

            <Switch>
              
              <Route exact path="/" component={Home} />
              <Route path="/info" component={Info} />
              <Route path="/contact" component={Contact} />
              

            </Switch>
              
            
              <span>
              <input 
              placeholder="Your TO DO for today...."
              value={this.state.todoItem}
              onChange={this.TodoChangeHandler}
              />
              &nbsp; 
              <button onClick={() => this.AddTodo(this.state.todoItem)}>
                + ADD TO DO
              </button>
              <Reminders />
                  <switch>
                  <Route path="/reminders" component={Reminders} />
                  </switch>
            </span>
             
              <hr/>
              <Todos 
              todolist={this.state.todos}
              markAsDone={this.MarkTodoAsDone}
              />

              <div>
            
            </div>

            
            
            
          </div>
          
        
        )
      }
    }