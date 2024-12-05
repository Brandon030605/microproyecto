import { Response } from "express";
export const handlercatch = (error:unknown, res:Response
    action:  String )=>{
    console.log(error)
    res.status(500).json({
        "mg": 'ocurrio un error inesperado al intentar ${action}'
    });
}