import { useState } from "react";

export default function Random() {
    const [slots, setSlots] = useState(['', '', '']);

    const display = ['🍌', '🍒', '🍊'];

    return (
        <div>
            <h1>{(slots[0] != '' && slots[0]===slots[1] && slots[0]===slots[2]) && "You win!"}</h1>
            <h1>{slots[0]} {slots[1]} {slots[2]}</h1>  
            <button onClick={() => setSlots(
                [display[Math.floor(Math.random() * 3)],
                display[Math.floor(Math.random() * 3)],
                display[Math.floor(Math.random() * 3)]])}
            >Play!</button>
        </div>
        

    );

}

