# Laboratorio 9: Estilos de Programacion
## Estilo de Programación "Things" (The Kingdom of Nouns)

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
