import * as React from "react"

export default function Section3() {
  return (
    <section
      id="solution"
      className="bg-green-500 p-10 mx-auto max-w-7xl px-4 sm:p-12 sm:px-6 md:p-16 lg:p-20 lg:px-8 xl:p-28 text-center"
    >
      <div className="flex flex-col md:flex-row justify-around mx-auto max-w-7xl">
        <div className="w-full md:w-1/2 p-3 text-center mb-10">
          <h1 className="m-3 text-4xl text-white font-extrabold sm:mt-5 sm:text-5xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-6xl">
            Our solution
          </h1>
          <ul className="text-left max-w-sm mx-auto">
            <li>
              <p className="mt-3 text-2xl text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                100% anonymous grading
              </p>
            </li>
            <li>
              <p className="mt-3 text-2xl text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Students use a rubric and instructions to grade a small number
                of assignments
              </p>
            </li>
            <li>
              <p className="mt-3 text-2xl text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Assignments are graded multiple times using our crowd-sourcing
                algorithm
              </p>
            </li>
            <li>
              <p className="mt-3 text-2xl text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                The algorithm aggregates grades into a "credibility" adjusted
                final grade
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 py-3 px-10 mb-5 text-center bg-white rounded-xl shadow-xl">
          <h1 className="m-3 text-4xl text-green-800 font-extrabold sm:mt-5 sm:text-5xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-6xl">
            Leads to
          </h1>
          <ul className="text-left max-w-sm mx-auto mb-5">
            <li>
              <p className="mt-3 text-2xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Students increasing their understanding of the material through
                accessing others
              </p>
            </li>
            <li>
              <p className="mt-3 text-2xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Students receiving more and faster feedback
              </p>
            </li>
            <li>
              <p className="mt-3 text-2xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Students receiving more accurate grading
              </p>
            </li>
            <li>
              <p className="mt-3 text-2xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Professors wasting less time and resources on grading
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
