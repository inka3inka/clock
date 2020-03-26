import '../styles/main.scss';
import {Clock} from './clock';
import {Date} from './date';
import {consts} from './consts';
import {monthAsString, dayOfWeekAsString, changeCheckbox} from "./utils";

/*Create new Clock and Date object */
const clock = new Clock(consts.localDate);
clock.sayTime();
const date = new Date(consts.localDate);
date.sayDate();

/*Find elements */
const showTime = document.querySelector(".clock");
const showDay = document.querySelector(".day");
const showDate = document.querySelector(".date");

const checkboxes = document.querySelectorAll("[type=checkbox]");

  /*Set elements' innerText */
showTime.innerText = `${clock.hour}:${clock.minutes}`;
showDay.innerText = dayOfWeekAsString(consts.days, date.day);
showDate.innerText = `${date.date} ${monthAsString(consts.months, date.month)} ${date.year}`;

/*Add event on menu elements */
[...checkboxes].map(elm => elm.addEventListener("click", changeCheckbox));
