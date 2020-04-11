import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"

const SpringLink = ({ to, entryLength, exitLength, children, className }) => (
  <TransitionLink
    className={className}
    to={to}
    exit={{ length: exitLength }}
    entry={{
      length: entryLength,
      state: {
        thisIs: "passed to the entering page",
      },
    }}
  >
    {children}
  </TransitionLink>
)

export { SpringLink }
