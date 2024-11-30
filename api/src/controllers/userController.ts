
import { Models } from "mongoose";
import { json } from "stream/consumers";

export default {
    sign: (req: Request, res: Response): promise<void>=>{
        try{
           const name = req.body.name;
           const email = req.body.email;
           const password = req.body.password;
           const rol = req.body.rol;
           if(!name || !email || !password || !rol){
            res.status(400)json({
                "msg":"parametros invalidos"
            })
           }
           
        }catch (error){
            console.log(error)
            res.status(500).json({
                "msg": "ocurrio un error"
            });
            return;
        }
    }
}