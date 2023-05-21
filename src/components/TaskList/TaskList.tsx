import { useCustomSelector } from '../../redux/selectors';
import { Task } from '../Task/Task';
import { statusFilters } from '../../redux/constants';
import css from './TaskList.module.css';

interface ITasks {
  id: string;
  text: string;
  createdAt: number;
  completed: boolean;
}

const getVisibleTasks = (tasks: ITasks[], statusFilter: string) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList: React.FC = () => {
  const { getTasks: tasks, getStatusFilter: statusFilter } =
    useCustomSelector();

  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
