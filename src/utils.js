/* Smart functions */

/*Function converter month to string */

export function monthAsString(month, idx){
  return month[idx];
}

/*Function converter day of week to string */
export function dayOfWeekAsString(day,idx){
  return day[idx];
}

/*Function for change checkbox */

export function changeCheckbox(event){
  event.target.classList.toggle("checked");
  event.target.classList.contains("checked")
    ? event.target.nextElementSibling.setAttribute("src", "./assets/checkbox_checked.ico")
    : event.target.nextElementSibling.setAttribute("src", "./assets/checkbox_unchecked.ico")
}



/*Function for show/hide element */

export function showHide(arrayElement, element) {
  arrayElement.addEventListener("change", () => {
    arrayElement.classList.contains("checked")
      ? element.style.display = "flex"
      : element.style.display = "none"
  });
}


/*Function - show menu element */



