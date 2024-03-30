import { format } from "date-fns";

export function getFormattedDate(date: number) {
  const formattedDate = format(date, "dd MMMM, yyyy");

  return formattedDate;
}