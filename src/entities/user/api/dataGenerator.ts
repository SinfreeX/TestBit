import {getRandomInt} from "../../../shared/utils/getRandomInt";

const names = [
  'Александр', 'Дмитрий', 'Максим', 'Сергей', 'Андрей',
  'Алексей', 'Артем', 'Илья', 'Кирилл', 'Михаил',
  'Никита', 'Матвей', 'Роман', 'Егор', 'Артур',
  'Тимофей', 'Иван', 'Владимир', 'Павел', 'Руслан',
  'Евгений', 'Денис', 'Владислав', 'Георгий', 'Виктор',
  'Степан', 'Николай', 'Олег', 'Анатолий', 'Вячеслав'
];



/** Генератор моковых emails */
const generateRandomEmail = () => {
  const domains = ['example.com', 'test.org', 'email.net', 'random.co'];
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const usernameLength = getRandomInt(5, 10);
  let username = '';
  for (let i = 0; i < usernameLength; i++) {
    username += chars[getRandomInt(0, chars.length - 1)];
  }
  const domain = domains[getRandomInt(0, domains.length - 1)];
  return `${username}@${domain}`
}

/** Генератор моковых данных для таблицы пользователей */
export const userTableDataGenerator = (maxRows = 10) => {
  let data = []
  while(data.length < maxRows) {
    data.push({
      id: `id-${data.length}`,
      email: generateRandomEmail(),
      name: names[getRandomInt(0, names.length - 1)],
      role: 'USER',
      subscribe: 'Free',
      tokens: `${getRandomInt(0, 1000000)} TKN`,
    })
  }
  return data
}