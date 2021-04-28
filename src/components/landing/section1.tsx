import { Link } from "gatsby"
import * as React from "react"
import Particles from "react-particles-js"

import PARTICLES_CONFIG from "../../lib/particlesConfig"

export default function Section1() {
  return (
    <>
      <Particles
        height="90vh"
        width="100vw"
        params={PARTICLES_CONFIG}
        className="absolute particles-bg"
      />
      <section className="pt-10 mx-auto max-w-7xl px-4 sm:pt-20 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28 section-1">
        <div className="sm:text-center lg:text-left max-w-screen-md mx-auto">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">
              Empower students to learn through
            </span>{" "}
            <span className="block text-green-600 xl:inline">peer grading</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Harness the power of collective intelligence to distribute fair and
            accurate grades in a way that teaches students to successfully
            evaluate feedback
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link
                to="/#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </Link>
            </div>
            {/* <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
              >
                View pricing
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}
