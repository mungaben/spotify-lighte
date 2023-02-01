import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'





const SearchTrack = () => {
    const [token, settoken] = useState(()=>JSON.parse( localStorage.getItem("sportify_access")));
    const [mydata, setmydata] = useState();
    console.log("Search track access",token);
    

    const data=()=>{
        const search_data=axios.get('https://api.spotify.com/v1/search?query=album:"ndovu"&type=track&market=US&offset=0&limit=10 ',{
            headers:{"Authorization":`Bearer ${token}`}
        }).then((res)=>{
            console.log("resdata",res.data.tracks.items);
            setmydata(res.data.tracks)
            

        }).catch((errors)=>{
            console.log(errors);
        })


    }
    const getdata=()=>{
      console.log("tracks",mydata.items);
      mydata.items.map((artist,index)=>{
        console.log(artist.artists);
        console.log("open details");
            console.log('====================================');
            console.log( artist.name);
            console.log(artist.popularity);
            console.log(artist.preview_url);
            console.log(artist.track_number);
            console.log('====================================');
        artist.artists.forEach(element => {
          console.log(element.name);
          console.log(element.id);
          console.log(element.href);
          console.log(element.external_urls.spotify);

          
      })
       console.log("ALBUM");
       console.log('====================================');
            console.log("album_artists",artist.album.artists)
              console.log('====================================');
              artist.album.artists.forEach(element => {
                console.log(element.external_urls.spotify);
                console.log(element.href);
                console.log(element.id);
                console.log(element.name);
                

              });

              console.log('====================================');
                console.log("images");
              console.log('====================================');
              console.log("images",artist.album.images);
              artist.album.images.forEach(element => {
                console.log(element.height);
                console.log(element.url);
                console.log(element.width);
                
              });

              console.log();
              console.log('====================================');

              console.log('====================================');
              console.log("album name",artist.album.name);
              console.log("release_date",artist.album.release_date);
              console.log("total_tracks",artist.album.total_tracks);
              console.log('====================================');
      })
    }
    useEffect(()=>{
        data()
        mydata && getdata()
    },[])

  return (
    <div>
      search track
    </div>
  )
}

export default SearchTrack
