import express from 'express'
const app = express()
app.use(express.json());

app.get('/', (req, res) => {
    res.send("server is running successfully")
})

app.post('/signup', (req, res) => {
    const {email, password} = req.body;
    if(!email){
        return res.json({success: false, message: "Email can not be empty"})
    }
    if(!password){
        return res.json({success: false, message: "password can not be empty"})
    }
    return res.json({success: true, message: "user signup successfully"})
})
app.listen(4000, () => {
    console.log('server is running on port 4000')
})