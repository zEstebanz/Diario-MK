---
title: "MariaDB en Termux"
date: "19-05-2024"
img: "https://raw.githubusercontent.com/zEstebanz/Diario-MK/455cb45e40b58f63bb6b85e8a7338690a9c99d2a/public/img/mariadb-en-termux/port.png"
subtitle: "Esteban Oller"
---

## Introducción:

Termux es una poderosa aplicación que proporciona un entorno de terminal basado en Linux en dispositivos Android, permitiendo a los usuarios ejecutar una amplia gama de herramientas y software directamente desde sus teléfonos o tabletas.

MariaDB es una de las bases de datos relacionales más populares y robustas disponibles, conocida por su rendimiento, escalabilidad y compatibilidad con MySQL.

Este artículo te guiará paso a paso a través del proceso de instalación y configuración de MariaDB en Termux, desde la actualización del entorno hasta la ejecución de consultas básicas. Al final de este tutorial, tendrás un servidor de bases de datos MariaDB completamente funcional corriendo en tu dispositivo Android, listo para ser utilizado en tus proyectos de desarrollo o para fines educativos.

## Instalación:

Primero debes tener Termux, históricamente Termux se instalaba desde Google Play Store, pero debido a las fallas de actualizaciones y problemas con permisos en las nuevas versiones de Android, no se recomienda descargarlo desde allí.

El método recomendado es descargarlo desde F-Droid (F-Droid es una plataforma de distribución de aplicaciones de código abierto para Android. La versión de Termux en F-Droid está actualizada y es la más recomendada para una instalación segura y confiable)

### Instalar F-Droid:

1. Abre el navegador de tu dispositivo Android y ve a la página oficial de F-Droid:

- F-Droid: [https://f-droid.org.](https://f-droid.org.)

- Descarga el archivo APK de F-Droid e instálalo en tu dispositivo. Es posible que necesites habilitar la opción para instalar aplicaciones desde fuentes desconocidas en los ajustes de seguridad de tu dispositivo.

2. Buscar e instalar Termux:

- Abre la aplicación F-Droid.
- Usa la barra de búsqueda para encontrar "Termux".
- Selecciona Termux de los resultados de búsqueda y toca el botón de instalación.

### Configuración Inicial de Termux

1. Abrir Termux:
2. Actualizar los paquetes de Termux
   -Es una buena práctica asegurarse de que todos los paquetes y repositorios estén actualizados la primera vez en usar termux y periodicamente.
   -Ejecuta los siguientes comandos en Termux:

```
pkg update && pkg upgrade

```

### Instalar Paquete

1. Instalar el paquete "mariadb" usuando el siguiente comando:

```
pkg install mariadb
```

2. Inicializar el directorio de datos MariaDB

```
mysql_install_db
```

3. Iniciar el Servidor MariaDB

- Existe 3 formas de hacerlo para que no tengas algun problema

- Primera forma de hacerlo:

```
mysqld_safe
```

- Segunda forma:

```
mysqld_safe -u root &
```

- Tercera forma:

```
mysqld_safe --datadir=/data/data/com.termux/files/usr/var/lib/mysql &
```

4. Configurar la Base de Datos

- Para habilitar el acceso a la cuenta root, primero debes iniciar sesión con tu nombre de usuario de Termux:

```
mysql -u $(whoami)
```

5. Cambiar la Contraseña del Usuario Root

- Una vez dentro de la consola de MariaDB, cambia la contraseña del usuario root:

```
use mysql;
set password for 'root'@'localhost' = password('YOUR_ROOT_PASSWORD_HERE');
flush privileges;
quit;
```

6. Verificar el Acceso a la Cuenta Root

- Para verificar que puedes iniciar sesión como root, usa el siguiente comando y proporciona la contraseña que configuraste en el paso anterior:

```
mysql -u root -p
```

- Te pedirá la contraseña que configuraste anteriormente. Una vez ingresada la contraseña, tendrás acceso a la consola de MariaDB donde podrás ejecutar comandos SQL.

### Comandos Básicos de MariaDB

- Mostrar bases de datos:

```
SHOW DATABASES;
```

- Crear una nueva base de datos:

```
CREATE DATABASE nombre_base_de_datos;
```

- Usar una base de datos:

```
USE nombre_base_de_datos;
```

- Mostrar tablas en la base de datos seleccionada:

```
SHOW TABLES;
```

- Crear una nueva tabla:

```
CREATE TABLE nombre_tabla (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  edad INT
);
```

- Insertar datos en una tabla:

```
INSERT INTO nombre_tabla (nombre, edad) VALUES ('Juan', 25);
```

- Seleccionar datos de una tabla:

```
SELECT * FROM nombre_tabla;
```

### Conclusión

Siguiendo estos pasos, habrás instalado y configurado MariaDB en Termux. Esto te permitirá gestionar bases de datos de manera eficiente directamente desde tu dispositivo Android.

Si tienes alguna duda o problema con la instalación o el uso de MariaDB en Termux, no dudes en consultarme. Gracias por ver este Artículo.