import mqtt from "mqtt";
import bcryp from "bcrypt";

export default (io:any,socket:any)=>{
    const getDataOfSen=async(id:number)=>{
        console.log("id",id)
        socket.join(id)
        const mqttBroker = "mqtt://52.5.255.119/mqtt-web/"; // ip o dominio
        const mqttOptions = {
            clientId: 'mqttjs_' + bcryp.hashSync(Math.random().toString(16),10),
            username: "", // usuario MQTT
            password: "", //  contraseña MQTT
        };
        // todo implementar petecion a prodcuto par actualizar su rango
        const topic="safeplace/"+id+"/ultrasonic"
        const mqttClient = mqtt.connect(mqttBroker, mqttOptions);
        mqttClient.on('connect', () => {
            console.log('Conectado al servidor MQTT');
            mqttClient.subscribe('safeplace/'+id+'/ultrasonic');
          });
          
          mqttClient.on('message', (topic, message) => {
              let dataString = message.toString()
              const jsonData = JSON.parse(dataString);
              
              io.of("/proximidad").to(id).emit("getproximidad:senddata",jsonData)
              if(jsonData.dang){
                console.log("dangerous")
                   mqttClient.publish('safeplace/'+id+'/dangerous', JSON.stringify({dangerous:1}));
              }
          });

          
          
    }

    socket.on("getproximidad:getdata",getDataOfSen)
    // socket.on("joinRoom",(idRoom:any,usuario:any) => {
    //     socket.join(idRoom)
    //    console.log("usuario",idRoom)
    // })
}