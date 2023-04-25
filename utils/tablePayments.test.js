import { getPaymentValue } from './tablePayments.js';

test('payment value on weekday and for the first-range is 25', () => {
    expect(getPaymentValue('MO', 420, 540)).toBe(25);
});

test('payment value on weekday and for the second-range is 15', () => {
    expect(getPaymentValue('TH', 720, 840)).toBe(15);
});

test('payment value on weekday and for the third-range is 20', () => {
    expect(getPaymentValue('FR', 1200, 1440)).toBe(20);
});

test('payment value on weekend and for the first-range is 30', () => {
    expect(getPaymentValue('SU', 420, 540)).toBe(30);
});

test('payment value on weekend and for the second-range is 20', () => {
    expect(getPaymentValue('SA', 720, 840)).toBe(20);
});

test('payment value on weekend and for the third-range is 25', () => {
    expect(getPaymentValue('SU', 1200, 1440)).toBe(25);
});