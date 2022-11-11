import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/taskSlice';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => dispatch(deleteTask(task.id));
  const handleTogle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleTogle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDeleteTask}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
