import Image from "next/image"

type CourseProps = {
    course: string;
    imgUrl: string;
    totalTopics: number;
}

function Course({ course, imgUrl, totalTopics }: CourseProps) {
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
            <button className=" px-4 py-2 bg-light text-blue font-semibold rounded-2xl">Start Learning</button>
        </div>
    </div>
  )
}

export type {CourseProps}
export { Course };