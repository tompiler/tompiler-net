import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"

const SpringLink = ({ to, children }) => (
  <TransitionLink to={to} exit={{ length: 1 }} entry={{ length: 1 }}>
    {children}
  </TransitionLink>
)

export { SpringLink }
