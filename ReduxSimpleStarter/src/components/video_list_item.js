import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

    //    console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
        <li className="list-group-item" onClick={()=> onVideoSelect(video)}>
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