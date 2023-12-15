import {getRandomBoolean} from "../../../shared/utils/getRandomBoolean";
import {getRandomInt} from "../../../shared/utils/getRandomInt";
import {getRandomDate} from "../../../shared/utils/getRandomDate";
import {formatDate} from "../../../shared/utils/formatDate";

export const transactionsTableDataGenerator = (maxRows = 7) => {
  let data = []
  while (data.length < maxRows) {
    data.push({
      id: `id-${data.length}`,
      type: getRandomBoolean() ? 'Списание' : 'Пополнение',
      sum: `${getRandomInt(10, 100000)} BTKN`,
      date: formatDate(getRandomDate())
    })
  }
  return data
}