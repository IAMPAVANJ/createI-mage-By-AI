const Skeleton = ()=>{
   
    return(
        <div>

            {[...Array(5).keys()].map((index)=>{
                return(
                    <div key={index}>
                        <h3>Please Wait till Loading.....</h3>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden"></span>
                        </div>
                        <div className="spinner-grow text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-secondary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-success" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-warning" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-info" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-light" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-dark" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
                    </div>
                )
                    
            })}
        </div>
    )
}
export default Skeleton;