(()=>{"use strict";let e=JSON.parse(sessionStorage.getItem("joya-guardada")),t={detalle:[]},n=document.getElementById("btnNuevoElementoReceta"),d=document.getElementById("inputNombre"),a=document.getElementById("inputFoto"),l=document.getElementById("btn-guardar"),o=JSON.parse(sessionStorage.getItem("id-usuario"));function i(e){let t=!1;return""==document.getElementById(e).value&&(t=!0),t}function c(e){let t=!0;return e.children.length>0&&(t=!1),t}(async function(){try{const e="http://127.0.0.1:8000/api/consultar/tipos",t=await fetch(e);if(!t.ok)throw new Error("No se pudo obtener las categorias");return await t.json()}catch(e){return e}})().then((function(e){!function(e){let t=document.getElementById("tipos-habilitados");for(let n=0;n<e.tipos.length;n++){const d=document.createElement("option");d.value=e.tipos[n].id,d.textContent=d.value+". "+e.tipos[n].nombre,t.appendChild(d)}}(e)})),async function(e){try{const t=await fetch("http://127.0.0.1:8000/api/recetas/"+e);if(!t.ok)throw new Error("No se pudo obtener las joyas");return await t.json()}catch(e){return!1}}(e).then((function(e){!function(e){let n=document.getElementById("tabla_receta");for(let d=0;d<e.detalle.length;d++){console.log(e.detalle[d]);let a=document.createElement("tr"),l=document.createElement("td"),o=document.createElement("span");o.textContent=e.detalle[d].id_componente+". "+e.detalle[d].tipo;let i=document.createElement("td"),c=document.createElement("input");c.value=e.detalle[d].cantidad_necesaria,e.detalle[d].cantidad_disponible<e.detalle[d].cantidad_necesaria&&(cantidadDisponible.style.color="red",disponible=!1,btnFabricar.disabled=!0);let s={id_componente:e.detalle[d].id_componente,cantidad:e.detalle[d].cantidad_necesaria};t.detalle.push(s),l.appendChild(o),i.appendChild(c),a.appendChild(l),a.appendChild(i),n.appendChild(a)}console.log(t)}(e)})),d.addEventListener("input",(function(){i(d.id)?n.disabled=!0:n.disabled=!1,i(a.id)||i(d.id)?(n.disabled=!0,l.disabled=!0):c(document.getElementById("detalle-receta"))||(l.disabled=!1)})),a.addEventListener("input",(function(){i(a.id)?n.disabled=!0:n.disabled=!1,i(a.id)||i(d.id)?(n.disabled=!0,l.disabled=!0):c(document.getElementById("detalle-receta"))||(l.disabled=!1)})),l.addEventListener("click",(function(){let e=document.getElementById("detalle-receta"),t={};t.nombre=d.value,t.foto=a.value,t.id_usuario=o,t.detalle=[];for(let n=0;n<e.rows.length;n++){let d=e.rows[n],a=d.cells[1].textContent,l=d.cells[0].textContent,o={};o.cantidad=a,o.tipo=l.split(".")[0],t.detalle.push(o)}window.confirm("¿Estás seguro de que deseas guardar esta joya?")&&(console.log(JSON.stringify(t)),guardarNuevaJoya(t).then((function(){document.getElementById("inputNombre").value="",document.getElementById("inputFoto").value="",window.location.href="listaJoyas.html"})))})),n.addEventListener("click",(function(){let e=document.getElementById("tipos-habilitados").value,t=document.getElementById("inputCantidad").value,n=[!0],d="";if((""==t||t.includes("-")||"0"==t)&&(d+=" Debe introducir una cantidad \n",n.push(!1)),0==e&&(d+=" Debe introducir elegir un tipo \n",n.push(!1)),n.includes(!1))alert(d);else{let e=document.getElementById("detalle-receta"),n=document.createElement("tr"),d=document.createElement("td"),a=document.createElement("span");a.textContent=t;let o=document.createElement("td"),i=document.getElementById("tipos-habilitados"),c=i.selectedIndex,s=i.options[c].textContent;i.options[c].disabled=!0,document.getElementById("opcion-default").selected=!0;let u=document.createElement("span");u.textContent=s,o.appendChild(u),d.appendChild(a),n.appendChild(o),n.appendChild(d),e.appendChild(n),l.disabled=!1}}))})();