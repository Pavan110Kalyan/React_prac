import React from "react";
function Item1({ name, isPacked}) {
    return(
        <li className="item">
            {isPacked ? (
                <del>
                    {name + '✔'}
                </del>
            ):(
                name
            )}
        </li>
    );
}
export default function PackingList(){
    return (
        <section>
            <h1>Sally Rides Packing list</h1>
            <ul>
                <Item1
                isPacked={true}
                name="Space suit"
                />
                <Item1 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
                <Item1 
                isPacked={false}
                name="Photo of Tam"
                />
            </ul>
        </section>
    )
}