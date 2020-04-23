import '../styles/main.scss';
import {Clock} from './clock';
import {Data} from './date';
import {consts} from './consts';
import {localDate} from './state';
import {monthAsString, dayOfWeekAsString, changeCheckbox, showHide} from "./utils";

  /*Create new Clock and Date object */

  const date = new Data(localDate);

  /*Find elements */ /*View */
  const showTimeHour24 = document.querySelector(".hour-24"); /*clock elements */
  const showTimeHour12 = document.querySelector(".hour-12");
  const showTimeMinutes = document.querySelector(".minutes");
  const showTimeSeconds = document.querySelector(".seconds");
  const showTimeMilliseconds = document.querySelector(".milliseconds");
  const dateContainer = document.querySelector(".date-container"); /*date elements */
  const showDay = document.querySelector(".day");
  const showDate = document.querySelector(".date");
  const menu = document.querySelector(".menu"); /*menu */
  const checkboxes = document.querySelectorAll("[type=checkbox]"); /*menu elements */
  const checkboxesArray = [...checkboxes];

  let clock;

  /*Basic settings */ /*View */
setInterval(function(){
  clock = new Clock(localDate);
  console.log(clock);
  showTimeHour24.innerText = clock.hour < 10 ? `0${clock.hour}` : `${clock.hour}`;
  showTimeHour12.innerText = clock.hour < 21 ? `0${clock.hour % 12}` : `${clock.hour % 12}`;
  showTimeMinutes.innerText = clock.minutes < 10 ? `:0${clock.minutes}` : `:${clock.minutes}`;
  showTimeSeconds.innerText = clock.seconds < 10 ? `:0${clock.seconds}` : `:${clock.seconds}`;
  showTimeMilliseconds.innerText = `:${clock.milliseconds}`;
}, 10);

  showDay.innerText = dayOfWeekAsString(consts.days, date.day);
  showDate.innerText = `${date.date} ${monthAsString(consts.months, date.month)} ${date.year}`;

/*Add event to menu elements */
[...checkboxes].map(elm => elm.addEventListener("click", changeCheckbox));


/*Show / hide element */

  /*Hours' mode */

  checkboxesArray[0].addEventListener("change", () => {
    checkboxesArray[0].classList.contains("checked")
        ? showTimeHour24.style.display = "none"
        : showTimeHour24.style.display = "flex"
    });

  showHide(checkboxesArray[0], showTimeHour12);

  /*Minutes*/
  showHide(checkboxesArray[1], showTimeMinutes);

  /*Seconds*/
  showHide(checkboxesArray[2], showTimeSeconds);

  /*Milliseconds*/
  showHide(checkboxesArray[3], showTimeMilliseconds);

  /*Date*/
  showHide(checkboxesArray[4], dateContainer);

  /*Menu*/
  menu.parentElement.addEventListener("click", () => {
    menu.classList.toggle("hidden")
  });










