import { useContext } from 'react'
import LangContext from '../../hooks/LangContext'

const T = (ru, ro) => {
  const lang = useContext(LangContext)

  if (lang === 'ru') {
    return ru
  } else {
    return ro
  }
}

export default T
