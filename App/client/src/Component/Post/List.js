import React from "react";
import { Link } from "react-router-dom";
import { ListDiv, ListItem } from "../../Style/ListCSS.js";
import Avatar from "react-avatar";
import moment from "moment";
import "moment/locale/ko";

function List(props){
    const SetTime = (a, b) => {
        if (a !== b) {
          return moment(b).format("YYYY년 MMMM Do, hh:mm") + "(수정됨)";
        } else {
          return moment(a).format("YYYY년 MMMM Do, hh:mm");
        }
      };
    
    return(
        <ListDiv>
           {props.PostList.map((post,idx)=>{
            return (
             <ListItem key={idx}>
                <Link to = {`/post/${post.postNum}`}>
                <p className="title">{post.title}</p>
                <Avatar
                    size="40"
                    round={true}
                    src={post.author.photoURL}
                    style={{ border: "1px solid #c6c6c6" }}
                />
                <p className="author">{post.author.displayName}</p>
                <p>{post.content}</p>
                <p>{SetTime(post.createdAt, post.updatedAt)}</p>
                </Link>
             </ListItem>
            );
      })}
        </ListDiv>
    );

}

export default List;