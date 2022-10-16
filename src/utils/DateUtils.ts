export function extractDateFromDateField(date: Date): String {
  return [date.getDate(), date.getMonth(), date.getFullYear()].join('-');
}

export function extractTimeFromDateField(date: Date): String {
  return [date.getHours(), date.getMinutes()].join(':');
}
