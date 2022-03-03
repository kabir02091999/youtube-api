import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'

const ReproduceVideo = () => {
    console.log(useParams());
   /*  const [lin,setlin]=useState("https://www.youtube.com/embed/");   */  
    var lin2="https://www.youtube.com/embed/"+useParams().id;
    
    return ( 
    
    <div>

        <iframe width="560" height="315" src={lin2} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

    </div>
     );
}
 
export default ReproduceVideo;