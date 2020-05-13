import React from "react"

import TransitionLink from "gatsby-plugin-transition-link"

const SpringLink = ({
  to,
  children,
  className,
  entryLength,
  exitLength,
  exitState,
  entryState,
  exitDelay,
  entryDelay
}) => {
  // console.log("ExitState:", exitState)
  return (
    <TransitionLink
      className={className}
      to={to}
      exit={{
        length: exitLength || 0, //0.1,
        delay: exitDelay || 0, // 0,
        zIndex: 100,
        state: { exitState: exitState }
      }}
      entry={{
        length: entryLength || 0,
        delay: entryDelay || 0,
        zIndex: 100,
        state: { entryState: entryState }
      }}
    >
      {children}
    </TransitionLink>
  )
}

export { SpringLink }
