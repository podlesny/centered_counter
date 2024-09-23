import { expect, test } from 'vitest';
import { factory } from './factory';

test('creates a count function', function () {
  const count = factory(1, 1);
  expect(count()).toBe(2);
  expect(count()).toBe(3);
});

test('creates a count starting from 10 with a step of 5', function () {
  const count = factory(10, 5);
  expect(count()).toBe(15);
  expect(count()).toBe(20);
});

test('defaults to start 0, step 1 when no arguments passed', function () {
  const count = factory();
  expect(count()).toBe(1);
  expect(count()).toBe(2);
});

test('handles negative start and step values', function () {
  const count = factory(-10, -5);
  expect(count()).toBe(-15);
  expect(count()).toBe(-20);
});

test('handles step of 0', function () {
  const count = factory(5, 0);
  expect(count()).toBe(5);
  expect(count()).toBe(5);
});

test('handles NaN start and step', function () {
  const countNaN = factory(NaN, NaN);
  expect(countNaN()).toBe(NaN);
});

test('handles non-integer step values', function () {
  const count = factory(1, 0.5);
  expect(count()).toBe(1.5);
  expect(count()).toBe(2.0);
  expect(count()).toBe(2.5);
});

test('ensures that multiple counters are independent', function () {
  const count1 = factory(0, 1);
  const count2 = factory(10, 2);

  expect(count1()).toBe(1);
  expect(count1()).toBe(2);

  expect(count2()).toBe(12);
  expect(count2()).toBe(14);
});

test('handles large numbers', function () {
  const largeStart = factory(1e12, 1e6);
  expect(largeStart()).toBe(1000001000000);
  expect(largeStart()).toBe(1000002000000);
});
