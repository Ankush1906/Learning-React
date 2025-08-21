export default function Price({oldPrices,newprices}){

    let oldstyles = {
        textDecorationLine : "line-through",
    }
    let newStyles= {
        fontWeight : "bold",
    }

    let styles = {
        backgroundColor : "yellow",
        height : "30px",
        color : "black",
        borderBottomLeftRadius : "20px",
        borderBottomRightRadius : "20px",
    }

    return(
        <div style={styles}>
            <span style = {oldstyles}>{oldPrices}</span>
            &nbsp; &nbsp; &nbsp;
            <span style={newStyles}>{newprices}</span>
        </div>
    )
}