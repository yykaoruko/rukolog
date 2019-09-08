import dayjs from 'dayjs';
import 'dayjs/locale/ja';
dayjs.locale('ja');

type SplitDatetimeResult = {
  year: string;
  month: string;
  date: string;
};

export const splitDatetime = (datetime: string): SplitDatetimeResult => {
  const td = dayjs(datetime);
  const result = {
    year: td.format('YY'),
    month: td.format('MM'),
    date: td.format('DD'),
  };
  return result;
};

export const formatToDatetimeAttribute = (datetime: string): string => {
  const td = dayjs(datetime);
  return td.format('YYYY-MM-DDThh:mm:ss');
};
