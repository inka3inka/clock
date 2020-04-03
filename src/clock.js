export function Clock(date) {
  this.hour = date.getHours();
  this.minutes = date.getMinutes();
  this.seconds = date.getSeconds();
  this.milliseconds = date.getMilliseconds();
}


