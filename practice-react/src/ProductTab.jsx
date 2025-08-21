
import Product from "./Product";


export default function ProductTab(){
    let styles = {
        display : "flex",
        flexwrap : "wrap",
        justifyContent : "center",
        alignItems : "center",
       }
return(
<div style = {styles}>
    
<Product title="Logitec MX Master" idx={0}/>
<Product title="Apple pencil"idx={1}/>
<Product title="Zebronics Zeb-transform" idx={2}/>
<Product title="Portonics earphone" idx={3}/>
</div>
    )}