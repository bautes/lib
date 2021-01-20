import { getCalendar, isToday } from "../calendar.utils";

test("isCurrentDay", () => {
  const today = new Date();
  expect(isToday(today.getFullYear(), today.getMonth() + 1, today.getDate())).toEqual(true);
  expect(isToday(today.getFullYear(), today.getMonth() + 1, today.getDate() - 1)).toEqual(false);
});


test("getCalendar", () => {
  expect(getCalendar(2020, 12)).toEqual([
    // December, 2020
    // S,  M,  T,  W,  T,  F,  S
    // 0,  0,  1,  2,  3,  4,  5,
    // 6,  7,  8,  9, 10, 11, 12,
    // 13, 14, 15, 16, 17, 18, 19,
    // 20, 21, 22, 23, 24, 25, 26,
    // 27, 28, 29, 30, 31,  0,  0
    0,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    0,
    0
  ]);

  expect(getCalendar(2020, 2)).toEqual([
    // Feb, 2020
    // S,  M,  T,  W,  T,  F,  S
    // 0,  0,  0,  0,  0,  0,  1,
    // 2,  3,  4,  5,  6,  7,  8,
    // 9, 10, 11, 12, 13, 14, 15,
    // 16, 17, 18, 19, 20, 21, 22,
    // 23, 24, 25, 26, 27, 28, 29
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
  ]);
});
