export const fillPadding = (l: number) => {
  const n = 7 - (l % 7);
  return (new Array(n)).fill(0);
}

export const getCalendar = (year: number, m: number): number[] => {
  const month = m - 1;
  let max = (new Date(year, m, 0)).getDate();
  let firstDay = (new Date(year, month, 1)).getDay();
  let calendar = new Array(7).fill(0);
  for (let i = 1; i < max + 1; i++) {
    calendar[firstDay] = i;
    firstDay += 1;
  }
  if (calendar.length % 7) {
    calendar = calendar.concat(fillPadding(calendar.length));
  }

  return calendar;
};

const ISO_DATE = (new Date()).toISOString().replace('-0', '-');
export const isToday = (year: number, month: number, day: number) => (!!~ISO_DATE.indexOf(`${year}-${month}-${day}T`));