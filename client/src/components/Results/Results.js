import React from "react";
import "./Results.css";

const Results = (props) => {
  return (
    <div className="card mt-3">
      <div className="card-header">
        <h4 className="mb-0">Results</h4>
      </div>
      <div className="card-body">
        {props.result.map((article) => {
          
          return (
            <div key={article._id} className="my-3">
              <a href={article.web_url} target="_blank"><h4><i className="fas fa-paper-plane mr-2"></i>{article.headline.main}</h4></a>
              <p>{article.snippet}</p>
              <button onClick={() => props.handleSaveButton(article.headline.main, article.web_url, article.pub_date, article.snippet)} className="btn btn-sm btn-success">save</button>
              <hr className="mb-2"/>
            </div>
            
          )
        }) || <h4>loading...</h4>}
      </div>
    </div>
  )
};

export default Results
