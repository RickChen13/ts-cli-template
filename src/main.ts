import Calendar from "@/common/Calendar";

const calendar = new Calendar();

let str = calendar.lunar2solar(2023, 2, 1, true);

console.log("str", str);
