'use client';
import { useRouter } from 'next/navigation'; 
import { Path } from "./Path"



function PathContainer(){
    const router = useRouter();
    const pathItems = [
        {
            title: "FRONT-END", 
            banner: "/images/webdev.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        }, 
        {
            title: "BACK-END", 
            banner: "/images/webdev.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." 
        },
        {
            title: "GIT & GITHUB", 
            banner: "/images/webdev.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        },
    ];
    return (
        <section id="path" className="page-center py-12 flex flex-col items-center ">
          <h2 className="text-3xl font-bold text-center mb-8">Choose Your Path </h2>
          <div className="flex flex-col gap-8 mt-8 w-8/12 items-center">
          {pathItems.map((item, index) => (
          <Path
            key={index}
            banner={item.banner}
            title={item.title}
            description={item.description}
          />
        ))}
          </div>
        </section>
      );
}


export { PathContainer }
