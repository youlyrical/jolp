import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "./ImageUpload.js";
import { UploadDiv, UploadForm, UploadButtonDiv} from "../../Style/UploadCSS.js";
import axios from "axios";

function Upload(props){
    const [Title, setTitle]=useState("");
    const [Content, setContent]=useState("");
    const [Image, setImage]=useState("");
    let navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        if (Title === "" || Content === "") {
            return alert("모든 항목을 채워주세요!");
        }

          let body = {
            title: Title,
            content: Content,
            image: Image,
          };

    axios
      .post("/api/post/submit", body)
      .then((response) => {
        if (response.data.success) {
          alert("글 작성이 완료되었습니다.");
          navigate("/");
        } else {
          alert("글 작성에 실패하였습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

    return(
        <UploadDiv>
        <UploadForm>
        <label htmlFor="label">제목</label>
        <input
            id="title"
            type="text"
            value={Title} 
            onChange={(e)=>{
                setTitle(e.currentTarget.value);
            }}
        />
        <ImageUpload setImage={setImage}/>
        <label htmlFor="content">내용</label>
        <textarea 
            id="content"
            value={Content} 
            onChange={(e)=>{
                setContent(e.currentTarget.value);
            }}
        />
        <UploadButtonDiv>
            <button
            onClick={(e) => {
                onSubmit(e);
            }}
            >제출!!</button>
        </UploadButtonDiv>
        </UploadForm>
        </UploadDiv>
    );

}

export default Upload;