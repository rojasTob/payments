import { isValidDay, isValidTimeRange  } from './validators';

test('return true if is a valid abbreviation day', () => {
    expect(isValidDay('MO')).toBe(true);
    expect(isValidDay('TU')).toBe(true);
    expect(isValidDay('WE')).toBe(true);
    expect(isValidDay('TH')).toBe(true);
    expect(isValidDay('FR')).toBe(true);
    expect(isValidDay('SA')).toBe(true);
    expect(isValidDay('SU')).toBe(true);
});

test('returns false if is not a valid abbreviation day', () => {
    expect(isValidDay('ZZ')).toBe(false);
});

test('return true if is a valid time range', () => {
    expect(isValidTimeRange('10:00', '12:00')).toBe(true);
});

test('return false if is not a valid time range', () => {
    expect(isValidTimeRange('17:00', '11:30')).toBe(false);
});
