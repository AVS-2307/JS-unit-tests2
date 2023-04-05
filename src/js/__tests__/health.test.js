import sortedHealth from '../health';

test('return correct value', () => {
  const heroes = sortedHealth([
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 100 },
    { name: 'маг', health: 80 },
  ]);
  const result = [
    { name: 'лучник', health: 100 },
    { name: 'маг', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(heroes).toEqual(result);
});

test('return incorrect value', () => {
  const heroes = sortedHealth([
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 100 },
    { name: 'маг', health: 80 },
  ]);
  const result = [
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 100 },
    { name: 'маг', health: 80 },
  ];
  expect(heroes).not.toBe(result);
});
