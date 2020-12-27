const dayjs = require("dayjs")

export const formatDate = str => {
  const dateStr = str.replace(/\sUTC/g, '');
  return dayjs(dateStr).format("YYYY.MM.DD")
}
