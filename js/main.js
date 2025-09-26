function calculate(target) {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const resistance = parseFloat(document.getElementById('resistance').value);
    const current = parseFloat(document.getElementById('current').value);
    let result;

    switch(target) {
        case 'current':
            if (voltage && resistance) {
                result = voltage / resistance;
                document.getElementById('current').value = result.toFixed(2);
                showResult(`Arus = ${result.toFixed(2)} A`);
            }
            break;
        case 'voltage':
            if (current && resistance) {
                result = current * resistance;
                document.getElementById('voltage').value = result.toFixed(2);
                showResult(`Tegangan = ${result.toFixed(2)} V`);
            }
            break;
        case 'resistance':
            if (voltage && current) {
                result = voltage / current;
                document.getElementById('resistance').value = result.toFixed(2);
                showResult(`Hambatan = ${result.toFixed(2)} Ω`);
            }
            break;
    }
}

function showResult(text) {
    document.getElementById('result').innerHTML = text;
}