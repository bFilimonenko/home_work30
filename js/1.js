/*
 * #1
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє,
 * чи є цей рядок валідною електронною адресою за допомогою регулярного виразу.
 * Функція повертає true, якщо електронна адреса валідна, і false в іншому випадку.
 */

/*
Email syntax

https://en.wikipedia.org/wiki/Email_address#Domain:~:text=0%20to%209-,printable%20characters,-!%23%24%25%26%27*%2B%2D/%3D%3F%5E_%60%7B%7C%7D~
*/
function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+$/;
  return emailPattern.test(email);
}

console.log(isValidEmail("example@example.com")); // Повинно вивести: true
console.log(isValidEmail("invalid-email"));       // Повинно вивести: false
