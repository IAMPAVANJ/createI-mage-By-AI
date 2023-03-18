const {Configuration,OpenAi, OpenAIApi} = require('openai')

const configuration = new Configuration({ 
    apiKey: process.env.OPEN_API_KEY
})

const openai = new OpenAIApi(configuration);


const generateImage = async(req,res)=>{
const {prompt} = req.body
console.log(prompt)
    try{
    const  respose = await openai.createImage({
        prompt,
        n:2,
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