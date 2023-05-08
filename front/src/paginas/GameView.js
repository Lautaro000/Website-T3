// import React from "react";
// import { Unity, useUnityContext } from "react-unity-webgl";
// import Navbar from "../components/Navigation";

// function GameView(){
//     const { unityProvider } = useUnityContext({
//         loaderUrl: "Build/Downloads.loader.js",
//         dataUrl: "Build/Downloads.data.unityweb",
//         frameworkUrl: "Build/Downloads.framework.js.unityweb",
//         codeUrl: "Build/Downloads.wasm.unityweb",
//       });

//    return (<div>

//     <Navbar className="navbar"/>
//    <section>
//    <Unity unityProvider={unityProvider} 
//             style = {{
//                 width: "1430px",
//                 height: "800px",
//                 border: "2px solid black",
//                 alignSelf: 'center',
//             }}/>
//     </section>
            
//     </div>);
// }

// export default GameView;
import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import Navbar from "../components/Navigation";
import Input from "../components/Input";
import API from "../utils/API";

function GameView() {
    const [profileList, setProfileList] = useState([])
    const userEmail = profileList.length > 0 ? profileList[0].user.email : null;
    const loadData = () => {
        API.call(
            "profile/current_profile/",
            (response) => {
                setProfileList(response)
            },
            (error) => {
                console.log(error)
            }
        )
    } 
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "Build/Escape Risk Eq 3.loader.js",
        dataUrl: "Build/Escape Risk Eq 3.data.unityweb",
        frameworkUrl: "Build/Escape Risk Eq 3.framework.js.unityweb",
        codeUrl: "Build/Escape Risk Eq 3.wasm.unityweb",
    });

     
    function getUserToken() {
        sendMessage('GameController', 'OnTokenReceived', userEmail);
    }

    useEffect(() => {
        loadData()
   
    }, [])

    if (document.readyState === 'complete') {
        getUserToken();
    }

   return (<div>

    <Navbar className="navbar"/>
    <main className="container">
   <div id="game">
               <Unity unityProvider={unityProvider} 
            style = {{
                width: "715px",
                height: "400px",
                border: "2px solid black",
                alignSelf: 'center',
                   }} />

    </div>
    </main>
    </div>);
}

export default GameView;