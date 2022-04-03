# Simple seconds counter with React.

Creando un contador de segundos con React. Usando Hooks.

### Pre-requisitos 📋

1. Ordenador o dispositivo movil.
2. Programa donde copiar el repositorio. (Gitpod, VisualStudioCode, Pycharm ....)
3. Navegador web donde visualizar el resultado del codigo.


## Construido con 🛠️

* [HTML5] 
* [CSS3]  
* [Javascript](https://www.javascript.com/) - Usado para generar interactividad del DOM.
* [Bootstrap v5.1.3](https://getbootstrap.com/) - Libreria para el diseño del HTML.
* [React 17.0.2](https://es.reactjs.org/) - Biblioteca de interfaz para Javascript


## Deployment

Para lanzar este proyecto introduce en la consola el codigo de la ventana inferior, posteriormente si no se muestra el resultado escibre localhost en el buscador.
```
$ npm install
```

```bash
  $ npm run start
```



## Estructura y explicación del codigo ⚙️

* La estructura del ejercicio se basa en componentes jsx de React.
* El componente principal es Tarjeta basadas en el componente del archivo card.jsx. Este componenete es una card de Bootstrap negra con un nico componente el cual es un prop de tipo number, que se pasara en el archivo home.jsx
* El archivo home.jsx. Dentro del componenete Home se ejecuta todo el codigo js para hacer funcionar el proyecto. Se utilizan los hooks de React (useState y useEffect). Se declara la variable "timer" dentro del hook usestate. Esta variable almacenara los segundos desde el renderizado de la pagina.
* el hook useEffect ejecutara una sola vez el comienzo del contador. Dentro del mismo se le ordena que cada 1000 milisegundos se sume 1 a la variable timer. O lo que es lo mismo, que se sumen los segundos. clearInterval limpia la accion de intervalo continuamente para que se sigan sumando segundos.
* Por ultimo en home.jsx se pasa la variable timer como prop en el componente Tarjeta. Este se divide entre lo que seria su posicion (cientos, miles, etc) y se saca el resto entre 10 para conseguir el intervalo 0-9.
* Finalmente en Index.js se importa Home y se renderiza.


## Autor ✒️

* **Jose Luis Gil** - *Navbar and Jumbotron* - [JoseLike](https://github.com/JoseLike)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/JoseLike/Simple-counter) quíenes han participado en este 



## Other features

- Automatic Code Formatting: Use of [Prettier](https://prettier.io/) for automatic code indentation and formatting.
- Error reporting: Use of [eslint](https://eslint.org/) for better error reporting.
- Hot Deploy: Use of [Webpack Development Server](https://webpack.js.org/configuration/dev-server/) for hot deploy and live reload.
- One-command publish of the code to github pages with `npm run deploy:github`.
- Babel 7 (really fast).

## Other features

- Automatic Code Formatting: Use of [Prettier](https://prettier.io/) for automatic code indentation and formatting.
- Error reporting: Use of [eslint](https://eslint.org/) for better error reporting.
- Hot Deploy: Use of [Webpack Development Server](https://webpack.js.org/configuration/dev-server/) for hot deploy and live reload.
- One-command publish of the code to github pages with `npm run deploy:github`.
- Babel 7 (really fast).
