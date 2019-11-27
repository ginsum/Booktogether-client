import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface IAuthor {
  _id: string;
  image: string;
  name: string;
  profile: string;
}

interface ICuration {
  _id: string;
  author: IAuthor;
  content: string;
  likes: string[];
  published: boolean;
  title: string;
}

interface IProps {
  curation: ICuration;
}

const RecoCurationEntry = ({ curation }: IProps): ReactElement => {
  const path: string = `/curation/${curation._id}`;
  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <div className="main_review_list_review">
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img
              width="100"
              height="100"
              src={curation.author.image}
              alt=""
              className="img_center uk-border-circle"
            />
          </div>
          <div className="uk-card-body" style={{ height: "150px" }}>
            <h3 className="uk-card-title">
              {curation.title.length > 30
                ? curation.title.slice(0, 30) + "..."
                : curation.title}
            </h3>
            <p>{curation.content}</p>
            <p style={{ textAlign: "right", color: "lightgray" }}>보러가기</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecoCurationEntry;