import * as React from "react"
import { Link } from "gatsby"

import Logo from "../../static/images/logo.png"

const product = [
  {
    name: "Problem",
    href: "/#problem",
  },
  {
    name: "Solution",
    href: "/#solution",
  },
  {
    name: `How it works`,
    href: "/#how-it-works",
  },
  {
    name: `F.A.Q`,
    href: "/#",
  },
]

const company = [
  {
    name: "Team",
    href: "#",
  },
  {
    name: "Privacy policy",
    href: "#",
  },
  {
    name: `Terms of service`,
    description: "Discover what makes Fairgrade different from the status quo.",
    href: "#",
  },
]

const social = [
  {
    name: "Twitter",
    href: "https://twitter.com/fairgrade",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/fairgrade/",
  },
  {
    name: `YouTube`,
    href: "https://www.youtube.com/channel/UCVpfQeimcKePV8-6fHNjohA",
  },
]

const contact = [
  {
    name: "Email",
    href: "#",
  },
  {
    name: "Contact form",
    href: "/#contact",
  },
]

const footerContent = [
  { name: "Product", content: product },
  { name: "Company", content: company },
  { name: "Social", content: social },
  { name: "Contact", content: contact },
]

export default function Footer() {
  return (
    <div className="bg-green-700 p-2 mx-auto px-4 sm:p-3 sm:px-6 md:p-8 lg:p-20 lg:px-8 xl:p-10 ">
      <div className="flex flex-col md:flex-row justify-between mx-auto max-w-7xl">
        <div className="mx-10">
          <img className="h-20 w-20" src={Logo} alt="Fairgrade logo" />
        </div>
        <div className="flex flex-col md:flex-row">
          {footerContent.map((item, index) => {
            return (
              <div key={index} className="mx-10 my-5 sm:mx-15">
                <h1 className="text-xl font-extrabold text-white">
                  {item.name}
                </h1>
                {item.content.map((link, index) => {
                  if (item.name === "Social") {
                    return (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="text-md text-gray-100">{link.name}</p>
                      </a>
                    )
                  } else {
                    return (
                      <Link key={index} to={link.href}>
                        <p className="text-md text-gray-100">{link.name}</p>
                      </Link>
                    )
                  }
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
