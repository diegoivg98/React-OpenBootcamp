import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";
import "./TaskList.css";

function TaskList() {
  const { tasks, addTask, removeTask, filterTask } = useContext(TaskContext);

  /**
   * The function takes an event as an argument, prevents the default action of the event, and then
   * adds a task to the list of tasks.
   */
  const handleAddTask = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    if (name.trim()) {
      addTask({ id: Date.now(), name });
      event.target.elements.name.value = "";
    }
  };

  /**
   * The handleRemoveTask function takes a task as an argument and calls the removeTask function with
   * the task as an argument.
   */
  const handleRemoveTask = (task) => {
    removeTask(task);
  };

  /**
   * When the user types in the input field, the value of the input field is passed to the filterTask
   * function.
   */
  const handleFilterTask = (event) => {
    const query = event.target.value;
    filterTask(query);
  };

  return (
    <div>
      <form onSubmit={handleAddTask} className="task-form">
        <input
          className="task-form__input"
          type="text"
          name="name"
          placeholder="Ingresa una descripción"
        />
        <button type="submit" className="task-form__button">
          Agregar tarea
        </button>
      </form>
      <input
        className="task-list__input"
        type="text"
        onChange={handleFilterTask}
        placeholder="filtrar por..."
      />
      <ul className="task-list__tasks">
        {tasks.map((task) => (
          <li className="task-list__task" key={task.id}>
            {task.name}
            <button
              className="task-list__task-buttons"
              onClick={() => handleRemoveTask(task)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
