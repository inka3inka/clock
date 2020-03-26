import '../styles/main.scss';
import {Clock} from './clock';
import {Data} from './date';
import {consts} from './consts';
import {monthAsString, dayOfWeekAsString, changeCheckbox, changeTimeMode} from "./utils";

  /*Create new Clock and Date object */

const clock = new Clock(consts.localDate);
const date = new Data(consts.localDate);

  /*Find elements */
  const showTimeHour = document.querySelector(".hour"); /*clock elements */
  const showTimeMinutes = document.querySelector(".minutes");
  const showTimeSeconds = document.querySelector(".seconds");
  const showTimeMilliseconds = document.querySelector(".milliseconds");
  const showDay = document.querySelector(".day"); /*date elements */
  const showDate = document.querySelector(".date");
  const checkboxes = document.querySelectorAll("[type=checkbox]"); /*menu elements */
  const checkboxesArray = [...checkboxes];

  /*Basic settings */
  showTimeHour.innerText = `${clock.hour}`;
  showTimeMinutes.innerText = `:${clock.minutes}`;
  showTimeSeconds.innerText = `:${clock.seconds}`;
  showTimeMilliseconds.innerText = `:${clock.milliseconds}`;
  showDay.innerText = dayOfWeekAsString(consts.days, date.day);
  showDate.innerText = `${date.date} ${monthAsString(consts.months, date.month)} ${date.year}`;

  /*Set elements' innerText */
  /*Hours*/
  checkboxesArray[0].addEventListener("change", () => {
    checkboxesArray[0].classList.contains("checked") && clock.hour > 12
      ? showTimeHour.innerText = `${clock.hour-12}`
      : showTimeHour.innerText = `${clock.hour}`
  });
  /*Minutes*/
  checkboxesArray[1].addEventListener("change", () => {
    checkboxesArray[1].classList.contains("checked")
      ? showTimeMinutes.innerText = `:${clock.minutes}`
      : showTimeMinutes.innerText = ""
  });
  /*Seconds*/
  checkboxesArray[2].addEventListener("change", () => {
    checkboxesArray[2].classList.contains("checked")
      ? showTimeSeconds.innerText = `:${clock.seconds}`
      : showTimeSeconds.innerText = ""
  });
  /*Milliseconds*/
  checkboxesArray[3].addEventListener("change", () => {
    checkboxesArray[3].classList.contains("checked")
      ? showTimeMilliseconds.innerText = `:${clock.milliseconds}`
      : showTimeMilliseconds.innerText = ""
  });


  /*Add event to menu elements */
  [...checkboxes].map(elm => elm.addEventListener("click", changeCheckbox));







