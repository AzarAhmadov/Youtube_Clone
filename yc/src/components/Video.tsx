import React from 'react';
import VideoSingleCard from './VideoSingleCard'; // Ensure this import is correct
import { VideoI } from '../types/Video';

const Video: React.FC<VideoI> = ({ videos }) => {
    return (
        <section id='video'>
            <div className="container">
                <div className="row">
                    {videos.map((item: any, idx: number) => (
                        item.id.videoId && <VideoSingleCard key={idx} video={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Video;
