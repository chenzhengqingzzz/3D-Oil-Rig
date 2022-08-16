import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Sky,Environment,Stats  } from '@react-three/drei'
import { useNavigate } from "react-router-dom";
import {OceanRIG} from './component/OceanRIG'


function LandRIGShow (props) {
    console.log('-all');
    console.log('hhhhhhh',props)
    const navigate = useNavigate()

    const ref = useRef()
    return (
        <div className='App'>
            {/* <Websocket /> */}
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                <Suspense fallback={null}>
                            <OceanRIG/>   
                    <Environment files="/pp.hdr" />
                    <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
                </Suspense>            
                <OrbitControls ref={ref} /> 
                <Stats />
            </Canvas>
        </div>
              
    )              
}          
export default LandRIGShow;
