import { useEffect, useState } from "react";
import Card from "../card/card";

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect( () =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])

    return (
        <div className="md:pt-24 pt-20 xl:pb-44 lg:pb-32 md:pb-24 pb-20 md:space-y-0 space-y-5 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 max-w-[1420px] mx-auto px-5">
            {
                cards.map(card => <Card
                    key={card.id}
                    card={card}
                ></Card>)
            }
        </div>
    );
};

export default Cards;