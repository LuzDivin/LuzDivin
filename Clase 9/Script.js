const nombre=document.getElementById("nombre");

const email=document.getElementById("email");

const password=document.getElementById("password");

const repetir=document.getElementById("repetir");

const edad=document.getElementById("edad");

const telefono=document.getElementById("telefono");

const direccion=document.getElementById("direccion");

const ciudad=document.getElementById("ciudad");

const cp=document.getElementById("cp");

const dni=document.getElementById("dni");


function error(id,mensaje){

document.getElementById(id).innerText=mensaje;

}

function limpiar(id){

document.getElementById(id).innerText="";

}


/* NOMBRE */

nombre.addEventListener(

"blur",

function(){

if(

nombre.value.length<=6 ||

!nombre.value.includes(" ")

){

error(

"errorNombre",

"Debe tener mas de 6 letras y un espacio"

);

}

}

);

nombre.addEventListener(

"focus",

()=>limpiar("errorNombre")

);


/* EMAIL */

email.addEventListener(

"blur",

function(){

let regex=/^\S+@\S+\.\S+$/;

if(

!regex.test(email.value)

){

error(

"errorEmail",

"Email invalido"

);

}

}

);

email.addEventListener(

"focus",

()=>limpiar("errorEmail")

);


/* PASSWORD */

password.addEventListener(

"blur",

function(){

let regex=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

if(

!regex.test(password.value)

){

error(

"errorPassword",

"Minimo 8 caracteres letras y numeros"

);

}

}

);

password.addEventListener(

"focus",

()=>limpiar("errorPassword")

);


/* REPETIR PASSWORD */

repetir.addEventListener(

"blur",

function(){

if(

repetir.value!=password.value

){

error(

"errorRepetir",

"No coincide"

);

}

}

);

repetir.addEventListener(

"focus",

()=>limpiar("errorRepetir")

);


/* EDAD */

edad.addEventListener(

"blur",

()=>{

if(

parseInt(edad.value)<18

)

error(

"errorEdad",

"Mayor o igual a 18"

);

}

);

edad.addEventListener(

"focus",

()=>limpiar("errorEdad")

);


/* TELEFONO */

telefono.addEventListener(

"blur",

()=>{

let regex=/^\d{7,}$/;

if(

!regex.test(telefono.value)

)

error(

"errorTelefono",

"Telefono invalido"

);

}

);

telefono.addEventListener(

"focus",

()=>limpiar("errorTelefono")

);


/* DIRECCION */

direccion.addEventListener(

"blur",

()=>{

let regex=/^(?=.*[A-Za-z])(?=.*\d).+\s.+$/;

if(

!regex.test(direccion.value)

)

error(

"errorDireccion",

"Direccion invalida"

);

}

);

direccion.addEventListener(

"focus",

()=>limpiar("errorDireccion")

);


/* CIUDAD */

ciudad.addEventListener(

"blur",

()=>{

if(

ciudad.value.length<3

)

error(

"errorCiudad",

"Ciudad invalida"

);

}

);

ciudad.addEventListener(

"focus",

()=>limpiar("errorCiudad")

);


/* CP */

cp.addEventListener(

"blur",

()=>{

if(

cp.value.length<3

)

error(

"errorCp",

"CP invalido"

);

}

);

cp.addEventListener(

"focus",

()=>limpiar("errorCp")

);


/* DNI */

dni.addEventListener(

"blur",

()=>{

let regex=/^\d{7,8}$/;

if(

!regex.test(dni.value)

)

error(

"errorDni",

"DNI invalido"

);

}

);

dni.addEventListener(

"focus",

()=>limpiar("errorDni")

);


/* BONUS HOLA */

nombre.addEventListener(

"keydown",

function(){

setTimeout(()=>{

document

.getElementById(

"tituloFormulario"

)

.innerText=

"HOLA "+nombre.value;

},0);

}

);


/* ENVIAR */

document

.getElementById(

"formularioSuscripcion"

)

.addEventListener(

"submit",

function(e){

e.preventDefault();

let errores=

document.querySelectorAll(

"small"

);

let mensaje="";

errores.forEach(

x=>{

if(

x.innerText!=""

)

mensaje+=

x.innerText+"\n";

}

);

if(

mensaje!=""

){

alert(mensaje);

return;

}

alert(

`

Nombre: ${nombre.value}

Email: ${email.value}

Edad: ${edad.value}

`

);

}

);