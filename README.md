# Vite + React + TypeScript + TailwindCSS

- Aggiunto typescript
- Aggiunto tailwindCSS

# CatImage

dimostra utilizzo della cartella public

# WelcomeMessage

Parametri obbligatori, opzionali e valori di default

# Counter

Tramite parametri possibilità di scegliere il valore iniziare ed il valore di incremento

# RandomUser

aggiunta animazione di loading
aggiunto un simulatore di delay chiamata API per mostrare meglio il loading
aggiunto il concetto di funzione di cleanup per useEffect (per evitare il doppio loading nel caso strictMode ma ovviamente anche per tutto quello che ne consegue)

# RefVsState (componente nuovo)

con questo componente mostro la differenza tra useState e useRef (sfrutto il console.log per spiegarlo)

# Link

[questo è un link](https://www.google.it)

# codice

import { useEffect, useState } from "react";

```
type RandomUser = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
};
```
