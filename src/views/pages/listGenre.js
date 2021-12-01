import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../state/genre";
export const Genre = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.genres);
  // eslint-disable-next-line
  useEffect(() => {
    dispatch(getGenres());
  }, []);

  if (error) return <p>Error Network!</p>;
  if (loading === true)
    return <p style={{ backgroundColor: "red" }}>Woiii.................</p>;

  return (
    <>
      <div className="content-wrapper" style={{ minHeight: "1136px" }}>
        <section class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">DataTable List Genre</h3>
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
                          <th>Genre</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((genre, id) => {
                          return (
                            <tr key={id}>
                              <td align="left">{id + 1}</td>
                              <td align="left">{genre.id}</td>
                              <td align="left">{genre.name}</td>
                            </tr>
                          );
                        })}
                        {/* <tr>
                          <td>Trident</td>
                          <td>Internet Explorer 4.0</td>
                          <td>Win 95+</td>
                          <td> 4</td>
                          <td>X</td>
                        </tr>
                        <tr>
                          <td>Trident</td>
                          <td>Internet Explorer 5.0</td>
                          <td>Win 95+</td>
                          <td>5</td>
                          <td>C</td>
                        </tr> */}
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
