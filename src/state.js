export let localDate;

setInterval(function(){
  localDate = new Date().getSeconds()
},1000)

