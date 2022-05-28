console.log('probando probando')




const getIndicador = async () => {
    const url = 'https://api.waqi.info/feed/peru/?token=cec3589c88e9d286bb546b7ff16ca43e8aeb796b'
    const res = await fetch(url)

    console.log(res)
    const data = await res.json()

    console.log(data)
   SetGu (data.data) 
}

 const SetGu = (data) => {
     const etiquetas = Object.keys(data.iaqi)
      //console.log(etiquetas)
     const converData = Object.values(data.iaqi).map((item) => item.v)
     console.log(converData)


     const dataConfig = {
         labels: etiquetas,
         datasets: [{
             etiqueta: 'guardado',
             backgroundColor: 'rgb(241, 48, 210)',
             borderColor: 'rgb(241, 48, 210)',
             data: converData

         }]
     };

     const config = {

        type: 'line',
        data: dataConfig, 
        options: {
            scales:{
                y: {
                    beginAtZero: true
                } 
            }
           
        }
     };



     const myChart = new Chart (
       document.getElementById('myChart'), 
       config 
     )

 }

 getIndicador()

 