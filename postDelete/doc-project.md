---
title: "Documentación Diario-MK"
subtitle: "Esteban Oller"
date: "10-01-2023"
img: "https://zestebanz.github.io/my-gallery/public/img/projectos/12.png    "
---

##Introducción

El proyecto "diario-mk" es una aplicación basada en Next.js que permite crear y gestionar un diario personal utilizando el formato Markdown para la escritura de entradas. Esta documentación proporciona información detallada sobre el propósito, la funcionalidad y las tecnologías utilizadas en el desarrollo del proyecto.

##Tecnologías Utilizadas
El proyecto se ha desarrollado utilizando las siguientes tecnologías:

**Next.js:** Framework de React que facilita la creación de aplicaciones web modernas y rápidas.

**Markdown:** Lenguaje de marcado ligero utilizado para formatear el texto de las entradas del diario.

##Instalación y Configuración
A continuación se detallan los pasos para instalar y configurar el proyecto en un entorno local:

1. Clonar el Repositorio:

```
https://github.com/zEstebanz/Diario-MK.git
cd diario-mk
```

2.Instalar Dependencias:

```
npm install
```

3.Ejecutar la Aplicación:

```
npm run dev
```

##Explicación del Código

###Módulos Utilizados
En este fragmento de código, se utilizan tres módulos fundamentales para el funcionamiento del sistema:

```
import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";

```

- **fs (File System):** Proporciona funcionalidades para trabajar con el sistema de archivos. Se usa para leer la lista de archivos en el directorio de posts.

- **matter (gray-matter):** Un módulo que analiza la metadata de los archivos Markdown. Esto permite extraer información clave como el título, la fecha, la imagen, etc.

- **PostMetadata:** Importa un tipo de dato personalizado desde un archivo llamado "PostMetadata", el cual se utiliza para estructurar y tipar la metadata de los posts.

##Función getPostMetadata

La función getPostMetadata realiza las siguientes tareas:

```
const getPostMetadata = (): PostMetadata[] => {

```

- **Declaración de la función:** Define una función llamada getPostMetadata que no requiere argumentos y devuelve un array de objetos PostMetadata.

```
  const folder = "posts/";
  const files = fs.readdirSync(folder);

```

- **Definición de la Carpeta y Lectura de Archivos:** Especifica la carpeta donde se encuentran los archivos de posts ("posts/") y lee la lista de archivos en esa carpeta usando fs.readdirSync.

```
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

```

- **Filtrado de Archivos Markdown:** Filtra la lista de archivos para incluir solo aquellos que tienen la extensión ".md", indicando que son archivos Markdown.

```
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      img: matterResult.data.img,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

```

- **Lectura y Procesamiento de Archivos Markdown:** Para cada archivo Markdown, lee su contenido utilizando fs.readFileSync, y luego utiliza gray-matter para extraer la metadata del archivo. La metadata se almacena en un objeto con propiedades como title, date, img, subtitle, y slug, las cuales se obtienen del resultado de gray-matter.

```
  return posts;
};
```

- **Devolución de Resultados:** La función devuelve un array de objetos PostMetadata, que contiene la metadata de cada archivo Markdown encontrado en la carpeta "posts/".
