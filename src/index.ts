const _nov1st = (year?: number): Date => {
  const _year = year || new Date().getFullYear();
  return new Date(_year, 10, 1);
};

const _firstThursday = (year?: number): Date => {
  const _year = year || new Date().getFullYear();
  const day = _nov1st(_year);
  const dayOfWeek = day.getDay();

  if (dayOfWeek === 4) return day;

  const daysToAdd = (4 - dayOfWeek + 7) % 7;
  day.setDate(day.getDate() + daysToAdd);
  return day;
};

export const thanksgiving = (year?: number): Date => {
  const _year = year || new Date().getFullYear();
  const date = _firstThursday(_year);
  date.setDate(date.getDate() + 21);
  return date;
};

export const blackFriday = (year?: number): Date => {
  const _year = year || new Date().getFullYear();
  const date = thanksgiving(_year);
  date.setDate(date.getDate() + 1);
  return date;
};

export const cyberMonday = (year?: number): Date => {
  const _year = year || new Date().getFullYear();
  const date = thanksgiving(_year);
  date.setDate(date.getDate() + 4);
  return date;
};
