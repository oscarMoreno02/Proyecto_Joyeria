(()=>{"use strict";var e={226:(e,t,n)=>{async function d(){try{const e="http://127.0.0.1:8000/api/consultar/tipos",t=await fetch(e);if(!t.ok)throw new Error("No se pudo obtener las categorias");return await t.json()}catch(e){return e}}async function o(e){try{let t="http://127.0.0.1:8000/api/joya/nueva";const n={method:"POST",headers:{"Content-Type":"aplication/json"},body:JSON.stringify(e)},d=await fetch(t,n);if(!d.ok)throw new Error("No se pudo obtener las categorias");return await d.json()}catch(e){return e}}n.d(t,{A:()=>o,I:()=>d})}},t={};function n(d){var o=t[d];if(void 0!==o)return o.exports;var a=t[d]={exports:{}};return e[d](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var d in t)n.o(t,d)&&!n.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:t[d]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(226);let t=document.getElementById("btnNuevoElementoReceta"),d=document.getElementById("inputNombre"),o=document.getElementById("inputFoto"),a=document.getElementById("btn-guardar");function l(e){let t=!1;return""==document.getElementById(e).value&&(t=!0),t}function i(e){let t=!0;return e.children.length>0&&(t=!1),t}(0,e.I)().then((function(e){let t=document.getElementById("tipos-habilitados");console.log(e);for(let n=0;n<e.tipos.length;n++){const d=document.createElement("option");d.value=e.tipos[n].id,d.textContent=d.value+". "+e.tipos[n].nombre,t.appendChild(d)}})),d.addEventListener("input",(function(){l(d.id)?t.disabled=!0:t.disabled=!1,l(o.id)||l(d.id)?(t.disabled=!0,a.disabled=!0):i(document.getElementById("detalle-receta"))||(a.disabled=!1)})),o.addEventListener("input",(function(){l(o.id)?t.disabled=!0:t.disabled=!1,l(o.id)||l(d.id)?(t.disabled=!0,a.disabled=!0):i(document.getElementById("detalle-receta"))||(a.disabled=!1)})),a.addEventListener("click",(function(){let t=document.getElementById("detalle-receta"),n={};n.nombre=d.value,n.foto=o.value,n.detalle=[];for(let e=0;e<t.rows.length;e++){let d=t.rows[e],o=d.cells[1].textContent,a=d.cells[0].textContent,l={};l.cantidad=o,l.tipo=a.split(".")[0],n.detalle.push(l)}window.confirm("¿Estás seguro de que deseas guardar esta joya?")&&(0,e.A)(n).then((function(){document.getElementById("inputNombre").value="",document.getElementById("inputFoto").value="",window.location.reload()}))})),t.addEventListener("click",(function(){let e=document.getElementById("tipos-habilitados").value,t=document.getElementById("inputCantidad").value,n=[!0],d="";if((""==t||t.includes("-")||"0"==t)&&(d+=" Debe introducir una cantidad \n",n.push(!1)),0==e&&(d+=" Debe introducir elegir un tipo \n",n.push(!1)),n.includes(!1))alert(d);else{let e=document.getElementById("detalle-receta"),n=document.createElement("tr"),d=document.createElement("td"),o=document.createElement("span");o.textContent=t;let l=document.createElement("td"),i=document.getElementById("tipos-habilitados"),r=i.selectedIndex,c=i.options[r].textContent;i.options[r].disabled=!0,document.getElementById("opcion-default").selected=!0;let u=document.createElement("span");u.textContent=c,l.appendChild(u),d.appendChild(o),n.appendChild(l),n.appendChild(d),e.appendChild(n),a.disabled=!1}}))})()})();