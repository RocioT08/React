// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

const getImagen = async () => {
  try {
    const apiKey = "C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    // manejo del error
    console.error(error);
  }
};

//getImagen();

export const fetchDataAwait = async () => {
  try {
    const resp = await fetch("https://api.github.com");
    const data = await resp.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchUserDataAwait = async (userId) => {
  try {
    const resp = await fetch(`https://api.github.com/users/${userId}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    return error;
  }
};
