import React from "react"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p className={footerStyles.footerStrikethrough}>© 2019</p>
      <p className={footerStyles.footer}> steal what you can</p>
    </footer>
  )
}

export default Footer
