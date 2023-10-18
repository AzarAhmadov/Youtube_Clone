'use client'
import SearchFeed from '@/components/SearchFeed';
import Video from '@/components/Video';
import { VideoDetailI } from '@/types/Video';
import { FetchApi } from '@/utils/fetchApi';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';

const page: React.FC = () => {
    const [videoDetail, setVideoDetail] = useState<VideoDetailI | null>(null);
    const [videos, setVideos] = useState([]);
    const params = useParams()
    const getById = params.slug[1]

    useEffect(() => {
        FetchApi(`videos?part=snippet,statistics&id=${getById}`).then((data) =>
            setVideoDetail(data.items[0])
        );

        FetchApi(`search?part=snippet&relatedToVideoId=${getById}&type=video`).then(
            (data) => setVideos(data.items)
        );
    }, [getById]);

    const title = videoDetail?.snippet?.title;
    const channelTitle = videoDetail?.snippet?.channelTitle;
    const viewCount = videoDetail?.statistics?.viewCount;
    const likeCount = videoDetail?.statistics?.likeCount || 1000;

    return (
        <>
            <section id="slug">
                {videoDetail && (
                    <div className="container">
                        <div className="row">
                            <div className="left">
                                <ReactPlayer
                                    url={`https://www.youtube.com/watch?v=${getById}`}
                                    controls
                                    className="player"
                                />
                                <h6>{title}</h6>
                                <div>
                                    <p>{channelTitle}</p>
                                    <div className='datas'>
                                        <span>
                                            <i className="fa-solid fa-eye"></i>  {parseInt(viewCount).toLocaleString()} Views
                                        </span>
                                        <span>
                                            <i className="fa-regular fa-thumbs-up"></i>   {parseInt(likeCount).toLocaleString()} Likes
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Video className="video-detail" videos={videos} />
                        </div>
                    </div>
                )}
            </section>

            {videoDetail ? null : <SearchFeed />}
        </>
    )
}

export default page