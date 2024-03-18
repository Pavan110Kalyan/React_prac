import React from "react";
// function Item({name, isPacked}){
//     return <li className="item">{name}</li>
// }
function Item({name, isPacked}) {
    if(isPacked){
        return <li className="item">{name} ✔</li>
    }
    return <li className="item">{name}</li>
}
export default function PackingList(){
    return(
        <section>
            <h1>sally rides packing lisst</h1>
            <ul>
                <Item
                isPacked={true}
                name="Space suit" 
                />         
                <Item 
                isPacked={true}
                name="helmet with golden leaf"
                />
                <Item
                isPacked={false}
                name="Photo of Tam"  
                />
                </ul>
        </section>
    );
}