function shekreba(a, b) {
    const result = a + b;
    console.log(result); 
    return result; 
}

let a = 10;
let b = 20;

shekreba(a, b);

function migeba(name){
    return `გამარჯობა ${name}`;
}
    
let name = "luka";

console.log(migeba(name))



function luwi(number) {
    return number % 2 === 0;
}

let number = 8;

if(luwi(number)){
    console.log(`${number} არის ლუწი`)
} else {
    console.log(`${number} არ არის ლუწი`)
}

function didi(num1, num2) {
    if (num1 > num2){
        return num1;
    } else {
        return num2;
    }
}
 
console.log(didi(20,21))

function getMonthName(month) {
    const months = [
        "იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი",
        "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"
    ];

    if (month >= 1 && month <= 12) {
        return months[month - 1];
    } else {
        return "არასწორი თვე";
    }
}

console.log(getMonthName(7))