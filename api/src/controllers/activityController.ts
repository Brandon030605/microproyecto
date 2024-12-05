import { Request, Response } from "express";
import { activitymodel } from "../../models/activities";
import { handlercatch } from "../../Tools";
import { usermodel } from "../../models/models";

export default {
    create:async (req: Request, res: Response): Promise<void> => {
        try {
            const tittle = req.body.tittle
            const endDate = req.body.endDate
            const description = req.body.description
            const UserId = req.body.UserId
            if(!tittle||!endDate||!description||!status||!UserId){
                res.status(400).json({msg:"Faltan parametros para crear la actividad"})
                return;
            }
    
            const activity = await activitymodel.create({
                tittle,
                endDate,
                description,
                status,
                UserId
            });
    
            res.status(200).json({msg:"Tarea almacenado con exito"});
            console.log("Actividad", activity)
    
            //validar exst ususarui]
    
            const user = await  usermodel.findById(UserId);
            if(!user){
                res.status(400).json({msg:"El usuario que intenta crear la actividad no existe"})
                return;
            }
            
            } catch (error) {
                console.log("El Error ocurrido", error);
                res.status(500).json({msg:"Ocurrio un error al Crear la tarea"});
                return;
            }
        }
    }