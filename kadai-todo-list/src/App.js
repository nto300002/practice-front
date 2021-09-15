import React,{useState, useMemo} from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const status = [
    { id: 1,title: '未着手'},
    {id: 2,title: '進行中'},
    {id: 3,title: '完了'}
]
  const task = [
  { id:uuidv4() , title:'title', status:1, text:''}
]

const handleChange = (e) => setInputValue(e.target.value);
const [inputValue, setInputValue] = useState('');
  const onClickDelete = (index) => {
    const newTodos = [...tasks];
    newTodos.splice(index, 1);
    setTasks(newTodos);
  };


const handleAdd = title =>{
  setTasks([...tasks,{id:uuidv4(),title,status:1,text:'' }])
}
const handleIdIncrease =(index)=>{
  const addId=[...tasks];
  addId[index].id++
  setTasks(addId);
}

  const [tasks, setTasks] = useState(task);
  const [statuses, setStatus] = useState(status);
  
  const ChangeStatuses = () => {
    const taskStatus = task.status++
  }

  const [filterQuery, setFilterQuery] = useState({});



  const filteredTask = useMemo(() => {
    let tmpTasks = tasks;
    tmpTasks = tmpTasks.filter(row => {

      // カテゴリーで絞り込み
      if (
          filterQuery.status_id &&
          row.status !== parseInt(filterQuery.status_id)
      ) {
          return false;
      }
      return row;
  });
  return tmpTasks;
  }, [filterQuery, tasks]);


  

  const handleFilter = e => {
    const { name, value } = e.target;
    setFilterQuery({ ...filterQuery, [name]: value });  
};


  return (                
  <div className="selectbox">
  
  <select
      name="status_id"
      value={filterQuery.status_id}
      onChange={handleFilter}
  >
      <option value="">全て表示</option>
      {
          statuses.map((item) => {
              return (
                <>
                  <option
                      key={item.id}
                      value={item.id}>
                      {item.title}
                  </option>
                  

                </>
              );
          })
      }
  </select>
      <Input onAdd={handleAdd} />
      {
        filteredTask.map((task) => {
          return (
            <ul key={task.id}>
              <li>{task.title}</li>
              <span>               
                {task.status
                    ? statuses.find((c) => c.id === task.status).title
                    : ""}
              </span>
              <button onClick={ ()=> onClickDelete()}>削除</button>
            </ul>
          )
        })
      }
</div>

)

}

function Input({onAdd}){
  const [title, setTitle] =useState('');
  const [id, setId] =useState(0);
  const handleChange = e => setTitle(e.target.value);
  
  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <div className="panel-block">
      <input
        class="input"
        type="text"
        placeholder="Enter to add"
        value={title}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}






export default App

