import React, {useState,useEffect} from 'react';
import './RecommendedVideos.css'
import VideoCard from './../VideoCard/VideoCard'
import axios from 'axios';
import {DateTime} from 'luxon'; 
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';


const RecommendedVideos = () => {
  
  const [videoCards, setVideoCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [videos,setVideos] = useState(21)

  useEffect(() => {
   
    var nombre;
    nombre=prompt('ingrese clave para porder usar api youtuve data v3','');/* ojo aqui */
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${videos}&regionCode=CO&key=(poner clave)`)
    .then(response => {
        createVideoCards(response.data.items);
    }).catch(error => {
      console.log(error);
      setIsError(true);
    })

    },[videos])

    async function createVideoCards(videoItems) {
        
        let newVideoCards=[];
      
        for(const video of videoItems){
            const videoId = video.id;
            /* console.log(videoId) */
            const snippet = video.snippet;
            const channelId = snippet.channelId;
            /* console.log(channelId, ' pepe') */
             const response = await axios
                                    .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=(ponerclave)`)                      
            const channelImage = response.data.items[0].snippet.thumbnails.medium.url;   
            const title = snippet.title;
            const image = snippet.thumbnails.medium.url;
            const views = video.statistics.viewCount
            const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
            const channel = snippet.channelTitle;
            //console.log(views)
            newVideoCards.push({
            videoId,
            image,
            title,
            channel,
            views,
            timestamp,
            channelImage
            });
            
        }
        setVideoCards(newVideoCards);
        setIsLoading(false);
        
    }

    if(isError) {
      return <Alert severity="error" className='loading'>No Results found!</Alert>
    }


    return (<div className='recommendedvideos'>
            { isLoading ? <CircularProgress className='loading' color='secondary' /> : null }
            <div className="recommendedvideos__videos">
                {
                  videoCards.map(item => {
                    
                    return (
                        
                        <VideoCard 
                          key={item.videoId}
                          Id={item.videoId}
                          title={item.title} 
                          image={item.image}
                          views={item.views}
                          timestamp={item.timestamp}
                          channel={item.channel}
                          channelImage={item.channelImage}
                        />
                    )
                  })
                }
            </div>
            <button onClick={()=>(setVideos(videos+9))}>buscar mas videos</button>
        </div> );
}
 
export default RecommendedVideos;