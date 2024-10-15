function js () {
    console.log('Я учу JavaScript!')
}

js();

const img = document.querySelector('img');

function prevImg(){
    
    img.src = 'image2.jpg';
}

function nextImg(){
    img.src = 'image1.jpg';
}
