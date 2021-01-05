
import React from 'react';
import TaskListItem from '../TascListItem/TaskListItem';
import './TaskList.css';

const TaskList = ({ tasks, onRemoveTask }) => (
  <ul className='TaskList'>
    {tasks.map(({ id, name,number}) => (
      <TaskListItem
        key={id}
        name={name}
        number={number}
     
        onRemove={() => onRemoveTask(id)}
       
      />
    ))}
  </ul>
);

export default TaskList;