import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ListDiv, ListItem } from "../../Style/ListCSS.js";
import Avatar from "react-avatar";

function List(props){
    const [PostList, setPostList] = useState([]);

    useEffect(() => {
        axios
            .post("/api/post/list")
            .then( (response) => {
                if(response.data.success){
                    setPostList([...response.data.postList]);
                }
             })
            .catch( (error) => {
                console.log(error);
            });
    }, []);

    
    return(
        <ListDiv>
           {PostList.map((post,idx)=>{
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
                </Link>
             </ListItem>
            );
      })}
        </ListDiv>
    );

}

export default List;