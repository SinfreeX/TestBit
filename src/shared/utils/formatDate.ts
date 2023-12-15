
export const formatDate = (date: Date) => {
  const twoDigits = (num: number) => num.toString().padStart(2, '0');

  const day = twoDigits(date.getDate());
  const month = twoDigits(date.getMonth() + 1);
  const year = date.getFullYear().toString().slice(2);

  const hours = twoDigits(date.getHours());
  const minutes = twoDigits(date.getMinutes());
  const seconds = twoDigits(date.getSeconds());

  return `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
}