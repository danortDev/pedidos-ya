Este proyecto fue creado a partir de [Create React App](https://github.com/facebook/create-react-app).

## Primeros pasos
Para poder correr el proyecto debes seguir los siguientes pasos:

- Configurar proxy para acceder al API (el app hara los requests a localhsot:8080):

```
git clone https://github.com/MartinGian/corsinator.git
cd corsinator
npm install
node index --port=8080 --url=stg-api.pedidosya.com
```

- Se debe crear un archivo `.env.local` cons las siguientes variables:
```
REACT_APP_CLIENT_ID=<INSERT_CLIENT_ID_HERE>
REACT_APP_CLIENT_SECRET=<INSERT_CLIENT_SECRET_HERE>
REACT_APP_GOOGLE_MAP_KEY=<INSERT_GOOGLE_MAPS_API_KEY_HERE>

```

- Para instalar dependencias e iniciar la app:
```
npm install
npm start
```


## Algunas consideraciones:
- Instale material-ui para tener material inputs por falta de tiempo, normalmente preferiria implementar TextField personalmente.

- Instale `tinyColor` para manejar la paletta de colores aunque sea algo exagerado para este caso, solo para mostrar como manejaria los colores en un proyecto, es una de las cosas que suelen volverse dificil de mantener cuando una app escala. (es bueno especialmente si se quiere customizar de alguna manera la app).

- Aunque solo necesitaba el form de login use `redux-form` por usar redux.

- Por tiempo solo agregue un test basico haciendo un snapshot a un shallow del Home. Para probar propiamente tendria que configurar un mock de styletron y react-router-dom.
