import {transformRangeToHours, transformToMinutes} from './timeOperations';

test('transform hh:mm format to minutes', () => {
    expect(transformToMinutes('12:00')).toBe(720);
});

test('transform minutes to hours', () => {
    expect(transformRangeToHours(720, 600)).toBe(2);
});
