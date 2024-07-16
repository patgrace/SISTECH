import Image from "next/image"

type CourseProps = {
    course: string;
    imgUrl: string;
    totalTopics: number;
}

 function Course({ course, imgUrl, totalTopics }: CourseProps) {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden w-72 shadow-lg transition-transform transform hover:scale-105">
        <Image 
            src={imgUrl} 
            alt = {course} 
            width={200} 
            height={100} 
            className="w-full h-48 object-cover"
            ></Image>
            <div className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">{course}</h3>
            <p className="text-gray-600">Total Topics: {totalTopics}</p>
            </div>
    </div>
  )
}

export type {CourseProps}
export { Course };