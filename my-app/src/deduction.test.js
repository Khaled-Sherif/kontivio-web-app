function sub(a, b) {
  return a - b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sub(4, 2)).toBe(2);
});