import React from "react";
interface image {
  pic:string;
  desc:string;
}
export const BodyPage:React.FC = ()=>{
  const img:image[]=[
    {
      pic:"",
      desc:""
    },
  ]
  return(
    
    <div>
  {
        img.map(Image=>{
          return(
            <div className="row">
              <div className="col-md-3">
              <div className="card">
              <img src="https://www.womansworld.com/wp-content/uploads/2019/07/funny-cat-tongue.jpg" />
              <h5 className="card-title">name</h5>
            </div>
              </div>
              <div className="col-sm-3">
              <div className="card">
              <img src="https://www.womansworld.com/wp-content/uploads/2019/07/funny-cat-tongue.jpg"  />
              <h5 className="card-title">name</h5>
            </div>
              </div>
             
            </div>
          
          )
        })
      } 
    </div>
    
      
  
  
    
  );
  
}