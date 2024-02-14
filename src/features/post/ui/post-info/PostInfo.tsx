import { useLocation } from "react-router-dom"
import { useGetPostQuery } from "../../models"
import { ButtonLink } from "../../../../shared"
import styles from "./PostInfo.module.css"

export const PostInfo = () => {
  const { pathname } = useLocation()
  const id = pathname.replace("/", "")
  const { data, isError, isLoading, isSuccess } = useGetPostQuery({ id })

  if (isError) {
    return (
      <div>
        <h1>Что-то пошло не так</h1>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div>
        <h1>Загрузка...</h1>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className={styles.container}>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
        <ButtonLink to=".." text="Назад" />
      </div>
    )
  }

  return null
}
