import Image from "next/image";

type PathProps = {
    banner: string;
    title: string;
    description: string;
};

function Path ({ banner, title, description }: PathProps){
    return (
        <div className="flex items-center bg-blue rounded-3xl p-8 shadow-lg mx-auto">
        <Image
          src={banner}
          alt={title}
          width={250}
          height={100}
          className="w-60z h-40 mr-10 rounded-lg object-cover"
        />
        <div className="flex flex-col items-center">
          <a href="#" className="font-bold text-lg text-[#FBF6E2] no-underline">
            {title}
          </a>
          <p className=" text-[#FBF6E2] mt-2 text-center">{description}</p>
        </div>
      </div>
    )
}

export type {PathProps};
export {Path};