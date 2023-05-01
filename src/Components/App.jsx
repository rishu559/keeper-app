import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// import notes from "../notes.js"

function App() {
  const [arr,setArr] = useState([]);

  function UpdateArr(item){
    setArr((prev)=>{
      return [...prev,item];
    })
  }

  function DeleteNode(id){
    setArr(arr.filter((item,index)=>{
      return index!==id;
    }));
  }

  return (
    <div>
      <Header />
      <CreateArea UpdateArr={UpdateArr}/>
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      {arr.map((item,index)=>{
        return <Note key={index} id ={index} title={item.title} content={item.content} DeleteNode={DeleteNode} />
      })}

      <Footer />
    </div>
  );
}

export default App;
