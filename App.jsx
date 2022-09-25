import './App.css'
import React, { useState } from "react";

export default function App() {
  const [showImage1, setShowImage1] = useState(true)
  const [showImage2, setShowImage2] = useState(true)

  return (
    <main>
      {/* this is the header and slogan
           dont mess with formatting unless necessary */}
      <div id="logo">
        <img src="sflogo3.png" alt="StateFarm Logo" width="100" height="100"></img>
        <div>
          <h1 class="my-0 title"><a href="https://www.statefarm.com/" target="_blank"> StateFarm </a></h1>
          <h2 class="my-0 slogan" > Like a good neighbor, State Farm is there.</h2>
        </div>
      </div>
      {/* end of header and slogan */}
      <body>
        {/* this is the statements for the home page */}
        <h2 class="my-0 header2">Looking to get your first car or home? Jake is here to help you out!</h2>
        <h3 class="my-0 header3"> StateFarm has got you covered! You don't want Jake or yourself to suffer these fates. Click on our pictures of Jake to learn more. </h3>
        {/* end of statements for home page */}
        <div class="my-0 mx-0 options">
          <div>
            <h2 class="optionHeaders"> <a href="https://www.statefarm.com/insurance/auto" target="_blank">Car Insurance </a></h2>
            <button onClick={() => setShowImage1(!showImage1)}>
              {showImage1 && <img src="jake-collision.gif" alt="Jake Car" width="620" height="350" />}
              {!showImage1 && <h5 class="coverage"> StateFarm offers many great deals on auto insurance, for people of all ages and driving backgrounds. Click our car insurance link to learn more! </h5>}
            </button>
          </div>
          <div>
            <h2 class="optionHeaders"> <a href="https://www.statefarm.com/insurance/home-and-property/homeowners" target="_blank">Home Insurance </a></h2>
            <button onClick={() => setShowImage2(!showImage2)}>
              {showImage2 && <img src="Jake_House.png" alt="Jake House" width="300" height="300" />}
              {!showImage2 && <h5 class="coverage">No need to worry about potential home disasters, StateFarm keeps your house protected and covered. Click our house insurance link to learn more! </h5>}
            </button>
          </div>
        </div>
      </body>
    </main>
  )
}