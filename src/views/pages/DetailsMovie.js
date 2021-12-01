import React from "react";
import { useLocation } from "react-router-dom";
// import Image from "./../../assets/img/avatar5.png";

export const DetailsMovie = () => {
  let location = useLocation();

  const {
    status,
    tagline,
    runtime,
    overview,
    poster_path,
    title,
    release_date,
    vote_average,
  } = location.state;

  return (
    <>
      <div className="content-wrapper" style={{ minHeight: "1136px" }}>
        <section class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <div>
                      <h3 class="card-title">
                        Detail Movie {""} {title}
                      </h3>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3 card card-body">
                        <img
                          // src={poster_path ? poster_path : Image}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi4RKtbb5QNPgbgbQD6HG_d5jRqt8oZW7UWA&usqp=CAU"
                          className="thumbnail"
                          alt={poster_path}
                        />
                      </div>
                      <div className="col-md-9">
                        <h2 className="mb-4">{title}</h2>
                        <ul className="list-group">
                          <li className="list-group-item">
                            <strong>Released: {""}</strong> {release_date}
                          </li>
                          <li className="list-group-item">
                            <strong>Rated: {""}</strong> {vote_average}
                          </li>
                          <li className="list-group-item">
                            <strong>Overview: {""}</strong>{" "}
                            {overview ? overview : "No overview"}
                          </li>
                          <li className="list-group-item">
                            <strong>Status: </strong>{" "}
                            {status ? status : "No Status"}
                          </li>
                          <li className="list-group-item">
                            <strong>Runtime: </strong> {runtime ? runtime : 0}
                          </li>
                          <li className="list-group-item">
                            <strong>Tagline: </strong>{" "}
                            {tagline ? tagline : "No Tagline"}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="card card-body bg-dark my-5 text-light">
                        <div className="col-md-12">
                          <h3>About </h3>
                          {overview}
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
