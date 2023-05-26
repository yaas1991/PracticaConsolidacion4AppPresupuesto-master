function enviarPresupuesto(){
    let valorCajaPresupuesto = document.getElementById('txtPresupuesto').value;
    let elParrafoPresupuesto = document.getElementById('parrafoPresupuesto');
    elParrafoPresupuesto.innerText = valorCajaPresupuesto;
}

var arrNombresGastos =[];
var arrNombresGastosEliminar =[];
var arrCantidadGastos=[];
var arrCantidadGastosEliminar=[];

function acumularGastos(){
    let acumuladoGastos=0;
    // recorre el arreglo de cantidad Gastos y suma su contenido
    for(let i=0; i<arrCantidadGastos.length;i++){
        acumuladoGastos = acumuladoGastos + arrCantidadGastos[i];
    }
    return acumuladoGastos;
}

function eliminarElemento(indice){
    //limpiamos los arreglos de copia
    arrNombresGastosEliminar =[];
    arrCantidadGastosEliminar=[];

    console.log(indice);
    // eliminamos de los arreglos globales el elemento identificado mediante el indice proporcionado por el boton eliminar
    arrNombresGastos.splice(indice,1);
    arrCantidadGastos.splice(indice,1);

    console.log(arrNombresGastos);
    console.log(arrCantidadGastos);

    // eliminamos contenido
    eliminarContenido();

    //hacemos una copia de los arreglo
    //creamos el nuevo array recorriendo el antiguo 
    for(let i=0; i<arrNombresGastos.length;i++){
        arrNombresGastosEliminar.push(arrNombresGastos[i]);
        arrCantidadGastosEliminar.push(arrCantidadGastos[i]);
    }

    console.log('arrayNombreGastosEliminar: ',arrNombresGastosEliminar);
    console.log('arrCantidadGastosEliminar:', arrCantidadGastosEliminar);


    let valorParrafoPresupuesto = document.getElementById('parrafoPresupuesto').innerText;
    let elParrafoGasto = document.getElementById('parrafoGasto');
    let elParrafoSaldo = document.getElementById('parrafoSaldo');
    let elAcumuladoGastos = 0;

    // identificamos el nuevo gasto después de eliminar un elemento
    for(let i=0 ; i<arrCantidadGastos.length; i++){
        elAcumuladoGastos = elAcumuladoGastos + arrCantidadGastos[i];
    }

    // enviamos el acumlado del gasto al parrafo gasto
    elParrafoGasto.innerText = elAcumuladoGastos;

        let elSaldo = parseFloat(valorParrafoPresupuesto) - parseFloat(elAcumuladoGastos);
        elParrafoSaldo.innerText = elSaldo;


    //volvemos a pintar los gastos
    pintarGastosEliminar();


}

function eliminarContenido(){
    let elParrafoNombreGasto = document.getElementById('parrafoNombreGasto');
    let elParrafoValor = document.getElementById('parrafoValor');
    let elParrafoAccion = document.getElementById('parrafoAccion');

    elParrafoNombreGasto.innerText = '';
    elParrafoValor.innerText = '';
    elParrafoAccion.innerText = '';
}

function pintarGastosEliminar(){

    let elParrafoNombreGasto = document.getElementById('parrafoNombreGasto');
    let elParrafoValor = document.getElementById('parrafoValor');
    let elParrafoAccion = document.getElementById('parrafoAccion');



    let limiteEliminar =arrNombresGastosEliminar.length;
    console.log('limiteEliminar:',limiteEliminar);


    for(let j=0; j<limiteEliminar; j++){

        let unParrafoTextoNuevo = document.createElement('p');
        let unParrafoValorNuevo = document.createElement('p');
        let unParrafoAccionNuevo = document.createElement('p');
        let elIcono = document.createElement('p');

        console.log('j:',j);
        // recorremos el arreglo y extraemos nombre
        unParrafoTextoNuevo.innerText = arrNombresGastosEliminar[j];
        console.log('arrNombresGastosEliminar[j]:', arrNombresGastosEliminar[j]);
        // recorremos el arreglo y extraemos valor
        unParrafoValorNuevo.innerText = arrCantidadGastosEliminar[j];
        console.log('arrCantidadGastosEliminar[j];',arrCantidadGastosEliminar[j]);

        elIcono.innerHTML = '<img src="/assets/img/garbage-bin.gif" alt="">';
        elIcono.setAttribute('onclick', `eliminarElemento(${i})`);

        // enviamos a los párrafos correspondientes con append
        elParrafoNombreGasto.appendChild(unParrafoTextoNuevo);
        elParrafoValor.appendChild(unParrafoValorNuevo);
        unParrafoAccionNuevo.appendChild(elIcono);
        elParrafoAccion.appendChild(unParrafoAccionNuevo);
    }

    // elParrafoValor.innerText = valorCantidadGasto;
}


function pintarGastos(){

    let elParrafoNombreGasto = document.getElementById('parrafoNombreGasto');
    let elParrafoValor = document.getElementById('parrafoValor');
    let elParrafoAccion = document.getElementById('parrafoAccion');

    let unParrafoTextoNuevo = document.createElement('p');
    let unParrafoValorNuevo = document.createElement('p');
    let unParrafoAccionNuevo = document.createElement('p');
    let elIcono = document.createElement('button');

    for(let i=0; i<arrNombresGastos.length; i++){
        // recorremos el arreglo y extraemos nombre
        unParrafoTextoNuevo.innerText = arrNombresGastos[i];
        // recorremos el arreglo y extraemos valor
        unParrafoValorNuevo.innerText = arrCantidadGastos[i];

       elIcono.innerHTML = '<img src="/assets/img/garbage-bin.gif" alt="">';
       elIcono.setAttribute('onclick', `eliminarElemento(${i})`);

        // enviamos a los párrafos correspondientes con append
        elParrafoNombreGasto.appendChild(unParrafoTextoNuevo);
        elParrafoValor.appendChild(unParrafoValorNuevo);
        unParrafoAccionNuevo.appendChild(elIcono);
        elParrafoAccion.appendChild(unParrafoAccionNuevo);
    }


    



    // elParrafoValor.innerText = valorCantidadGasto;
}



function enviarGasto(){
    // variables para alojar los gastos
    let valorCajaGasto = document.getElementById('txtNombreGasto').value;
    let valorCantidadGasto = document.getElementById('txtCantidadGasto').value;
    // almacenamos en los arreglos los gastos añadidos
    arrNombresGastos.push(valorCajaGasto);
    arrCantidadGastos.push(parseFloat(valorCantidadGasto));

    console.log('arreglo gastos:');
    console.log(arrNombresGastos);
    console.log('cantidad gastos:');
    console.log(arrCantidadGastos);
 

    let elAcumuladoGastos =  acumularGastos(); 
    console.log(elAcumuladoGastos);
    
    let valorParrafoPresupuesto = document.getElementById('parrafoPresupuesto').innerText;
    let elParrafoGasto = document.getElementById('parrafoGasto');
    let elParrafoSaldo = document.getElementById('parrafoSaldo');


    // enviamos el acumlado del gasto al parrafo gasto
    elParrafoGasto.innerText = elAcumuladoGastos;

    let elSaldo = parseFloat(valorParrafoPresupuesto) - parseFloat(elAcumuladoGastos);
    elParrafoSaldo.innerText = elSaldo;

    pintarGastos();


}

function asignarEventos(){
    let elBotonCalcular = document.getElementById('btnCalcular');
    elBotonCalcular.addEventListener('click', enviarPresupuesto);

    let elBotonAnadir = document.getElementById('btnAnadirGasto');
    elBotonAnadir.addEventListener('click', enviarGasto);
}