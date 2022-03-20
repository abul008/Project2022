import "./footer.css";
import { Footerlink } from "./footelink";
import { Link } from "react-router-dom";


interface Footerdata{
    footerhref:string,
    footername:string
}

export const Footer = () =>{
   
let contact:Footerdata[] = [
    {
        footerhref:"hello",
        footername:"hellos" 
    },
]

console.log(contact.map(data=>data.footerhref))
    return(
        <div className="footer-wrapper">
            <div className="footer-top-section"> 
                <div className="footer-link">
                   <Footerlink footerdata={contact} />
                </div>
                 <div className="footer-social-media"></div>
            </div>
            <div className="footer-bottom-section">
                 
            </div>
        </div>
    )
}
