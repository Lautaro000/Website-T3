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

import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import Navbar from "../components/Navigation";

function GameView(){
    const { unityProvider } = useUnityContext({
        loaderUrl: "Build/WebGL_Builds.loader.js",
        dataUrl: "Build/WebGL_Builds.data.unityweb",
        frameworkUrl: "Build/WebGL_Builds.framework.js.unityweb",
        codeUrl: "Build/WebGL_Builds.wasm.unityweb",
      });

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
            }}/>
    </div>
    </main>
    </div>);
}

export default GameView;