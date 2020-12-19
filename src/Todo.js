import React,{useState} from 'react'
import './Todo.css';
import {Avatar,Button, List,ListItem,ListItemAvatar,ListItemText, Modal} from '@material-ui/core'
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {makeStyles} from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';


function Todo(props) {
  
  const [open,setOpen]=useState(false);
  const [input,setInput]=useState();
  const handleOpen=()=>{
      setOpen(true);

    };
    
    const updateTodo=()=>{
      db.collection('todos').doc(props.todo.id).set({
        todo:input
      },{merge: true})
      setOpen(false);
    }


    return (
            <>
            <Modal class="modal"
            open={open}
            onClose={e=>setOpen(false)}
            
            >
              <div class="update">
                
                <input placeholder={props.todo.todo} value={input} onChange={event=>setInput(event.target.value)}/>
                <Button class="button" onClick={updateTodo} variant="contained" color="primary">
                  Update Todo
                </Button>
              </div>
            </Modal>
            <div class="list">
            <List className="todo__list">
              <ListItem>
                  
                <ListItemText primary={props.todo.todo}  />
              </ListItem>
              <EditIcon onClick={e=>setOpen(true)}>
                      Edit 
              </EditIcon>
              <DeleteForeverIcon onClick={event=>
                db.collection('todos').doc(props.todo.id).delete()}> X Delete Me 
              </DeleteForeverIcon>
            </List>
            </div>
        </>
    )
}

export default Todo
