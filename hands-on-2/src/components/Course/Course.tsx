import Image from "next/image"
import { useRouter } from 'next/router';
import CourseTopic from "./[Course]";
import { Button } from "../Button/Button";

type CourseProps = {
    course: string;
    imgUrl: string;
    totalTopics: number;
}

function Course({ course, imgUrl, totalTopics }: CourseProps) {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/course/${CourseTopic}`);
  };
  return (
    <div className="rounded-lg overflow-hidden w-64 shadow-lg bg-blue m-4 flex flex-col justify-between">
        <div>
            <div className="relative w-full h-36">
                <Image 
                    src={imgUrl} 
                    alt={course} 
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full p-2 rounded-2xl"
                />
            </div>
            <div className="p-4 text-center text-light">
                <h3 className="text-xl font-semibold mb-2 text-white">{course}</h3>
                <p className="text-white">Total Topics: {totalTopics}</p>
            </div>
        </div>
        <div className="p-4 text-center">
        <Button
          className=" bg-light text-blue"
          onClick={handleButtonClick} >
          Start Learning
        </Button>
           
        </div>
    </div>
  )
}

export type {CourseProps}
export { Course };