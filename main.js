// გადაეცით ფუნქციას ორი მასივი
// ფუნქციამ უნდა დააბრუნოს ახალი მასივი, რომელშიც მხოლოდ ის ელემენტები იქნება,
// რომელიც ორივე მასივისთვის საერთოა
// function findCommonElements(arr1, arr2)
// მაგალითი:
// findCommonElements([1, 2, 3], [2, 8, 1, 4]) უნდა დააბრუნოს [1, 2]

// const arr = [1, 2, 3];
// const arR = [2, 8, 1, 4];

// function findCommonElements(arr1, arr2) {
//   const arr3 = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       arr3.push(arr1[i]);
//     }
//   }
//   return arr3;
// }

// console.log(findCommonElements(arr, arR))


// დააბრუნეთ ფუნქციიდან შებრუნებული მასივი
// არ გამოიყენოთ reverse ფუნქცია
// function reverseArray(arr)
// მაგალითი:
// reverseArray([1, 2, 3, 4]) უნდა დააბრუნოს [4, 3, 2, 1]

// const arr = [0, 1, 2, 3, 4, 5];


// function reverseArray(arr){
//   const reversed = [];
//   for(let i = arr.length - 1; i >= 0; i--){
//     reversed.push(arr[i]);
//   }
// return reversed;
// }
// console.log(reverseArray(arr))


// ფუნქციიდან დააბრუნეთ მასივის რიგით მეორე ყველაზე დიდი ციფრი
// მაგალითი :
// findSecondMax([1, 2, 3, 4, 5]) უნდა დააბრუნოს 4


// function findSecondMax(arr) {
//   let max = Math.max(...arr);
//   arr = arr.filter(element => element !== max);
//   let secondMax = Math.max(...arr);
//   return secondMax;
// }


// console.log(findSecondMax([1, 2, 3, 15, 19])); 



// დაწერეთ ფუნქცია რომელიც დააგენერირებს პაროლს შემთხვევითობის პრინციპით
// ფუნქციას უნდა გადავცეთ ციფრი, რამდენ სიმბოლოიანი პაროლიც გვინდა
// მაგალითი :
// generatePassword(8) უნდა დააგენერიროს პაროლი 8 სიმბოლოიანი


// function generatePassword1(length) {
//   const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,/?!-_+*&#/:\|><`~@$%^()";
//   let password = "";
//   for (let i = 0; i < length; i++) {
//     const randomCode = Math.random() * charset.length;
//     password += charset.charAt(randomCode);
//   }
//   return password;
// }


// console.log(generatePassword1(10))


// დაწერეთ მარტივი კალკულატორის ფუნქცია რომელსაც
// გადაეცემა სამი არგუმენტი (ოპერატორი, პირველი ციფრი, მეორე ციფრი)
// მაგალითი :
// calculator('+', 5, 6) უნდა დააბრუნოს 11
// calculator('-', 5, 6) უნდა დააბრუნოს -1
// calculator('*', 5, 6) უნდა დააბრუნოს 30
// calculator('/', 5, 6) უნდა დააბრუნოს 0.8333333333333334
// calculator('/', 0, 6) უნდა დააბრუნოს '0 - ზე გაყოფა არ შეიძლება'


// function calculator(operator, number1, number2) {
//   switch (operator) {
//     case '+':
//       return number1 + number2;
//     case '-':
//       return number1 - number2;
//     case '*':
//       return number1 * number2;
//     case '/':
//       if (number2 === 0) {
//         return '0 - ზე გაყოფა არ შეიძლება!';
//       }
//       return number1 / number2;
//     default:
//       return 'Invalid operator';
//   }
// }

// console.log(calculator('+', 5, 6)); 
// console.log(calculator('-', 5, 6)); 
// console.log(calculator('*', 5, 6)); 
// console.log(calculator('/', 5, 6)); 
// console.log(calculator('/', 5, 0)); 
