import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sky, Environment, Stats } from '@react-three/drei'
import * as THREE from 'three';
import { LandRIG } from './component/landRIG'
import { Cube } from '../cube/component/cube';
import './style.css'
import gsap from 'gsap'



function LandRIGShow(props) {
    console.log('props => ', props)

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
                    <LandRIG />
                    <Cube />
                    <Environment files="/pp.hdr" />
                    <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
                </Suspense>
                <OrbitControls ref={ref} />
                <Stats />
                {/* <mesh>
                    <sphereGeometry />
                    <meshStandardMaterial color="hotpink" />
                </mesh> */}
            </Canvas>
            {/* <button className='double' onClick={()=>setState(2)}>放大3D视图</button> */}
        </div>
    )
}
export default LandRIGShow;
