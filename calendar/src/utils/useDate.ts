import { useState } from "react";

export const useDate = (d: Date = new Date(), onChange: (d: Date) => void) => {
  const [date, setDate] = useState(d);
  const updateDate = (d: Date) => {
    setDate(d);
    onChange(d);
  } 
  const nextMonth = () => updateDate(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()));
  const prevMonth = () => updateDate(new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()));

  return {
    date,
    nextMonth,
    prevMonth,
  };
};
