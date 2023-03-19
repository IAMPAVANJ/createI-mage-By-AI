import "./imageResult.css"
import { BsFillImageFill } from "react-icons/bs";
import Swal from 'sweetalert2'
import Skeleton from "./skeleton";
const ImageResult = ({listImages,isLoading})=>{
    console.log(listImages)
    const isgetting = isLoading;
    let Data = listImages.data;
    if(Data===undefined){
        Data=[]
        Swal.fire({
            title:"<h2>You're Using PAVAN.Ai</h2>",
            html:"<p>कुछ और देख ले</p><b>Do Not search harmful or Adult Imagination</b>"
        })
    }
   
    return(
        <div className="container-fluid" id="imageContainer">
            
            <div id="imageCard">
                {isgetting?<Skeleton/>:Data.map((image,index)=>{
                    return(
                        <div className="imagekeeper" key={index}>
                            <img src={image.url} alt={<BsFillImageFill/>}/>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}
export default ImageResult;

