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

/*Function - change mode */
export function checkMode(event) {
  event.target.classList.toggle("checked");
}

export function changeMode(button, element1, element2) {
  button.addEventListener("click", () => {
    if (button.classList.contains("checked")) {
      element1.style.display = "block";
      element2.style.display = "none";
      button.innerText = "Analog clock"
    } else {
      element1.style.display = "none";
      element2.style.display = "block";
      button.innerText = "Digital clock"
    }
  })
}