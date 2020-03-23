
export function Clock(date) {
  this.hour = date.getHours();
  this.minutes = date.getMinutes();
  this.seconds = date.getSeconds();
  this.milliseconds = date.getMilliseconds();
  this.sayTime = function(){
    console.log(`Jest godzina ${this.hour}:${this.minutes}:${this.seconds}:${this.milliseconds}`)
  }
}


