import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from 'redux/constans';
import { getStatusFilters } from 'redux/selectors';
import { setStatusFilter } from 'redux/filterSlice';

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilters);
  const dispatch = useDispatch();

  const handleChangeFilter = value => dispatch(setStatusFilter(value));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleChangeFilter(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleChangeFilter(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleChangeFilter(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
