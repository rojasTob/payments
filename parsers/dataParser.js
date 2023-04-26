import { isValidDay, isValidTimeRange } from '../utils/validators.js';
import { transformToMinutes } from '../utils/timeOperations.js';

export function getEmployeeData(line){
    const employeeData = line.split('=');
    return {name: employeeData[0], timeWorked: employeeData[1]};
}

export function getTimeWorkedData(timeWorked){
    const timeWorkedData = timeWorked.split(',');

    return timeWorkedData.map( data => {
        const day = data.slice(0,2);
        const timeRange = data.slice(2,data.length).split('-');

        if(isValidDay(day) && isValidTimeRange(timeRange[0], timeRange[1])){
            const startTime = transformToMinutes(timeRange[0]);
            const endTime = transformToMinutes(timeRange[1]);

            return { day: day, startInMinutes: startTime, endInMinutes: endTime };
        }
        return { day: day, startInMinutes: 0, endInMinutes: 0, error: data };
    });
}
