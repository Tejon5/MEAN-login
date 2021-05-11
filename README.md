<h1>Prueba Tecnica para Asante</h1>

<h3>Desarrollo</h3>
<p>Para esta Prueba Tecnica se utilizaron el Stack de tecnologias de MEAN.</p>


<h5>Backend</h5>
Desde el Back se puede operar con una base de datos local para levantar el servidor, esta configurado con MongoDB, Express, y Nodejs.
En el mismo se ha configurado con JWT (Json Web Token) la autenticacion del usuario para ingresar a la pagina, para que, siendo el Email y la contraseña del mismo correcta pueda acceder a las secciones de la pagina donde le corresponden.En caso de no ser alguno de sus datos correctos, no podra acceder al sitio.

<h5>Frontend</h5>
Para la seccion del Frontend se elaboro con Angular
Existen dos formas de acceder al mismo, con un SIGNIN y SIGNOUT, una vez accediendo al sitio se podra tener acceso a las private-tasks, no hay forma de no acceder sin validar los campos de ingreso
Además, se podra hacer un LOGOUT desde el sitio el cual eliminara el Token de validacion que se genera al entrar en al pagina.


<h5>Levantar la app</h5>
Para iniciar la app tener instalado de manera local base de datos de MONGODB.
En una terminal escribir mongod.
Abrir otra terminal y parado en la carpeta backend introducir npm i, y una vez finalizado npm start.
Abrir una terminal mas para el front, y en la carpeta frontend, teniendo instalado la version global de Angular, introducir npm i, y luego ng serve. Abrir en el browser localhost:4200.
