
import { Card } from "./Card";


function CardListContainer(){
    const data = [
        {
            title: "Maxwell Salvador", 
            thumbnail: "/images/artist.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            button: { label: "Read Journey", href: "https://example.com"}, 
        }, 
        {
            title: "Sandy Waluyo", 
            thumbnail: "/images/artist.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            button: { label: "Read Journey", href: "https://example.com"}, 
        }, 
        {
            title: "Axel Lucu", 
            thumbnail: "/images/artist.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            button: { label: "Read Journey", href: "https://example.com"}, 
        },
        {
            title: "Kevin Bong", 
            thumbnail: "/images/artist.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            button: { label: "Read Journey", href: "https://example.com"}, 
        },
    ];
    return (
        <section className="page-center p-12 ">
          <h2 className="text-3xl font-semibold text-center mb-8">What They Said</h2>
          <div className="mx-4 flex gap-10 text-light text-center w-full " >
          {data.map((item, index) => (
          <Card
            key={index}
            thumbnail={item.thumbnail}
            title={item.title}
            description={item.description}
            button = {item.button}
          />
        ))}
          </div>
        </section>
    )
}


export { CardListContainer}
