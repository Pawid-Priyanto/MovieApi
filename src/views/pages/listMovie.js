import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getMovie, nextPage, prevPage } from "../../state/movie";
export const Movie = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { data, loading, error, page } = useSelector(
    (state) => state.moviePerPage
  );

  console.log(loading, "woi ini loading");

  useEffect(() => {
    dispatch(getMovie(page));
  }, [page]);

  if (error) return <p>Error!</p>;
  if (loading)
    return (
      <div className="content-wrapper">
        <div className="spinner-border text-danger" role="status"></div>
      </div>
    );

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
                      <h3 class="card-title">DataTable List Movie</h3>
                    </div>
                    <div>
                      <button
                        className={
                          page === 1
                            ? "disabled btn btn-primary rounded"
                            : "btn btn-primary rounded"
                        }
                        onClick={() => dispatch(prevPage())}
                      >
                        Previous
                      </button>{" "}
                      {""}
                      <button
                        className="btn btn-primary rounded"
                        onClick={() => dispatch(nextPage())}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                  <div class="card-body">
                    <table
                      id="example2"
                      class="table table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>ID</th>
                          <th>Title</th>
                          <th>Popularity</th>
                          <th>Overview</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.results &&
                          Object.keys(data.results).map((movie, id) => {
                            return (
                              <tr key={id}>
                                <td>{id + 1}</td>
                                <td
                                  style={{ cursor: "pointer" }}
                                  align="left"
                                  justify="left"
                                  onClick={
                                    () =>
                                      history.push({
                                        pathname: `/movie/${data.results[movie].id}`,
                                        state: data.results[movie],
                                      })
                                    // console.log("tes butoon")
                                  }
                                >
                                  {data.results[movie].id}
                                </td>
                                <td align="left" justify="left">
                                  {data.results[movie].original_title}
                                </td>
                                <td align="left" justify="left">
                                  {data.results[movie].popularity}
                                </td>
                                <td align="left" justify="left">
                                  {data.results[movie].overview}
                                </td>
                              </tr>
                            );
                          })}
                        {/* <p>{JSON.stringify(data, null, 0)}</p> */}
                      </tbody>
                    </table>
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
