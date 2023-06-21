import UpskillRouter from "../routes/UpskillRouter"
import School1Router from "../routes/School1Router"

export const APPS = [
    {
        subdomain:"www",
        app: UpskillRouter,
        main:true
    },
    {
        subdomain:"school1",
        app: School1Router,
        main:true
    }
   
]