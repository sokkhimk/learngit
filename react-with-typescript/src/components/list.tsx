import React from "react";
interface IProps {
    people:{
      name: string
      age: number
      url: string
      note?:string
    }[]
  }
const List=({people}:IProps )=>{
    return(
        <div>
            i am a list
        </div>
    )
}
export default List