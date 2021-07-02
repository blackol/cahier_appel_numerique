// Exemple API qui recupère des infos 

export function getFilmsFromApiWithSearchedText (text, page) {
    const url = ''
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
    }