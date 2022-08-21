import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const keys = { w: 'w', s: 's', a: 'a', d: 'd', i: 'i', o: 'o' }
// 键值对
const getKey = (e) => keys[e]
const useControl = () => {
  const [step, setStep] = useState({ w: false, s: false, a: false, d: false, i: false, o: false });
  useEffect(() => {
    const up = (e) => {
      console.log(e);
      setStep((s) => (
        {
          ...s,
          [getKey(e.key)]: false
        }
      ))
    }
    const down = (e) => {
      setStep((s) => (
        {
          ...s,
          [getKey(e.key)]: true
        }
      ))
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


export function Cube(props) {
  const group = useRef();
  const ref = useRef()
  // const 
  const { nodes, materials, animations } = useGLTF("/Soldier.glb");
  const { actions } = useAnimations(animations, group);
  const step = useControl()
  console.log('读取actions里的元素啊啊啊啊啊 --> ', actions);
  useEffect(() => {
    actions['Run'].play()
    console.log('-----s', step);
  }, [actions, step])



  useFrame((state) => {
    // const action = actions['立方体Action']
    // statera.position.set(group.current.position.x + 10, group.current.position.y + 10, group.current.position.z + 10)
    // console.log('->',state);.came
    // state.camera.lookAt(group.current.position)
    // state.camera.updateProjectionMatrix()
    // action.time = action.time + 0.02

    state.camera.lookAt(group.current.position.x , group.current.position.y , group.current.position.z )
    if (step.w) {
      group.current.position.set(group.current.position.x, group.current.position.y, group.current.position.z - 0.04)
      // state.camera.position.set(state.camera.position.x, state.camera.position.y, state.camera.position.z - 0.04)
      // group.current.state.camera.position.setY(0)
      // group.current.state.camera.position.setZ(0)
      group.current.rotation.set(0, Math.PI / 12, 0)

    } else if (step.s) {
      group.current.position.set(group.current.position.x, group.current.position.y, group.current.position.z + 0.04)
      // state.camera.position.set(state.camera.position.x, state.camera.position.y, state.camera.position.z - 0.2)
      group.current.rotation.set(0, Math.PI, 0)
    }
    else if (step.a) {
      group.current.position.set(group.current.position.x - 0.04, group.current.position.y, group.current.position.z)

      group.current.rotation.set(0, Math.PI / 2, 0)
    }
    else if (step.d) {
      group.current.position.set(group.current.position.x + 0.04, group.current.position.y, group.current.position.z)
      group.current.rotation.set(0, Math.PI / -2, 0)
      // state.camera.position.set(state.camera.position.x - 0.2, state.camera.position.y, state.camera.position.z)

    } else if (step.i) {
      group.current.position.set(group.current.position.x, group.current.position.y + 0.04, group.current.position.z)
      // state.camera.position.set(state.camera.position.x, state.camera.position.y - 0.2, state.camera.position.z)

    } else if (step.o) {
      group.current.position.set(group.current.position.x, group.current.position.y - 0.04, group.current.position.z)
      // state.camera.position.set(state.camera.position.x, state.camera.position.y + 0.2, state.camera.position.z)

    }

  })

  // const camera = new THREE.PerspectiveCamera()
  // camera.position.z = 0;
  // camera.position.x = 20;
  // camera.position.y = -45;
  // camera.near = 1;
  // camera.far=1000;

  return (
    <group>
      <group ref={group} {...props} dispose={null}>
      {/* <PerspectiveCamera
        makeDefault
        position={[10, 10, 25]}
        args={[45, 1.2, 1, 1000]}
      /> */}
        <group name="Scene">
          <group name="Character" rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
            <primitive object={nodes.mixamorigHips} />
            {/* <camera position={[0, 20, -45]} near={1} far={1000} /> */}
            <skinnedMesh
              // camera={camera}
              name="vanguard_Mesh"
              geometry={nodes.vanguard_Mesh.geometry}
              material={materials.VanguardBodyMat}
              skeleton={nodes.vanguard_Mesh.skeleton}
            />
            <skinnedMesh
              name="vanguard_visor"
              geometry={nodes.vanguard_visor.geometry}
              material={materials.Vanguard_VisorMat}
              skeleton={nodes.vanguard_visor.skeleton}
            />
          </group>
        </group>
      </group>
    </group>

  );
}

useGLTF.preload("/Soldier.glb");
