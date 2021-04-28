import * as React from "react"

export default function Section4() {
  return (
    <section
      id="how-it-works"
      className="bg-green-400 p-10 mx-auto max-w-7xl px-4 sm:p-12 sm:px-6 md:p-16 lg:p-20 lg:px-8 xl:p-28 text-center"
    >
      <h1 className="mb-10 text-4xl text-green-800 font-extrabold sm:mt-1 sm:text-5xl sm:max-w-xl sm:mx-auto md:mt-1 md:text-6xl">
        How it works
      </h1>
      <div className="flex flex-col flex-wrap lg:flex-row justify-around mx-auto max-w-7xl">
        <div className="w-full lg:w-2/5 py-3 px-10 mb-5 text-center bg-white rounded-xl shadow-xl">
          <h1 className="m-3 text-4xl text-green-800 font-extrabold sm:mt-5 sm:text-5xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-6xl">
            Professors
          </h1>
          <ul className="text-left max-w-sm mx-auto mb-5">
            <li>
              <p className="mt-3 text-2xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Upload assessments, grading keys, and guidelines
              </p>
            </li>
            <li>
              <p className="mt-3 text-2xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Indicate whether grading is mandatory, extra credit, or paid
              </p>
            </li>
            <li>
              <p className="mt-3 text-2xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Choose the number of assignments distributed to each student for
                evaluation
              </p>
            </li>
            <li>
              <p className="mt-3 text-2xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Set grading deadlines
              </p>
            </li>
            <li>
              <p className="mt-3 text-2xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Monitor grading progress and nudge students to complete their
                evaluations by the deadline
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-2/5 py-3 px-10 mb-5 text-center bg-white rounded-xl shadow-xl">
          <h1 className="m-3 text-4xl text-green-800 font-extrabold sm:mt-5 sm:text-5xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-6xl">
            Students
          </h1>
          <ul className="text-left max-w-sm mx-auto mb-5">
            <li>
              <p className="mt-3 text-2xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                View grading key, guidelines, and assignments to evaluate
              </p>
            </li>
            <li>
              <p className="mt-3 text-2xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Grade anonymous exams and submit ratings + feedback
              </p>
            </li>
            <li>
              <p className="mt-3 text-2xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                View grades and "grade the grader" by giving feedback on the
                evaluator's comments
              </p>
            </li>
            <li>
              <p className="mt-3 text-2xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Receive feedback on grading
              </p>
            </li>
            <li>
              <p className="mt-3 text-2xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Exercise evaluation skills to improve understanding of material
                and grading credibility + ability
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-2/5 py-3 px-10 mb-5 text-center bg-white rounded-xl shadow-xl">
          <h1 className="m-3 text-4xl text-green-800 font-extrabold sm:mt-5 sm:text-5xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-6xl">
            Professors get
          </h1>
          <ul className="text-left max-w-sm mx-auto mb-5">
            <li>
              <p className="mt-3 text-2xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                A spreadsheet that contains student scores for each question and
                assignment
              </p>
            </li>
            <li>
              <p className="mt-3 text-2xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Mean and variance by question to determine which topics are
                most/least understood by students
              </p>
            </li>
            <li>
              <p className="mt-3 text-2xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Ability to "curve" by question to adjust final grades to desired
                distribution
              </p>
            </li>
            <li>
              <p className="mt-3 text-2xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                A credibility rating for each student to use as a portion of
                "class participation" grade
              </p>
            </li>
            <li>
              <p className="mt-3 text-2xl text-green-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                A button to send regrades to "credible" graders who can grade
                for extra credit
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
