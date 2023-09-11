import React, { useState } from "react";
import music from "../../assets/images/sap30.jpg";
import sap30 from "../../assets/music/sap30.mp3";
import {
  LeftCircleOutlined,
  RightCircleOutlined,
  PlayCircleOutlined,
  RetweetOutlined,
  RollbackOutlined,
  SwapOutlined,
  InfoCircleOutlined,
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
  const [pause, setPause] = useState(true);
  const [audio, setAudio] = useState(new Audio(sap30));
  const next = () => {};
  const prev = () => {};
  const play = () => {
    if (pause == true) {
      audio.play();
    } else {
      audio.pause();
    }
    setPause(!pause);
  };
  const replay = () => {};
  const songs = [
    {
      name: "Sắp 30",
      singer: "Trịnh Đình Quang",
      path: "../../assets/music/sap30.mp3",
      image: "../../assets/images/sap30.jpg",
    },
  ];
  return (
    <>
      <div className="ctn">
        <div className="ctn-bg">
          <div className="row ctn-bg-child">
            <div className="ctn-sidebar col-md-4 col-xs-12">
              <div className="ctn-card">
                <div className="img-music">
                  <img src={music} />
                </div>
                <div className="info-music">
                  <p className="info-name">Sắp 30</p>
                  <p className="info-singer">Trịnh Đình Quang</p>
                </div>
                <div className="operation">
                  <div className="operation-directional">
                    <Button
                      shape="circle"
                      title="info"
                      icon={
                        <InfoOutlined
                          style={{ fontSize: "20px", color: "white" }}
                        />
                      }
                      size={20}
                      style={{
                        backgroundColor: "rgba(105, 102, 103, 0.3)",
                        border: "no-border",
                      }}
                    />
                    <Button
                      shape="circle"
                      title="prev"
                      onClick={() => prev()}
                      icon={
                        <StepBackwardOutlined
                          style={{ fontSize: "20px", color: "white" }}
                        />
                      }
                      size={20}
                      style={{
                        backgroundColor: "rgba(105, 102, 103, 0.3)",
                        border: "no-border",
                      }}
                    />
                    {pause == false ? (
                      <Button
                        shape="circle"
                        title="pause"
                        onClick={() => play()}
                        icon={
                          <PauseOutlined
                            style={{ fontSize: "20px", color: "white" }}
                          />
                        }
                        size={20}
                        style={{
                          backgroundColor: "rgba(105, 102, 103, 0.3)",
                          border: "no-border",
                        }}
                      />
                    ) : (
                      <Button
                        shape="circle"
                        title="play"
                        onClick={() => play()}
                        icon={
                          <CaretRightOutlined
                            style={{ fontSize: "20px", color: "white" }}
                          />
                        }
                        size={20}
                        style={{
                          backgroundColor: "rgba(105, 102, 103, 0.3)",
                          border: "no-border",
                        }}
                      />
                    )}
                    <Button
                      shape="circle"
                      onClick={() => next()}
                      title="next"
                      icon={
                        <StepForwardOutlined
                          style={{ fontSize: "20px", color: "white" }}
                        />
                      }
                      size={20}
                      style={{
                        backgroundColor: "rgba(105, 102, 103, 0.3)",
                        border: "no-border",
                      }}
                    />

                    <Button
                      shape="circle"
                      onClick={() => replay()}
                      title="replay"
                      icon={
                        <RetweetOutlined
                          style={{ fontSize: "20px", color: "white" }}
                        />
                      }
                      size={20}
                      style={{
                        backgroundColor: "rgba(105, 102, 103, 0.3)",
                        border: "no-border",
                      }}
                    />
                  </div>
                </div>
                <div className="operation-progess">
                  <Progress
                    percent={30}
                    strokeColor={"#FF0000"}
                    showInfo={false}
                  />
                  <div className="progess">
                    <p className="present">2:42</p>
                    <p className="end">5:36</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ctn-content col-md-8 col-xs-12">
              <div className="content-menu">
                <div className="d-flex justify-content-end">
                  <Input
                    className="me-2"
                    style={{ width: "20%" }}
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
                  <div className="list">
                    <p>Danh sách đang phát</p>
                    <ul>
                      <li>Bài 1</li>
                      <li>Bài 2</li>
                      <li>Bài 3</li>
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
