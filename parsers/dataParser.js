import { isValidDay, isValidTimeRange } from '../utils/validators';
import { transformToMinutes, transformRangeToHours } from '../utils/timeOperations';

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
            const workedHours = transformRangeToHours(endTime, startTime);
            return { day: day, startInMinutes: startTime, endInMinutes: endTime, workedHours: workedHours };
        }
        return { day: day, startInMinutes: 0, endInMinutes: 0, workedHours: 0, error: `Please, check this entry: ${data}` };
    });
}
