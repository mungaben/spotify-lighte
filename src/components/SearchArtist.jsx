import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  BsSearch,
  BsPlay,
  BsFillPlayBtnFill,
  BsFillPauseBtnFill,
} from "react-icons/bs";

import axios from "axios";
import Toggleplay from "./Toggleplay";

const SearchArtist = () => {
  const [token, settoken] = useState(() =>
    JSON.parse(localStorage.getItem("sportify_access"))
  );
  const [data, setdata] = useState();
  const [album, setalbum] = useState();
  const [artist, setartist] = useState();
  const [dark, setdark] = useState(false);
  const [search, setsearch] = useState("justin");
  const [play, setplay] = useState(false);
  const [music, setmusic] = useState();

  console.log(search);
  console.log("play", play);
 const musicref = useRef(music)
  // const memoizedCallback = useCallback(
  //   (music) => {

  //     play && music.play()
  //     console.log( " music played");

  //   },[play],
  // )

  // const playmusic= async()=>{

  //  let music=  new Audio(music)
  //  console.log(music);
  //   music.play()
  //   // setmusic()
  // }
  // // music && playmusic()

  const search_data = () => {
    const data = axios
      .get(
        `https://api.spotify.com/v1/search?query=artist:${search}&type=track&market=US&offset=0&limit=24`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log("data", res.data.tracks.items);
        setdata(res.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
  const handle_submit = (e) => {
    e.preventDefault();
    search_data();
  };
  const handle_change = (e) => {
    setsearch(e.target.value);
  };
  // const handle_play = () => {
  //   console.log(music);
  //   music && play && music.play
  //   console.log(play);
  //   !play && music.pause()

  // };
  useEffect(()=>{
     data && data.tracks.items.map((artist, index) => {
      setmusic(artist.preview_url)


    })
    console.log("data");
   

  },[])
  

  const getdata = () => {
    console.log("tracks", data.tracks.items);
    data.tracks.items.map((artist, index) => {
      console.log("open details");
      console.log("====================================");
      console.log(artist.name);
      console.log(artist.popularity);
      console.log(artist.preview_url);
      console.log(artist.track_number);
      console.log("====================================");
      console.log("album_artists", artist.album.artists);
      console.log("====================================");
      artist.album.artists.forEach((element) => {
        console.log(element.external_urls.spotify);
        console.log(element.href);
        console.log(element.id);
        console.log(element.name);
      });

      console.log("====================================");
      console.log("images");
      console.log("====================================");
      console.log("images", artist.album.images);
      artist.album.images.forEach((element) => {
        console.log(element.height);
        console.log(element.url);
        console.log(element.width);
      });

      console.log();
      console.log("====================================");

      console.log("====================================");
      console.log("album name", artist.album.name);
      console.log("release_date", artist.album.release_date);
      console.log("total_tracks", artist.album.total_tracks);
      console.log("====================================");

      const data2 = artist.artists.length > 1;
      artist.artists.forEach((element) => {
        console.log(element.name);
        console.log(element.id);
        console.log(element.href);
        console.log(element.external_urls.spotify);
      });
    });
  };

  useEffect(() => {
    token && search_data();
    data && getdata();
    // play && music.play
  }, []);

  return (
    data && (
      <div
        className={` bg-slate-900 text-slate-200 ${
          dark && " bg-slate-50 text-slate-900"
        } h-full w-full m-2  rounded-sm p-2`}
      >
        <div className=" from-orange-50  flex items-center justify-center p-1 ">
          <form
            action=""
            method="post"
            className=" flex flex-row shadow-md my-4 p-2"
            onSubmit={handle_submit}
          >
            <input
              className=" border-none text-slate-500 text-center p-2 hover:border-slate-100 outline-0"
              type="text"
              name="Artist_name"
              id="artist_search"
              onChange={handle_change}
            />
            <button className=" p-1 bg-slate-50 text-slate-900" type="submit">
              {<BsSearch />}
            </button>
          </form>
        </div>
        <section className=" shadow-lg border border-slate-500">
          <div className=" grid md:grid-cols-4  sm:w-full  p-2 m-2 gap-3 place-content-center ">
            {data &&
              data.tracks.items.map((artist, index) => {
                return (
                  <div key={index} className="">
                    <div className=" grid  content-center   shadow-md rounded-sm border-none bg-transparent ">
                      <title>album</title>
                  <div className=" relative">
                      
                    
                    <div className=" absolute w-5 h-5   right-1/2 left-1/2 top-1/2 bottom-1/2 opacity-25 hover:opacity-100  hover:visible hover:scale-150  ">
                                <div 
                                onClick={()=>{setplay(!play);
                                  const mymusic = new Audio(artist.preview_url)
                                  setmusic()
                                   console.log(play);}}

                                >  </div>
                                {/* { music && <Toggleplay isplaying={play} music={musicref.current}/>}  */}
                    </div>
                    
                      <div>
                        <a href={artist.external_urls.spotify} target="_blank" >
                        {artist.album.images.map((element, id) => {
                          // console.log(element.height);
                          // console.log(element.url);
                          // console.log(element.width);

                          if (id == 1) {
                            return (
                              <div
                                key={id}
                                className={`bg-transparent flex justify-center  items-center object-cover `}
                              >
                                {/* <h2>{id}</h2> */}
                                <img
                                  className=" object-center object-cover"
                                  src={element.url}
                                  alt="imag"
                                  //
                                  // height={element.height}
                                  // width={element.width}
                                />
                                
                              </div>
                            );
                          }
                        }
                       
                      
                        )}
                        </a>
                      </div>
                      <div/>
                  </div>
                      
                    </div>
                    <div className=" mt-2 mx-auto flex justify-center  flex-col p-4 text-xs capitalize ">
                      <div>
                       
                      {artist.artists.map((artist_name, id) => {
                        return (
                          <div
                            key={id}
                            className=" text-xl rounded-md m-1 hover:uppercase  "
                          >
                            <a
                              className="  mt-2 justify-center items-center flex shadow-md"
                              href={artist_name.external_urls.spotify}
                              target="_blank"
                            >
                              {" "}
                              {artist_name.name}
                            </a>
                          </div>
                        );
                      })}
                      </div>
                      <div className="">
                        <div> Song : {artist.name}</div>
                        <div> Number : {artist.track_number}</div>
                        <div> popularity : {artist.popularity}</div>
                      </div>
                    </div>

                    <footer></footer>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    )
  );
};

export default SearchArtist;
