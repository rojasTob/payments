const tableRanges = [
    { from: 1, to: 540, weekDayValue: 25, weekendValue: 30 },
    { from: 541, to: 1080, weekDayValue: 15, weekendValue: 20 },
    { from: 1081, to: 1440, weekDayValue: 20, weekendValue: 25 }
]

const weekDays = ['MO', 'TU', 'WE', 'TH', 'FR'];

export function getPaymentValue(day, startInMinutes, endInMinutes){
    let valuePerHour = 0;
    
    tableRanges.forEach((data) => {
        if(data.from <= startInMinutes && endInMinutes <= data.to){
            valuePerHour = weekDays.includes(day) ? data.weekDayValue : data.weekendValue;
        }
    });

    return valuePerHour;
}