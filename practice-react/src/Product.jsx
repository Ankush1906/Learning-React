
import Price from "./Price"
import "./Product.css";

export default function Product({title ,idx}){
    let oldPrices = ["12,495","11,999","1255","2,999"];
    let newprices = ["1200","10,999","1,100","1,999"]
    let description = ["Ergonomic mouse","Precision stylus","Gaming keyboard","Clear audio"]
    let styles = {
     border : "2px solid white",
     marginRight : "20px"
    
    }
    return(
        <div style={styles}> 
            <h4>{title}</h4>
            <p>{description[idx]}</p>
            <Price oldPrices={oldPrices[idx]} newprices={newprices[idx]}/>
        </div>
    )
}