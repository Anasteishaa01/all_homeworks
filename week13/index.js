function check() {
    const birthdayDay = document.getElementById('birthday');
    const errorMessage = document.getElementById('errorMessage');
    const birthdayMessage = document.getElementById('birthdayMessage'); 

    if(!birthdayDay.value) {
        errorMessage.style.display = "block";
        birthdayMessage.textContent = '';
        return;
    }
    errorMessage.style.display = 'none';

    const selectedDate = new Date(birthdayDay.value);
    const today = new Date();
    const currentYear = today.getFullYear();
    const birthdayThisYear = new Date(currentYear, selectedDate.getMonth(), selectedDate.getDate())

    if (birthdayThisYear < today) {
        birthdayThisYear.setFullYear(currentYear + 1)
    }

    const differenceInTime = birthdayThisYear - today;
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24))

    birthdayMessage.textContent = `До вашего дня рождения осталось ${differenceInDays} ${getDayWord(differenceInDays)}`
}

function getDayWord(number) {
    const lastDigit = number % 10;
    const lastTwoDigit = number % 100; 

    if (lastTwoDigit >= 11 && lastTwoDigit <= 14) {
        return 'дней'
    }
    if (lastDigit === 1) {
        return 'день'
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
        return 'дня'
    }
    return 'дней'
}

document.getElementById('birthday').addEventListener('input', () => {
    document.getElementById('errorMessage').style.display = 'none'
})
