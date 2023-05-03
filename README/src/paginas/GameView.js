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