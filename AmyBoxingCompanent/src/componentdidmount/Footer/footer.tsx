import "./footer.css";
import { Footerlink } from "./footelink";
import { Link } from "react-router-dom";


interface Footerdata{
    footerhref:string,
    footername:string
}

export const Footer = () =>{
   
let footerdata:Footerdata[] = [
    {
        footerhref:"hello",
        footername:"hellos" 
    },
]

console.log(footerdata.map(data=>data.footerhref))
    return(
        <div className="footer-wrapper">
            <div className="footer-top-section"> 
                <div className="footer-link">
                   <Footerlink footerdata={footerdata} />
                </div>
                 <div className="footer-social-media"></div>
            </div>
            <div className="footer-bottom-section">
                 
            </div>
        </div>
    )
}
