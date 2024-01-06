---
title: "MongoDB desde Cero"
date: "06-01-2024"
img: "https://s3.amazonaws.com/info-mongodb-com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"
subtitle: "Esteban Oller"
---

# Aprendiendo MongoDB

## Instalación

- Descarga e instala MongoDB desde [el sitio oficial de MongoDB](https://www.mongodb.com/try/download/community).
- Sigue las instrucciones de instalación para tu sistema operativo.

## Iniciar el Servidor MongoDB

- Inicia el servidor MongoDB ejecutando `mongod` en la terminal o mediante el servicio si lo instalaste así.

## Interactuar con MongoDB

- Abre otra terminal e inicia el shell de MongoDB con `mongo`.

## Crear una Base de Datos

- Crea una nueva base de datos con `use nombreDeLaBaseDeDatos`.

## Crear Colecciones

- Crea una colección con `db.createCollection("nombreDeLaColeccion")`.

## Insertar Datos

- Usa `insertOne()` o `insertMany()` para insertar datos en una colección.

```javascript
db.usuarios.insertOne({
  nombre: "Juan",
  edad: 25,
  ciudad: "Ciudad de México",
});
```

## Consultar Datos

- Utiliza `find()` para consultar datos en una colección.

```
db.usuarios.find();
```

## Actualizar y Eliminar Datos

- Utiliza `updateOne()`, `updateMany()`, `deleteOne()`, y `deleteMany()` para actualizar y eliminar datos.

### Actualizar Datos

```
db.miColeccion.updateOne(
  { filtro: valorFiltro },
  { $set: { campoAActualizar: nuevoValor } }
);
```

###Eliminar Documento

```
db.miColeccion.deleteOne({ filtro: valorFiltro });
```

###Eliminar Múltiples Documentos

```
db.miColeccion.deleteMany({ filtro: valorFiltro });
```

Recuerda ajustar "miColeccion", "filtro", "valorFiltro", "campoAActualizar" y "nuevoValor" según tus necesidades.
