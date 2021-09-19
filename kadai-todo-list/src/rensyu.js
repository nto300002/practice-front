import React, { useState, useMemo } from "react";

export default function App() {
  const initialState = {
    tasks: [
      {
        id: 1,
        title: "title",
        category: 1,
        text: ""
      }
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
        id: 3,
        title: "完了"
      }
    ]
  };
  const [tasks, setTasks] = useState(initialState.tasks);
  const [categories, setCategories] = useState(initialState.categories);
  const defaultItem = () => ({ id: 1, title: item, category: 1, text: "" });
  const [item, setItem] = useState("");

  const handleNewitem = (e) => setItem(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item === "") return;
    setTasks((tasks) => [...tasks, defaultItem()]);
    setItem("");
  };

  const handleRemoveItem = (index) => {
    const newItems = [...tasks];
    newItems.splice(index, 1);
    setTasks(newItems);
  };

  const handleStateIncrease = (index) => {
    if (index > 3) return;
    const newTasks = [...tasks];
    newTasks[index].category++;
    setTasks(newTasks);
  };

  const [filterQuery, setFilterQuery] = useState({});

  const filteredTask = useMemo(() => {
  
    let tmpTasks = tasks;

    tmpTasks = tmpTasks.filter((row) => {
      if (
        filterQuery.category_id &&
        row.category !== parseInt(filterQuery.category_id)
      ) {
        return false;
      }
      return row;
    });

    return tmpTasks;
  }, [filterQuery, tasks]);

  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilterQuery({ ...filterQuery, [name]: value });
  };

  return (
    <div className="wrap">
      <div className="input-group">
        <form onSubmit={handleSubmit}>
          <input
            value={item}
            placeholder="Enterを押してください"
            onChange={handleNewitem}
          />
          [追加]
        </form>
      </div>
      <div className="input-group">
        <div className="selectbox"></div>
      </div>

      <table>
        <thead>
          <tr>
            <th>[タイトル]</th>
            <th>[カテゴリー]</th>
          </tr>
        </thead>

        <tbody>
          {filteredTask.map((task, index) => {
            return (
              <tr key={task.id}>
                <td>
                  {task.title}
                </td>
                <td>
                  <span onClick={() => handleStateIncrease(index)}>
                    {task.category
                      ? categories.find((c) => c.id === task.category).title
                      : ""}
                  </span>
                </td>
                <td>
                <button onClick={() => handleRemoveItem(index)}>削除</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
