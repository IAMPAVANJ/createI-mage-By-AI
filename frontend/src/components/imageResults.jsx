import "./imageResult.css"
import { BsFillImageFill } from "react-icons/bs";
import Skeleton from "./skeleton";
const ImageResult = ({listImages,isLoading})=>{
    const isgetting = isLoading;
    let Data = listImages.data;

    return(
        <div className="container-fluid" id="imageContainer">
            <div id="imageContainer">
                {isgetting?<Skeleton/>:Data.map((image,index)=>{
                    return(
                        <div className="container" key={index}>
                            <img src={image.url} alt={<BsFillImageFill/>}/>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}
export default ImageResult;