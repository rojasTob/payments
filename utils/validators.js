import { transformToMinutes } from './timeOperations.js';
import { daysAbbreviation } from '../config/constants.js';


export function isValidDay(day){
    return daysAbbreviation.includes(day);
}

export function isValidTimeRange(start, end){
    let startTimeInMinutes = transformToMinutes(start);
    let endTimeInMinutes = transformToMinutes(end);

    return endTimeInMinutes > startTimeInMinutes;
}
