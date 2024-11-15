import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ListDiv, ListItem } from "../../Style/ListCSS.js";



function List(props){
    const [PostList, setPostList] = useState([]);

    useEffect(() => {
        axios
            .post("/api/post/list")
            .then( (response) => {
                if(response.data.success){
                    setPostList([...response.data.postList]);
                }
                console.log(response.data);
             })
            .catch( (error) => {
                console.log(error);
            });
    }, []);

    
    return(
        <ListDiv>
            <h3>List !!</h3>
           {PostList.map((post,idx)=>{
            return (
             <ListItem key={idx}>
                <Link to = {`/post/${post.postNum}`}>
                <p className="title">{post.title}</p>
                <p>{post.content}</p>
                </Link>
             </ListItem>
            );
      })}
        </ListDiv>
    );

}

export default List;