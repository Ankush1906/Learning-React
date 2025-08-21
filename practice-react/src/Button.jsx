function printHello(){
    console.log("Hello!");
}

function printBye(){
    console.log("bye!");
}

export default function Button(){

    return(
        <div>
            <button onClick={printHello}> Click me</button>
            <p onMouseOver={printBye}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, ex eum repudiandae enim quos similique earum at soluta deleniti fuga.</p>
        </div>
    )
}