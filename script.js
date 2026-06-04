document.getElementById('calculate-btn').addEventListener('click', function() {
    const weightInput = document.getElementById('weight').value;
    let heightInput = document.getElementById('height').value;

    // Converte vírgula em ponto para evitar quebras de cálculo caso o utilizador digite "1,65"
    heightInput = heightInput.replace(',', '.');

    const weight = parseFloat(weightInput);
    const height = parseFloat(heightInput);

    // Validação básica de segurança para os inputs
    if (!weight || !height || height <= 0 || weight <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    // Cálculo do IMC clássico: peso / (altura²)
    const imc = weight / (height * height);

    const infoText = document.getElementById('info-text');
    const resultVal = document.getElementById('result-val');

    // Altera dinamicamente o título do resultado e injeta o valor calculado
    infoText.innerText = 'Seu IMC é:';
    resultVal.innerText = imc.toFixed(2).replace('.', ',');
    resultVal.style.display = 'block';

    // Remove qualquer classe de destaque ("highlight") ativa de cliques anteriores
    document.querySelectorAll('.imc-table tr').forEach(tr => {
        tr.classList.remove('highlight');
    });

    // Mapeamento e lógica condicional para identificar o ID da linha correta
    let activeRowId = '';

    if (imc < 17) {
        activeRowId = 'row-under-severe';
    } else if (imc >= 17 && imc < 18.5) {
        activeRowId = 'row-under';
    } else if (imc >= 18.5 && imc < 25) {
        activeRowId = 'row-normal';
    } else if (imc >= 25 && imc < 30) {
        activeRowId = 'row-over';
    } else if (imc >= 30 && imc < 35) {
        activeRowId = 'row-obese-1';
    } else if (imc >= 35 && imc < 40) {
        activeRowId = 'row-obese-2';
    } else {
        activeRowId = 'row-obese-3';
    }

    // Aplica a classe de destaque diretamente na linha correspondente da tabela
    document.getElementById(activeRowId).classList.add('highlight');
});
