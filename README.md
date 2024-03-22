Como Ejecutar la aplicacion?
Instalar Dependencias:
Asegúrate de Tener Node.js y npm instalados en tu dispositivo. 

Instalar Expo
Instalar Expo CLI. Puedes hacerlo ejecutando el siguiente comando
npm install -g expo-cli

Instalar Dependencias del Proyecto
Ve al directorio del proyecto en la línea de comandos y ejecuta:
npm install

Ejecutar la Aplicación
expo start

Puedes escanear el código QR con la aplicación Expo Go en tu dispositivo o ejecutar la aplicación en un emulador.
![Login-Cinedir](https://github.com/Urielcont/CineDir-Login-and-start-page-/assets/128828694/d9dfaceb-9d85-4650-8ea4-23f12ede3779)

Ingresar Credenciales Usario="root" y contraseña="1234" para acceder a pagina principal
![Pagina-Principal-Cinedir](https://github.com/Urielcont/CineDir-Login-and-start-page-/assets/128828694/09e4eee8-e833-4415-b5a1-7ae3833b8cb5)

Deslizar carousel para mostrar imagenes 

----CONEXION A BASE DE DATOS-----
Se uso MongoDB para almacenar el titulo y descripcion de la pelicula:
-Se creo un proyecto de express en la carpeta server dentro del proyecto
---------rutas:
api/Datos-- Obtener el ultimo registro de la base de datos
api/Agregar-- Agregar nuevo titulo y descripcion a la base de datos
Ultimo Registro:
![image](https://github.com/Urielcont/CineDir-Login-and-start-page-/assets/128828694/c846b9da-8707-481c-b2c8-69c83b403d09)
Mostrado en la app:
![app cinedir](https://github.com/Urielcont/CineDir-Login-and-start-page-/assets/128828694/b943a879-1750-46ad-884f-abd280f331a3)




