import User from "@/models/User"
import { connectToDB } from "@/middleware/mongoose"
var CryptoJS = require("crypto-js");

export async function POST(req){
    if(req.method == "POST"){
        const {name, email, password} = await req.json()
        console.log(name, "signup")
        console.log(email)
        console.log(password)
        try {
            await connectToDB()
            let u = new User({name, email, password: CryptoJS.AES.encrypt(password, "secret123").toString()})
        await u.save()
        console.log(u)
        return new Response(JSON.stringify(u), {status:201})
        } catch (error) {
            console.log(error)
        }
        
    }
    else {
    }
    return new Response(JSON.stringify("success"), {status:200})
}
