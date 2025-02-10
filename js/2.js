/*
 * #2
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє,
 * чи є цей рядок валідним URL веб-сайту за допомогою регулярного виразу.
 * Функція повертає true, якщо URL валідний, і false в іншому випадку.
 */

function isValidUrl(url) {
  const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:[0-9]{1,5})?(\/\S*)?$/;
  return urlPattern.test(url);
}

console.log(isValidUrl("https://www.example.com")); // Повинно вивести: true
console.log(isValidUrl("invalid-url"));             // Повинно вивести: false
