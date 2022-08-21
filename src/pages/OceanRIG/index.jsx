import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Sky,Environment,Stats  } from '@react-three/drei'
import { useNavigate } from "react-router-dom";
import {OceanRIG} from './component/OceanRIG'
import * as THREE from 'three'
import { Cube } from '../cube/component/cube';


function LandRIGShow (props) {
    console.log('-all');
    console.log('hhhhhhh',props)
    const navigate = useNavigate()

    const ref = useRef()
        // camera
    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )
    camera.position.z = 90;
    camera.position.x = 65;
    camera.position.y = 65;
    camera.zoom = 6
    
    return (
        <div className='App'>
            {/* <Websocket /> */}
            <Canvas shadows dpr={[1, 2]} camera={camera}>
                <Suspense fallback={null}>
                            <OceanRIG/>   
                            <Cube />
                    <Environment files="/pp.hdr" />
                    <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
                </Suspense>            
                <OrbitControls ref={ref} /> 
                <Stats />
                <OrbitControls
                    makeDefault
                    minAzimuthAngle={0}
                    maxAzimuthAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 3}
                    enableZoom={true}
                    enablePan={true}
                    zoomSpeed={0.3}
                    />
            </Canvas>
        </div>
              
    )              
}          
export default LandRIGShow;
