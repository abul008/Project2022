import React from "react";
import JoditReact from "jodit-react-ts";
import 'jodit/build/jodit.min.css';



interface Jodit{
    onchangeJodit:(value: string) => void,
    value:string,
    label:string,

}
export const Jodit:React.FC<Jodit> = ({onchangeJodit,value,label})=>{


    return( 
   
      <div data-testid="value" className="jodic-cantrol">
          <label>ինֆորմացիա -- {label}</label>
         <JoditReact  onChange={onchangeJodit}    defaultValue={value ? value : `test${label}`} />
      </div> 
    )
}