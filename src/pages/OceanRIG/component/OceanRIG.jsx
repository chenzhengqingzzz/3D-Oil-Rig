import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


export function OceanRIG(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/海上钻井平台.gltf");
  const { actions } = useAnimations(animations, group);
  // animations.
  console.log('读取actions里的元素 --> ', actions);

  useEffect(() => {
    console.log('读取actions里的time属性 --> ', actions['ALH Dhruv Helicopter.002Action.001'].time);
    actions['ALH Dhruv Helicopter.002Action.001'].play().paused = true
    actions['Empty.008Action'].play()
    actions['Empty.008Action'].play()
    actions['Empty.009Action'].play()
    actions['Empty.010Action'].play()
    actions['Empty.011Action'].play()
  }, [actions])

  useFrame(() => {
    const action = actions['ALH Dhruv Helicopter.002Action.001']
    // console.log('->',state);
    action.time = action.time + 0.005
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="ALH_Dhruv_Helicopter002"
          position={[15.63, 56.44, -28.95]}
          rotation={[0.16, -0.08, 0.02]}
          scale={0.51}
        >
          <group
            name="Empty008"
            position={[0, 1.14, -0.46]}
            rotation={[1.65, -Math.PI / 2, 0]}
            scale={5.31}
          >
            <group name="Empty009" rotation={[-1.72, 0, 1.57]} scale={0.03}>
              <mesh
                name="blade_part_int016"
                castShadow
                receiveShadow
                geometry={nodes.blade_part_int016.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
              />
              <mesh
                name="blade_part_int017"
                castShadow
                receiveShadow
                geometry={nodes.blade_part_int017.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, 1.57, 0]}
              />
              <mesh
                name="blade_part_int018"
                castShadow
                receiveShadow
                geometry={nodes.blade_part_int018.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[Math.PI, 0, Math.PI]}
              />
              <mesh
                name="blade_part_int019"
                castShadow
                receiveShadow
                geometry={nodes.blade_part_int019.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, -1.57, 0]}
              />
              <mesh
                name="blade_part016"
                castShadow
                receiveShadow
                geometry={nodes.blade_part016.geometry}
                material={materials["尾翼白.001"]}
                position={[0, -1.31, 0]}
              />
              <mesh
                name="blade_part017"
                castShadow
                receiveShadow
                geometry={nodes.blade_part017.geometry}
                material={materials["尾翼白.001"]}
                position={[0, -1.31, 0]}
                rotation={[0, 1.57, 0]}
              />
              <mesh
                name="blade_part018"
                castShadow
                receiveShadow
                geometry={nodes.blade_part018.geometry}
                material={materials["尾翼白.001"]}
                position={[0, -1.31, 0]}
                rotation={[Math.PI, 0, Math.PI]}
              />
              <mesh
                name="blade_part019"
                castShadow
                receiveShadow
                geometry={nodes.blade_part019.geometry}
                material={materials["尾翼白.001"]}
                position={[0, -1.31, 0]}
                rotation={[0, -1.57, 0]}
              />
              <mesh
                name="blade016"
                castShadow
                receiveShadow
                geometry={nodes.blade016.geometry}
                material={materials["尾翼黑.001"]}
                position={[0, -1.31, 0]}
              />
              <mesh
                name="blade017"
                castShadow
                receiveShadow
                geometry={nodes.blade017.geometry}
                material={materials["尾翼黑.001"]}
                position={[0, -1.31, 0]}
                rotation={[0, 1.57, 0]}
              />
              <mesh
                name="blade018"
                castShadow
                receiveShadow
                geometry={nodes.blade018.geometry}
                material={materials["尾翼黑.001"]}
                position={[0, -1.31, 0]}
                rotation={[0, -1.57, 0]}
              />
              <mesh
                name="blade019"
                castShadow
                receiveShadow
                geometry={nodes.blade019.geometry}
                material={materials["尾翼黑.001"]}
                position={[0, -1.31, 0]}
                rotation={[Math.PI, 0, Math.PI]}
              />
              <mesh
                name="bolt_outer019"
                castShadow
                receiveShadow
                geometry={nodes.bolt_outer019.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[Math.PI, 1.57, 0]}
                scale={[0.27, 0.06, 0.27]}
              />
              <mesh
                name="bolt_outer020"
                castShadow
                receiveShadow
                geometry={nodes.bolt_outer020.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, 0, Math.PI]}
                scale={[0.27, 0.06, 0.27]}
              />
              <mesh
                name="bolt_outer021"
                castShadow
                receiveShadow
                geometry={nodes.bolt_outer021.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[-Math.PI, 0, 0]}
                scale={[0.27, 0.06, 0.27]}
              />
              <mesh
                name="bolt_outer022"
                castShadow
                receiveShadow
                geometry={nodes.bolt_outer022.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[-Math.PI, -1.57, 0]}
                scale={[0.27, 0.06, 0.27]}
              />
              <mesh
                name="Cone002"
                castShadow
                receiveShadow
                geometry={nodes.Cone002.geometry}
                material={materials["rotor base.001"]}
                position={[-0.01, -1.35, 0.01]}
                scale={[0.98, 0.84, 0.98]}
              />
              <mesh
                name="connector016"
                castShadow
                receiveShadow
                geometry={nodes.connector016.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, 0, -Math.PI / 2]}
              />
              <mesh
                name="connector017"
                castShadow
                receiveShadow
                geometry={nodes.connector017.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              />
              <mesh
                name="connector018"
                castShadow
                receiveShadow
                geometry={nodes.connector018.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[Math.PI, 0, Math.PI / 2]}
              />
              <mesh
                name="connector019"
                castShadow
                receiveShadow
                geometry={nodes.connector019.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              />
              <mesh
                name="hook005"
                castShadow
                receiveShadow
                geometry={nodes.hook005.geometry}
                material={materials["rotor base.001"]}
                position={[0, -1.56, 0]}
              />
              <mesh
                name="joint032"
                castShadow
                receiveShadow
                geometry={nodes.joint032.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
              />
              <mesh
                name="joint033"
                castShadow
                receiveShadow
                geometry={nodes.joint033.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, 1.57, 0]}
              />
              <mesh
                name="joint034"
                castShadow
                receiveShadow
                geometry={nodes.joint034.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[Math.PI, 0, Math.PI]}
              />
              <mesh
                name="joint035"
                castShadow
                receiveShadow
                geometry={nodes.joint035.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, -1.57, 0]}
              />
              <mesh
                name="joint036"
                castShadow
                receiveShadow
                geometry={nodes.joint036.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, 1.57, 0]}
                scale={-1}
              />
              <mesh
                name="joint037"
                castShadow
                receiveShadow
                geometry={nodes.joint037.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={-1}
              />
              <mesh
                name="joint038"
                castShadow
                receiveShadow
                geometry={nodes.joint038.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={-1}
              />
              <mesh
                name="joint039"
                castShadow
                receiveShadow
                geometry={nodes.joint039.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                scale={-1}
              />
              <mesh
                name="main_shaft006"
                castShadow
                receiveShadow
                geometry={nodes.main_shaft006.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, 0, -Math.PI / 2]}
              />
              <mesh
                name="ouert_connector016"
                castShadow
                receiveShadow
                geometry={nodes.ouert_connector016.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
              />
              <mesh
                name="ouert_connector017"
                castShadow
                receiveShadow
                geometry={nodes.ouert_connector017.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, 1.57, 0]}
              />
              <mesh
                name="ouert_connector018"
                castShadow
                receiveShadow
                geometry={nodes.ouert_connector018.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[Math.PI, 0, Math.PI]}
              />
              <mesh
                name="ouert_connector019"
                castShadow
                receiveShadow
                geometry={nodes.ouert_connector019.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, -1.57, 0]}
              />
              <mesh
                name="piston016"
                castShadow
                receiveShadow
                geometry={nodes.piston016.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
              />
              <mesh
                name="piston017"
                castShadow
                receiveShadow
                geometry={nodes.piston017.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, 1.57, 0]}
              />
              <mesh
                name="piston018"
                castShadow
                receiveShadow
                geometry={nodes.piston018.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[Math.PI, 0, Math.PI]}
              />
              <mesh
                name="piston019"
                castShadow
                receiveShadow
                geometry={nodes.piston019.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, -1.57, 0]}
              />
              <mesh
                name="top_connector_shroud008"
                castShadow
                receiveShadow
                geometry={nodes.top_connector_shroud008.geometry}
                material={materials["rotor base.001"]}
                position={[0, -1.4, 0]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              />
              <mesh
                name="top_connector_shroud009"
                castShadow
                receiveShadow
                geometry={nodes.top_connector_shroud009.geometry}
                material={materials["尾翼黑.001"]}
                position={[0, -1.31, 0]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={-1}
              />
            </group>
          </group>
          <group
            name="Empty011"
            position={[-0.73, 1.31, -9.26]}
            rotation={[Math.PI, 0.2, 3.14]}
            scale={5.31}
          >
            <group name="Empty010" rotation={[-0.99, 0, -1.58]} scale={0.01}>
              <mesh
                name="blade_part_int020"
                castShadow
                receiveShadow
                geometry={nodes.blade_part_int020.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
              />
              <mesh
                name="blade_part_int021"
                castShadow
                receiveShadow
                geometry={nodes.blade_part_int021.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, 1.57, 0]}
              />
              <mesh
                name="blade_part_int022"
                castShadow
                receiveShadow
                geometry={nodes.blade_part_int022.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[Math.PI, 0, Math.PI]}
              />
              <mesh
                name="blade_part_int023"
                castShadow
                receiveShadow
                geometry={nodes.blade_part_int023.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, -Math.PI / 2, 0]}
              />
              <mesh
                name="blade_part020"
                castShadow
                receiveShadow
                geometry={nodes.blade_part020.geometry}
                material={materials["rotor base.001"]}
                position={[0, -1.31, 0]}
              />
              <mesh
                name="blade_part021"
                castShadow
                receiveShadow
                geometry={nodes.blade_part021.geometry}
                material={materials["rotor base.001"]}
                position={[0, -1.31, 0]}
                rotation={[0, 1.57, 0]}
              />
              <mesh
                name="blade_part022"
                castShadow
                receiveShadow
                geometry={nodes.blade_part022.geometry}
                material={materials["rotor base.001"]}
                position={[0, -1.31, 0]}
                rotation={[Math.PI, 0, Math.PI]}
              />
              <mesh
                name="blade_part023"
                castShadow
                receiveShadow
                geometry={nodes.blade_part023.geometry}
                material={materials["rotor base.001"]}
                position={[0, -1.31, 0]}
                rotation={[0, -Math.PI / 2, 0]}
              />
              <mesh
                name="blade020"
                castShadow
                receiveShadow
                geometry={nodes.blade020.geometry}
                material={materials["尾翼黑.001"]}
                position={[0, -1.31, 0]}
              />
              <mesh
                name="blade021"
                castShadow
                receiveShadow
                geometry={nodes.blade021.geometry}
                material={materials["尾翼黑.001"]}
                position={[0, -1.31, 0]}
                rotation={[0, 1.57, 0]}
              />
              <mesh
                name="blade022"
                castShadow
                receiveShadow
                geometry={nodes.blade022.geometry}
                material={materials["尾翼黑.001"]}
                position={[0, -1.31, 0]}
                rotation={[0, -Math.PI / 2, 0]}
              />
              <mesh
                name="blade023"
                castShadow
                receiveShadow
                geometry={nodes.blade023.geometry}
                material={materials["尾翼黑.001"]}
                position={[0, -1.31, 0]}
                rotation={[Math.PI, 0, Math.PI]}
              />
              <mesh
                name="bolt_outer017"
                castShadow
                receiveShadow
                geometry={nodes.bolt_outer017.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[0.27, 0.06, 0.27]}
              />
              <mesh
                name="bolt_outer018"
                castShadow
                receiveShadow
                geometry={nodes.bolt_outer018.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, 0, Math.PI]}
                scale={[0.27, 0.06, 0.27]}
              />
              <mesh
                name="bolt_outer023"
                castShadow
                receiveShadow
                geometry={nodes.bolt_outer023.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[-Math.PI, 0, 0]}
                scale={[0.27, 0.06, 0.27]}
              />
              <mesh
                name="bolt_outer024"
                castShadow
                receiveShadow
                geometry={nodes.bolt_outer024.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[-Math.PI, -1.57, 0]}
                scale={[0.27, 0.06, 0.27]}
              />
              <mesh
                name="connector020"
                castShadow
                receiveShadow
                geometry={nodes.connector020.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, 0, -Math.PI / 2]}
              />
              <mesh
                name="connector021"
                castShadow
                receiveShadow
                geometry={nodes.connector021.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              />
              <mesh
                name="connector022"
                castShadow
                receiveShadow
                geometry={nodes.connector022.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[Math.PI, 0, Math.PI / 2]}
              />
              <mesh
                name="connector023"
                castShadow
                receiveShadow
                geometry={nodes.connector023.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[Math.PI / 2, -1.57, 0]}
              />
              <mesh
                name="hook006"
                castShadow
                receiveShadow
                geometry={nodes.hook006.geometry}
                material={materials["rotor base.001"]}
                position={[0, -1.56, 0]}
              />
              <mesh
                name="joint040"
                castShadow
                receiveShadow
                geometry={nodes.joint040.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
              />
              <mesh
                name="joint041"
                castShadow
                receiveShadow
                geometry={nodes.joint041.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, 1.57, 0]}
              />
              <mesh
                name="joint042"
                castShadow
                receiveShadow
                geometry={nodes.joint042.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[Math.PI, 0, Math.PI]}
              />
              <mesh
                name="joint043"
                castShadow
                receiveShadow
                geometry={nodes.joint043.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, -Math.PI / 2, 0]}
              />
              <mesh
                name="joint044"
                castShadow
                receiveShadow
                geometry={nodes.joint044.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, 1.57, 0]}
                scale={-1}
              />
              <mesh
                name="joint045"
                castShadow
                receiveShadow
                geometry={nodes.joint045.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={-1}
              />
              <mesh
                name="joint046"
                castShadow
                receiveShadow
                geometry={nodes.joint046.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={-1}
              />
              <mesh
                name="joint047"
                castShadow
                receiveShadow
                geometry={nodes.joint047.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                scale={-1}
              />
              <mesh
                name="main_shaft007"
                castShadow
                receiveShadow
                geometry={nodes.main_shaft007.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, 0, -Math.PI / 2]}
              />
              <mesh
                name="ouert_connector020"
                castShadow
                receiveShadow
                geometry={nodes.ouert_connector020.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
              />
              <mesh
                name="ouert_connector021"
                castShadow
                receiveShadow
                geometry={nodes.ouert_connector021.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, 1.57, 0]}
              />
              <mesh
                name="ouert_connector022"
                castShadow
                receiveShadow
                geometry={nodes.ouert_connector022.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[Math.PI, 0, Math.PI]}
              />
              <mesh
                name="ouert_connector023"
                castShadow
                receiveShadow
                geometry={nodes.ouert_connector023.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, -Math.PI / 2, 0]}
              />
              <mesh
                name="piston020"
                castShadow
                receiveShadow
                geometry={nodes.piston020.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
              />
              <mesh
                name="piston021"
                castShadow
                receiveShadow
                geometry={nodes.piston021.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, 1.57, 0]}
              />
              <mesh
                name="piston022"
                castShadow
                receiveShadow
                geometry={nodes.piston022.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[Math.PI, 0, Math.PI]}
              />
              <mesh
                name="piston023"
                castShadow
                receiveShadow
                geometry={nodes.piston023.geometry}
                material={materials["rotor base.002"]}
                position={[0, -1.31, 0]}
                rotation={[0, -Math.PI / 2, 0]}
              />
              <mesh
                name="top_connector_shroud010"
                castShadow
                receiveShadow
                geometry={nodes.top_connector_shroud010.geometry}
                material={materials["rotor base.001"]}
                position={[0, -1.4, 0]}
                rotation={[Math.PI / 2, -1.57, 0]}
              />
              <mesh
                name="top_connector_shroud011"
                castShadow
                receiveShadow
                geometry={nodes.top_connector_shroud011.geometry}
                material={materials["rotor base.001"]}
                position={[0, -1.31, 0]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={-1}
              />
            </group>
          </group>
          <mesh
            name="cover002"
            castShadow
            receiveShadow
            geometry={nodes.cover002.geometry}
            material={materials["Material.005"]}
            position={[0.03, -1.61, 3]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={0.51}
          />
          <group name="Cube022">
            <mesh
              name="Cube037"
              castShadow
              receiveShadow
              geometry={nodes.Cube037.geometry}
              material={materials["elements.012"]}
            />
            <mesh
              name="Cube037_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube037_1.geometry}
              material={materials["elements.003"]}
            />
            <mesh
              name="Cube037_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube037_2.geometry}
              material={materials["elements.002"]}
            />
          </group>
          <mesh
            name="Cube023"
            castShadow
            receiveShadow
            geometry={nodes.Cube023.geometry}
            material={materials["elements.012"]}
          />
          <mesh
            name="Cube024"
            castShadow
            receiveShadow
            geometry={nodes.Cube024.geometry}
            material={materials["elements.002"]}
          />
          <mesh
            name="Cube025"
            castShadow
            receiveShadow
            geometry={nodes.Cube025.geometry}
            material={materials["尾翼白.001"]}
          />
          <mesh
            name="Cube026"
            castShadow
            receiveShadow
            geometry={nodes.Cube026.geometry}
            material={materials["color helicopter.003"]}
          />
          <mesh
            name="Cube027"
            castShadow
            receiveShadow
            geometry={nodes.Cube027.geometry}
            material={materials["elements.002"]}
          />
          <mesh
            name="Cube028"
            castShadow
            receiveShadow
            geometry={nodes.Cube028.geometry}
            material={materials["飞机红.001"]}
          />
          <mesh
            name="Cube029"
            castShadow
            receiveShadow
            geometry={nodes.Cube029.geometry}
            material={materials["飞机红.001"]}
          />
          <mesh
            name="Cube030"
            castShadow
            receiveShadow
            geometry={nodes.Cube030.geometry}
            material={materials["elements.002"]}
            scale={5.31}
          />
          <mesh
            name="Cube031"
            castShadow
            receiveShadow
            geometry={nodes.Cube031.geometry}
            material={materials["飞机红.001"]}
          />
          <mesh
            name="Cylinder020"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder020.geometry}
            material={materials["尾翼白.001"]}
          />
          <mesh
            name="Cylinder021"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder021.geometry}
            material={materials["尾翼白.001"]}
          />
          <mesh
            name="Cylinder022"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder022.geometry}
            material={materials["飞机红.001"]}
          />
          <mesh
            name="Cylinder023"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder023.geometry}
            material={materials["飞机红.001"]}
            scale={5.31}
          />
          <mesh
            name="Cylinder024"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder024.geometry}
            material={materials["尾翼白.001"]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={-5.31}
          />
          <mesh
            name="Cylinder025"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder025.geometry}
            material={materials["color helicopter.001"]}
            scale={5.31}
          />
          <mesh
            name="Cylinder026"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder026.geometry}
            material={materials["elements.002"]}
            position={[-0.01, 0.02, 0]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <mesh
            name="Cylinder027"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder027.geometry}
            material={materials["elements.002"]}
          />
          <mesh
            name="Cylinder028"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder028.geometry}
            material={materials["elements.002"]}
          />
          <mesh
            name="handle002"
            castShadow
            receiveShadow
            geometry={nodes.handle002.geometry}
            material={materials["尾翼白.001"]}
            position={[0.1, 0, 0]}
          />
          <mesh
            name="heli_base007"
            castShadow
            receiveShadow
            geometry={nodes.heli_base007.geometry}
            material={materials["color helicopter.001"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="heli_base008"
            castShadow
            receiveShadow
            geometry={nodes.heli_base008.geometry}
            material={materials["飞机红.001"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="heli_base009"
            castShadow
            receiveShadow
            geometry={nodes.heli_base009.geometry}
            material={materials["飞机红.001"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="helicopter044"
            castShadow
            receiveShadow
            geometry={nodes.helicopter044.geometry}
            material={materials["飞机红.001"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="helicopter045"
            castShadow
            receiveShadow
            geometry={nodes.helicopter045.geometry}
            material={materials["飞机红.001"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="helicopter046"
            castShadow
            receiveShadow
            geometry={nodes.helicopter046.geometry}
            material={materials["rubber.003"]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={5.31}
          />
          <mesh
            name="helicopter047"
            castShadow
            receiveShadow
            geometry={nodes.helicopter047.geometry}
            material={materials["飞机红.001"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="helicopter048"
            castShadow
            receiveShadow
            geometry={nodes.helicopter048.geometry}
            material={materials["玻璃.001"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="helicopter049"
            castShadow
            receiveShadow
            geometry={nodes.helicopter049.geometry}
            material={materials["飞机红.001"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="helicopter050"
            castShadow
            receiveShadow
            geometry={nodes.helicopter050.geometry}
            material={materials["飞机红.001"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="helicopter051"
            castShadow
            receiveShadow
            geometry={nodes.helicopter051.geometry}
            material={materials["飞机红.001"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="helicopter052"
            castShadow
            receiveShadow
            geometry={nodes.helicopter052.geometry}
            material={materials["飞机红.001"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="helicopter053"
            castShadow
            receiveShadow
            geometry={nodes.helicopter053.geometry}
            material={materials["玻璃.001"]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={5.31}
          />
          <mesh
            name="helicopter054"
            castShadow
            receiveShadow
            geometry={nodes.helicopter054.geometry}
            material={materials["玻璃.001"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="helicopter055"
            castShadow
            receiveShadow
            geometry={nodes.helicopter055.geometry}
            material={materials["玻璃.001"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="helicopter056"
            castShadow
            receiveShadow
            geometry={nodes.helicopter056.geometry}
            material={materials["飞机红.001"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="helicopter058"
            castShadow
            receiveShadow
            geometry={nodes.helicopter058.geometry}
            material={materials["rubber.003"]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={5.31}
          />
          <mesh
            name="helicopter059"
            castShadow
            receiveShadow
            geometry={nodes.helicopter059.geometry}
            material={materials["rubber.003"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="helicopter060"
            castShadow
            receiveShadow
            geometry={nodes.helicopter060.geometry}
            material={materials["飞机红.001"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="helicopter061"
            castShadow
            receiveShadow
            geometry={nodes.helicopter061.geometry}
            material={materials["color helicopter.001"]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={5.31}
          />
          <mesh
            name="helicopter062"
            castShadow
            receiveShadow
            geometry={nodes.helicopter062.geometry}
            material={materials["elements.003"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="helicopter063"
            castShadow
            receiveShadow
            geometry={nodes.helicopter063.geometry}
            material={materials["elements.003"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="helicopter064"
            castShadow
            receiveShadow
            geometry={nodes.helicopter064.geometry}
            material={materials["elements.003"]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={5.31}
          />
          <mesh
            name="helicopter065"
            castShadow
            receiveShadow
            geometry={nodes.helicopter065.geometry}
            material={materials["elements.003"]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={5.31}
          />
          <group name="hinge002">
            <mesh
              name="Cube036"
              castShadow
              receiveShadow
              geometry={nodes.Cube036.geometry}
              material={materials["elements.001"]}
            />
            <mesh
              name="Cube036_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube036_1.geometry}
              material={materials["elements.002"]}
            />
          </group>
          <mesh
            name="int003"
            castShadow
            receiveShadow
            geometry={nodes.int003.geometry}
            material={materials["尾翼黑.001"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name="main_shaft008"
            castShadow
            receiveShadow
            geometry={nodes.main_shaft008.geometry}
            material={materials["rotor base.009"]}
            position={[-0.65, 1.31, -9.25]}
            rotation={[0.79, -0.13, 0.14]}
          />
          <mesh
            name="mirror002"
            castShadow
            receiveShadow
            geometry={nodes.mirror002.geometry}
            material={materials["飞机红.001"]}
          />
          <mesh
            name="pitot_tube002"
            castShadow
            receiveShadow
            geometry={nodes.pitot_tube002.geometry}
            material={materials["尾翼白.001"]}
          />
          <mesh
            name="Plane019"
            castShadow
            receiveShadow
            geometry={nodes.Plane019.geometry}
            material={materials["尾翼白.001"]}
          />
          <mesh
            name="Plane020"
            castShadow
            receiveShadow
            geometry={nodes.Plane020.geometry}
            material={materials["飞机红.001"]}
          />
          <mesh
            name="Plane021"
            castShadow
            receiveShadow
            geometry={nodes.Plane021.geometry}
            material={materials["elements.001"]}
            scale={5.31}
          />
          <mesh
            name="Plane022"
            castShadow
            receiveShadow
            geometry={nodes.Plane022.geometry}
            material={materials["飞机红.001"]}
          />
          <mesh
            name="Plane023"
            castShadow
            receiveShadow
            geometry={nodes.Plane023.geometry}
            material={materials["glass.003"]}
          />
          <mesh
            name="Plane024"
            castShadow
            receiveShadow
            geometry={nodes.Plane024.geometry}
            material={materials["飞机红.001"]}
          />
          <mesh
            name="Plane025"
            castShadow
            receiveShadow
            geometry={nodes.Plane025.geometry}
            material={materials["飞机红.001"]}
            scale={5.31}
          />
          <mesh
            name="Plane026"
            castShadow
            receiveShadow
            geometry={nodes.Plane026.geometry}
            material={materials["飞机红.001"]}
          />
          <mesh
            name="seat004"
            castShadow
            receiveShadow
            geometry={nodes.seat004.geometry}
            material={materials["int metal.002"]}
            position={[0.64, -0.72, 2.3]}
            rotation={[0, -1.57, 0]}
            scale={[0.14, 0.15, 0.17]}
          />
          <mesh
            name="seat005"
            castShadow
            receiveShadow
            geometry={nodes.seat005.geometry}
            material={materials["int metal.002"]}
            position={[-0.51, -0.72, 2.3]}
            rotation={[0, -1.57, 0]}
            scale={[0.14, 0.15, 0.16]}
          />
          <mesh
            name="wiper002"
            castShadow
            receiveShadow
            geometry={nodes.wiper002.geometry}
            material={materials["plastic.003"]}
            position={[0.11, -0.68, 3.41]}
            rotation={[-1.14, 0, Math.PI / 2]}
          />
          <mesh
            name="Plane018"
            castShadow
            receiveShadow
            geometry={nodes.Plane018.geometry}
            material={materials["color helicopter.fin.003"]}
          />
          <mesh
            name="cockpit002"
            castShadow
            receiveShadow
            geometry={nodes.cockpit002.geometry}
            material={materials["Material.006"]}
            position={[0.03, -1.61, 3]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <mesh
            name="helicopter057"
            castShadow
            receiveShadow
            geometry={nodes.helicopter057.geometry}
            material={materials["grill.003"]}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </group>
        <group
          name="海水"
          position={[-0.96, -70.45, 1.1]}
          scale={[1.5, 1, 1.26]}
        >
          <mesh
            name="011-0-11"
            castShadow
            receiveShadow
            geometry={nodes["011-0-11"].geometry}
            material={materials.Water}
          />
          <mesh
            name="011-0-11_1"
            castShadow
            receiveShadow
            geometry={nodes["011-0-11_1"].geometry}
            material={materials.OceanFloor}
          />
          <points
            name="011-0-11_2"
            geometry={nodes["011-0-11_2"].geometry}
            material={materials.Water}
          />
        </group>
        <group name="油桶006" position={[-2.24, 3.14, -4.59]} scale={0.31}>
          <mesh
            name="001-0-1"
            castShadow
            receiveShadow
            geometry={nodes["001-0-1"].geometry}
            material={materials.Top}
          />
          <points
            name="001-0-1_1"
            geometry={nodes["001-0-1_1"].geometry}
            material={materials.Top}
          />
        </group>
        <mesh
          name="集装箱"
          castShadow
          receiveShadow
          geometry={nodes.集装箱.geometry}
          material={materials.Top}
          position={[-6.55, 3.58, -4.68]}
          scale={0.31}
        />
        <mesh
          name="集装箱001"
          castShadow
          receiveShadow
          geometry={nodes.集装箱001.geometry}
          material={materials.Top}
          position={[-4.11, 3.57, -4.53]}
          scale={0.31}
        />
        <mesh
          name="钢材"
          castShadow
          receiveShadow
          geometry={nodes.钢材.geometry}
          material={materials.Top}
          position={[-1.58, 1.72, -2.9]}
          scale={0.31}
        />
        <mesh
          name="钢材001"
          castShadow
          receiveShadow
          geometry={nodes.钢材001.geometry}
          material={materials.Top}
          position={[0.29, 1.72, 0.91]}
          scale={0.31}
        />
        <mesh
          name="钢材002"
          castShadow
          receiveShadow
          geometry={nodes.钢材002.geometry}
          material={materials.Top}
          position={[0.47, 1.72, -0.31]}
          scale={0.31}
        />
        <mesh
          name="钢材003"
          castShadow
          receiveShadow
          geometry={nodes.钢材003.geometry}
          material={materials.Top}
          position={[0.47, 1.72, -1.24]}
          scale={0.31}
        />
        <mesh
          name="钢材004"
          castShadow
          receiveShadow
          geometry={nodes.钢材004.geometry}
          material={materials.Top}
          position={[0.47, 2.09, -1.24]}
          scale={0.31}
        />
        <mesh
          name="集装箱002"
          castShadow
          receiveShadow
          geometry={nodes.集装箱002.geometry}
          material={materials.Top}
          position={[4.94, 3.58, 0.06]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.31}
        />
        <mesh
          name="集装箱003"
          castShadow
          receiveShadow
          geometry={nodes.集装箱003.geometry}
          material={materials.Top}
          position={[4.84, 3.58, -2.46]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.31}
        />
        <mesh
          name="集装箱004"
          castShadow
          receiveShadow
          geometry={nodes.集装箱004.geometry}
          material={materials.Top}
          position={[3.99, 3.58, -2.46]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.31}
        />
        <mesh
          name="集装箱005"
          castShadow
          receiveShadow
          geometry={nodes.集装箱005.geometry}
          material={materials.Top}
          position={[4.22, 3.58, 0.06]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.31}
        />
        <mesh
          name="集装箱006"
          castShadow
          receiveShadow
          geometry={nodes.集装箱006.geometry}
          material={materials.Top}
          position={[3.52, 3.58, 0.06]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.31}
        />
        <mesh
          name="集装箱007"
          castShadow
          receiveShadow
          geometry={nodes.集装箱007.geometry}
          material={materials.Top}
          position={[2.69, 3.58, 0.06]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.31}
        />
        <mesh
          name="集装箱008"
          castShadow
          receiveShadow
          geometry={nodes.集装箱008.geometry}
          material={materials.Top}
          position={[3.41, 3.58, -2.46]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.31}
        />
        <mesh
          name="集装箱009"
          castShadow
          receiveShadow
          geometry={nodes.集装箱009.geometry}
          material={materials.Top}
          position={[2.62, 3.58, -2.46]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.31}
        />
        <mesh
          name="集装箱010"
          castShadow
          receiveShadow
          geometry={nodes.集装箱010.geometry}
          material={materials.Top}
          position={[4.77, 4.5, -0.35]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.31}
        />
        <mesh
          name="集装箱011"
          castShadow
          receiveShadow
          geometry={nodes.集装箱011.geometry}
          material={materials.Top}
          position={[2.87, 4.5, -0.06]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.31}
        />
        <mesh
          name="集装箱012"
          castShadow
          receiveShadow
          geometry={nodes.集装箱012.geometry}
          material={materials.Top}
          position={[3.84, 4.5, 0.26]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.31}
        />
        <mesh
          name="集装箱013"
          castShadow
          receiveShadow
          geometry={nodes.集装箱013.geometry}
          material={materials.Top}
          position={[3.84, 4.5, -2.37]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.31}
        />
        <mesh
          name="集装箱014"
          castShadow
          receiveShadow
          geometry={nodes.集装箱014.geometry}
          material={materials.Top}
          position={[4.68, 4.5, -2.82]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.31}
        />
        <mesh
          name="集装箱015"
          castShadow
          receiveShadow
          geometry={nodes.集装箱015.geometry}
          material={materials.Top}
          position={[2.76, 4.5, -2.41]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.31}
        />
        <mesh
          name="集装箱016"
          castShadow
          receiveShadow
          geometry={nodes.集装箱016.geometry}
          material={materials.Top}
          position={[3.49, 5.43, -1.03]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.31}
        />
        <mesh
          name="集装箱017"
          castShadow
          receiveShadow
          geometry={nodes.集装箱017.geometry}
          material={materials.Top}
          position={[4.56, 5.43, -1.74]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.31}
        />
        <mesh
          name="救生艇"
          castShadow
          receiveShadow
          geometry={nodes.救生艇.geometry}
          material={materials.Top}
          position={[-0.78, 1.42, 0.88]}
          scale={0.31}
        />
        <mesh
          name="救生艇001"
          castShadow
          receiveShadow
          geometry={nodes.救生艇001.geometry}
          material={materials.Top}
          position={[-0.78, 1.42, 0.88]}
          scale={0.31}
        />
        <mesh
          name="救生艇002"
          castShadow
          receiveShadow
          geometry={nodes.救生艇002.geometry}
          material={materials.Top}
          position={[-0.78, 1.42, 0.88]}
          scale={0.31}
        />
        <mesh
          name="救生艇003"
          castShadow
          receiveShadow
          geometry={nodes.救生艇003.geometry}
          material={materials.Top}
          position={[-0.78, 1.42, 0.88]}
          scale={0.31}
        />
        <mesh
          name="救生艇004"
          castShadow
          receiveShadow
          geometry={nodes.救生艇004.geometry}
          material={materials.Top}
          position={[-0.78, 1.42, 0.88]}
          scale={0.31}
        />
        <mesh
          name="救生艇005"
          castShadow
          receiveShadow
          geometry={nodes.救生艇005.geometry}
          material={materials.Top}
          position={[-0.78, 1.42, 0.88]}
          scale={0.31}
        />
        <mesh
          name="塔吊001"
          castShadow
          receiveShadow
          geometry={nodes.塔吊001.geometry}
          material={materials.Top}
          position={[-10.9, 2.92, -9.27]}
          scale={0.31}
        />
        <mesh
          name="吊塔"
          castShadow
          receiveShadow
          geometry={nodes.吊塔.geometry}
          material={materials.Top}
          position={[-5.67, 9.22, -0.33]}
          scale={0.31}
        />
        <mesh
          name="油桶"
          castShadow
          receiveShadow
          geometry={nodes.油桶.geometry}
          material={materials.Top}
          position={[5.57, 1.75, -5]}
          scale={0.31}
        />
        <mesh
          name="油桶001"
          castShadow
          receiveShadow
          geometry={nodes.油桶001.geometry}
          material={materials.Top}
          position={[1.92, 1.75, 2.43]}
          scale={0.31}
        />
        <mesh
          name="油桶002"
          castShadow
          receiveShadow
          geometry={nodes.油桶002.geometry}
          material={materials.Top}
          position={[1.93, 1.75, 2.09]}
          scale={0.31}
        />
        <mesh
          name="油桶003"
          castShadow
          receiveShadow
          geometry={nodes.油桶003.geometry}
          material={materials.Top}
          position={[-2.12, 3.25, -4.67]}
          scale={0.31}
        />
        <mesh
          name="油桶004"
          castShadow
          receiveShadow
          geometry={nodes.油桶004.geometry}
          material={materials.Top}
          position={[-1.83, 3.25, -5.05]}
          scale={0.31}
        />
        <mesh
          name="油桶005"
          castShadow
          receiveShadow
          geometry={nodes.油桶005.geometry}
          material={materials.Top}
          position={[-0.78, 1.42, 0.88]}
          scale={0.31}
        />
        <mesh
          name="二楼地面"
          castShadow
          receiveShadow
          geometry={nodes.二楼地面.geometry}
          material={materials.Bottom}
          position={[-0.78, 1.42, 0.88]}
          scale={0.31}
        />
        <mesh
          name="基柱"
          castShadow
          receiveShadow
          geometry={nodes.基柱.geometry}
          material={materials.Bottom}
          position={[-0.78, -2.78, 0.89]}
          scale={0.31}
        />
        <mesh
          name="地基"
          castShadow
          receiveShadow
          geometry={nodes.地基.geometry}
          material={materials.Bottom}
          position={[-0.78, 1.42, 0.88]}
          scale={0.31}
        />
        <mesh
          name="一楼栏杆"
          castShadow
          receiveShadow
          geometry={nodes.一楼栏杆.geometry}
          material={materials.Bottom}
          position={[-0.78, 1.42, 0.88]}
          scale={0.31}
        />
        <group name="采油器" position={[-5.75, 15.53, 0.17]} scale={0.31}>
          <mesh
            name="001-0-1030"
            castShadow
            receiveShadow
            geometry={nodes["001-0-1030"].geometry}
            material={materials.Top}
          />
          <mesh
            name="001-0-1030_1"
            castShadow
            receiveShadow
            geometry={nodes["001-0-1030_1"].geometry}
            material={materials.Bottom}
          />
        </group>
        <mesh
          name="地下通道"
          castShadow
          receiveShadow
          geometry={nodes.地下通道.geometry}
          material={materials.Bottom}
          position={[1.9, 0.54, -6.86]}
          scale={0.31}
        />
        <mesh
          name="地下通道001"
          castShadow
          receiveShadow
          geometry={nodes.地下通道001.geometry}
          material={materials.Bottom}
          position={[2.27, 0.17, 9.51]}
          scale={0.31}
        />
        <group name="塔吊" position={[9.2, 6.09, -6.38]} scale={0.31}>
          <mesh
            name="000-0-0006"
            castShadow
            receiveShadow
            geometry={nodes["000-0-0006"].geometry}
            material={materials.Bottom}
          />
          <mesh
            name="000-0-0006_1"
            castShadow
            receiveShadow
            geometry={nodes["000-0-0006_1"].geometry}
            material={materials.Top}
          />
        </group>
        <group name="天线房" position={[-0.18, 4.17, 7.36]} scale={0.31}>
          <mesh
            name="002-0-2002"
            castShadow
            receiveShadow
            geometry={nodes["002-0-2002"].geometry}
            material={materials.Mid}
          />
          <mesh
            name="002-0-2002_1"
            castShadow
            receiveShadow
            geometry={nodes["002-0-2002_1"].geometry}
            material={materials.Bottom}
          />
        </group>
        <group name="送油房" position={[-0.78, 1.42, 0.88]} scale={0.31}>
          <mesh
            name="000-0-0007"
            castShadow
            receiveShadow
            geometry={nodes["000-0-0007"].geometry}
            material={materials.Bottom}
          />
          <mesh
            name="000-0-0007_1"
            castShadow
            receiveShadow
            geometry={nodes["000-0-0007_1"].geometry}
            material={materials.Mid}
          />
        </group>
        <group name="送油房001" position={[-0.78, 1.42, 0.88]} scale={0.31}>
          <mesh
            name="000-0-0010"
            castShadow
            receiveShadow
            geometry={nodes["000-0-0010"].geometry}
            material={materials.Bottom}
          />
          <mesh
            name="000-0-0010_1"
            castShadow
            receiveShadow
            geometry={nodes["000-0-0010_1"].geometry}
            material={materials.Mid}
          />
        </group>
        <group name="送油房002" position={[-3.82, 2.59, -5.48]} scale={0.31}>
          <mesh
            name="002-0-2005"
            castShadow
            receiveShadow
            geometry={nodes["002-0-2005"].geometry}
            material={materials.Mid}
          />
          <mesh
            name="002-0-2005_1"
            castShadow
            receiveShadow
            geometry={nodes["002-0-2005_1"].geometry}
            material={materials.Bottom}
          />
        </group>
        <group name="送油房003" position={[5.16, 2.42, -0.53]} scale={0.31}>
          <mesh
            name="002-0-2006"
            castShadow
            receiveShadow
            geometry={nodes["002-0-2006"].geometry}
            material={materials.Mid}
          />
          <mesh
            name="002-0-2006_1"
            castShadow
            receiveShadow
            geometry={nodes["002-0-2006_1"].geometry}
            material={materials.Bottom}
          />
        </group>
        <mesh
          name="停机坪"
          castShadow
          receiveShadow
          geometry={nodes.停机坪.geometry}
          material={materials.Bottom}
          position={[6.82, 2.95, 7.84]}
          scale={0.31}
        />
        <mesh
          name="二楼栏杆"
          castShadow
          receiveShadow
          geometry={nodes.二楼栏杆.geometry}
          material={materials.Bottom}
          position={[-2.06, 3.2, -0.41]}
          scale={0.31}
        />
        <mesh
          name="二楼立柱"
          castShadow
          receiveShadow
          geometry={nodes.二楼立柱.geometry}
          material={materials.Bottom}
          position={[-5.88, 2.23, 2.91]}
          scale={0.31}
        />
        <mesh
          name="楼梯"
          castShadow
          receiveShadow
          geometry={nodes.楼梯.geometry}
          material={materials.Bottom}
          position={[6.46, 2.46, 1.36]}
          scale={0.31}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/海上钻井平台.gltf");