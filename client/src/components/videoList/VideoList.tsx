import React, { useEffect, useState } from 'react'
import VideoItem from '../videoItem/VideoItem'
import { Video } from './interface'
import * as videoService from './Video.services'

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([])
  useEffect(() => {
    loadVideos()
  }, [])

  const loadVideos = async () => {
    const res = await videoService.getVideos()
    setVideos(res)
  }

  return (
    <div>
      { videos.map(v => {
        return <VideoItem key={v._id} video={v} />
      })}
    </div>
  )
}

export default VideoList;