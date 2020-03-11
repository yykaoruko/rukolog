const dayjs = require("dayjs")

export const formatDate = str => {
  return dayjs(str).format("YYYY-MM-DD")
}
