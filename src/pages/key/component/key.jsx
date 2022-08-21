import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Physics, usePlane } from '@react-three/cannon'

const keys = { w: 'w', s: 's', a: 'a', d: 'd', i: 'i', o: 'o' }
// 定义按下的键对应的键值对
// 该方法会通过字符串参数来获取 对象 例如
// getKey('a') => keys.a
const getKey = (e) => keys[e]
// 自定义钩子
const useControl = () => {
    // 定义按下的键对应的键值对, 并通过useState 进行初始化
    const [step, setStep] = useState({ w: false, s: false, a: false, d: false, i: false, o: false });
    useEffect(() => {

        const up = (e) => {
            console.log('eeeeeee => ', e);
            // 当你打印e , 的时候你就会发现 
            // 这个e , 的实际对象是KeyboardEvent
            // 这就说明谁调用这个 up 方法谁就是 e 
            // up 继承了父集

            // debugger
            setStep((s) => (
                {
                    ...s,
                    [getKey(e.key)]: false
                    // e.key = 'a' 
                    // keys['a'] => keys.a
                    // a: true 赋值给 step
                }
            ))
        }
        const down = (e) => {
            console.log('eeeeeee => ', e);
            setStep((s) => (
                {
                    ...s,
                    [getKey(e.key)]: true
                }
            ))
            // console.log('down', );
        }
        document.addEventListener("keyup", up);
        // 监听事件调用了 up
        // 作为up 的父集
        document.addEventListener("keydown", down);

        return () => {
            document.removeEventListener("keyup", up);
            document.removeEventListener("keydown", down);
        }

    }, [])

    return step
}

export function Key(props) {
    const group = useRef();
    const cube = useRef();
    // const [ref] = usePlane(() => ({ type: 'Static', ...props }))
    const { nodes, materials, animations } = useGLTF("/untitled.gltf");
    const { actions } = useAnimations(animations, group);
    const step = useControl()


    useFrame((state) => {

        if (step.w) {
            cube.current.position.set(cube.current.position.x, cube.current.position.y, cube.current.position.z - 0.08)
        } else if (step.s) {
            cube.current.position.set(cube.current.position.x, cube.current.position.y, cube.current.position.z + 0.08)

        }
        else if (step.a) {
            cube.current.position.set(cube.current.position.x - 0.08, cube.current.position.y, cube.current.position.z)

        }
        else if (step.d) {
            cube.current.position.set(cube.current.position.x + 0.08, cube.current.position.y, cube.current.position.z)

        } else if (step.i) {
            cube.current.position.set(cube.current.position.x, cube.current.position.y + 0.08, cube.current.position.z)

        } else if (step.o) {
            cube.current.position.set(cube.current.position.x, cube.current.position.y - 0.08, cube.current.position.z)

        }

    })

    return (


        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                {/* <Physics allowSleep={false} iterations={15} gravity={[0, -200, 0]}> */}
                <group ref={cube}>
                    <mesh
                        // ref={ref}
                        name="Cube"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube.geometry}
                        material={materials.Material}
                    />
                </group>
                <mesh
                    name="柱体"
                    // ref={ref}
                    castShadow
                    receiveShadow
                    geometry={nodes.柱体.geometry}
                    material={nodes.柱体.material}
                    position={[0, 0, -6.26]}
                />
                <mesh
                    name="球体"
                    castShadow
                    // ref={ref}
                    receiveShadow
                    geometry={nodes.球体.geometry}
                    material={nodes.球体.material}
                    position={[4.06, 0, 0]}
                />
                {/* </Physics> */}

            </group>
        </group >

    );
}

useGLTF.preload("/untitled.gltf");

