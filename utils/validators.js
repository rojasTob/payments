import { transformToMinutes } from './timeOperations.js';

const daysAbbreviation = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

export function isValidDay(day){
    return daysAbbreviation.includes(day);
}

export function isValidTimeRange(start, end){
    let startTimeInMinutes = transformToMinutes(start);
    let endTimeInMinutes = transformToMinutes(end);

    return endTimeInMinutes > startTimeInMinutes;
}
