import useWindowWidth from './useWindowWidth'

const useResponsiveSlides = () => {
  const width = useWindowWidth()

  if (width >= 1400) {
    return {slides: 4, width}
  } else if (width >= 1024) {
    return {slides: 3, width}
  } else if (width >= 680) {
    return {slides: 2, width}
  } else {
    return {slides: 1, width}
  }
}

export default useResponsiveSlides
