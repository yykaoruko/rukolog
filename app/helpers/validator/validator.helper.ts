import * as reg from '@/constants/regex';
export const isLogDate = (value: string): boolean => {
  return reg.logDate.test(value);
};
