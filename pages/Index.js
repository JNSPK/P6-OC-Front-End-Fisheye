import PhotographerApi from '../scripts/Api/photographersApi.js';
import PhotographerCard from '../scripts/Templates/photographerCard.js';

new PhotographerApi()
  .getPhotographers()
  .then((photographers) => {
    PhotographerCard.buildAll(photographers);
  })
  .catch((err) => {
    console.log(err);
  });
