import { useEffect } from 'react';

import { useAppDispatch } from '../hook/hook.ts';
import { useCustomSelector } from '../redux/selectors.ts';
import { Layout } from '../components/Layout/Layout.tsx';
import { AppBar } from '../components/AppBar/AppBar';
import { TaskForm } from '../components/TaskForm/TaskForm';
import { TaskList } from '../components/TaskList/TaskList';
import { fetchTasks } from '../redux/operations';

export const App = () => {
  const dispatch = useAppDispatch();
  const { getIsLoading: isLoading, getError: error } = useCustomSelector();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </Layout>
  );
};
