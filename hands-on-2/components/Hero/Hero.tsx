import Image from "next/image";
import { Button } from "../Button";

function Hero() {
  return (
    <div className="page-center grid grid-cols-3 items-center pt-10 pb-12 ">
      <div className="grid col-span-2 gap-6 ">
        <h1 className="text-2xl font-bold">
        <span>Your Gateway to</span><br />
        <span>Web Development Mastery</span>
        </h1>
        <p className="font-light text-lg w-9/12">
        Are you ready to embark on an exciting journey into the world of web development?
        </p>
        <Button
          className="w-fit "
          href="#"
        >
          Start Learning
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