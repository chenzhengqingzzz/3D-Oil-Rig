import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sky, Environment, Stats, PresentationControls } from '@react-three/drei'
import * as THREE from 'three';
import { LandRIG } from './component/landRIG'
import { Cube } from '../cube/component/cube';
import './style.css'

function LandRIGShow(props) {

    console.log('props => ', props)
    const ref = useRef()
    // camera
    const camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )
    camera.position.z = 90;
    camera.position.x = 65;
    camera.position.y = 80;
    camera.zoom = 1.3
    // camera.lookAt({
    //     x: 100,
    //     y: 100,
    //     z: 100,
    // })

    return (
        <div className='App'>
            <Canvas shadows dpr={[1, 2]} camera={camera}>
                {/* <PresentationControls global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}> */}
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
                {/* </PresentationControls> */}
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
            {/* <button className='double' onClick={()=>setState(2)}>放大3D视图</button> */}
        </div>
    )

}
export default LandRIGShow;
