import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Sky,Environment,Stats  } from '@react-three/drei'
import * as THREE from 'three';
import {LandRIG} from './component/landRIG'
import './style.css'


function LandRIGShow (props) {
    console.log('props => ',props)

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

    return (
        <div className='App'>
            <Canvas shadows dpr={[1, 2]} camera={camera}>
                <Suspense fallback={null}>
                            <LandRIG/>   
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
