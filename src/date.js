export function Date(date) {
  this.year = date.getFullYear();
  this.month = date.getMonth();
  this.date = date.getDate();
  this.day = date.getDay();
  this.sayDate = function(){
    console.log(`Dzisiaj jest ${this.day}.${this.date}.${this.month}.${this.year}`)
  }
}