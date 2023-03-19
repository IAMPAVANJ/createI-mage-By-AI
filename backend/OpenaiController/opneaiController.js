const {Configuration,OpenAi, OpenAIApi} = require('openai')
let OPEN_API_KEY = "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"
const configuration = new Configuration({ 
    apiKey:OPEN_API_KEY
})

const openai = new OpenAIApi(configuration);


const generateImage = async(req,res)=>{
const {prompt} = req.body
console.log(prompt)
    try{
    const  respose = await openai.createImage({
        prompt,
        n:10,
        size:"512x512"
    })
const image_result = respose.data.data;

    return res.status(200).json({
    success:true,
    data:image_result
})
    }catch(err){
        return res.status(400).json({
            "message":err.message,
            "status":"failed"
        })
       
    }
}
module.exports = {generateImage}