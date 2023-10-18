import React from 'react';
import VideoSingleCard from './VideoSingleCard';
import { VideoI } from '../types/Video';

const Video: React.FC<VideoI> = ({ videos, className }) => {

    return (
        <section id='video' className={className}>
            <div className="container">
                <div className='row'>
                    {videos?.map((item: any, idx: number) => (
                        item.id.videoId && <VideoSingleCard key={idx} video={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Video;
