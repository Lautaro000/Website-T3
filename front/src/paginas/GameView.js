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
        loaderUrl: "unity_build/Build/WebGL_Builds.loader.js",
        dataUrl: "unity_build/Build/WebGL_Builds.data.unityweb",
        frameworkUrl: "unity_build/Build/WebGL_Builds.framework.js.unityweb",
        codeUrl: "unity_build/Build/WebGL_Builds.wasm.unityweb",
      });

   return (<div>

    <Navbar className="navbar"/>
   <section>
   <Unity unityProvider={unityProvider} 
            style = {{
                width: "1430px",
                height: "800px",
                border: "2px solid black",
                alignSelf: 'center',
            }}/>
    </section>
            
    </div>);
}

export default GameView;