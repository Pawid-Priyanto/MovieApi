import React from "react";
import { NavLink } from "react-router-dom";
import User from "./../../assets/img/avatar5.png";

const Aside = () => {
  return (
    <>
      {/* <!-- Left side column. contains the logo and sidebar --> */}
      <aside className="main-sidebar">
        {/* <!-- sidebar: style can be found in sidebar.less --> */}
        <section className="sidebar">
          {/* <!-- Sidebar user panel --> */}
          <div className="user-panel">
            <div className="pull-left image">
              <img src={User} className="img-circle" alt="User" />
            </div>
            <div className="pull-left info">
              <p>Pawit Priyanto</p>
              <a href="/">
                <i className="fa fa-circle text-success"></i> Online
              </a>
            </div>
          </div>

          {/* <!-- sidebar menu: : style can be found in sidebar.less --> */}
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li className="active treeview">
              <a href="/">
                <i className="fa fa-dashboard"></i>
                <span>Dashboard</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <NavLink to="listgenre">
                    <i className="fa fa-circle-o"></i> List Genre
                  </NavLink>
                </li>
                <li>
                  <NavLink to="listmovie">
                    <i className="fa fa-circle-o"></i> List Movie
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        {/* <!-- /.sidebar --> */}
      </aside>
    </>
  );
};

export default Aside;
