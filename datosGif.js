const obtenerGifTrending = async () => {

    const gifsContainer = document.getElementById('gifs');
    const gifTemplate = document.getElementById('gif');       

    // Petición a la API de GIFs en tendencia usansdo limit
    const request = await fetch(
        "https://api.giphy.com/v1/gifs/trending?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v&limit=8"
    );
    
    //taranformacion a JSON
    const respuesta = await request.json();
    console.log(respuesta);

    // Recorre los GIFs obtenidos
    respuesta.data.forEach(gif => {
        // Clona la plantilla
        const newGifCard = gifTemplate.cloneNode(true);

        // Selecciona el <img> dentro de la tarjeta y le asignamos la URL
        const img = newGifCard.querySelector('img');
        img.src = gif.images.fixed_height.url;
        img.alt = gif.title;

        // Agrega la tarjeta clonada al contenedor
        gifsContainer.appendChild(newGifCard);
    });

    // Elimina la plantilla original 
    gifTemplate.remove();
};
obtenerGifTrending();

