document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('presupuestoForm');
    const producto = document.getElementById('producto');
    const plazo = document.getElementById('plazo');
    const extras = document.querySelectorAll('input[type="checkbox"]:not(#condiciones)'); 
    const presupuestoFinal = document.getElementById('presupuesto-final');

    function calcularPresupuesto() {
       
        let total = parseInt(producto.value) || 0;

       
        const meses = parseInt(plazo.value) || 0;

       
        if (meses > 6) {
            total *= 0.9; // 
        }

       
        extras.forEach(extra => {
            if (extra.checked) {
                total += parseInt(extra.value) || 0;
            }
        });

        
        presupuestoFinal.value = `$${total}`;
    }

   
    producto.addEventListener('change', calcularPresupuesto);
    plazo.addEventListener('input', calcularPresupuesto);
    extras.forEach(extra => extra.addEventListener('change', calcularPresupuesto));

   
    form.addEventListener('submit', function (event) {
        if (!document.getElementById('condiciones').checked) {
            alert('Debes aceptar las condiciones de privacidad.');
            event.preventDefault();
        } else {
            alert('Presupuesto enviado correctamente');
        }
    });
});