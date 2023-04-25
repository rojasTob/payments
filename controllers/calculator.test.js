import { calculateAmount } from './calculator.js';

test('given an employee input it returns the ampunt to pay', () => {
    expect(calculateAmount('ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00')).toBe('The amount to pay ASTRID is: 85 USD');
});

test('given an employee input it returns the ampunt to pay', () => {
    expect(calculateAmount('RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00')).toBe('The amount to pay RENE is: 215 USD');
});
