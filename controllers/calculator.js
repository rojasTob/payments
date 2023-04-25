import { getEmployeeData, getTimeWorkedData } from '../parsers/dataParser.js';
import { getPaymentValue } from '../utils/tablePayments.js';

export function calculateAmount(lineFromFile){
    const employeeData = getEmployeeData(lineFromFile);
    const workEntries = getTimeWorkedData(employeeData.timeWorked);

    workEntries.forEach(entry => {
        const valuePerHour = getPaymentValue(entry.day, entry.startInMinutes, entry.endInMinutes);
        entry.valuePerHour = valuePerHour;
    });

    const totalAmount = workEntries.reduce((total, entry) => total + (entry.workedHours * entry.valuePerHour), 0);

    return `The amount to pay ${employeeData.name} is: ${totalAmount} USD`;
}