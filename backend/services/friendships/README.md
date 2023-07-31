# Laboratorio 9: Estilos de Programacion
## 1. Estilo de Programación "Things" (The Kingdom of Nouns)

El estilo de programación "Things", también conocido como "The Kingdom of Nouns", es un enfoque orientado a objetos para organizar y estructurar el código. En este estilo, el problema se descompone en "cosas" (things) que tienen sentido dentro del dominio del problema. Cada "cosa" es una cápsula de datos que expone procedimientos para interactuar con el mundo exterior. La comunicación con los datos internos de una cosa siempre se realiza a través de estos procedimientos, nunca accediendo directamente a los datos.

Este enfoque promueve la encapsulación y la abstracción, lo que facilita el diseño modular y mantenible del software. Cada cosa representa un concepto en el dominio del problema y encapsula su estado y comportamiento, lo que permite cambios internos sin afectar el resto del sistema.

## Ejemplos de Clases relacionadas con el Estilo "Things"

### Clase: Amistad

Representa una relación de amistad entre dos usuarios.

```javascript
const AmistadSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.FriendId,
        required: true,
        trim: true,
    },
    usuario1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true,
        trim: true,
    },
    usuario2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true,
        trim: true,
    },
});
```

- Esta clase representa una "Amistad" como una cosa.
- Encapsula los datos relacionados con una amistad, como "id", "usuario1" y "usuario2".
- Expondría procedimientos para interactuar con los datos internos, como obtener los usuarios involucrados en la amistad.


### Clase: SolicitudDeAmistad

Representa una solicitud de amistad enviada de un usuario a otro.

```javascript
const SolicitudDeAmistadSchema = new mongoose.Schema({
    IDRemitente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true,
        trim: true,
    },
    IDDestinatario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true,
        trim: true,
    },
    EstadoDeSolicitud: {
        type: String,
        required: true,
        trim: true,
    },
});
```

- Esta clase representa una "Solicitud de Amistad" como una cosa.
- Encapsula los datos relacionados con una solicitud de amistad, como el "IDRemitente", "IDDestinatario" y "EstadoDeSolicitud".
- Expondría procedimientos para interactuar con los datos internos, como obtener el estado de la solicitud o los usuarios involucrados.

## Conclusiones
El estilo de programación "Things" se basa en la idea de dividir el problema en entidades que representan "cosas" en el dominio del problema. Cada cosa encapsula su propio estado y expone procedimientos para interactuar con ese estado. Este enfoque de diseño facilita la modularidad, la reutilización de código y la mantenibilidad del software, lo que lo convierte en una opción popular para desarrollar sistemas orientados a objetos.

## 2. Estilo de Programación "RESTful" 

El siguiente código muestra cómo configurar una aplicación web utilizando el marco de trabajo Express.js. Se explicará cómo este código se relaciona con el estilo de arquitectura RESTful y los principios que lo respaldan.

## Explicación y Relación con RESTful

1. **Creación de la aplicación web**: El código utiliza el módulo Express para crear la aplicación web `app`. Este es el punto de entrada principal para configurar y gestionar las rutas y controladores de la aplicación.
    
2. **Middlewares**: Los middlewares son funciones que se ejecutan antes de que se maneje una solicitud o después de que se genere una respuesta. En este caso, el código aplica tres middlewares:
    
    - `cors()`: Es un middleware que habilita la política de mismo origen y permite solicitudes de diferentes dominios. Esto es útil para permitir el acceso a los recursos de la API desde dominios externos.
        
    - `express.json()`: Es un middleware que analiza las solicitudes entrantes con carga útil JSON y convierte los datos en objetos JavaScript accesibles a través de `req.body`.
        
    - `fileUpload`: Este middleware se utiliza para permitir la carga de archivos en el servidor. Está configurado para almacenar los archivos temporales en un directorio llamado "upload".
        
3. **Rutas**: Se importa y utiliza el módulo de rutas `chatRoutes` para gestionar las rutas relacionadas con el chat. El enfoque aquí es organizar las rutas que se relacionan con recursos específicos (en este caso, operaciones de chat) en módulos separados, lo que sigue un enfoque RESTful de separación de recursos.
    
4. **Express Static**: Se utiliza el middleware `express.static` para servir archivos estáticos desde el directorio "client/build". Esto podría ser parte de la interfaz de usuario de la aplicación web, ya que generalmente los archivos estáticos contienen recursos como archivos CSS, JavaScript y archivos HTML.
    

- Las rutas están organizadas en módulos separados (separación de recursos).
- Se utilizan los middlewares adecuados para procesar las solicitudes entrantes y salientes.
- La aplicación está configurada para servir archivos estáticos (si es aplicable a la interfaz de usuario).

## Código:

```javascript
import express from "express";
import fileUpload from "express-fileupload";
import chatRoutes from "./routes/chat.routes.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import cors from 'cors';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// middlewares
app.use(cors());
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);

// routes
app.use(chatRoutes);
console.log(__dirname);
app.use(express.static(join(__dirname, "../client/build")));

export default app;
```

