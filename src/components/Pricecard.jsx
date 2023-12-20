import React from "react";

function pricecard({ data }) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {data.plan}
          </h5>
          <h6 className="card-price text-center">
            ${data.price}
            <span className="period">
              <h1>/month</h1>
            </span>
          </h6>
          <hr />
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {data.plan !== "FREE" ? <b>data.user</b> : <>data.user</>}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {data.storage}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {data.publicProject}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {data.communityAccess}
            </li>
            <li className={data.isprivateProjects ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    data.isprivateProjects ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {data.privateProjects}
            </li>
            <li className={data.isphoneSupport ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    data.isphoneSupport ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {data.phoneSupport}
            </li>
            <li className={data.issubDomain ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={data.issubDomain ? "fas fa-check" : "fas fa-times"}
                ></i>
              </span>
              {data.subDomain}
            </li>
            <li className={data.isreports ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={data.isreports ? "fas fa-check" : "fas fa-times"}
                ></i>
              </span>
              {data.reports}
            </li>
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default pricecard;
