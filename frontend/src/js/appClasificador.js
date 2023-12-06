import{obtenerLotes} from './http/http-Clasificador.js'

obtenerLotes().then(function(data) {

    if(data[0].lotes==null){
        window.location.href='../index.html'
    }     
    console.log(data)
    // if (!data) {

//     window.location.href = '/pagina-de-error';
// } else {
    
    //     pintarLotes(data);
    //     if (data.mensaje === '') {
        //         alert('No hay lotes sin clasificar');
        //     }
        // }
        
      
}).catch(function(error) {
    console.log(error)
    console.log(error)
    if(data[0]==null){
        window.location.href='index.html'
    }
});
    

let fotoUrl=sessionStorage.getItem('foto-url')
document.getElementById('fotoNav').src=fotoUrl
sessionStorage.setItem('ultimo-acceso',JSON.stringify('clasificador'))


function pintarLotes(lotes) {
    var tabla = document.getElementById('tabla_lotes');
        // let lista =[lotes.mensaje]
   
        for (let i=0;i<lotes[0].lotes.length;i++){
            let fila = document.createElement('tr');

            let botonCelda = document.createElement('td');
            let boton = document.createElement('button');
            boton.textContent = 'Clasificar'
            boton.setAttribute('id',lotes[0].lotes[i].id)
            boton.classList.add('status')
            boton.classList.add('shipped')
            let idCelda = document.createElement('td');

            let id= document.createElement('span');
            id.textContent=lotes[0].lotes[i].id
           

            let idEmpresaCelda = document.createElement('td');
            let idEmpresa= document.createElement('span');
            idEmpresa.textContent=lotes[0].lotes[i].id_empresa
           
            let ubicacionCelda = document.createElement('td');
            let ubicacion= document.createElement('span');
            ubicacion.textContent=lotes[0].lotes[i].ubicacion

            boton.addEventListener('click', function(event) {
                sessionStorage.setItem('lote-a-clasificar',JSON.parse(boton.id))
                window.location.href='./indexLote.html'
                
              });

            idCelda.appendChild(id)
            idEmpresaCelda.appendChild(idEmpresa)
           botonCelda.appendChild(boton);
           ubicacionCelda.appendChild(ubicacion)
           
           fila.appendChild(idCelda);
           fila.appendChild(idEmpresaCelda);
           fila.appendChild(ubicacionCelda)
            fila.appendChild(botonCelda);
         
            tabla.appendChild(fila);
        }
        
        
    }
