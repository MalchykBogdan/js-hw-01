let salary = prompt ("Enter your salary")
const total = salary;
const allowances =  total * 0.15;
const totalsalary = Number(total) + Number(allowances)
const taxes = totalsalary*0.1;
const shop = 190;

const result = Number (total)+Number(allowances)-Number(taxes)-Number(shop);
alert("salary reaches:"+ result)
