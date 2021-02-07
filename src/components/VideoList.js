import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelection}) =>{


    const renderedList = videos.map((video)=>{
        return <VideoItem key={video.id.videoId} onVideoSelection={onVideoSelection}  video={video}/>;
    })

    return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default VideoList;