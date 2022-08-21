import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky, Environment, Stats } from '@react-three/drei'
import { Key } from './component/key'
import { Physics, usePlane } from '@react-three/cannon'

function KeyShow(props) {
    console.log('hhhhhhh', props)

    const ref = useRef()
    return (
        <div className='App'>
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                {/* <Physics allowSleep={false} iterations={15} gravity={[0, -200, 0]}> */}
                    <Suspense fallback={null}>
                        <Key />
                        <Environment files="/pp.hdr" />
                        <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
                    </Suspense>
                    <OrbitControls ref={ref} />
                    <Stats />
                {/* </Physics> */}
            </Canvas>
        </div>

    )
}
export default KeyShow;