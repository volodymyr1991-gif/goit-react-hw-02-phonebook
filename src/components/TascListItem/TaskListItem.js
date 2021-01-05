import React from 'react';
import '../TaskList/TaskList.css';

const TaskListItem = ({number, name, onRemove }) => {
  

  

  return (
    <li className='TaskList-item '>
      <p className="TaskList-text">{name}: {number}.</p>
      
      

      {/* <label>
        <input type="checkbox" checked={completed} onChange={onUpdate} />
        Completed
      </label> */}

      <section className="TaskList-actions">
        <button type="button"  className="TaskList-button" onClick={onRemove}>
          Удалить
        </button>
      </section>
    </li>
  );
};

export default TaskListItem;