import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { deleteTask, toggleComlited } from 'redux/operations';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggleCompleted = () => dispatch(toggleComlited(task));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggleCompleted}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
