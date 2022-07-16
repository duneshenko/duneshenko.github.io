export const keyToCmp = (key, reverse = false, nullsLast = false) => {
  return (obj1, obj2) => {
    let value1 = key(obj1)
    let value2 = key(obj2)

    if (value1 === value2) return 0

    if (reverse) {
      [value1, value2] = [value2, value1]
    }

    if (value1 === null || value1 === undefined) {
      return nullsLast ? 1 : -1
    }

    if (value2 === null || value2 === undefined) {
      return nullsLast ? -1 : 1
    }

    return value1 > value2 ? 1 : -1
  }
}
