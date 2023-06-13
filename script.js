// software-2.1-js-variables

let studentFirstName = "Brandon";
let studentLastName = "Newman";
const grades = [53, 96, 65, 74]
let passingGrade = 80;

console.log(studentFirstName + ' ' + studentLastName + ' has an average of ' + valueOfAverage(grades) + '.')
didHePass(grades)

function didHePass(grades) {
    const average = valueOfAverage(grades);
    if (average < passingGrade)
    console.log('Unfortunately, he did not pass!');
    else 
    console.log('Congratulations, he passed!');

}

function valueOfAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length;
}





 

