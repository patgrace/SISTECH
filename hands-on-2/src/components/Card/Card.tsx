import Image from "next/image";

type ButtonProps = {
    label: string;
    href: string;
}

type CardProps = {
    thumbnail: string;
    title: string;
    description: string;
    button: ButtonProps
};

function Card ({ thumbnail, title, description, button }: CardProps){
    return (
        <div className="bg-blue p-2 rounded-xl">
            <Image 
            src={thumbnail} 
            alt = {title} 
            width={200} 
            height={100} 
            className="w-full rounded-lg object-cover"
            ></Image>
          <div className="p-2 m-2">
            <h2 className="font-bold text-sm"> {title} </h2>
            <p className="mt-2 font-thin text-xs"> {description} </p> 
            <a className="inline-block mt-4 px-4 py-2  text-blue text-xs font-medium rounded-2xl bg-light w-full" href={button.href}>{button.label}</a>
          </div>
        </div>
    )
}

export type {CardProps};
export {Card};