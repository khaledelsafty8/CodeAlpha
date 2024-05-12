function calcAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    if (!day || !month || !year) {
        alert('Please Fill Out All Fields.');
        return;
    }
    if (day > 31 || month > 12 || year > 2050 || year < 1900) {
        alert('Invalid Day or Month or Year');
        return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDom = today.getMonth() - birthDate.getMonth();
    if (
        monthDom < 0 ||
        (monthDom === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }
    document.getElementById('result').innerHTML = `Your Age Is ${age} Years.`;
}
