const getNovFirst = (year: number = new Date().getFullYear()): Date => new Date(year, 10, 1);

const getFirstThursday = (year: number = new Date().getFullYear()): Date => {
  const novFirst = getNovFirst(year);
  const dayOfWeek = novFirst.getDay();
  const daysToAdd = dayOfWeek <= 4 ? 4 - dayOfWeek : 11 - dayOfWeek;
  return new Date(novFirst.getFullYear(), novFirst.getMonth(), novFirst.getDate() + daysToAdd);
};

export const thanksgiving = (year: number = new Date().getFullYear()): Date => {
  const firstThursday = getFirstThursday(year);
  return new Date(firstThursday.getFullYear(), firstThursday.getMonth(), firstThursday.getDate() + 21);
};

export const blackFriday = (year: number = new Date().getFullYear()): Date => {
  const thanksgivingDate = thanksgiving(year);
  return new Date(thanksgivingDate.getFullYear(), thanksgivingDate.getMonth(), thanksgivingDate.getDate() + 1);
};

export const cyberMonday = (year: number = new Date().getFullYear()): Date => {
  const thanksgivingDate = thanksgiving(year);
  return new Date(thanksgivingDate.getFullYear(), thanksgivingDate.getMonth(), thanksgivingDate.getDate() + 4);
};

const daysUntil = (eventDate: Date): number => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);

  return Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
};

export const daysUntilThanksgiving = (year: number = new Date().getFullYear()): number => {
  return daysUntil(thanksgiving(year));
};

export const daysUntilBlackFriday = (year: number = new Date().getFullYear()): number => {
  return daysUntil(blackFriday(year));
};

export const daysUntilCyberMonday = (year: number = new Date().getFullYear()): number => {
  return daysUntil(cyberMonday(year));
};
