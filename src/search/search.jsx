import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import {DateTime} from 'luxon';
import VideoCard from './../component/VideoCard/VideoCard' 

const Search = () => {
    console.log(useParams().search)
    //const [search,setsearch] = useState(useParams().search)
    const [videos,setVideos] = useState(20)
    const [videoCards, setVideoCards] = useState([]);
    var search = useParams().search;
    /* const actualisar =  () =>{

        setsearch(useParams().search)

    } */

    useEffect(() => {
        /* actualisar(); */
        console.log(search)
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=9&key=(poner clave)`)
            .then(response => {
                
                searchV(response.data.items)
                //console.log(response.data.items)
            }).catch(error => {
                console.log(error);
                //setIsError(true);
            })

    }, [useParams().search])

    async function searchV(videoItems){

        let newSearchCards=[]
        
        for (const video of videoItems){

            const videoId = video.id.videoId;
            //console.log(video.id.videoId)
            const snippet = video.snippet;
            const channelId = snippet.channelId;
            /* console.log(channelId, ' pepe') */
             const response = await axios
                                    .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=(ponerclave)`)                      
            const channelImage = response.data.items[0].snippet.thumbnails.medium.url;   
            const title = snippet.title;
            const image = snippet.thumbnails.medium.url;
            /* const views = video.statistics.viewCount */
            const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
            const channel = snippet.channelTitle;
           
            newSearchCards.push({
            videoId,
            image,
            title,
            channel,
            /* views,*/
            timestamp,
            channelImage
            });

        }
        setVideoCards(newSearchCards);
    }
    
    return ( 

        <div className='recommendedvideos'>

            <div className="recommendedvideos__videos">

                {

                    videoCards.map(item => {
                        //console.log(item.videoId)
                        return(

                            <VideoCard 
                                key={item.videoId}
                                Id={item.videoId}
                                title={item.title} 
                                image={item.image}
                                views="jajaj"
                                timestamp={item.timestamp}
                                channel={item.channel}
                                channelImage={item.channelImage}
                            />

                        )

                    })

                }

            </div>

        </div>

     );
}
 
export default Search;