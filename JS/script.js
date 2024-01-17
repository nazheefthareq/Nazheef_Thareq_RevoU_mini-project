function calculate() {
    const sisi = document.getElementById('sisi').value;
    const luas = sisi * sisi;
    const keliling = 4 * sisi;

    document.getElementById('luas').innerHTML = 'Luas: ' + luas;
    document.getElementById('keliling').innerHTML = 'Keliling: ' + keliling;
}

function resetInput() {
    document.getElementById('sisi').value = '';
    document.getElementById('luas').innerHTML = 'Luas: ';
    document.getElementById('keliling').innerHTML = 'Keliling: ';
}