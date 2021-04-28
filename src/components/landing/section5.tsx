import * as React from "react"
import { Formik } from "formik"
import * as Yup from "yup"

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
})

function renderSubmit(loading) {
  if (loading) {
    return (
      <button
        type="submit"
        disabled
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Submitting
      </button>
    )
  } else {
    return (
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 loading"
      >
        Submit
      </button>
    )
  }
}

export default function Section5() {
  const [success, setSuccess] = React.useState("")
  return (
    <section
      id="contact"
      className="bg-green-100 p-10 mx-auto max-w-7xl px-4 sm:p-12 sm:px-6 md:p-16 lg:p-20 lg:px-8 xl:p-28"
    >
      <h1 className="mb-10 max-w-sm mx-auto text-4xl text-green-800 font-extrabold sm:mt-1 sm:text-5xl sm:max-w-xl sm:mx-auto md:mt-1 md:text-6xl">
        Contact us for any questions or to get started using Fairgrade!
      </h1>
      <div className="flex flex-col flex-wrap lg:flex-row justify-around mx-auto max-w-7xl">
        <div className="w-full lg:w-4/5 py-3 px-3 sm:px-10 mb-5 bg-white rounded-xl shadow-2xl">
          <div className="mt-10 sm:mt-0">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validationSchema={ContactSchema}
                validateOnBlur={true}
                validateOnChange={false}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setSuccess("")
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    setSubmitting(false)
                    resetForm({ values: { name: "", email: "", message: "" } })
                    setSuccess("Sent!")
                  }, 5000)
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first_name"
                            className="block text-base font-medium text-gray-700"
                          >
                            Your name*
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            autoComplete="given-name"
                            className="mt-1 h-8 p-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-2 border-gray-300 border-solid rounded-md"
                          />
                          <p className="block text-base font-medium text-red-500">
                            {touched.name && errors.name ? errors.name : null}
                          </p>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="email_address"
                            className="block text-base font-medium text-gray-700"
                          >
                            Email address*
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            autoComplete="email"
                            className="mt-1 h-8 p-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-2 border-gray-300 border-solid rounded-md"
                          />
                          <p className="block text-base font-medium text-red-500">
                            {touched.email && errors.email
                              ? errors.email
                              : null}
                          </p>
                        </div>
                        <div className="col-span-6">
                          <label
                            htmlFor="about"
                            className="block text-base font-medium text-gray-700"
                          >
                            Message*
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="message"
                              name="message"
                              rows={5}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.message}
                              className="shadow-sm p-1 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-2 border-gray-300 border-solid rounded-md"
                              placeholder="e.g. Can you make me an account?"
                              defaultValue={""}
                            />
                            <p className="block text-base font-medium text-red-500">
                              {touched.message && errors.message
                                ? errors.message
                                : null}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row px-4 py-3 bg-gray-50 justify-between sm:px-6">
                      <p className="block text-lg font-medium text-green-500 my-auto">
                        {success}
                      </p>
                      {renderSubmit(isSubmitting)}
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
