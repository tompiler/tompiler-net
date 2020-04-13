import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"

const SpringLink = ({
  to,
  entryLength,
  exitLength,
  children,
  className,
  exitState,
  entryState,
}) => (
  <TransitionLink
    className={className}
    to={to}
    exit={{
      length: 1,
      state: { exitState: exitState },
    }}
    entry={{
      length: 1,
      // delay: 1,
      state: { entryState: entryState },
    }}
  >
    {children}
  </TransitionLink>
)

export { SpringLink }
