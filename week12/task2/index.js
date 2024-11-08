const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
word = '';
for(const i = 0; i < 4; i++){
    word += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
}
console.log(word);