import { MdClose } from 'react-icons/md';

import { useAppDispatch } from '../../hook/hook';
import { deleteTask, toggleComlited } from '../../redux/operations';
import css from './Task.module.css';

interface ITaskProps {
  task: {
    id: string;
    text: string;
    createdAt: number;
    completed: boolean;
  };
}

export const Task: React.FC<ITaskProps> = ({ task }) => {
  const dispatch = useAppDispatch();
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
