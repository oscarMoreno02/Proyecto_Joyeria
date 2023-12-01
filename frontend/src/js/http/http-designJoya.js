export async function obtenerTipos() {
    try {
        let token=sessionStorage.getItem('token')
        const options = {
            method: "GET",
            headers: {
                "Authorization": "Bearer"+token,
                'Content-Type': 'aplication/json'
            },
            
        }
        const apiUrl2 = 'http://127.0.0.1:8000/api/tipos'
        const response = await fetch(apiUrl2,options);
        if (!response.ok) {
            throw new Error('No se pudo obtener las categorias');
        }

        const data = await response.json();

        return data
    } catch (error) {
        return error
    }

}

export async function guardarNuevaJoya(joya) {

    try {
        let token=sessionStorage.getItem('token')
        let url = 'http://127.0.0.1:8000/api/joyas/nueva'
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(joya)
        }
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('No se pudo obtener las categorias');
        }

        const data = await response.json();

        return data
    } catch (error) {
        return error
    }
}