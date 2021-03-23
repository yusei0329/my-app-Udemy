import React from 'react';
import LikeButton from './LikeButton';


const Article = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <labele htmlFor="check">後悔状態:</labele>
      <input type="checkbox" checked={props.isPublished} id="check" onClick={() => props.toggle()} />
      <LikeButton count={props.count}/>
    </div>
  )
};

export default Article