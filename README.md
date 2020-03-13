## Missing Numbers

Url
https://www.hackerrank.com/challenges/missing-numbers/problem

## Solución del problema

```javascript

    const removeDuplicate = (value, index, self) => {
        return self.indexOf(value) === index;
    }

    // Complete the missingNumbers function below.
    function missingNumbers(arr, brr) {
        arr.map(c => { 
                var i = brr.indexOf(c);
                brr.splice(i, 1) 
            });
        return brr.filter(removeDuplicate)
            .sort((c, d) => parseInt(c) - parseInt(d));
    }
```

## Proyecto

No entendí muy bien la forma de solucionarlo, así que se montó un proyeto en React con [hooks](https://es.reactjs.org/docs/hooks-reference.html) + [TypeScript](https://www.typescriptlang.org/)

El proyecto no tiene maquetación ni diseño

## Donde esta el código importante

La solución aplicada del proyecto se puede encontrar en la ruta:

    src/app/core/hooks/index.tsx
        - useMissingNumbers() / handleMissingNumbers()

Tiene alguna funciones adicionales:

    1. funcion de procesamiento de los datos de entrada
    2. extraer los `array` que se mutarán 

## Como correr el proyecto

    1. instalar paquetes de npm
    2. correr `yarn start` o `npm run start`

## Pruebas unitarias locales

    Se crearon varias pruebas unitarias locales con jest donde probamos el hook que se creo para la solución del ejercicio

    se corren con `yarn test` o `npm run test`

    Las pruebas unitarias con las mismas que corren en el sitio de "hackerrank"
    
    ver: 
        tests: __tests__/hooks/useMissngNumbers.test.tsx
        mocks: __mocks__/useMissngNumbers.mock.tsx


