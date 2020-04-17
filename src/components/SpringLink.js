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
      length: 0.1,
      delay: 0,
      zIndex: 100,
      state: { exitState: exitState },
    }}
    entry={{
      length: 0.4,
      delay: 0.05,
      zIndex: 100,
      state: { entryState: entryState },
    }}
  >
    {children}
  </TransitionLink>
)

export { SpringLink }
