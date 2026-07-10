// function getGrade(s1, s2, s3) {
// 	let avarage = (s1 + s2 + s3) / 3;

// 	if (avarage >= 90 && avarage <= 100) return 'A';
// 	if (avarage >= 80 && avarage < 90) return 'B';
// 	if (avarage >= 70 && avarage < 80) return 'C';
// 	if (avarage >= 60 && avarage < 70) return 'D';
// 	if (avarage >= 0 && avarage < 60) return 'F';

// }

// console.log(getGrade(15, 100, 89));
// console.log(getGrade(95, 90, 93));

var summation = function (num) {
	let minus = 0;
	let sum = num;
	while (num > 0) {
		minus = num - 1;
		sum = sum + minus;
		num--;
	}
	return sum;
}

console.log(summation(1));

// meno = 8 - 1 = 7
// somma = 8 + 7 = 15
// meno = meno - 1 = 6
// somma = somma + meno 