import { useReducer } from "react"
import storage from "local-storage-fallback"

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      storage.setItem("isDark", !state.isDark)
      return { isDark: !state.isDark }
    default: {
      return state
    }
  }
}

const useGlobalState = () => {
  const [state, dispatch] = useReducer(reducer, {
    isDark: storage.getItem("isDark")
      ? JSON.parse(storage.getItem("isDark"))
      : true, // change to true for default = dark mode
  })

  return { state, dispatch }
}

export default useGlobalState
