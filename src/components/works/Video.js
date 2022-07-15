import React from "react"

const Video = ({ className, videos }) => {
  return (
    <div className={className}>
      <video autoPlay loop muted playsInline>
        {videos.map((video) => (
          <source key={video.src} src={video.src} type={video.type} />
        ))}
      </video>
    </div>
  )
}

export default Video
