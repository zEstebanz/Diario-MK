---
title: "Node.js desde Cero"
date: "06-01-2024"
img: "https://zestebanz.github.io/my-gallery/public/img/dev-test/node/node.jpg"
subtitle: "Esteban Oller"
---

##1. Instalación de Node.js:

Primero, necesitas instalar Node.js en tu sistema. Puedes descargar la última versión desde el sitio web oficial de Node.js: [Node.js](https://nodejs.org/en)

##2. Crear tu primer archivo Node.js:

Crea un archivo con extensión .js (por ejemplo, app.js). Puedes usar un editor de texto como Visual Studio Code, Sublime Text o Atom. Escribe el siguiente código para imprimir "Hola, mundo":

```
console.log('Hola, mundo');
```

Guarda el archivo y ejecútalo desde la línea de comandos usando:

```
node app.js
```

##3. Entender los módulos de Node.js:

Node.js utiliza un sistema de módulos para organizar el código. Puedes crear tus propios módulos o usar módulos predefinidos. Aprende sobre require y module.exports.

```
// En un archivo llamado math.js
module.exports.suma = function(a, b) {
  return a + b;
};

// En tu archivo principal
const math = require('./math.js');
console.log(math.suma(2, 3)); // Deberías obtener 5

```

##4. Utilizar el sistema de gestión de paquetes (npm):

Node.js viene con npm (Node Package Manager). Puedes instalar paquetes y dependencias para tu proyecto. Por ejemplo, para instalar el framework web Express:

```
npm install express
```

##5. Crear un servidor web básico:

Utiliza Express para crear un servidor web simple

```
const express = require('express');
const app = express();
const puerto = 3000;

app.get('/', (req, res) => {
  res.send('Hola, este es mi servidor Node.js');
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});

```

##6. Aprender sobre asincronía en Node.js:

Node.js es conocido por su naturaleza asincrónica. Aprende sobre callbacks, Promesas y async/await.

##7. Explorar más módulos y herramientas:

Investiga sobre módulos populares como fs para operaciones de archivos, http para construir servidores HTTP, y otros módulos esenciales.

#Cursos recomendados:

##Nodejs Curso Práctico desde Cero (Javascript en el Backend):

<iframe width="100%" height="350" src="https://www.youtube.com/embed/i3OdKwuBjeM?si=2FTYEpRs_bL2SH23" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---

##Express Framework de Nodejs, Curso para principiantes (Javascript en el backend):

<iframe width="100%" height="350" src="https://www.youtube.com/embed/JmJ1WUoUIK4?si=MC4afW-AlqBFavdj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

##Nodejs & Mongodb CRUD, Aplicación Web Completa:

<iframe width="100%" height="350"src="https://www.youtube.com/embed/GVfAPWLkk0M?si=LT2W2mgA7_PD-93j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

##Nodejs React Mongodb Login y CRUD (Aplicación FullStack)

<iframe width="100%" height="350" src="https://www.youtube.com/embed/NmkY4JgS21A?si=xeE09zSxwAW8aBKK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

##Nodejs MySQL REST API, Desde cero a Despliegue en Railway

<iframe width="100%" height="350" src="https://www.youtube.com/embed/3dSkc-DIM74?si=HC0YwvXmHrgoLP9G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

##8. Práctica con proyectos pequeños:
La mejor manera de aprender es practicar. Intenta construir pequeños proyectos o participar en desafíos en línea para aplicar tus conocimientos.

---

##Agradecimientos.

Gracias al canal de Fazt y su aporte a la comunidad de desarolladores de software!

###Youtube de [Fazt](https://www.youtube.com/@FaztTech)