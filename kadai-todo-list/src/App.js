import React, { useState, useMemo,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const initialState = {
    tasks: [
      {
        id: uuidv4(),
        title: "title",
        category: 1,
        text:''
      },
    ],
    categories: [
      {
        id: 1,
        title: "未着手"
      },
      {
        id: 2,
        title: "進行中"
      },
      {
        id:3,
        title:'完了'
      }
    ]
  };
  

  const [categories, setCategories] = useState(initialState.categories);
  const defaultItem = () => ({id:uuidv4(), title:item, category:1,text:''})
  const [item, setItem] = useState('');
  const [tasks, setTasks] = useState(initialState.tasks);

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});



  const handleNewitem = (e) => setItem(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault()
    if(item === '') return
    setTasks(tasks => [...tasks,defaultItem()])
    setItem('');
  }

  const handleRemoveItem = index =>{
    const newItems = [...tasks]
    newItems.splice(index,1)
    setTasks(newItems)
  }

	const handleStateIncrease = (index) => { 
    setTasks(tasks.map((task, i) => ({
      ...task,
      category: i !== index ? task.category : (task.category % 3 + 1)
    })));
	};

    //edit
  function handleEditInputChange(e){
    setCurrentTodo({...currentTodo, title: e.target.value});
    console.log(currentTodo);
  }

    function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleUpdateTodo(id, updatedTask) {

    const updatedItem = tasks.map((item) => {
      return item.id === id ? updatedTask : item;
    });

    setIsEditing(false);
    setTasks(updatedItem);
  }
  function handleEditClick(item) {
    // set editing to true
    setIsEditing(true);
    // set the currentTodo to the todo item that was clicked
    setCurrentTodo({ ...item });
  }

  // 検索条件
  const [filterQuery, setFilterQuery] = useState({});
  // ソート条件
  const [sort, setSort] = useState({});


  const filteredTask = useMemo(() => { //
    let tmpTasks = tasks;


    // 入力した文字は小文字にする
    const filterTitle = filterQuery.title && filterQuery.title.toLowerCase();

    // 絞り込み検索
    tmpTasks = tmpTasks.filter((row) => {
      // タイトルで絞り込み
      if (
        filterQuery.title &&
        String(row.title).toLowerCase().indexOf(filterTitle) === -1
      ) {
        return false;
      }

      // カテゴリーで絞り込み
      if (
        filterQuery.category_id &&
        row.category !== parseInt(filterQuery.category_id)
      ) {
        return false;
      }
      return row;
    });

    // ソート
    if (sort.key) {
      tmpTasks = tmpTasks.sort((a, b) => {
        a = a[sort.key];
        b = b[sort.key];
        return (a === b ? 0 : a > b ? 1 : -1) * sort.order;
      });
    }

    return tmpTasks;
  }, [filterQuery, sort, tasks]);

  // 入力した情報をfilterQueryに入れる
  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilterQuery({ ...filterQuery, [name]: value });
  };

  // 選択したカラムをSortに入れる
  const handleSort = (column) => {
    if (sort.key === column) {
      setSort({ ...sort, order: -sort.order });
    } else {
      setSort({
        key: column,
        order: 1
      });
    }
  };

  return (
    <div className="wrap">
      <div className="filter-box">
        <div className="input-group">
        <input
        type="text"
        name="title"
        className="form-input"
        placeholder="ここで検索"
        value={filterQuery.title || ""}
        onChange={handleFilter}
      />[検索]

       {isEditing ? (
                <form onSubmit={handleEditFormSubmit}>
                <h2>Edit Todo</h2>
                <label htmlFor="editTodo">Edit todo: </label>
                <input
                  name="editTodo"
                  type="text"
                  placeholder="Edit todo"
                  value={currentTodo.text}
                  onChange={handleEditInputChange}
                />
                <button type="submit">Update</button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
              </form>
      ):(
      <form onSubmit={handleSubmit}>
        <input value={item} placeholder='Enterを押してください' onChange={handleNewitem} />[追加]
      </form>
      )}

        </div>
        <div className="input-group">
          <div className="selectbox">
            <select
              name="category_id"
              value={filterQuery.category_id}
              onChange={handleFilter}
            >
              <option value="">全て表示</option>
              {categories.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
 
      <table>
        <thead>
          <tr>
          <th>SORT::</th>
            <th onClick={() => handleSort("id")}>[ID]</th>
            <th onClick={() => handleSort("category")}>[カテゴリー]</th>
          </tr>
        </thead>

        <tbody>

          {filteredTask.map((task, index) => {
            return (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td><span onClick={()=>handleStateIncrease(index)} >
                  {task.category
                    ? categories.find((c) => c.id === task.category).title
                    : ""}</span>
                </td>
                <td><button onClick={() => handleEditClick(item)}>Edit</button></td>
                <td><button onClick={()=> handleRemoveItem(index)}>削除</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};


