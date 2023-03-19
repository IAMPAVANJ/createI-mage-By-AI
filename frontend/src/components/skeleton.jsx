const Skeleton = ()=>{
   
    return(
        <div>
          <h1 className="shadow-lg p-3 mb-5 mt-3 bg-white rounded">ALL images are Result Of Artificial Intelligence</h1>
          <h2 className="text-White"> Search and Wait...</h2>
            {[...Array(1).keys()].map((index)=>{
                return(
                    <div key={index}>
                        <h3>Please Wait till Loading.....</h3>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden"></span>
                        </div>
                        <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )
                    
            })}
        </div>
    )
}
export default Skeleton;