import * as React from "react"

export default function Section2() {
  return (
    <section
      id="problem"
      className="bg-green-200 p-10 mx-auto max-w-7xl px-4 sm:p-12 sm:px-6 md:p-16 lg:p-20 lg:px-8 xl:p-28 text-center"
    >
      <h1 className="m-3 text-4xl text-green-800 font-extrabold sm:mt-5 sm:text-5xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-6xl">
        The problem
      </h1>
      <div className="flex flex-col md:flex-row justify-around mx-auto max-w-7xl">
        <div className="w-full md:w-1/3 p-3 text-center">
          <h1 className="mt-3 text-2xl text-green-800 font-extrabold sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
            Personalized and constructive feedback is time intensive, boring,
            and skill dependent
          </h1>
          <p className="mt-3 text-xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            - Professors
          </p>
        </div>
        <div className="w-full md:w-1/3 p-3 text-center">
          <h1 className="mt-3 text-2xl text-green-800 font-extrabold sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
            Grades don't reflect the true quality of our work. They are BS!
          </h1>
          <p className="mt-3 text-xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            - Students
          </p>
        </div>
        <div className="w-full md:w-1/3 p-3 text-center">
          <h1 className="mt-3 text-2xl text-green-800 font-extrabold sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
            Grading takes time and effort, it's boring, and I don't feel
            confident in my assessments
          </h1>
          <p className="mt-3 text-xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            - Typical peer graders
          </p>
        </div>
      </div>
    </section>
  )
}
