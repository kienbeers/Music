import React, { useEffect, useRef, useState } from "react";
import music from "../../assets/images/sap30.jpg";
import cha from "../../assets/music/cha gia roi dung khong.mp3";
import {
  RetweetOutlined,
  UserOutlined,
  UnorderedListOutlined,
  SearchOutlined,
  PauseOutlined,
  CaretRightOutlined,
  InfoOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from "@ant-design/icons";
import { Button, Input, Progress } from "antd";

const Home = () => {
  const [playPause, setPlayPause] = useState(true);
  const audioRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [durationTime, setDurationTime] = useState(0)
  const [time, setTime] = useState();
  const [progessPresent, setProgessPresent] = useState(0);
  const [intervals, setIntervals] = useState();
  const [currentMusic, setCurentMusic] = useState(0);
  const songs = [
    {
        "name": "Sing me to sleep",
        "author": "Alan Walker",
        "url": "https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3",
        "id": 0,
        "links": {
            "images": [
                {
                    "url": "https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576"
                },
                {
                    "url": "https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a"
                }
            ]
        }
    },
    {
        "name": "Fade-NCS Release",
        "author": "Alan Walker",
        "url": "https://cdn.discordapp.com/attachments/775740994595323954/775741536591806484/Alan_Walker_-_Fade_NCS_ReleaseMP3_160K.mp3",
        "id": 1,
        "links": {
            "images": [
                {
                    "url": "https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576"
                },
                {
                    "url": "https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a"
                }
            ]
        }
    },
    {
        "name": "She-NCS Release",
        "author": "Andromedik",
        "url": "https://cdn.discordapp.com/attachments/775740994595323954/775741544149549096/Andromedik_-_SHE_NCS_ReleaseMP3_160K.mp3",
        "id": 2,
        "links": {
            "images": [
                {
                    "url": "https://i.scdn.co/image/ab6761610000e5eb37db62ee361f796bef5b49a6"
                },
                {
                    "url": "https://i.scdn.co/image/ab67616d0000b2737b8d8ca1a8e14506c8f35233"
                }
            ]
        }
    },
    {
        "name": "About you-NCS Release",
        "author": "Ascence",
        "url": "https://cdn.discordapp.com/attachments/775740994595323954/775741547203002389/Ascence_-_About_You_NCS_ReleaseMP3_160K.mp3",
        "id": 3,
        "links": {
            "images": [
                {
                    "url": "https://i.scdn.co/image/ab6761610000e5eb6e50f29c671af8aff68b321d"
                },
                {
                    "url": "https://i.scdn.co/image/ab67616d0000b27335ca35166aba974dd2dd29a2"
                }
            ]
        }
    },
  ]
  const next = () => {
    if(currentMusic < songs.length-1) {
      setCurentMusic(currentMusic + 1)
    }
  };
  const prev = () => {
    if(currentMusic != 0) {
    setCurentMusic(currentMusic - 1)}
  };
  const replay = () => {};
  const play = () => {
    audioRef.current.play();
    setPlayPause(!playPause);
    getCurrentTime();
  };
  const pause = () => {
    audioRef.current.pause();
    setPlayPause(!playPause);
    deleteInterval();
  }
  const getCurrentTime = () => {
    console.log("vào");
    const interval = setInterval(() => {
      setCurrentTime(Math.floor(audioRef.current.currentTime));
    }, 500);
    setIntervals(interval);
    return () => clearInterval(interval);
  }
  const deleteInterval = () => {
    clearInterval(intervals);
  };
  useEffect(() => {
    setDurationTime(audioRef.current.duration)
    if (durationTime != 0 || currentTime != 0) {
      if (currentTime >= Math.floor(durationTime)) {
        pause();
      }
    }
  }, [currentTime])
  const secondsToTime = (seconds) => {
    if (seconds == 0 || isNaN(seconds)) {
      return '0:00';
    }
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    if (minutes === 0) {
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    } else {
      return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
  };
  return (
    <>
      <div className="ctn">
        <div className="ctn-bg">
          <div className="row ctn-bg-child">
            <div className="ctn-sidebar col-md-4 col-xs-12">
              <div className="ctn-card">
                <div className="img-music">
                  <img src={songs[currentMusic].links.images[0].url} />
                </div>
                <div className="info-music">
                  <p className="info-name">{ songs[currentMusic].name}</p>
                  <p className="info-singer">{ songs[currentMusic].author}</p>
                </div>
                <div className="operation">
                  <div className="operation-directional">
                    <div className="control">
                      <InfoOutlined
                        style={{ fontSize: "20px"}}
                      />
                    </div>
                    <div className="control" onClick={()=> prev()}>
                      <StepBackwardOutlined
                        style={{ fontSize: "20px"}}
                      />
                    </div>
                    {playPause == false ? (
                      <div className="control" onClick={() => pause()}>
                        <PauseOutlined
                          style={{ fontSize: "20px"}}
                        />
                      </div>
                    ) : (
                      <div
                        className="control"
                        onClick={() => play()}
                        style={{ paddingLeft: "2.5%" }}
                      >
                        <CaretRightOutlined
                          style={{ fontSize: "20px"}}
                        />
                      </div>
                    )}
                    <div className="control" onClick={() => next()}>
                      <StepForwardOutlined
                        style={{ fontSize: "20px"}}
                      />
                    </div>

                    <div className="control" onClick={() => replay()}>
                      <RetweetOutlined
                        style={{ fontSize: "20px"}}
                      />
                    </div>
                  </div>
                </div>
                <div className="operation-progess">
                  <Progress
                    percent={currentTime/durationTime * 100}
                    strokeColor={"#FF0000"}
                    showInfo={false}
                  />
                  <div className="progess">
                    <p className="present">{secondsToTime(currentTime)}</p>
                    <p className="end">{secondsToTime(Math.floor(durationTime))}</p>
                  </div>
                </div>
                <div>
                  <audio ref={audioRef} src={songs[currentMusic].url} autoPlay={!playPause} />
                </div>
              </div>
            </div>
            <div className="ctn-content col-md-8 col-xs-12">
              <div className="content-menu">
                <div className="d-flex justify-content-end">
                  <Input
                    className="me-2"
                    style={{ width: "40%" }}
                    placeholder="Search"
                  />
                  <SearchOutlined
                    className="me-3"
                    style={{ color: "white", fontSize: "20px" }}
                  />
                  <UserOutlined
                    className="me-3"
                    style={{ color: "white", fontSize: "20px" }}
                  />
                  <UnorderedListOutlined
                    className="me-3"
                    style={{ color: "white", fontSize: "20px" }}
                  />
                </div>
                <div className="content-baner">
                  <div className="list mt-2">
                    <p>Danh sách đang phát</p>
                    <ul>
                      {songs.map((song) => {
                        return <li>{ song.name}</li>
                      })}
                    </ul>
                  </div>
                </div>
                <div className="my-playlist">
                  <p>Choose Playlist</p>
                  <div className="card-playlist">
                    <div className="playlist-music">
                      <img src={music} />
                      <p className="playlist-name">Playlist 1</p>
                    </div>
                  </div>
                  <div className="card-playlist">
                    <div className="playlist-music">
                      <img src={music} />
                      <p className="playlist-name">Playlist 2</p>
                    </div>
                  </div>
                  <div className="card-playlist">
                    <div className="playlist-music">
                      <img src={music} />
                      <p className="playlist-name">Playlist 3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
