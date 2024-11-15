import React, { useState } from "react";
import { Routes, Route}  from "react-router-dom";

import Test from './Test';
import Heading from "./Component/Heading";
import List from "./Component/Post/List";
import Upload from "./Component/Post/Upload";
import Detail from "./Component/Post/Detail";
import Edit from "./Component/Post/Edit";


function App() {
  const [ContentList, setContentList] = useState([]);
  return (
    <>
      <Heading />
      <Routes>
        <Route 
          path="/"
          element={<List ContentList={ContentList} setContentList={setContentList}/>}
        />
        <Route 
          path="/upload" 
          element={<Upload ContentList={ContentList} setContentList={setContentList}/>} 
        />
        <Route 
          path="/post/:postNum" 
          element={<Detail />} 
        />
        <Route 
          path="/edit/:postNum" 
          element={<Edit />} 
        />
      </Routes>
    </>
  );
}

export default App;
