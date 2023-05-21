import { useAppSelector } from '../hook/hook';

export const useCustomSelector = () => {
  return {
    getTasks: useAppSelector(state => state.tasks.items),
    getStatusFilter: useAppSelector(state => state.filters.status),
    getIsLoading: useAppSelector(state => state.tasks.isLoading),
    getError: useAppSelector(state => state.tasks.error),
  };
};
