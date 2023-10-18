'use client'
import { FetchApi } from '@/utils/fetchApi';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Video from './Video';

const SearchFeed: React.FC = () => {
    const [video, setVideo] = useState([]);
    const pathname = usePathname()
    const searchTerm = pathname.replace('/search/', '');

    useEffect(() => {
        FetchApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
            setVideo(data.items)
        );
    }, [searchTerm]);

    return (
        <section id='search-feed'>
            <Video videos={video}/>
        </section>
    )
}

export default SearchFeed