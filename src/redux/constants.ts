interface IStatusFilter {
  all: string;
  active: string;
  completed: string;
}

export const statusFilters: IStatusFilter = Object.freeze({
  all: 'all',
  active: 'active',
  completed: 'completed',
});
