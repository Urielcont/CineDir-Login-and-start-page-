const {Peliculas} = require('../model/pelicula.model')


exports.MostrarDatos=async(req,res)=>{
    try {
        const peli = await Peliculas.findOne().sort({ $natural: -1 }).limit(1); // Busca el último documento y selecciona solo el campo 'nivel_ph'
        if (!peli) {
            return res.status(404).json({ message: "No se encontraron datos" });
        }
        res.json(peli); // Devuelve solo el valor de 'ml Salidos' del último documento
    } catch (error) {
        console.error("Error al obtener el último valor:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

exports.agregarDato=async(req,res)=>{
    try{
        const {titulo, descripcion}=req.body

        const peli= new Peliculas({
            titulo:titulo,
            descripcion:descripcion
        })
        await peli.save()
        res.status(201).json({ message: 'Datos Guardados', peli });    
    }catch(error){
        console.log(error)    
    }

}