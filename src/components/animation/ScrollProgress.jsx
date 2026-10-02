import { useEffect, useState } from 'react'
import './ScrollProgress.css'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const scrollPercentage =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0

      setProgress(scrollPercentage)
    }

    window.addEventListener('scroll', updateProgress)

    updateProgress()

    return () => {
      window.removeEventListener('scroll', updateProgress)
    }
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div
        className="scroll-progress__bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ScrollProgress