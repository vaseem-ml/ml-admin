import React, { Component } from "react";

class Graphs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="row col-12">
          <div className="col-md-4">
            <div className="card card-chart">
              <div className="card-header card-header-success">
                <div className="ct-chart" id="dailySalesChart" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Daily Sales</h4>
                <p className="card-category">
                  <span className="text-success">
                    <i className="fa fa-long-arrow-up" /> 55%{" "}
                  </span>{" "}
                  increase in today sales.
                </p>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">access_time</i> updated 4
                  minutes ago
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-chart">
              <div className="card-header card-header-warning">
                <div className="ct-chart" id="websiteViewsChart" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Email Subscriptions</h4>
                <p className="card-category">Last Campaign Performance</p>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">access_time</i> campaign sent 2
                  days ago
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-chart">
              <div className="card-header card-header-danger">
                <div className="ct-chart" id="completedTasksChart" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Completed Tasks</h4>
                <p className="card-category">Last Campaign Performance</p>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">access_time</i> campaign sent 2
                  days ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Graphs;
