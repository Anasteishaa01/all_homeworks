const textElement = document.getElementById('text');
const text = textElement.textContent;

const result = text.replace(/\;/g, ';\n');

const substring = result.replace(/\s/g, '');

const newText = result.substring(28, 50);

const replacedText = newText.replace("клён", "дубе");

const replacedText2 = result.toUpperCase();

const replacedText3 = result.replace(/клён/g, 'дуб');

const index = text.indexOf('моря');

const modifiedText = replacedText[0].toUpperCase() + replacedText.slice(1);

console.log(`1. Количество символов в тексте: ${text.length}`);
console.log(`2. Текст с переносами строк: \n ${result}`);
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
console.log(`4. Извлечение подстроки: ${newText}`);
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
console.log(`8. Индекс первого вхождения "моря": ${index}`);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);
