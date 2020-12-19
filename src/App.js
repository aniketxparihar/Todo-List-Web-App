import React,{useState,useEffect}from 'react';
import Todo from './Todo';
import { Button, FormControl,Input,InputLabel} from '@material-ui/core';
import './App.css';
import db from './firebase.js';
import firebase  from 'firebase';
import { purple } from '@material-ui/core/colors';
function App() {
  const [input,setInput]=useState('');
  const [todos,setTodos]=useState([]);

  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id,todo: doc.data().todo})))
    }) 
    }, []);

  const addTodo=(event)=>{
    //this will fire off when we click the button
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos,input]);
    setInput('');
  }
  
  return (
    <div className="App">
      <h1 class="heading">DEV LIST💻</h1>
      <form>
         <FormControl>
           <InputLabel>Write here✔️</InputLabel>
           <Input value={input} onChange={event => setInput(event.target.value)}/>
          </FormControl>
         <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add 
         </Button>
      </form>
      
      <ul >
        {todos.map(todo => (
          <Todo todo={todo}/>
        
        ))}
      </ul>
    </div>
  );
}

export default App;
