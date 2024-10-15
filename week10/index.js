function calculateTotalPrice(quantity = 2, price = 15000000){
    const result = quantity * price;
    const formatResult = result.toLocaleString('ru-RU');
    const text = 'Стоимость покупки: ';
    alert(text + formatResult);
}