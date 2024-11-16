import React, { useState, useEffect } from "react";
import List from "./Post/List.js";
import axios from "axios";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { GNBDiv, FooterDiv } from "../Style/MainPageCSS.js";
import { get } from "mongoose";


function MainPage() {
    const [PostList, setPostList] = useState([]);
    const [Sort, setSort] = useState("최신순");
    const [SearchTerm, setSearchTerm] = useState("");

    const getPostList = () => {
        let body = {
            sort: Sort,
            searchTerm: SearchTerm,
          };
        axios
            .post("/api/post/list", body)
            .then( (response) => {
                if(response.data.success){
                    setPostList([...response.data.postList]);
                }
             })
            .catch( (error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getPostList();
    }, [Sort]);

    const SearchHandler = () => {
        getPostList();
      };

  return (
    <div>
      <GNBDiv>
      <div className="search">
          <input
            type="text"
            value={SearchTerm}
            onChange={(e) => setSearchTerm(e.currentTarget.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) SearchHandler();
            }}
          />
          <button onClick={() => SearchHandler()}>
            <i className="bi bi-search">검색</i>
          </button>
        </div>
      <DropdownButton variant="outline-secondary" title={Sort}>
          <Dropdown.Item onClick={() => setSort("최신순")}>
            최신순
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSort("인기순")}>
            인기순
          </Dropdown.Item>
        </DropdownButton>
      </GNBDiv>
      <List PostList={PostList}/>
    </div>
  )
}

export default MainPage
