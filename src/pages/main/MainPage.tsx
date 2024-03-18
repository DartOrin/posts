import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { useGetPostListQuery, PostCard } from "../../features"
import styles from "./MainPage.module.css"

export const MainPage = () => {
  const [limitOfPosts, setLimitOfPosts] = useState<number>(20)

  const { data, isError, isLoading, isSuccess, isFetching } =
    useGetPostListQuery({
      limit: limitOfPosts,
    })

  const { ref: lastCard, inView: inViewLastCard } = useInView({
    threshold: 0.1,
    trackVisibility: true,
    delay: 500,
  })

  useEffect(() => {
    if (inViewLastCard && !isFetching && limitOfPosts < 100) {
      setLimitOfPosts(limitOfPosts + 10)
    }
  }, [inViewLastCard])

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
        <h2>Список постов</h2>
        <ul>
          {data.map((post, index) =>
            index === data.length - 1 ? (
              <li key={post.id} ref={lastCard}>
                <PostCard post={post} />
              </li>
            ) : (
              <li key={post.id}>
                <PostCard post={post} />
              </li>
            ),
          )}
        </ul>
        {isFetching && <div>ЗАГРУЗКА</div>}
      </div>
    )
  }

  return null
}
