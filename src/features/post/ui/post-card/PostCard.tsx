import type { FC } from "react"
import { ButtonLink } from "../../../../shared"
import type { Post } from "../../models/types"
import styles from "./PostCard.module.css"

export interface IPostCard {
  post: Post
}
export const PostCard: FC<IPostCard> = ({ post }) => {
  const { id, title, body } = post
  return (
    <div className={styles.post}>
      <h3>{`№ ${id}: ${title}`}</h3>
      <p className={styles.text}>{body}</p>
      <ButtonLink to={`/${id}`} text="Просмотр" />
    </div>
  )
}
