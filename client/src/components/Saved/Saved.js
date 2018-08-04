import React from "react";

const Saved = (props) => {
  return(
    <div className="card mt-3">
      <div className="card-header">
        <h4>Saved Articles</h4>
      </div>
      <div className="card-body">
        {props.savedArticles.map((article) => {

          return (
            <div key={article._id}>
              <div className="row">
                <a href={article.url} target="_blank"><h4>{article.title}</h4></a>
                <p>{article.summary}</p>
                <button onClick={() => props.deleteArticle(article._id)} className="btn btn-sm btn-danger ml-auto">delete</button>
              </div>
              <hr/>
            </div>
          )
        }) || <h4>loading...</h4>}
      </div>
    </div>
  )
};

export default Saved;
