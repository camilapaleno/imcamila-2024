import React, { useState, useEffect } from "react";
import {  BrowserRouter,  Routes,  Route} from "react-router-dom";

function Frame(prop) {
  return (
    <>
      <div className='frame'>
        <a href="#">back</a>
        <h1>{prop.name}</h1>
        <p>{prop.description}</p>
        <iframe src="{prop.source}"></iframe>
      </div>
    </>
  );
}

export default Frame;