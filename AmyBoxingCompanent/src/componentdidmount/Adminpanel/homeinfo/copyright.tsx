import JoditReact from "jodit-react-ts";
import 'jodit/build/jodit.min.css';



interface CopyRighy{
    onchange_am:any,
    value_am:string,
    onchange_ru:any,
    value_ru:string,
    onchange_en:any,
    value_en:string,
}
export const Copyright:React.FC<CopyRighy>  = (props) =>{
    
  

    return(
        <div className="copy-right-cantrol">
              <JoditReact  onChange={props.onchange_am}     defaultValue={props.value_am} />
              <JoditReact  onChange={props.onchange_ru}     defaultValue={props.value_ru} />
              <JoditReact  onChange={props.onchange_en}     defaultValue={props.value_en} />
        </div>
    )
}
