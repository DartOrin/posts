import type { FC } from "react"
import { Link } from "react-router-dom"
import styles from "./ButtonLink.module.css"

interface IButtonLink {
  to: string
  text: string
}
export const ButtonLink: FC<IButtonLink> = ({ to, text }) => {
  return (
    <Link to={to} className={styles.link}>
      {text}
    </Link>
  )
}
