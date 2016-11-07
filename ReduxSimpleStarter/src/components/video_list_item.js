import React from 'react';

const VideoListItem = ({video}) => {
    if(!video){
        return <div>
            Loading...!
        </div>
    }
    //    console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <a href="#">
                        <img className="media-object" src={imageUrl}/>
                    </a>
                </div>
                <div className="media-body">
                    <div className="media-heading">{title}</div>
                </div>
            </div>
        </li>
    );
};
export default VideoListItem;