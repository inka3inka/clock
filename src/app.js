import '../styles/main.scss';
import {Clock} from './clock';
import {Date} from './date';
import {consts} from './consts';

const clock = new Clock(consts.localDate);
clock.sayTime();
const date = new Date(consts.localDate);
date.sayDate();

const clockPlace = document.querySelector("section div");


