// Exemple API qui recupère des infos 

export function  getListeétudiantesFromApi ()  {
    return fetch('http://localhost/etudiants')
      .then((response) => response.json())
      .then((json) => {
        return console.log(json.movies);
      })
      .catch((error) => {
        console.error(error);
      });
  ;
    }