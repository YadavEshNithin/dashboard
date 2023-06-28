import User from "@/models/User"
import { connectToDB } from "@/middleware/mongoose"
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

export async function POST(req) {
    if (req.method == "POST") {
        const { name, email, password } = await req.json()
        try {
            await connectToDB()
            let user = await User.findOne({ "email": email });
            console.log(email,"login")
            console.log(password)
            console.log(user.email)
            console.log(user.password)

            const bytes = CryptoJS.AES.decrypt(user.password, 'secret123');
            let decryptedData = (bytes.toString(CryptoJS.enc.Utf8));
            console.log(decryptedData,"dec")
            if (user) {
                if (email == user.email && password == decryptedData) {
                    var token = jwt.sign({
                        email: user.email, name: user.name
                    }, 'jwtsecret',{
                        expiresIn:"2d"
                    });
    
                    return new Response(JSON.stringify({success: true}), {status:200}, token)
                }
                else {
                    return new Response(JSON.stringify({success: false, error:"invalid credentials"}), {status:200})
    
                }
            }
            else {
                return new Response(JSON.stringify({success: false, error:"no user found"}), {status:200})
            }
            
        } catch (error) {
            return new Response(JSON.stringify({success: false, error:"Invalid Credentials"}), {status:200})
        }
        

    }
    else {
    }
    return new Response(JSON.stringify({success: true,}), {status:200})
}
