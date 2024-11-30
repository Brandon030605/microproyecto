import mongoose from "mongoose";
import app from "./app";
async function main(){
     try{
        await mongoose.connect("mongodb://localhost:27017/microproyecto");
        console.log("conexion exitosa")
        app.listen(4000, () =>{
            console.log("aplicacion iniciada")
        })

     }catch(error){
        console.log("no jalo", error)
     }
}
main()