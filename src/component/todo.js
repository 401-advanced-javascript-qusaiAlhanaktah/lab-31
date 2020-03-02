import React, {useState, useEffect} from 'react';

function ToDo(){
  const [toDoList, setTodoList] = useState([]);
  const [toDo, setTodo] = useState('');
  const [difficulty, setDifficulty] = useState(0);
  const [status, setStatus] = useState('incomplete');
  const handelSubmit = e=>{
    e.preventDefault();
    e.target.reset();
    setTodoList([...toDoList, [toDo, difficulty, status]]);
  };
  const addTodo = e =>{
    setTodo(e.target.value);
  };
  const addDifficulty = e =>{
    if (e.target.value < 0 || e.target.value > 5) return;
    else setDifficulty(e.target.value);
  };

  const completeToDo = e =>{
    e.preventDefault();
    setStatus('complete');
    console.log('e.target.value',typeof(e.target.value));
    return (
      <div>hi {e.target.value}</div>
    );

  };
  useEffect(() => {
    if (toDoList.length >= 1 ) { document.title = `${status}!`;}
    else document.title = `There Is No List!`;
  }, [toDoList]);
  return(
    <main>
      <form onSubmit={handelSubmit}>
        <input type='text' onChange={addTodo} placeholder='Type your list' required/>
        <input type='number' onChange={addDifficulty} placeholder = 'Difficulty (1 --> 5)' required/>
        <button>Assigned To</button>
      </form>
      <div >
        {
          toDoList.map((toDo,idx)=>{
            return <li key={idx}>{toDo}
              <button value={toDo} onClick={completeToDo}>completed</button>
            </li>;
          })

        }
      </div>
    </main>
  );
}

export default ToDo;