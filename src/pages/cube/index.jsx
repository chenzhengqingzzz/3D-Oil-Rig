import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sky,Environment,Stats,OrbitControls  } from '@react-three/drei'
import { Cube } from './component/cube';

function CubeShow (props) {
    console.log('hhhhhhh',props)
    const ref = useRef()
    return (
        <div className='App'>
            <Canvas shadows dpr={[1, 2]}>
                <Suspense fallback={null}>
                    {/* <OrbitControls  ref={ref}> */}
                    <Cube />
                    {/* <OrbitControls makeDefault /> */}
                    {/* {target && <TransformControls object={target} mode={mode} />} */}
                    <Environment files="/pp.hdr" />
                    <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
                </Suspense>            
                
                <Stats />
            </Canvas>
        </div>
              
    )              
}          
export default CubeShow;
