import{obtenerJoyas,fabricarJoya} from './http/http-fabricarJoya.js'
let usuario=JSON.parse(sessionStorage.getItem('id-usuario'))

obtenerJoyas().then(function(data){
    pintarJoyas(data)
})


function pintarJoyas(joyas) {
    var tabla = document.getElementById('tabla_joyas');
        
        for(let i=0;i<joyas[0].length;i++) {
           
            let fila = document.createElement('tr');

            let botonCelda = document.createElement('td');
            let boton = document.createElement('button');
            boton.textContent = 'Fabricar'
            boton.setAttribute('id',joyas[0][i].id)
            boton.classList.add('status')
            boton.classList.add('shipped')
            let idCelda = document.createElement('td');

            let id= document.createElement('span');
            id.textContent=joyas[0][i].id
           

            let nombreCelda = document.createElement('td');
            let nombre= document.createElement('span');
            nombre.textContent=joyas[0][i].nombre
           

            let fotoCelda = document.createElement('td');
            let foto= document.createElement('img');
            foto.src=joyas[0][i].foto

            let creadorCelda=document.createElement('td')
            let creador=document.createElement('span')
            creador.textContent=joyas[0][i].creador

            let fabricacionesCelda=document.createElement('td')
            let fabricaciones=document.createElement('span')
            fabricaciones.textContent=joyas[0][i].fabricaciones

            boton.addEventListener('click', function(event) {
               fabricarJoya(boton.id,usuario).then(function(){
                
                window.location.reload()
               })
                
              });

            idCelda.appendChild(id)
            nombreCelda.appendChild(nombre)
            fotoCelda.appendChild(foto)
            creadorCelda.appendChild(creador)
           botonCelda.appendChild(boton);
           fabricacionesCelda.appendChild(fabricaciones)

           fila.appendChild(idCelda);
           fila.appendChild(nombreCelda);
           fila.appendChild(fotoCelda)
           fila.appendChild(creadorCelda)
           fila.appendChild(fabricacionesCelda)
            fila.appendChild(botonCelda);

            tabla.appendChild(fila);
        }
        
        
    }