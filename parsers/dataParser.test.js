import { getEmployeeData, getTimeWorkedData } from './dataParser';

test('get the employee data structure from a text line', () => {
    const employeeData = getEmployeeData('Rene=MO10:00-12:00,TU10:00-12:00');
    expect(employeeData).toHaveProperty('name', 'Rene');
    expect(employeeData).toHaveProperty('timeWorked', 'MO10:00-12:00,TU10:00-12:00');
});

test('return empty value for the name key if it does not exists', () => {
    const employeeData = getEmployeeData('=MO10:00-12:00,TU10:00-12:00');
    expect(employeeData).toHaveProperty('name', '');
    expect(employeeData).toHaveProperty('timeWorked', 'MO10:00-12:00,TU10:00-12:00');
});

test('return empty value for the timeWorked key if it does not exists', () => {
    const employeeData = getEmployeeData('Rene=');
    expect(employeeData).toHaveProperty('name', 'Rene');
    expect(employeeData).toHaveProperty('timeWorked', '');
});

test('return empty values for name and timeWorked keys if they not not exists', () => {
    const employeeData = getEmployeeData('=');
    expect(employeeData).toHaveProperty('name', '');
    expect(employeeData).toHaveProperty('timeWorked', '');
});

test('get time worked data structure if all data is correct', () => {
    const timeWorkedData = getTimeWorkedData('MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00');
    expect(timeWorkedData.length).toBe(5);
    expect(timeWorkedData[2]).toHaveProperty('day', 'TH');
    expect(timeWorkedData[2]).toHaveProperty('startInMinutes', 60);
    expect(timeWorkedData[2]).toHaveProperty('endInMinutes', 180);
    expect(timeWorkedData[2]).toHaveProperty('workedHours', 2);
});

test('set zero values if day abbreviation is not valid and set an error message', () => {
    const timeWorkedData = getTimeWorkedData('TH01:00-03:00,ZZ14:00-18:00,SU20:00-21:00');
    expect(timeWorkedData.length).toBe(3);
    expect(timeWorkedData[1]).toHaveProperty('day', 'ZZ');
    expect(timeWorkedData[1]).toHaveProperty('startInMinutes', 0);
    expect(timeWorkedData[1]).toHaveProperty('endInMinutes', 0);
    expect(timeWorkedData[1]).toHaveProperty('workedHours', 0);
    expect(timeWorkedData[1]).toHaveProperty('error', 'Please, check this entry: ZZ14:00-18:00');
});

test('set zero values if time range is not valid and ser an error message', () => {
    const timeWorkedData = getTimeWorkedData('TH01:00-03:00,FR11:00-14:00,SU21:00-20:00');
    expect(timeWorkedData.length).toBe(3);
    expect(timeWorkedData[2]).toHaveProperty('day', 'SU');
    expect(timeWorkedData[2]).toHaveProperty('startInMinutes', 0);
    expect(timeWorkedData[2]).toHaveProperty('endInMinutes', 0);
    expect(timeWorkedData[2]).toHaveProperty('workedHours', 0);
    expect(timeWorkedData[2]).toHaveProperty('error', 'Please, check this entry: SU21:00-20:00');
});
