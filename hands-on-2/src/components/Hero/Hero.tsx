import Image from "next/image";
import { Button } from "../Button/Button";



function Hero() {
  return (
    <div className=" flex items-center px-10 mx-12 ">
      <div className=" gap-6 ">
        <h1 className="text-2xl font-bold my-6">
        <span >Your Gateway to</span><br />
        <span>Web Development Mastery</span>
        </h1>
        <p className="font-light text-lg w-9/12 my-5">
        Are you ready to embark on an exciting journey into the world of web development?
        </p>
        <Button
          className="w-fit "
          href="/courses"
        >
          Start Journey
        </Button>
      </div>
      <div className="">
        <Image
          src="/images/homeimg.jpg"
          width={800}
          height={800}
          alt="pattern"
        />
      </div>
    </div>
  );
}

export { Hero };