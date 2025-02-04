import { useAppDispatch } from '../../hook/hook';
import { useCustomSelector } from '../../redux/selectors';
import { Button } from '../Button/Button';
import { statusFilters } from '../../redux/constants';
import { setStatusFilter } from '../../redux/filtersSlice';

import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const dispatch = useAppDispatch();
  const { getStatusFilter: filter } = useCustomSelector();

  const handleFilterChange = (filter: string) => {
    dispatch(setStatusFilter(filter));
  };

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
