import React from "react";
import {FooterPage} from "../footer";
export const FooterLayout:React.FC = ()=>{
    return (
        <div>
           <footer className="footer">
               <div className="row">
               <div className="footer-col">
        <h4>Footer</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">contact</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Privacy</a></li>
        </ul>
      </div>

               </div>
           </footer>
        </div>
    );
}
 {/* <div>footer
            <ul className="list-group">
            <li className="list-group-item list-group-item-dark">Footer Menu</li>
            <li className="list-group-item list-group-item-dark">Footer Menu</li>
            </ul>   
        </div> */}