import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"

const SpringLink = ({
  to,
  entryLength,
  exitLength,
  children,
  className,
  prevRoute,
}) => (
  <TransitionLink
    className={className}
    to={to}
    exit={{ length: 1 }}
    entry={{
      length: entryLength,
      // delay: 1,
    }}
  >
    {children}
  </TransitionLink>
)

export { SpringLink }
