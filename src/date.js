export function Data(date) {
  this.year = date.getFullYear();
  this.month = date.getMonth();
  this.date = date.getDate();
  this.day = date.getDay();
}