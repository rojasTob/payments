export function transformToMinutes(hhmm){
    const time = hhmm.split(':')
    return (Number(time[0])*60) + Number(time[1]);
}

export function transformRangeToHours(endTime, startTime){
    return (endTime - startTime) / 60;
}
