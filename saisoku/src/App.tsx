import {List} from '@material-ui/core';
import {FormControl, TextField} from '@material-ui/core';
import React,{useState, useEffect} from 'react';
import {db} from './firebase'


const App: React.FC = () => {
  const [tasks, setTasks] = useState([{ id:'', title:'' }]);
  const [input, setInput] = useState("");
  useEffect(() => {
    const unSub = db.collection('tasks').onSnapshot((snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title 
        }))
      );
    });
    
    return () => unSub();
  },[]);
  return (
    <>
    <h1>react firebase</h1>
    <FormControl>
      <TextField 
      label='new task'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />
    </FormControl>
    <div className="App">
      {tasks.map((task)=>(<h3 key={task.title}>{task.title}</h3>)
      )}
    </div>
    </>
  );
}

export default App;
