import { useAppDispatch } from '../../hook/hook';
import { Button } from '../Button/Button';
import { addTask } from '../../redux/operations';
import css from './TaskForm.module.css';

export const TaskForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    dispatch(addTask(form['text'].value));

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
