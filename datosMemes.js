const obtenerMemes = async () => {

    const memesContainers = document.getElementById('list-memes')
    const memTemplate = document.getElementById('meme')

    // FETCH para llamar a una API, también axios, AWAIT 
    //verificar si la API será publica o privada
    const request = await fetch("https://api.imgflip.com/get_memes") 

    const respuesta = await request.json() //convertir a json

    // para consultar
    // después de respuesta. se coloca que quieres visualizar, en este caso success
    console.log(respuesta.data.memes[0].url); 
    
    //
    respuesta.data.memes.slice(0,8).forEach(meme => {
        //variables
        const newMemeCard = memTemplate.cloneNode(true);
        const img = newMemeCard.querySelector('img'); //agrega un selector de tipo img
        img.src=meme.url; //etiqueta de la url
        memesContainers.appendChild(newMemeCard); //en ese contenedor aplicar la img
    });
    //para eliminar la plantilla
    memTemplate.remove();
};
obtenerMemes();


