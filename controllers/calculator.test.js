import { processPayment } from './calculator.js';

test('given a correct input it returns the name, totalAmount and no errors', () => {
    const employee = processPayment('ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00');
    expect(employee).toHaveProperty('name', 'ASTRID');
    expect(employee).toHaveProperty('totalAmount', 85);
    expect(employee).toHaveProperty('errors', []);
});

test('given a correct input it returns the name, totalAmount and no errors', () => {
    const employee = processPayment('ASTRID=TU09:01-20:00');
    expect(employee).toHaveProperty('name', 'ASTRID');
    expect(employee).toHaveProperty('totalAmount', 174.41666666666669);
    expect(employee).toHaveProperty('errors', []);
});

test('given a correct input it returns the name, totalAmount and no errors', () => {
    const employee = processPayment('RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00');
    expect(employee).toHaveProperty('name', 'RENE');
    expect(employee).toHaveProperty('totalAmount', 215);    
    expect(employee).toHaveProperty('errors', []);
});

test('given an incorrect input it returns the name, totalAmount and errors', () => {
    const employee = processPayment('DANIEL=TU12:30-10:00,TH09:20-17:20,FR19:00-23:00,QQ03:00-08:00');
    expect(employee).toHaveProperty('name', 'DANIEL');
    expect(employee).toHaveProperty('totalAmount', 199.08333333333331);
    expect(employee).toHaveProperty('errors', ['TU12:30-10:00', 'QQ03:00-08:00']);
});
