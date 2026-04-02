const ics = require("ics");
const dayjs = require("dayjs");

const { error, value } = ics.createEvents([
  {
    title: "日本語のイベント",
    start: dayjs("2026-04-02T21:23:00+09:00").valueOf(),
    end: dayjs("2026-04-02T22:23:00+09:00").valueOf(),
  },
]);

if (error) {
  console.log(error);
  return;
}

console.log(value);
