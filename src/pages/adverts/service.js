import client from '../../api/client';

const advertsUrl = '/api/v1/adverts';

export const getLatestAdverts = () => {
  const url = advertsUrl;
  return client.get(url)
    .then(response => response.data)
    .catch(error => {
      console.error("Error al obtener los anuncios: ", error);
      throw error;
    });
};

export const createAdvert = advert => {
  const url = advertsUrl;
  const config = {
    headers: {
      'Content-Type': undefined, // Esto permitirá que el navegador establezca el Content-Type correcto para FormData
    },
  };
  return client.post(url, advert, config);
};

export const getAdvert = advertId => {
  const url = `${advertsUrl}/${advertId}`;
  return client.get(url);
};

export const deleteAdvert = (advertId) => {
  const url = `${advertsUrl}/${advertId}`;
  return client.delete(url);
};



