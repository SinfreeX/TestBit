export const getRandomDate = (start = new Date(2022, 0, 1), end = new Date(2023, 11, 25)) =>
 new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
