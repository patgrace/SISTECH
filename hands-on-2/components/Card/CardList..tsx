import { Card } from "./Card";
import type { CardProps } from "./Card"

type CardListProps = {
    cards: CardProps[];
    cardTitle: string, 
}

function CardList ({ cards }: CardListProps) {
    return (
        <section>

            <div className="">
                {cards.map((card, index )=> (
                    <Card key={index} {...card}/>

                ))}
            </div>
        </section>
    )
}

export { CardList};