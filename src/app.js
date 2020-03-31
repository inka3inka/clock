import '../styles/main.scss';
import {Clock} from './clock';
import {Data} from './date';
import {consts} from './consts';
import {localDate} from './state';
import {monthAsString, dayOfWeekAsString, changeCheckbox, showHide} from "./utils";

  /*Create new Clock and Date object */

  const date = new Data(localDate);

  /*Find elements */
  const showTimeHour = document.querySelector(".hour"); /*clock elements */
  const showTimeMinutes = document.querySelector(".minutes");
  const showTimeSeconds = document.querySelector(".seconds");
  const showTimeMilliseconds = document.querySelector(".milliseconds");
  const showDay = document.querySelector(".day"); /*date elements */
  const showDate = document.querySelector(".date");
  const checkboxes = document.querySelectorAll("[type=checkbox]"); /*menu elements */
  const checkboxesArray = [...checkboxes];

  let clock;

  /*Basic settings */
setInterval(function(){
  clock = new Clock(localDate);
  console.log(clock);
  showTimeHour.innerText = `${clock.hour}`;
  showTimeMinutes.innerText = clock.minutes < 10 ? `:0${clock.minutes}` : `:${clock.minutes}`;
  showTimeSeconds.innerText = clock.seconds < 10 ? `:0${clock.seconds}` : `:${clock.seconds}`;
  showTimeMilliseconds.innerText = `:${clock.milliseconds}`;
}, 10);

  showDay.innerText = dayOfWeekAsString(consts.days, date.day);
  showDate.innerText = `${date.date} ${monthAsString(consts.months, date.month)} ${date.year}`;

/*Add event to menu elements */
[...checkboxes].map(elm => elm.addEventListener("click", changeCheckbox));

  /*Hours*/
  checkboxesArray[0].addEventListener("change", () => {
    checkboxesArray[0].classList.contains("checked") && clock.hour > 12
      ? showTimeHour.innerText = `${clock.hour-12}`
      : showTimeHour.innerText = `${clock.hour}`
  });

/*Show / hide element */
  /*Minutes*/
  showHide(checkboxesArray[1], showTimeMinutes);

  /*Seconds*/
  showHide(checkboxesArray[2], showTimeSeconds);

  /*Milliseconds*/
  showHide(checkboxesArray[3], showTimeMilliseconds);










