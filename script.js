const button = document.querySelector('button');
document.querySelector('.informe').addEventListener('click', () => {
    const informeElement = document.getElementById('informe');
    if (InformeElement.style.display !== 'block') {
        InformeElement.style.display = 'block';
        VerInforme();
    } else {
        InformeElement.style.display = 'none';
    }
});

function verInforme() {
    const informeElement = document.querySelector('.informe');
    informeElement.style.display = 'block';

    // Aquí puedes agregar código para mostrar el contenido del informe
}