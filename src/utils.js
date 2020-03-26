/* Smart functions */

/*Function converter month to string */
export function monthAsString(month,idx){
  return month[idx];
}

/*Function converter day of week to string */
export function dayOfWeekAsString(day,idx){
  return day[idx];
}

/*Function for change checkbox */

export function changeCheckbox(event){
  event.target.classList.toggle("checked");
  event.target.classList.contains("checked") ? event.target.nextElementSibling.setAttribute("src", "./assets/checkbox_checked.ico") : event.target.nextElementSibling.setAttribute("src", "./assets/checkbox_unchecked.ico")
}

/*Function - show menu element */

