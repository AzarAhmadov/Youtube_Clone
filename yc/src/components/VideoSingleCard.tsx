import { VideoCardProps } from '@/types/Video'
import Link from 'next/link'
import React from 'react'

const VideoSingleCard: React.FC<VideoCardProps> = ({ video }) => {

    console.log(video   )

    return (
        <section id='video-single'>
            <Link href=''>
                <img src={video?.snippet?.thumbnails?.high.url} alt={video?.snippet.channelTitle} />
                <div className="content">
                    <p>
                        {video?.snippet.description}
                    </p>
                    <span className="title">
                        {video?.snippet.channelTitle}
                    </span>
                </div>
            </Link>
        </section>
    )
}

export default VideoSingleCard