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
        n:5,
        size:"1024x1024"
    })
const image_result = respose.data.data;

res.status(200).json({
    success:true,
    data:image_result
})
    }catch(err){
        console.log(err)
    }
}
module.exports = {generateImage}