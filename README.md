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
NODE_PATH=src
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
-
