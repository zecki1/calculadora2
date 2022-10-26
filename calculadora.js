function calculate(tipo, valor) {    // tipo=valor ou acao    valor = valor a ser utilizado
    if (tipo === 'action') {

        if (valor === 'c') {
            document.getElementById('result').value = '';
        }

        if ((valor === '+') || (valor === '-') || (valor === '*') || (valor === '/') || (valor === '.')) {
            document.getElementById('result').value += valor;
        }

        if (valor === '=') {
            document.getElementById('result').value = eval(document.getElementById('result').value);
        }

    }
    else if (tipo === 'valor') {
        document.getElementById('result').value += valor;
    }
}

