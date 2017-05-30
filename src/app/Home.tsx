import * as React from "react";
import {Link} from "react-router-dom";

export function Home() {
  return (
    <div className='home-container'>
      <h1>Github Battle: Battle your friends... and stuff.</h1>
      <Link className='button' to='/battle'>Battle</Link>
    </div>
  );
}
