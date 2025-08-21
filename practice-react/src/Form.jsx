function handlleFormSubmit(event){
    event.preventDefault();
    console.log("form was sumitted")
}

export default function Form(){
    return (
        <form>

            <input type="text" placeholder="Write something" />
           <button onClick={handlleFormSubmit}>Submit</button>
        </form>
    )
}