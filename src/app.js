import '../styles/main.scss';
import {Clock} from './clock';
import {Date} from './date';
import {consts} from './consts';

const clock = new Clock(consts.localDate);
clock.sayTime();
const date = new Date(consts.localDate);
date.sayDate();

const showTime = document.querySelector(".clock");
const showDay = document.querySelector(".day");
const showDate = document.querySelector(".date");

showTime.innerText = `${clock.hour}:${clock.minutes}`;
showDay.innerText = date.day;
showDate.innerText = `${date.date} ${date.month} ${date.year}`;