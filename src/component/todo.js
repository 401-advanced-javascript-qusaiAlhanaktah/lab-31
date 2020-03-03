/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';

function ToDo(){
  const [toDoList, setTodoList] = useState([]);
  const [toDo, setTodo] = useState('');
  const [difficulty, setDifficulty] = useState(0);
  const [status, setStatus] = useState('incomplete');
  const [coloring, setColor] = useState('red');
  const [coloring1, setColor1] = useState('red');
  const [doneList, setDoneList] = useState([]);
  const [disable, setDisable] = useState('fixed');
  const handelSubmit = e=>{
    setDisable('fixed');
    setStatus('incomplete');
    setColor('red');
    e.preventDefault();
    e.target.reset();
    setTodoList([...toDoList, [toDo, difficulty, 'incomplete']]);
  };
  const addTodo = e =>{
    setTodo(e.target.value);
  };
  const addDifficulty = e =>{
    if (e.target.value < 0 || e.target.value > 5) return;
    else setDifficulty(e.target.value);
  };

  useEffect(() => {
    if (toDoList.length >= 1 ) { document.title = status;}
    else document.title = `There Is No List!`;
  }, [toDoList]);

  const completeTask = e =>{
    console.log(e.target.title);
    if (e.target.title === 'incomplete') {
      setDisable('none');
      e.target.title = 'complete';
      setColor1('blue');
      setDoneList([...doneList, [e.target.name, e.target.value, e.target.title]]);
      setStatus('complete');

    }
  };

  return(
    <main>
      <form onSubmit={handelSubmit}>
        <input type='text' onChange={addTodo} placeholder='Type your list' required/>
        <input type='number' onChange={addDifficulty} placeholder = 'Difficulty (1 --> 5)' required/>
        <button type='submit'>Assigned To</button>
      </form>
      {
        toDoList.map((toDo,idx)=>{
          return (
            <div>
              <li style={{display:disable, color:coloring}} key={idx}>{toDo[0]}
              </li>
              <li style={{display:disable, color:coloring}} key={idx}>{toDo[1]}
              </li>
              <li style={{display:disable, color:coloring}} key={idx}>{toDo[2]}
              </li>
              <button  style={{display:disable, color:coloring}} name={toDo[0]} value={toDo[1]} title={toDo[2]} onClick={completeTask}>completed</button>
            </div>
          );
        })
      }
      {
        doneList.map((toDo,idx)=>{
          return (
            <div>
              <li style={{color:coloring1}} key={idx}>{toDo[0]}
              </li>
              <li style={{color:coloring1}} key={idx}>{toDo[1]}
              </li>
              <li style={{color:coloring1}} key={idx}>{toDo[2]}
              </li>
            </div>
          );
        })
      }
    </main>
  );
}

export default ToDo;