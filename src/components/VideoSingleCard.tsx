import { VideoCardProps } from '@/types/Video'
import Link from 'next/link'
import React from 'react'

const VideoSingleCard: React.FC<VideoCardProps> = ({ video: { id: { videoId }, snippet, }, }) => {
    return (
        <section className='video-single'>
            <Link href={
                videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`
            }>
                <img src={snippet?.thumbnails?.high?.url} alt={snippet?.channelTitle} />
                <div className="content">
                    <p>
                        {snippet.title || snippet.description}
                    </p>
                    <span className="title">
                        {snippet?.channelTitle}
                    </span>
                </div>
            </Link>
        </section>
    )
}

export default VideoSingleCard