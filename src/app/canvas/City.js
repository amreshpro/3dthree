/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 city.glb 
*/

import React, { Suspense, useRef } from 'react'
import { Center, OrbitControls, useGLTF } from '@react-three/drei'
import FallbackLoader from '../pages/FallbackLoader'
import { Canvas, useFrame } from '@react-three/fiber'
import { useSelector } from 'react-redux'

 function CityModel(props) {
const groupRef = useRef()

useFrame(()=>{
  groupRef.current.position.y = -3
})

  const { nodes, materials } = useGLTF('/environment/city.glb')
  return (
    <group {...props} dispose={null}  ref={groupRef} >
      <mesh geometry={nodes.wind2.geometry} material={materials.LightMetal} position={[16.274, 2.697, -13.832]} rotation={[0, 1.371, 0]} scale={0.083} />
      <mesh geometry={nodes.wind2_head.geometry} material={materials.WindHead} position={[16.48, 4.654, -13.79]} rotation={[0, 1.371, 0]} scale={0.083} />
      <mesh geometry={nodes.wind2001.geometry} material={materials.LightMetal} position={[23.931, 2.07, -22.795]} rotation={[0, 1.371, 0]} scale={0.083} />
      <mesh geometry={nodes.wind2_head001.geometry} material={materials.WindHead} position={[24.136, 4.026, -22.754]} rotation={[0, 1.371, 0]} scale={0.083} />
      <mesh geometry={nodes.wind2002.geometry} material={materials.LightMetal} position={[-6.277, 5.293, -21.283]} rotation={[0, 1.371, 0]} scale={0.083} />
      <mesh geometry={nodes.wind2_head002.geometry} material={materials.WindHead} position={[-6.071, 7.25, -21.241]} rotation={[0, 1.371, 0]} scale={0.083} />
      <mesh geometry={nodes.wind2003.geometry} material={materials.LightMetal} position={[-14.243, 2.473, 23.586]} rotation={[0, 1.371, 0]} scale={0.083} />
      <mesh geometry={nodes.wind2_head003.geometry} material={materials.WindHead} position={[-14.037, 4.43, 23.628]} rotation={[0, 1.371, 0]} scale={0.083} />
      <mesh geometry={nodes.wind2004.geometry} material={materials.LightMetal} position={[3.75, 1.368, 25.815]} rotation={[0, 1.371, 0]} scale={0.083} />
      <mesh geometry={nodes.wind2_head004.geometry} material={materials.WindHead} position={[3.956, 3.325, 25.857]} rotation={[0, 1.371, 0]} scale={0.083} />
      <mesh geometry={nodes.wind2005.geometry} material={materials.LightMetal} position={[24.984, 1.313, 16.739]} rotation={[0, 1.371, 0]} scale={0.083} />
      <mesh geometry={nodes.wind2_head005.geometry} material={materials.WindHead} position={[25.19, 3.269, 16.781]} rotation={[0, 1.371, 0]} scale={0.083} />
      <mesh geometry={nodes.Cube002.geometry} material={materials.RedLight} position={[23.877, 4.116, -22.799]} rotation={[0, -0.162, 0]} scale={0.049} />
      <mesh geometry={nodes.Cube003.geometry} material={materials.RedLight} position={[16.234, 4.741, -13.835]} rotation={[0, -0.162, 0]} scale={0.049} />
      <mesh geometry={nodes.Cube004.geometry} material={materials.RedLight} position={[-6.318, 7.338, -21.29]} rotation={[0, -0.162, 0]} scale={0.049} />
      <mesh geometry={nodes.Cube005.geometry} material={materials.RedLight} position={[-14.277, 4.519, 23.58]} rotation={[0, -0.162, 0]} scale={0.049} />
      <mesh geometry={nodes.Cube006.geometry} material={materials.RedLight} position={[3.719, 3.412, 25.814]} rotation={[0, -0.162, 0]} scale={0.049} />
      <mesh geometry={nodes.Cube007.geometry} material={materials.RedLight} position={[24.944, 3.359, 16.735]} rotation={[0, -0.162, 0]} scale={0.049} />
      <group position={[0.397, 0.359, 0.53]} rotation={[0, Math.PI / 2, 0]} scale={0.653}>
        <mesh geometry={nodes.CircleBuildBase003_1.geometry} material={materials.SquareBlockMain} />
        <mesh geometry={nodes.CircleBuildBase003_2.geometry} material={materials.WindowLightBlue} />
        <mesh geometry={nodes.CircleBuildBase003_3.geometry} material={materials.CircularBuildMain} />
        <mesh geometry={nodes.CircleBuildBase003_4.geometry} material={materials.BlackoutWindow} />
        <mesh geometry={nodes.CircleBuildBase003_5.geometry} material={materials.Metal} />
        <mesh geometry={nodes.CircleBuildBase003_6.geometry} material={materials.FloodLight} />
      </group>
      <group position={[3.698, 1.489, -3.291]} rotation={[Math.PI / 2, 1.57, 0]} scale={[-1, 0.148, 1]}>
        <mesh geometry={nodes.FerrisSupport_1.geometry} material={materials.DarkMetal} />
        <mesh geometry={nodes.FerrisSupport_2.geometry} material={materials.RedLight} />
        <mesh geometry={nodes.FerrisSupport_3.geometry} material={materials.BlueMetal} />
        <group position={[0.991, 1.414, 0.39]} rotation={[0, 0, Math.PI / 2]} scale={[0.94, 0.139, 0.139]}>
          <mesh geometry={nodes.Cube037.geometry} material={materials.BuildingRed} />
          <mesh geometry={nodes.Cube037_1.geometry} material={materials.BuildingLightBlue} />
          <mesh geometry={nodes.Cube037_2.geometry} material={materials.WindowLightYellow} />
        </group>
        <mesh geometry={nodes.Roda_Gigante.geometry} material={materials.LightMetal} position={[0, -1.559, 0]} scale={0.958} />
      </group>
      <group position={[3.247, 0.359, 2.929]} scale={0.653}>
        <mesh geometry={nodes.CircleBuildBase004.geometry} material={materials.CircularBuildMain} />
        <mesh geometry={nodes.CircleBuildBase004_1.geometry} material={materials.WindowLightBlue} />
        <mesh geometry={nodes.CircleBuildBase004_2.geometry} material={materials.BuildingOrange} />
        <mesh geometry={nodes.CircleBuildBase004_3.geometry} material={materials.BlackoutWindow} />
        <mesh geometry={nodes.CircleBuildBase004_4.geometry} material={materials.Metal} />
        <mesh geometry={nodes.CircleBuildBase004_5.geometry} material={materials.LightOrange} />
        <group position={[0, 1.538, 0]}>
          <mesh geometry={nodes.Circle017.geometry} material={materials.Metal} />
          <mesh geometry={nodes.Circle017_1.geometry} material={materials.DarkMetal} />
        </group>
      </group>
      <group position={[-2.81, 0.359, 4.186]} rotation={[0, Math.PI / 4, 0]} scale={0.653}>
        <mesh geometry={nodes.CircleBuildBase001_1.geometry} material={materials.CircularBuildMain} />
        <mesh geometry={nodes.CircleBuildBase001_2.geometry} material={materials.WindowLightBlue} />
        <mesh geometry={nodes.CircleBuildBase001_3.geometry} material={materials.BuildingYellow} />
        <mesh geometry={nodes.CircleBuildBase001_4.geometry} material={materials.BlackoutWindow} />
        <mesh geometry={nodes.CircleBuildBase001_5.geometry} material={materials['SceneBl;ack']} />
        <mesh geometry={nodes.CircleBuildBase001_6.geometry} material={materials['TreeGreen.002']} />
        <mesh geometry={nodes.CircleBuildBase001_7.geometry} material={materials.Metal} />
        <mesh geometry={nodes.CircleBuildBase001_8.geometry} material={materials.FloodLight} />
      </group>
      <group position={[-1.855, 0.359, -0.542]} scale={0.537}>
        <mesh geometry={nodes.Cube040.geometry} material={materials.SquareBlockMain} />
        <mesh geometry={nodes.Cube040_1.geometry} material={materials.LightOrange} />
        <mesh geometry={nodes.Cube040_2.geometry} material={materials.WindowLightYellow} />
        <mesh geometry={nodes.Cube040_3.geometry} material={materials.BlackoutWindow} />
        <mesh geometry={nodes.Cube040_4.geometry} material={materials.BuildingOrange} />
        <mesh geometry={nodes.Cube040_5.geometry} material={materials.FanBiege} />
        <mesh geometry={nodes.Cube040_6.geometry} material={materials.BuildingLightBlue} />
        <mesh geometry={nodes.Cube040_7.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Cube040_8.geometry} material={materials.DarkMetal} />
      </group>
      <group position={[2.913, 0.359, 0.554]} rotation={[0, -Math.PI / 2, 0]} scale={0.537}>
        <mesh geometry={nodes.Cube043.geometry} material={materials.CircularBuildMain} />
        <mesh geometry={nodes.Cube043_1.geometry} material={materials.WindowLightYellow} />
        <mesh geometry={nodes.Cube043_2.geometry} material={materials.BuildingGreen} />
        <mesh geometry={nodes.Cube043_3.geometry} material={materials.SquareBlockMain} />
        <mesh geometry={nodes.Cube043_4.geometry} material={materials.BlackoutWindow} />
        <mesh geometry={nodes.Cube043_5.geometry} material={materials.FanBiege} />
        <mesh geometry={nodes.Cube043_6.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Cube043_7.geometry} material={materials.DarkMetal} />
        <mesh geometry={nodes.Cube043_8.geometry} material={materials.BuildingWhite} />
        <mesh geometry={nodes.Cube043_9.geometry} material={materials.BuildingRed} />
      </group>
      <group position={[-3.024, 0.359, 0.953]} scale={0.537}>
        <mesh geometry={nodes.Cube046.geometry} material={materials.OldBrick} />
        <mesh geometry={nodes.Cube046_1.geometry} material={materials.WindowLightBlue} />
        <mesh geometry={nodes.Cube046_2.geometry} material={materials.CircularBuildMain} />
        <mesh geometry={nodes.Cube046_3.geometry} material={materials.BlackoutWindow} />
        <mesh geometry={nodes.Cube046_4.geometry} material={materials.SquareBlockMain} />
        <mesh geometry={nodes.Cube046_5.geometry} material={materials.FanBiege} />
        <mesh geometry={nodes.Cube046_6.geometry} material={materials.BuildingOrange} />
        <mesh geometry={nodes.Cube046_7.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Cube046_8.geometry} material={materials.DarkMetal} />
      </group>
      <group position={[0.71, 0.359, 3.324]} scale={0.537}>
        <mesh geometry={nodes.Cube049.geometry} material={materials.SquareBlockMain} />
        <mesh geometry={nodes.Cube049_1.geometry} material={materials.BlackoutWindow} />
        <mesh geometry={nodes.Cube049_2.geometry} material={materials.BuildingLightBlue} />
        <mesh geometry={nodes.Cube049_3.geometry} material={materials.WindowLightYellow} />
        <mesh geometry={nodes.Cube049_4.geometry} material={materials.BuildingDarkBlue} />
        <mesh geometry={nodes.Cube049_5.geometry} material={materials.TreeBrown} />
        <mesh geometry={nodes.Cube049_6.geometry} material={materials.FanBiege} />
        <mesh geometry={nodes.Cube049_7.geometry} material={materials.DarkMetal} />
        <mesh geometry={nodes.Cube049_8.geometry} material={materials.BuildingWhite} />
        <mesh geometry={nodes.Cube049_9.geometry} material={materials.BuildingRed} />
        <mesh geometry={nodes.Cube049_10.geometry} material={materials.Metal} />
      </group>
      <group position={[1.285, 0.359, -2.039]} scale={0.537}>
        <mesh geometry={nodes.Cube052.geometry} material={materials.SquareBlockMain} />
        <mesh geometry={nodes.Cube052_1.geometry} material={materials.LightOrange} />
        <mesh geometry={nodes.Cube052_2.geometry} material={materials.WindowLightYellow} />
        <mesh geometry={nodes.Cube052_3.geometry} material={materials.BlackoutWindow} />
        <mesh geometry={nodes.Cube052_4.geometry} material={materials.BuildingLightBlue} />
        <mesh geometry={nodes.Cube052_5.geometry} material={materials.BuildingDarkBlue} />
        <mesh geometry={nodes.Cube052_6.geometry} material={materials.DarkMetal} />
        <mesh geometry={nodes.Cube052_7.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Cube052_8.geometry} material={materials.Air_conditioning} />
      </group>
      <group position={[4.297, 0.359, -1.667]} scale={0.537}>
        <mesh geometry={nodes.Cube005_1.geometry} material={materials.SquareBlockMain} />
        <mesh geometry={nodes.Cube005_2.geometry} material={materials.LightOrange} />
        <mesh geometry={nodes.Cube005_3.geometry} material={materials.WindowLightYellow} />
        <mesh geometry={nodes.Cube005_4.geometry} material={materials.BlackoutWindow} />
        <mesh geometry={nodes.Cube005_5.geometry} material={materials.BuildingRed} />
        <mesh geometry={nodes.Cube005_6.geometry} material={materials.OldBrick} />
        <mesh geometry={nodes.Cube005_7.geometry} material={materials.DarkMetal} />
        <mesh geometry={nodes.Cube005_8.geometry} material={materials.CircularBuildMain} />
        <mesh geometry={nodes.Cube005_9.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Cube005_10.geometry} material={materials.FloodLight} />
        <mesh geometry={nodes.Cube005_11.geometry} material={materials.BuildingWhite} />
      </group>
      <group position={[-0.365, 0.359, -3.562]} scale={0.653}>
        <mesh geometry={nodes.CircleBuildBase002_1.geometry} material={materials.CircularBuildMain} />
        <mesh geometry={nodes.CircleBuildBase002_2.geometry} material={materials.WindowLightBlue} />
        <mesh geometry={nodes.CircleBuildBase002_3.geometry} material={materials.BlackoutWindow} />
        <mesh geometry={nodes.CircleBuildBase002_4.geometry} material={materials.Metal} />
        <mesh geometry={nodes.CircleBuildBase002_5.geometry} material={materials.BuildingRed} />
        <mesh geometry={nodes.CircleBuildBase002_6.geometry} material={materials.BuildingWhite} />
        <mesh geometry={nodes.CircleBuildBase002_7.geometry} material={materials.DarkMetal} />
      </group>
      <group position={[-1.331, 1.254, 1.498]}>
        <mesh geometry={nodes.Cone003.geometry} material={materials.BuildingDarkBlue} />
        <mesh geometry={nodes.Cone003_1.geometry} material={materials.WindowLightYellow} />
        <mesh geometry={nodes.Cone003_2.geometry} material={materials.DarkMetal} />
        <mesh geometry={nodes.Cone003_3.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Cone003_4.geometry} material={materials.CircularBuildMain} />
        <mesh geometry={nodes.Cone003_5.geometry} material={materials.LightOrange} />
        <mesh geometry={nodes.Cone003_6.geometry} material={materials.BlackoutWindow} />
        <group position={[0, 0.652, -0.003]} scale={[0.01, 1, 0.01]}>
          <mesh geometry={nodes.Cylinder002.geometry} material={materials.DarkMetal} />
          <mesh geometry={nodes.Cylinder002_1.geometry} material={materials.FloodLight} />
        </group>
      </group>
      <group position={[-2.394, 0.359, -3.047]}>
        <mesh geometry={nodes.Cube038.geometry} material={materials.BuildingDarkBlue} />
        <mesh geometry={nodes.Cube038_1.geometry} material={materials.BuildingOrange} />
        <mesh geometry={nodes.Cube038_2.geometry} material={materials.FloodLight} />
        <mesh geometry={nodes.Cube038_3.geometry} material={materials.BlackoutWindow} />
      </group>
      <group position={[1.713, 0.359, 0.362]} scale={[0.36, 0.653, 4.897]}>
        <mesh geometry={nodes.Plane002.geometry} material={materials['SceneBl;ack']} />
        <mesh geometry={nodes.Plane002_1.geometry} material={materials['Rocks.001']} />
      </group>
      <group position={[-3.061, 2.019, 4.131]} rotation={[0, Math.PI / 4, 0]} scale={[0.26, 0.205, 0.26]}>
        <mesh geometry={nodes.Circle015.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Circle015_1.geometry} material={materials['Material.001']} />
      </group>
      <mesh geometry={nodes.CityBase002.geometry} material={materials.Metal} position={[3.892, 0.473, -3.447]} scale={[4.897, 0.653, 4.897]} />
      <mesh geometry={nodes.Landskape_plane_Landscape_color_1_0002.geometry} material={materials['Landscape_color_1.001']} />
      <mesh geometry={nodes.Landskape_plane_Landscape_color_1_0002_1.geometry} material={materials.StreetGrey} />
      <mesh geometry={nodes.Landskape_plane_Landscape_color_1_0002_2.geometry} material={materials['TreeGreen.005']} />
      <mesh geometry={nodes.Landskape_plane_Landscape_color_1_0002_3.geometry} material={materials['TreeGreen.002']} />
      <mesh geometry={nodes.Landskape_plane_Landscape_color_1_0001.geometry} material={materials.PineTrees} />
      <mesh geometry={nodes.Landskape_plane_Landscape_color_1_0001_1.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Landskape_plane_Landscape_color_1_0001_2.geometry} material={materials['TreeGreen.003']} />
    </group>
  )
}

useGLTF.preload('/environment/city.glb')




const City = () => {

  const currentMode = useSelector((state) => state.darkMode)


  return (
    <Canvas  
    flat
    camera={{fov:85,position:[0.8,0.8,-2.5]}}
    >
    {
      currentMode ?    <pointLight color="white" intensity={0.2} position={[10, 10, 10]} />  :  <ambientLight/>
    }
 
    <OrbitControls enableZoom={false}/>
    <Center>

      <Suspense fallback={<FallbackLoader/>} >

      <CityModel/>
      </Suspense>
    </Center>

    
    </Canvas>
  )
}
export default City