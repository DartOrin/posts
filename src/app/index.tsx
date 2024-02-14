import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { AppRoutes } from "../pages"
import { store } from "./store"

export const App = () => {
  return (
    <HashRouter basename="">
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </HashRouter>
  )
}
