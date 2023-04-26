import { getEmployeeData, getTimeWorkedData } from '../parsers/dataParser.js';

import { tableRanges, weekDays } from '../config/constants.js';

const isWeekday = (day) => {
    return weekDays.includes(day);
}

const separateTimeFrames = (startMinutes, endInMinutes) => {
    const timeframes = [0 , 0 , 0];
    if (endInMinutes > tableRanges[2].from){
        if (startMinutes >= tableRanges[2].from) {
            timeframes[2] = endInMinutes - startMinutes;
            timeframes[1] = 0;
            timeframes[0] = 0;
        } else if (startMinutes >= tableRanges[1].from) {
            timeframes[2] = endInMinutes - tableRanges[2].from;
            timeframes[1] = tableRanges[1].to - startMinutes;
            timeframes[0] = 0;
        } else {
            timeframes[2] = endInMinutes - tableRanges[2].from;
            timeframes[1] = tableRanges[1].to - tableRanges[1].from;
            timeframes[0] = tableRanges[0].to - startMinutes;
        }
    } else if (endInMinutes > tableRanges[1].from) {
        if (startMinutes > tableRanges[1].from) {
            timeframes[1] = endInMinutes - startMinutes;
            timeframes[0] = 0;
        } else {
            timeframes[1] = endInMinutes - tableRanges[1].from;
            timeframes[0] = tableRanges[0].to - startMinutes;
        }
    } else {
        if (startMinutes > tableRanges[0].from) {
            timeframes[0] = endInMinutes - startMinutes;
        }
        else {
            timeframes[0] = endInMinutes - tableRanges[0].from;
        }
    }
    return timeframes;
}

const calculateTimeFrameAmount = (timeFrame, tableRangeIndex, isWeekday) => {
    return timeFrame/60 * tableRanges[tableRangeIndex][isWeekday ? 'weekDayValue' : 'weekendValue'];
};

export function processPayment(lineFromFile){
    const employeeData = getEmployeeData(lineFromFile);
    const workEntries = getTimeWorkedData(employeeData.timeWorked);
    const errors = [];

    workEntries.forEach(entry => {
        const timeframes = separateTimeFrames(entry.startInMinutes, entry.endInMinutes);
        const isAWeekday = isWeekday(entry.day);

        entry.total = calculateTimeFrameAmount(timeframes[0], 0, isAWeekday) + calculateTimeFrameAmount(timeframes[1], 1, isAWeekday) + calculateTimeFrameAmount(timeframes[2], 2, isAWeekday);

        if(entry.error){
            errors.push(entry.error);
        }
    });

    const totalAmount = workEntries.reduce((total, entry) => total + entry.total, 0);

    return { name: employeeData.name, totalAmount: totalAmount, errors: errors };
}
