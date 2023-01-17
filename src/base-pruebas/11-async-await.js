

export const getImagen = async() => {

    try {

        const apiKey = 'QrMMbXlLty9ZBptQ8VBiaZ1Uw0zMCpf2';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        //console.error(error)
        return 'No se encontró la imágen';
    }
    
    
    
}

getImagen();



