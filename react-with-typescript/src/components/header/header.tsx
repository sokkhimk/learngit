import { url } from 'inspector';
import React from 'react';
import {LogoImage} from "../shared";
interface MenuItem{
  name:string;
  url:string;
  
} 
export const HeaderPage:React.FC = ()=>{
 const Menulist:MenuItem[] = [
   {
     name:"home",
     url:"/"
   },
   {
     name:"about us",
     url:"/aboutus"
   },
   {
     name:"contactus",
     url:"/contactus"
   } 
 ];
  return (
   
    <div>
      <div>
        <tr><th><LogoImage imageurl="logo192.png"/></th></tr>
        <tr><th>Name</th></tr>
   
 
</div>  
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Menu</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          
        </li>
          {Menulist.map(menuItem =>{
            return(
              <li className="nav-item">
                <a className="nav-link" href={menuItem.url}>{menuItem.name}</a>
              </li>
            );
          })}
    
         
    
      </ul>
    </div>
  </div>
</nav>
      
    </div>
  );
}
