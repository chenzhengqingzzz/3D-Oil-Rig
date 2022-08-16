import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function OceanRIG(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/海上钻井平台.gltf");
  const { actions } = useAnimations(animations, group);  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="ALH_Dhruv_Helicopter002"
          position={[4.05, 0.48, -9.11]}
          rotation={[0, 1.33, 0]}
          scale={0.4}
        >
          <group
            name="ALH_Dhruv_Helicopter001"
            position={[-40.27, 10.69, 18.67]}
          >
            <group name="Cube016" scale={5.31} />
            <group
              name="Cylinder014"
              rotation={[Math.PI, 0, Math.PI]}
              scale={-5.31}
            />
            <group
              name="Empty004"
              position={[-0.73, 1.31, -9.26]}
              rotation={[-Math.PI, 0.2, 3.14]}
              scale={5.31}
            >
              <group name="Empty005" rotation={[-0.99, 0, -1.58]} scale={0.01}>
                <mesh
                  name="blade_part_int008"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade_part_int008.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                  name="blade_part_int009"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade_part_int009.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="blade_part_int010"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade_part_int010.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, 1.57, 0]}
                />
                <mesh
                  name="blade_part_int011"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade_part_int011.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                />
                <mesh
                  name="blade_part008"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade_part008.geometry}
                  material={materials["rotor base.006"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                  name="blade_part009"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade_part009.geometry}
                  material={materials["rotor base.006"]}
                  position={[0, -1.31, 0]}
                  rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="blade_part010"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade_part010.geometry}
                  material={materials["rotor base.006"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, 1.57, 0]}
                />
                <mesh
                  name="blade_part011"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade_part011.geometry}
                  material={materials["rotor base.006"]}
                  position={[0, -1.31, 0]}
                />
                <mesh
                  name="blade008"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade008.geometry}
                  material={materials.尾翼黑}
                  position={[0, -1.31, 0]}
                  rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="blade009"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade009.geometry}
                  material={materials.尾翼黑}
                  position={[0, -1.31, 0]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                  name="blade010"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade010.geometry}
                  material={materials.尾翼黑}
                  position={[0, -1.31, 0]}
                  rotation={[0, 1.57, 0]}
                />
                <mesh
                  name="blade011"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade011.geometry}
                  material={materials.尾翼黑}
                  position={[0, -1.31, 0]}
                />
                <mesh
                  name="bolt_outer009"
                  castShadow
                  receiveShadow
                  geometry={nodes.bolt_outer009.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[-Math.PI, -1.57, 0]}
                  scale={[0.27, 0.06, 0.27]}
                />
                <mesh
                  name="bolt_outer010"
                  castShadow
                  receiveShadow
                  geometry={nodes.bolt_outer010.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[0.27, 0.06, 0.27]}
                />
                <mesh
                  name="bolt_outer015"
                  castShadow
                  receiveShadow
                  geometry={nodes.bolt_outer015.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, 0, Math.PI]}
                  scale={[0.27, 0.06, 0.27]}
                />
                <mesh
                  name="bolt_outer016"
                  castShadow
                  receiveShadow
                  geometry={nodes.bolt_outer016.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[Math.PI, 1.57, 0]}
                  scale={[0.27, 0.06, 0.27]}
                />
                <mesh
                  name="connector008"
                  castShadow
                  receiveShadow
                  geometry={nodes.connector008.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                />
                <mesh
                  name="connector009"
                  castShadow
                  receiveShadow
                  geometry={nodes.connector009.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[Math.PI, 0, Math.PI / 2]}
                />
                <mesh
                  name="connector010"
                  castShadow
                  receiveShadow
                  geometry={nodes.connector010.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                />
                <mesh
                  name="connector011"
                  castShadow
                  receiveShadow
                  geometry={nodes.connector011.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, 0, -Math.PI / 2]}
                />
                <mesh
                  name="hook003"
                  castShadow
                  receiveShadow
                  geometry={nodes.hook003.geometry}
                  material={materials["rotor base.006"]}
                  position={[0, -1.56, 0]}
                />
                <mesh
                  name="joint016"
                  castShadow
                  receiveShadow
                  geometry={nodes.joint016.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  scale={-1}
                />
                <mesh
                  name="joint017"
                  castShadow
                  receiveShadow
                  geometry={nodes.joint017.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={-1}
                />
                <mesh
                  name="joint018"
                  castShadow
                  receiveShadow
                  geometry={nodes.joint018.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[Math.PI, 0, Math.PI]}
                  scale={-1}
                />
                <mesh
                  name="joint019"
                  castShadow
                  receiveShadow
                  geometry={nodes.joint019.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, 1.57, 0]}
                  scale={-1}
                />
                <mesh
                  name="joint020"
                  castShadow
                  receiveShadow
                  geometry={nodes.joint020.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                  name="joint021"
                  castShadow
                  receiveShadow
                  geometry={nodes.joint021.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="joint022"
                  castShadow
                  receiveShadow
                  geometry={nodes.joint022.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, 1.57, 0]}
                />
                <mesh
                  name="joint023"
                  castShadow
                  receiveShadow
                  geometry={nodes.joint023.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                />
                <mesh
                  name="main_shaft004"
                  castShadow
                  receiveShadow
                  geometry={nodes.main_shaft004.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, 0, -Math.PI / 2]}
                />
                <mesh
                  name="ouert_connector008"
                  castShadow
                  receiveShadow
                  geometry={nodes.ouert_connector008.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                  name="ouert_connector009"
                  castShadow
                  receiveShadow
                  geometry={nodes.ouert_connector009.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="ouert_connector010"
                  castShadow
                  receiveShadow
                  geometry={nodes.ouert_connector010.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, 1.57, 0]}
                />
                <mesh
                  name="ouert_connector011"
                  castShadow
                  receiveShadow
                  geometry={nodes.ouert_connector011.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                />
                <mesh
                  name="piston008"
                  castShadow
                  receiveShadow
                  geometry={nodes.piston008.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, -Math.PI / 2, 0]}
                />
                <mesh
                  name="piston009"
                  castShadow
                  receiveShadow
                  geometry={nodes.piston009.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="piston010"
                  castShadow
                  receiveShadow
                  geometry={nodes.piston010.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, 1.57, 0]}
                />
                <mesh
                  name="piston011"
                  castShadow
                  receiveShadow
                  geometry={nodes.piston011.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                />
                <mesh
                  name="top_connector_shroud004"
                  castShadow
                  receiveShadow
                  geometry={nodes.top_connector_shroud004.geometry}
                  material={materials["rotor base.006"]}
                  position={[0, -1.31, 0]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={-1}
                />
                <mesh
                  name="top_connector_shroud005"
                  castShadow
                  receiveShadow
                  geometry={nodes.top_connector_shroud005.geometry}
                  material={materials["rotor base.006"]}
                  position={[0, -1.4, 0]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                />
              </group>
            </group>
            <group
              name="Empty007"
              position={[0, 1.14, -0.46]}
              rotation={[1.65, -Math.PI / 2, 0]}
              scale={5.31}
            >
              <group name="Empty006" rotation={[-1.72, 0, 1.57]} scale={0.03}>
                <mesh
                  name="blade_part_int012"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade_part_int012.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, -1.57, 0]}
                />
                <mesh
                  name="blade_part_int013"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade_part_int013.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="blade_part_int014"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade_part_int014.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, 1.57, 0]}
                />
                <mesh
                  name="blade_part_int015"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade_part_int015.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                />
                <mesh
                  name="blade_part012"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade_part012.geometry}
                  material={materials.尾翼白}
                  position={[0, -1.31, 0]}
                  rotation={[0, -1.57, 0]}
                />
                <mesh
                  name="blade_part013"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade_part013.geometry}
                  material={materials.尾翼白}
                  position={[0, -1.31, 0]}
                  rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="blade_part014"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade_part014.geometry}
                  material={materials.尾翼白}
                  position={[0, -1.31, 0]}
                  rotation={[0, 1.57, 0]}
                />
                <mesh
                  name="blade_part015"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade_part015.geometry}
                  material={materials.尾翼白}
                  position={[0, -1.31, 0]}
                />
                <mesh
                  name="blade012"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade012.geometry}
                  material={materials.尾翼黑}
                  position={[0, -1.31, 0]}
                  rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="blade013"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade013.geometry}
                  material={materials.尾翼黑}
                  position={[0, -1.31, 0]}
                  rotation={[0, -1.57, 0]}
                />
                <mesh
                  name="blade014"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade014.geometry}
                  material={materials.尾翼黑}
                  position={[0, -1.31, 0]}
                  rotation={[0, 1.57, 0]}
                />
                <mesh
                  name="blade015"
                  castShadow
                  receiveShadow
                  geometry={nodes.blade015.geometry}
                  material={materials.尾翼黑}
                  position={[0, -1.31, 0]}
                />
                <mesh
                  name="bolt_outer011"
                  castShadow
                  receiveShadow
                  geometry={nodes.bolt_outer011.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[-Math.PI, -1.57, 0]}
                  scale={[0.27, 0.06, 0.27]}
                />
                <mesh
                  name="bolt_outer012"
                  castShadow
                  receiveShadow
                  geometry={nodes.bolt_outer012.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[0.27, 0.06, 0.27]}
                />
                <mesh
                  name="bolt_outer013"
                  castShadow
                  receiveShadow
                  geometry={nodes.bolt_outer013.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, 0, Math.PI]}
                  scale={[0.27, 0.06, 0.27]}
                />
                <mesh
                  name="bolt_outer014"
                  castShadow
                  receiveShadow
                  geometry={nodes.bolt_outer014.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[Math.PI, 1.57, 0]}
                  scale={[0.27, 0.06, 0.27]}
                />
                <mesh
                  name="Cone001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cone001.geometry}
                  material={materials["rotor base.006"]}
                  position={[-0.01, -1.35, 0.01]}
                  scale={[0.98, 0.84, 0.98]}
                />
                <mesh
                  name="connector012"
                  castShadow
                  receiveShadow
                  geometry={nodes.connector012.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                />
                <mesh
                  name="connector013"
                  castShadow
                  receiveShadow
                  geometry={nodes.connector013.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[Math.PI, 0, Math.PI / 2]}
                />
                <mesh
                  name="connector014"
                  castShadow
                  receiveShadow
                  geometry={nodes.connector014.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                />
                <mesh
                  name="connector015"
                  castShadow
                  receiveShadow
                  geometry={nodes.connector015.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, 0, -Math.PI / 2]}
                />
                <mesh
                  name="hook004"
                  castShadow
                  receiveShadow
                  geometry={nodes.hook004.geometry}
                  material={materials["rotor base.006"]}
                  position={[0, -1.56, 0]}
                />
                <mesh
                  name="joint024"
                  castShadow
                  receiveShadow
                  geometry={nodes.joint024.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  scale={-1}
                />
                <mesh
                  name="joint025"
                  castShadow
                  receiveShadow
                  geometry={nodes.joint025.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={-1}
                />
                <mesh
                  name="joint026"
                  castShadow
                  receiveShadow
                  geometry={nodes.joint026.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[Math.PI, 0, Math.PI]}
                  scale={-1}
                />
                <mesh
                  name="joint027"
                  castShadow
                  receiveShadow
                  geometry={nodes.joint027.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, 1.57, 0]}
                  scale={-1}
                />
                <mesh
                  name="joint028"
                  castShadow
                  receiveShadow
                  geometry={nodes.joint028.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, -1.57, 0]}
                />
                <mesh
                  name="joint029"
                  castShadow
                  receiveShadow
                  geometry={nodes.joint029.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="joint030"
                  castShadow
                  receiveShadow
                  geometry={nodes.joint030.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, 1.57, 0]}
                />
                <mesh
                  name="joint031"
                  castShadow
                  receiveShadow
                  geometry={nodes.joint031.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                />
                <mesh
                  name="main_shaft005"
                  castShadow
                  receiveShadow
                  geometry={nodes.main_shaft005.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, 0, -Math.PI / 2]}
                />
                <mesh
                  name="ouert_connector012"
                  castShadow
                  receiveShadow
                  geometry={nodes.ouert_connector012.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, -1.57, 0]}
                />
                <mesh
                  name="ouert_connector013"
                  castShadow
                  receiveShadow
                  geometry={nodes.ouert_connector013.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="ouert_connector014"
                  castShadow
                  receiveShadow
                  geometry={nodes.ouert_connector014.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, 1.57, 0]}
                />
                <mesh
                  name="ouert_connector015"
                  castShadow
                  receiveShadow
                  geometry={nodes.ouert_connector015.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                />
                <mesh
                  name="piston012"
                  castShadow
                  receiveShadow
                  geometry={nodes.piston012.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, -1.57, 0]}
                />
                <mesh
                  name="piston013"
                  castShadow
                  receiveShadow
                  geometry={nodes.piston013.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[Math.PI, 0, Math.PI]}
                />
                <mesh
                  name="piston014"
                  castShadow
                  receiveShadow
                  geometry={nodes.piston014.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                  rotation={[0, 1.57, 0]}
                />
                <mesh
                  name="piston015"
                  castShadow
                  receiveShadow
                  geometry={nodes.piston015.geometry}
                  material={materials["rotor base.007"]}
                  position={[0, -1.31, 0]}
                />
                <mesh
                  name="top_connector_shroud006"
                  castShadow
                  receiveShadow
                  geometry={nodes.top_connector_shroud006.geometry}
                  material={materials.尾翼黑}
                  position={[0, -1.31, 0]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={-1}
                />
                <mesh
                  name="top_connector_shroud007"
                  castShadow
                  receiveShadow
                  geometry={nodes.top_connector_shroud007.geometry}
                  material={materials["rotor base.006"]}
                  position={[0, -1.4, 0]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                />
              </group>
            </group>
            <mesh
              name="cover001"
              castShadow
              receiveShadow
              geometry={nodes.cover001.geometry}
              material={materials["Material.003"]}
              position={[0.03, -1.61, 3]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={0.51}
            />
            <mesh
              name="Cube009"
              castShadow
              receiveShadow
              geometry={nodes.Cube009.geometry}
              material={materials.飞机红}
            />
            <mesh
              name="Cube011"
              castShadow
              receiveShadow
              geometry={nodes.Cube011.geometry}
              material={materials["elements.009"]}
              scale={5.31}
            />
            <mesh
              name="Cube013"
              castShadow
              receiveShadow
              geometry={nodes.Cube013.geometry}
              material={materials.飞机红}
            />
            <mesh
              name="Cube014"
              castShadow
              receiveShadow
              geometry={nodes.Cube014.geometry}
              material={materials.飞机红}
            />
            <mesh
              name="Cube015"
              castShadow
              receiveShadow
              geometry={nodes.Cube015.geometry}
              material={materials["elements.009"]}
            />
            <mesh
              name="Cube017"
              castShadow
              receiveShadow
              geometry={nodes.Cube017.geometry}
              material={materials["color helicopter.008"]}
            />
            <mesh
              name="Cube018"
              castShadow
              receiveShadow
              geometry={nodes.Cube018.geometry}
              material={materials.尾翼白}
            />
            <mesh
              name="Cube019"
              castShadow
              receiveShadow
              geometry={nodes.Cube019.geometry}
              material={materials["elements.009"]}
            />
            <mesh
              name="Cube020"
              castShadow
              receiveShadow
              geometry={nodes.Cube020.geometry}
              material={materials["elements.008"]}
            />
            <group name="Cube021">
              <mesh
                name="Mesh_4"
                castShadow
                receiveShadow
                geometry={nodes.Mesh_4.geometry}
                material={materials["elements.008"]}
              />
              <mesh
                name="Mesh_5"
                castShadow
                receiveShadow
                geometry={nodes.Mesh_5.geometry}
                material={materials["elements.011"]}
              />
              <mesh
                name="Mesh_6"
                castShadow
                receiveShadow
                geometry={nodes.Mesh_6.geometry}
                material={materials["elements.009"]}
              />
            </group>
            <mesh
              name="Cylinder010"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder010.geometry}
              material={materials["elements.009"]}
            />
            <mesh
              name="Cylinder011"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder011.geometry}
              material={materials["elements.009"]}
            />
            <mesh
              name="Cylinder012"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder012.geometry}
              material={materials["elements.009"]}
              position={[-0.01, 0.02, 0]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              name="Cylinder013"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder013.geometry}
              material={materials["color helicopter.006"]}
              scale={5.31}
            />
            <mesh
              name="Cylinder015"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder015.geometry}
              material={materials.尾翼白}
              rotation={[Math.PI, 0, Math.PI]}
              scale={-5.31}
            />
            <mesh
              name="Cylinder016"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder016.geometry}
              material={materials.飞机红}
              scale={5.31}
            />
            <mesh
              name="Cylinder017"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder017.geometry}
              material={materials.飞机红}
            />
            <mesh
              name="Cylinder018"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder018.geometry}
              material={materials.尾翼白}
            />
            <mesh
              name="Cylinder019"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder019.geometry}
              material={materials.尾翼白}
            />
            <mesh
              name="handle001"
              castShadow
              receiveShadow
              geometry={nodes.handle001.geometry}
              material={materials.尾翼白}
              position={[0.1, 0, 0]}
            />
            <mesh
              name="heli_base004"
              castShadow
              receiveShadow
              geometry={nodes.heli_base004.geometry}
              material={materials.飞机红}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="heli_base005"
              castShadow
              receiveShadow
              geometry={nodes.heli_base005.geometry}
              material={materials.飞机红}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="heli_base006"
              castShadow
              receiveShadow
              geometry={nodes.heli_base006.geometry}
              material={materials["color helicopter.006"]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="helicopter016"
              castShadow
              receiveShadow
              geometry={nodes.helicopter016.geometry}
              material={materials["elements.011"]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={5.31}
            />
            <mesh
              name="helicopter017"
              castShadow
              receiveShadow
              geometry={nodes.helicopter017.geometry}
              material={materials["elements.011"]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={5.31}
            />
            <mesh
              name="helicopter019"
              castShadow
              receiveShadow
              geometry={nodes.helicopter019.geometry}
              material={materials["elements.011"]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="helicopter025"
              castShadow
              receiveShadow
              geometry={nodes.helicopter025.geometry}
              material={materials["elements.011"]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="helicopter026"
              castShadow
              receiveShadow
              geometry={nodes.helicopter026.geometry}
              material={materials["color helicopter.006"]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={5.31}
            />
            <mesh
              name="helicopter027"
              castShadow
              receiveShadow
              geometry={nodes.helicopter027.geometry}
              material={materials.飞机红}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="helicopter028"
              castShadow
              receiveShadow
              geometry={nodes.helicopter028.geometry}
              material={materials["rubber.002"]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="helicopter029"
              castShadow
              receiveShadow
              geometry={nodes.helicopter029.geometry}
              material={materials["rubber.002"]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={5.31}
            />
            <mesh
              name="helicopter031"
              castShadow
              receiveShadow
              geometry={nodes.helicopter031.geometry}
              material={materials.飞机红}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="helicopter032"
              castShadow
              receiveShadow
              geometry={nodes.helicopter032.geometry}
              material={materials.玻璃}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="helicopter033"
              castShadow
              receiveShadow
              geometry={nodes.helicopter033.geometry}
              material={materials.玻璃}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="helicopter034"
              castShadow
              receiveShadow
              geometry={nodes.helicopter034.geometry}
              material={materials.玻璃}
              rotation={[Math.PI / 2, 0, 0]}
              scale={5.31}
            />
            <mesh
              name="helicopter035"
              castShadow
              receiveShadow
              geometry={nodes.helicopter035.geometry}
              material={materials.飞机红}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="helicopter036"
              castShadow
              receiveShadow
              geometry={nodes.helicopter036.geometry}
              material={materials.飞机红}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="helicopter037"
              castShadow
              receiveShadow
              geometry={nodes.helicopter037.geometry}
              material={materials.飞机红}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="helicopter038"
              castShadow
              receiveShadow
              geometry={nodes.helicopter038.geometry}
              material={materials.飞机红}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="helicopter039"
              castShadow
              receiveShadow
              geometry={nodes.helicopter039.geometry}
              material={materials.玻璃}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="helicopter040"
              castShadow
              receiveShadow
              geometry={nodes.helicopter040.geometry}
              material={materials.飞机红}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="helicopter041"
              castShadow
              receiveShadow
              geometry={nodes.helicopter041.geometry}
              material={materials["rubber.002"]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={5.31}
            />
            <mesh
              name="helicopter042"
              castShadow
              receiveShadow
              geometry={nodes.helicopter042.geometry}
              material={materials.飞机红}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="helicopter043"
              castShadow
              receiveShadow
              geometry={nodes.helicopter043.geometry}
              material={materials.飞机红}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <group name="hinge001">
              <mesh
                name="Cube004"
                castShadow
                receiveShadow
                geometry={nodes.Cube004.geometry}
                material={materials["elements.010"]}
              />
              <mesh
                name="Cube004_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube004_1.geometry}
                material={materials["elements.009"]}
              />
            </group>
            <mesh
              name="int002"
              castShadow
              receiveShadow
              geometry={nodes.int002.geometry}
              material={materials.尾翼黑}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="main_shaft003"
              castShadow
              receiveShadow
              geometry={nodes.main_shaft003.geometry}
              material={materials["rotor base.008"]}
              position={[-0.65, 1.31, -9.25]}
              rotation={[0.79, -0.13, 0.14]}
            />
            <mesh
              name="mirror001"
              castShadow
              receiveShadow
              geometry={nodes.mirror001.geometry}
              material={materials.飞机红}
            />
            <mesh
              name="pitot_tube001"
              castShadow
              receiveShadow
              geometry={nodes.pitot_tube001.geometry}
              material={materials.尾翼白}
            />
            <mesh
              name="Plane009"
              castShadow
              receiveShadow
              geometry={nodes.Plane009.geometry}
              material={materials.飞机红}
            />
            <mesh
              name="Plane010"
              castShadow
              receiveShadow
              geometry={nodes.Plane010.geometry}
              material={materials.飞机红}
              scale={5.31}
            />
            <mesh
              name="Plane011"
              castShadow
              receiveShadow
              geometry={nodes.Plane011.geometry}
              material={materials.飞机红}
            />
            <mesh
              name="Plane012"
              castShadow
              receiveShadow
              geometry={nodes.Plane012.geometry}
              material={materials["glass.002"]}
            />
            <mesh
              name="Plane013"
              castShadow
              receiveShadow
              geometry={nodes.Plane013.geometry}
              material={materials.飞机红}
            />
            <mesh
              name="Plane014"
              castShadow
              receiveShadow
              geometry={nodes.Plane014.geometry}
              material={materials["elements.010"]}
              scale={5.31}
            />
            <mesh
              name="Plane015"
              castShadow
              receiveShadow
              geometry={nodes.Plane015.geometry}
              material={materials.飞机红}
            />
            <mesh
              name="Plane016"
              castShadow
              receiveShadow
              geometry={nodes.Plane016.geometry}
              material={materials.尾翼白}
            />
            <mesh
              name="seat002"
              castShadow
              receiveShadow
              geometry={nodes.seat002.geometry}
              material={materials["int metal.001"]}
              position={[-0.51, -0.72, 2.3]}
              rotation={[0, -1.57, 0]}
              scale={[0.14, 0.15, 0.16]}
            />
            <mesh
              name="seat003"
              castShadow
              receiveShadow
              geometry={nodes.seat003.geometry}
              material={materials["int metal.001"]}
              position={[0.64, -0.72, 2.3]}
              rotation={[0, -1.57, 0]}
              scale={[0.14, 0.15, 0.17]}
            />
            <mesh
              name="wiper001"
              castShadow
              receiveShadow
              geometry={nodes.wiper001.geometry}
              material={materials["plastic.002"]}
              position={[0.11, -0.68, 3.41]}
              rotation={[-1.14, 0, Math.PI / 2]}
            />
            <mesh
              name="Plane017"
              castShadow
              receiveShadow
              geometry={nodes.Plane017.geometry}
              material={materials["color helicopter.fin.002"]}
            />
            <mesh
              name="cockpit001"
              castShadow
              receiveShadow
              geometry={nodes.cockpit001.geometry}
              material={materials["Material.004"]}
              position={[0.03, -1.61, 3]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              name="helicopter030"
              castShadow
              receiveShadow
              geometry={nodes.helicopter030.geometry}
              material={materials["grill.002"]}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </group>
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