import { MutableRefObject, useCallback, useEffect, useState } from 'react'

export function useElementWidth(elementRef: MutableRefObject<HTMLElement | undefined>) {
  const [width, setWidth] = useState(0)

  const calculateWidth = useCallback(() => {
    if (elementRef.current) {
      setWidth(elementRef.current.clientWidth)
    }
  }, [elementRef, elementRef.current])

  useEffect(() => {
    window.addEventListener('resize', calculateWidth)
    window.addEventListener('orientationchange', calculateWidth)

    calculateWidth()

    return () => {
      window.removeEventListener('orientationchange', calculateWidth)
      window.removeEventListener('resize', calculateWidth)
    }
  }, [elementRef, elementRef.current, calculateWidth])

  return {
    width,
    setWidth,
  }
}
