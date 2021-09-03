import React from "react";
import {HeaderLayout} from "./";
import { BodyLayout } from "./body-layout";
import { FooterLayout } from "./footer-layout";
import {MenuLayout} from "./menu-layout"

export const MasterLayout:React.FC = ()=>{
    return (
        
       <>
            <HeaderLayout/>
            <BodyLayout/>
            <FooterLayout/>
            <MenuLayout/>
       </>        
    );
}