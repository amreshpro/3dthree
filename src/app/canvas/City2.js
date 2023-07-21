"use-client"

import React, { Suspense, useRef } from 'react'
import { Center, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useSelector } from 'react-redux'
import FallbackLoader from '../pages/FallbackLoader'

 function City2Model(props) {
  const { nodes, materials } = useGLTF('environment/city2.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.008}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.M_PEDESTAL_ROUND_diameter1500cm_36segments_pedestal_base_0.geometry} material={materials.pedestal_base} />
            <mesh geometry={nodes.M_PEDESTAL_ROUND_diameter1500cm_36segments_border_base_0.geometry} material={materials.border_base} />
            <mesh geometry={nodes.M_PEDESTAL_ROUND_diameter1500cm_36segments_water_base_0.geometry} material={materials.water_base} />
            <mesh geometry={nodes.M_PEDESTAL_ROUND_diameter1500cm_36segments_stonewall_base_0.geometry} material={materials.stonewall_base} />
            <mesh geometry={nodes.M_PEDESTAL_ROUND_diameter1500cm_36segments_concrete_base_0.geometry} material={materials.concrete_base} />
            <mesh geometry={nodes.M_PEDESTAL_ROUND_diameter1500cm_36segments_ground_base_0.geometry} material={materials.ground_base} />
            <mesh geometry={nodes.M_PEDESTAL_ROUND_diameter1500cm_36segments_iron_base_0.geometry} material={materials.iron_base} />
            <mesh geometry={nodes['M_PEDESTAL_ROUND_diameter1500cm_36segments_Material_#157_0'].geometry} material={materials.Material_157} />
          </group>
          <group position={[-882.594, 355.151, -208.107]} rotation={[-Math.PI / 2, 0, -1.484]}>
            <mesh geometry={nodes.house_pharmacy_long_ph_0.geometry} material={materials.long_ph} />
            <mesh geometry={nodes.house_pharmacy_level1_ph_0.geometry} material={materials.level1_ph} />
            <mesh geometry={nodes.house_pharmacy_level2_ph_0.geometry} material={materials.level2_ph} />
            <mesh geometry={nodes.house_pharmacy_unique_ph_0.geometry} material={materials.unique_ph} />
            <mesh geometry={nodes.house_pharmacy_level3_ph_0.geometry} material={materials.level3_ph} />
            <mesh geometry={nodes.house_pharmacy_level4_ph_0.geometry} material={materials.level4_ph} />
            <mesh geometry={nodes.house_pharmacy_roof_ph_0.geometry} material={materials.roof_ph} />
            <mesh geometry={nodes.house_pharmacy_alpha_ph_0.geometry} material={materials.alpha_ph} />
          </group>
          <group position={[-504.777, 355.151, -222.845]} rotation={[-Math.PI / 2, 0, -1.484]}>
            <mesh geometry={nodes.house_fish_level1_fish_0.geometry} material={materials.level1_fish} />
            <mesh geometry={nodes.house_fish_unique_fish_0.geometry} material={materials.unique_fish} />
            <mesh geometry={nodes.house_fish_level2_fish_0.geometry} material={materials.level2_fish} />
            <mesh geometry={nodes.house_fish_level3_fish_0.geometry} material={materials.level3_fish} />
            <mesh geometry={nodes.house_fish_longtileable_fish_0.geometry} material={materials.longtileable_fish} />
            <mesh geometry={nodes.house_fish_concrete_fish_0.geometry} material={materials.concrete_fish} />
            <mesh geometry={nodes.house_fish_cloth_fish_0.geometry} material={materials.cloth_fish} />
            <mesh geometry={nodes.house_fish_sandstone_fish_0.geometry} material={materials.sandstone_fish} />
            <mesh geometry={nodes.house_fish_alpha_fish_0.geometry} material={materials.alpha_fish} />
            <mesh geometry={nodes.house_fish_stone_fish_0.geometry} material={materials.stone_fish} />
            <mesh geometry={nodes.house_fish_tiles_fish_0.geometry} material={materials.tiles_fish} />
            <mesh geometry={nodes.house_fish_red_fish_0.geometry} material={materials.red_fish} />
            <mesh geometry={nodes.house_fish_roof_fish_0.geometry} material={materials.roof_fish} />
            <mesh geometry={nodes.house_fish_decals_fish_0.geometry} material={materials.decals_fish} />
          </group>
          <group position={[-530.533, 355.151, -645.505]} rotation={[-Math.PI / 2, 0, -1.484]}>
            <mesh geometry={nodes.house_cafe_level2_cafe_0.geometry} material={materials.level2_cafe} />
            <mesh geometry={nodes.house_cafe_unique_cafe_0.geometry} material={materials.unique_cafe} />
            <mesh geometry={nodes.house_cafe_level4_cafe_0.geometry} material={materials.level4_cafe} />
            <mesh geometry={nodes.house_cafe_level3_cafe_0.geometry} material={materials.level3_cafe} />
            <mesh geometry={nodes.house_cafe_long_cafe_0.geometry} material={materials.long_cafe} />
            <mesh geometry={nodes.house_cafe_level1_cafe_0.geometry} material={materials.level1_cafe} />
            <mesh geometry={nodes.house_cafe_roof_cafe_0.geometry} material={materials.roof_cafe} />
            <mesh geometry={nodes.house_cafe_cloth_cafe_0.geometry} material={materials.cloth_cafe} />
            <mesh geometry={nodes.house_cafe_sandstone_cafe_0.geometry} material={materials.sandstone_cafe} />
            <mesh geometry={nodes.house_cafe_alpha_cafe_0.geometry} material={materials.alpha_cafe} />
            <mesh geometry={nodes.house_cafe_decals_cafe_0.geometry} material={materials.decals_cafe} />
            <mesh geometry={nodes.house_cafe_side_cafe_0.geometry} material={materials.side_cafe} />
          </group>
          <mesh geometry={nodes.shutters_blinds_0.geometry} material={materials.blinds} position={[-305.922, 1087.2, -126.021]} rotation={[-0.001, 0.008, 1.665]} />
          <mesh geometry={nodes.shutters001_blinds_0.geometry} material={materials.blinds} position={[-292.679, 1084.007, -288.215]} rotation={[-0.001, 0.008, 1.665]} />
          <mesh geometry={nodes.shutters002_blinds_0.geometry} material={materials.blinds} position={[-305.922, 817.005, -126.902]} rotation={[-0.001, 0.008, 1.665]} />
          <mesh geometry={nodes.shutters003_blinds_0.geometry} material={materials.blinds} position={[-292.679, 817.415, -283.047]} rotation={[3.141, -0.008, -1.491]} />
          <mesh geometry={nodes.shutters004_blinds_0.geometry} material={materials.blinds} position={[-412.542, 817.005, -9.595]} rotation={[-0.001, 0.008, -3.047]} />
          <mesh geometry={nodes.shutters005_blinds_0.geometry} material={materials.blinds} position={[-610.095, 818.133, -26.172]} rotation={[-0.001, 0.008, -3.047]} />
          <mesh geometry={nodes.shutters006_blinds_0.geometry} material={materials.blinds} position={[-414.954, 1082.432, -9.595]} rotation={[-0.001, 0.008, -3.047]} />
          <mesh geometry={nodes.shutters007_blinds_0.geometry} material={materials.blinds} position={[-898.683, 848.873, 52.842]} rotation={[-0.001, 0.008, -3.047]} />
          <mesh geometry={nodes.shutters008_blinds_0.geometry} material={materials.blinds} position={[-905.185, 1174.803, 52.842]} rotation={[-0.001, 0.008, -3.047]} />
          <mesh geometry={nodes.shutters009_blinds_0.geometry} material={materials.blinds} position={[-1061.582, 1159.038, -69.12]} rotation={[-0.001, 0.008, -1.476]} />
          <mesh geometry={nodes.shutters010_blinds_0.geometry} material={materials.blinds} position={[-1044.471, 1158.164, -247.024]} rotation={[-0.001, 0.008, -1.476]} />
          <mesh geometry={nodes.shutters011_blinds_0.geometry} material={materials.blinds} position={[-1046.001, 840.661, -223.28]} rotation={[-0.001, 0.008, -1.476]} />
          <mesh geometry={nodes.shutters012_blinds_0.geometry} material={materials.blinds} position={[-932.925, 839.713, -410.434]} rotation={[-0.001, 0.008, 0.095]} />
          <mesh geometry={nodes.shutters013_blinds_0.geometry} material={materials.blinds} position={[-932.925, 1163.658, -410.434]} rotation={[-0.001, 0.008, 0.095]} />
          <mesh geometry={nodes.shutters014_blinds_0.geometry} material={materials.blinds} position={[-254.831, 1146.151, -550.217]} rotation={[-0.001, 0.008, 1.665]} />
          <mesh geometry={nodes.shutters015_blinds_0.geometry} material={materials.blinds} position={[-241.895, 1146.151, -705.062]} rotation={[-0.001, 0.008, 1.665]} />
          <mesh geometry={nodes.shutters016_blinds_0.geometry} material={materials.blinds} position={[-243.766, 1411.484, -685.219]} rotation={[-0.001, 0.008, 1.665]} />
          <mesh geometry={nodes.shutters017_blinds_0.geometry} material={materials.blinds} position={[-257.224, 1411.484, -532.103]} rotation={[-0.001, 0.008, 1.665]} />
          <mesh geometry={nodes.shutters018_blinds_0.geometry} material={materials.blinds} position={[-243.513, 851.148, -695.86]} rotation={[-0.001, 0.008, 1.665]} />
          <mesh geometry={nodes.shutters019_blinds_0.geometry} material={materials.blinds} position={[-256.485, 848.764, -541.295]} rotation={[-0.001, 0.008, 1.665]} />
          <mesh geometry={nodes.shutters020_blinds_0.geometry} material={materials.blinds} position={[-366.412, 1146.151, -829.635]} rotation={[-0.001, 0.008, 0.095]} />
          <mesh geometry={nodes.shutters021_blinds_0.geometry} material={materials.blinds} position={[-527.116, 1144.832, -843.509]} rotation={[-0.001, 0.008, 0.095]} />
          <mesh geometry={nodes.shutters022_blinds_0.geometry} material={materials.blinds} position={[-687.533, 1144.832, -859.196]} rotation={[-0.001, 0.008, 0.095]} />
          <mesh geometry={nodes.shutters023_blinds_0.geometry} material={materials.blinds} position={[-673.983, 1410.741, -856.188]} rotation={[-0.001, 0.008, 0.095]} />
          <mesh geometry={nodes.shutters024_blinds_0.geometry} material={materials.blinds} position={[-512.797, 1410.741, -843.643]} rotation={[-0.001, 0.008, 0.095]} />
          <mesh geometry={nodes.shutters025_blinds_0.geometry} material={materials.blinds} position={[-351.674, 1410.741, -828.226]} rotation={[-0.001, 0.008, 0.095]} />
          <mesh geometry={nodes.shutters026_blinds_0.geometry} material={materials.blinds} position={[-667.173, 851.941, -856.869]} rotation={[-0.001, 0.008, 0.095]} />
          <mesh geometry={nodes.shutters027_blinds_0.geometry} material={materials.blinds} position={[-505.375, 851.941, -840.771]} rotation={[-0.001, 0.008, 0.095]} />
          <mesh geometry={nodes.shutters028_blinds_0.geometry} material={materials.blinds} position={[-345.153, 851.941, -828.065]} rotation={[-0.001, 0.008, 0.095]} />
          <mesh geometry={nodes.shutters029_blinds_0.geometry} material={materials.blinds} position={[-804.869, 1144.832, -738.935]} rotation={[-0.001, 0.008, -1.476]} />
          <mesh geometry={nodes.shutters030_blinds_0.geometry} material={materials.blinds} position={[-819.229, 1144.832, -585.367]} rotation={[-0.001, 0.008, -1.476]} />
          <mesh geometry={nodes.shutters031_blinds_0.geometry} material={materials.blinds} position={[-819.229, 850.769, -585.367]} rotation={[-0.001, 0.008, -1.476]} />
          <mesh geometry={nodes.shutters032_blinds_0.geometry} material={materials.blinds} position={[-805.416, 850.769, -741.122]} rotation={[-0.001, 0.008, -1.476]} />
          <mesh geometry={nodes.parasol_blue_parasol_blue_0.geometry} material={materials.parasol_blue} position={[-129.401, 557.534, -923.046]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.parasol_orange_parasol_orange_0.geometry} material={materials.parasol_orange} position={[-388.747, 563.189, -1200.258]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.parasol_red_parasol_red_0.geometry} material={materials.parasol_red} position={[-109.647, 560.491, -1207.882]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.parasol_blue001_parasol_blue_0.geometry} material={materials.parasol_blue} position={[-700.07, 557.534, -1087.238]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.parasol_red001_parasol_red_0.geometry} material={materials.parasol_red} position={[-926.01, 560.491, -926.577]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.table1_table_0.geometry} material={materials.table} position={[-170.377, 465.26, -985.222]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.parasol_orange001_parasol_orange_0.geometry} material={materials.parasol_orange} position={[-1074.181, 563.189, -607.458]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.table3_table_0.geometry} material={materials.table} position={[-19.72, 465.26, -963.981]} rotation={[-Math.PI / 2, 0, 0.609]} />
          <mesh geometry={nodes.table4_table_0.geometry} material={materials.table} position={[-179.12, 465.26, -1140.226]} rotation={[-Math.PI / 2, 0, 0.609]} />
          <mesh geometry={nodes.table5_table_0.geometry} material={materials.table} position={[-53.101, 465.26, -1302.082]} rotation={[-Math.PI / 2, 0, 0.609]} />
          <mesh geometry={nodes.table6_table_0.geometry} material={materials.table} position={[-424.646, 465.26, -1115.76]} rotation={[-Math.PI / 2, 0, 0.609]} />
          <mesh geometry={nodes.table7_table_0.geometry} material={materials.table} position={[-349.942, 465.26, -1247.072]} rotation={[-Math.PI / 2, 0, 1.545]} />
          <mesh geometry={nodes.table8_table_0.geometry} material={materials.table} position={[-649.562, 465.26, -1129.677]} rotation={[-Math.PI / 2, 0, 1.545]} />
          <mesh geometry={nodes.table9_table_0.geometry} material={materials.table} position={[-755.099, 465.26, -1036.612]} rotation={[-Math.PI / 2, 0, 1.545]} />
          <mesh geometry={nodes.table11_table_0.geometry} material={materials.table} position={[-931.977, 465.26, -609.458]} rotation={[-Math.PI / 2, 0, 1.545]} />
          <mesh geometry={nodes.table12_table_0.geometry} material={materials.table} position={[-1123.718, 465.26, -565.614]} rotation={[-Math.PI / 2, 0, 1.545]} />
          <mesh geometry={nodes.table15_table_0.geometry} material={materials.table} position={[-968.224, 465.26, -974.039]} rotation={[-Math.PI / 2, 0, 1.545]} />
          <mesh geometry={nodes.parasol_orange002_parasol_orange_0.geometry} material={materials.parasol_orange} position={[414.616, 563.189, -1304.874]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.table16_table_0.geometry} material={materials.table} position={[348.67, 465.26, -1300.68]} rotation={[-Math.PI / 2, 0, 0.609]} />
          <mesh geometry={nodes.chair_chair_0.geometry} material={materials.chair} position={[0, 410.8, -1033.779]} rotation={[-Math.PI / 2, 0, 0.483]} />
          <mesh geometry={nodes.chair001_chair_0.geometry} material={materials.chair} position={[-29.974, 410.8, -886.755]} rotation={[-Math.PI / 2, 0, 2.934]} />
          <mesh geometry={nodes.chair002_chair_0.geometry} material={materials.chair} position={[375.639, 410.8, -1371.942]} rotation={[-Math.PI / 2, 0, 0.1]} />
          <mesh geometry={nodes.chair003_chair_0.geometry} material={materials.chair} position={[360.693, 410.8, -1200.995]} rotation={[-Math.PI / 2, 0, -2.716]} />
          <mesh geometry={nodes.chair004_chair_0.geometry} material={materials.chair} position={[17.345, 410.8, -1248.326]} rotation={[-Math.PI / 2, 0, 2.15]} />
          <mesh geometry={nodes.chair005_chair_0.geometry} material={materials.chair} position={[-122.924, 410.8, -1317.903]} rotation={[-Math.PI / 2, 0, -1.212]} />
          <mesh geometry={nodes.chair006_chair_0.geometry} material={materials.chair} position={[-129.651, 410.8, -1032.544]} rotation={[-Math.PI / 2, 0, 0.905]} />
          <mesh geometry={nodes.chair007_chair_0.geometry} material={materials.chair} position={[-216.943, 410.8, -914.716]} rotation={[-Math.PI / 2, 0, -2.517]} />
          <mesh geometry={nodes.chair008_chair_0.geometry} material={materials.chair} position={[-322.687, 410.8, -1169.677]} rotation={[-Math.PI / 2, 0, 2.15]} />
          <mesh geometry={nodes.chair009_chair_0.geometry} material={materials.chair} position={[-406.971, 410.8, -1282.813]} rotation={[-Math.PI / 2, 0, -0.837]} />
          <mesh geometry={nodes.chair010_chair_0.geometry} material={materials.chair} position={[-496.397, 410.8, -1107.003]} rotation={[-Math.PI / 2, 0, -1.328]} />
          <mesh geometry={nodes.chair011_chair_0.geometry} material={materials.chair} position={[-363.216, 410.8, -1079.459]} rotation={[-Math.PI / 2, 0, 2.054]} />
          <mesh geometry={nodes.chair012_chair_0.geometry} material={materials.chair} position={[-672.747, 410.8, -1186.558]} rotation={[-Math.PI / 2, 0, -0.367]} />
          <mesh geometry={nodes.chair013_chair_0.geometry} material={materials.chair} position={[-632.508, 410.8, -1032.639]} rotation={[-Math.PI / 2, 0, 2.974]} />
          <mesh geometry={nodes.chair014_chair_0.geometry} material={materials.chair} position={[-779.799, 410.8, -1072.981]} rotation={[-Math.PI / 2, 0, -0.507]} />
          <mesh geometry={nodes.chair015_chair_0.geometry} material={materials.chair} position={[-738.101, 410.8, -975.435]} rotation={[-Math.PI / 2, 0, 2.888]} />
          <mesh geometry={nodes.chair016_chair_0.geometry} material={materials.chair} position={[-921.537, 410.8, -1007.038]} rotation={[-Math.PI / 2, 0, 0.88]} />
          <mesh geometry={nodes.chair017_chair_0.geometry} material={materials.chair} position={[-1013.099, 410.8, -900.182]} rotation={[-Math.PI / 2, 0, -2.152]} />
          <mesh geometry={nodes.chair018_chair_0.geometry} material={materials.chair} position={[-896.325, 410.8, -542.733]} rotation={[-Math.PI / 2, 0, 2.725]} />
          <mesh geometry={nodes.chair019_chair_0.geometry} material={materials.chair} position={[-946.048, 410.8, -672.043]} rotation={[-Math.PI / 2, 0, -0.218]} />
          <mesh geometry={nodes.chair020_chair_0.geometry} material={materials.chair} position={[-1192.386, 410.8, -566.933]} rotation={[-Math.PI / 2, 0, -1.302]} />
          <mesh geometry={nodes.chair021_chair_0.geometry} material={materials.chair} position={[-1047.733, 410.8, -529.177]} rotation={[-Math.PI / 2, 0, 1.745]} />
          <mesh geometry={nodes.ChamferBox001_bingreen_0.geometry} material={materials.bingreen} position={[9.728, 364.648, -699.136]} rotation={[-Math.PI / 2, 0, -2.998]} />
          <mesh geometry={nodes.ChamferBox002_binred_0.geometry} material={materials.binred} position={[-79.755, 364.648, -712.087]} rotation={[-Math.PI / 2, 0, -2.998]} />
          <mesh geometry={nodes.ChamferBox003_binblue_0.geometry} material={materials.binblue} position={[-167.692, 364.648, -724.815]} rotation={[-Math.PI / 2, 0, -2.998]} />
          <mesh geometry={nodes.drinks_drinks_0.geometry} material={materials.drinks} position={[-24.148, 450.425, -1321.033]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.drinks001_drinks_0.geometry} material={materials.drinks} position={[-317.774, 450.425, -1253.134]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.drinks002_drinks_0.geometry} material={materials.drinks} position={[-3.631, 450.425, -1005.301]} rotation={[Math.PI / 2, 0, -0.763]} />
          <mesh geometry={nodes.drinks003_drinks_0.geometry} material={materials.drinks} position={[-404.775, 450.425, -1126.504]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.pasta_food_0.geometry} material={materials.food} position={[416.504, 469.084, -1318.896]} rotation={[Math.PI / 2, 0, -3.063]} />
          <mesh geometry={nodes.pasta001_food_0.geometry} material={materials.food} position={[-714.002, 469.084, -1097.572]} rotation={[Math.PI / 2, 0, 2.622]} />
          <mesh geometry={nodes.pasta002_food_0.geometry} material={materials.food} position={[-804.763, 469.084, -984.857]} rotation={[Math.PI / 2, 0, -0.362]} />
          <mesh geometry={nodes.pizza_food_0.geometry} material={materials.food_0} position={[-21.937, 468.128, -925.699]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.pizza001_food_0.geometry} material={materials.food_0} position={[-6.856, 468.128, -1001.519]} rotation={[Math.PI / 2, 0, -2.684]} />
          <mesh geometry={nodes.pizza002_food_0.geometry} material={materials.food_0} position={[-946.49, 468.128, -1000.484]} rotation={[Math.PI / 2, 0, -2.275]} />
          <mesh geometry={nodes.pizza003_food_0.geometry} material={materials.food_0} position={[-998.693, 468.128, -945.871]} rotation={[Math.PI / 2, 0, 0.857]} />
          <mesh geometry={nodes.pizza004_food_0.geometry} material={materials.food_0} position={[-1159.492, 468.128, -560.823]} rotation={[Math.PI / 2, 0, 1.729]} />
          <mesh geometry={nodes.ChamferBox004_bingreen_0.geometry} material={materials.bingreen} position={[120.29, 117.856, 293.823]} rotation={[-Math.PI / 2, 0, -0.691]} />
          <mesh geometry={nodes.Cylinder001_barrel_0.geometry} material={materials.barrel} position={[291.063, 117.381, 84.001]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Cylinder002_barrel_0.geometry} material={materials.barrel} position={[315.366, 117.381, -19.284]} rotation={[-Math.PI / 2, 0, 0.667]} />
          <mesh geometry={nodes.Cylinder003_barrel_0.geometry} material={materials.barrel} position={[21.143, 366.481, -351.939]} rotation={[-Math.PI / 2, 0, 1.268]} />
          <mesh geometry={nodes.Cylinder004_barrel_0.geometry} material={materials.barrel} position={[-680.936, 366.481, 31.737]} rotation={[-Math.PI / 2, 0, 1.268]} />
          <mesh geometry={nodes.Cylinder005_barrel_0.geometry} material={materials.barrel} position={[-588.429, 366.481, 38.845]} rotation={[-Math.PI / 2, 0, 1.797]} />
          <mesh geometry={nodes.Box001_crate_0.geometry} material={materials.crate} position={[-511.584, 364.285, 36.842]} rotation={[-Math.PI / 2, 0, 0.116]} />
          <mesh geometry={nodes.Box002_crate_0.geometry} material={materials.crate} position={[-511.584, 391.052, 36.842]} rotation={[-Math.PI / 2, 0, 0.116]} />
          <mesh geometry={nodes.Box003_crate_0.geometry} material={materials.crate} position={[-511.584, 417.362, 36.842]} rotation={[-Math.PI / 2, 0, 0.089]} />
          <mesh geometry={nodes.Box004_crate_0.geometry} material={materials.crate} position={[-511.584, 443.74, 36.842]} rotation={[-Math.PI / 2, 0, 0.116]} />
          <mesh geometry={nodes.Box005_crate_0.geometry} material={materials.crate} position={[-511.584, 470.398, 36.842]} rotation={[-Math.PI / 2, 0, 0.116]} />
          <mesh geometry={nodes.Box006_crate_0.geometry} material={materials.crate} position={[-156.346, 419.899, -74.735]} rotation={[-Math.PI / 2, 0, -3.026]} />
          <mesh geometry={nodes.Box007_crate_0.geometry} material={materials.crate} position={[-156.346, 446.665, -74.735]} rotation={[-Math.PI / 2, 0, -2.991]} />
          <mesh geometry={nodes.Box010_crate_0.geometry} material={materials.crate} position={[-701.284, 364.285, 129.301]} rotation={[-Math.PI / 2, 0, 0.116]} />
          <mesh geometry={nodes.Box011_crate_0.geometry} material={materials.crate} position={[-701.284, 391.052, 129.301]} rotation={[-Math.PI / 2, 0, 0.116]} />
          <mesh geometry={nodes.Box012_crate_0.geometry} material={materials.crate} position={[-701.284, 417.362, 129.301]} rotation={[-Math.PI / 2, 0, 0.116]} />
          <mesh geometry={nodes.Box013_crate_0.geometry} material={materials.crate} position={[-701.284, 443.74, 129.301]} rotation={[-Math.PI / 2, 0, 0.116]} />
          <mesh geometry={nodes.Box014_crate_0.geometry} material={materials.crate} position={[-620.879, 364.285, 132.353]} rotation={[-Math.PI / 2, 0, 0.116]} />
          <mesh geometry={nodes.Box015_crate_0.geometry} material={materials.crate} position={[-620.879, 391.052, 132.353]} rotation={[-Math.PI / 2, 0, 0.064]} />
          <mesh geometry={nodes.Box016_crate_0.geometry} material={materials.crate} position={[-620.879, 417.362, 132.353]} rotation={[-Math.PI / 2, 0, 0.116]} />
          <mesh geometry={nodes.Box017_crate_0.geometry} material={materials.crate} position={[-716.543, 364.285, 225.426]} rotation={[-Math.PI / 2, 0, 0.116]} />
          <mesh geometry={nodes.Box018_crate_0.geometry} material={materials.crate} position={[-716.543, 391.052, 225.426]} rotation={[-Math.PI / 2, 0, 0.09]} />
          <mesh geometry={nodes.Box019_crate_0.geometry} material={materials.crate} position={[-546.973, 364.285, 131.547]} rotation={[-Math.PI / 2, 0, 0.149]} />
          <mesh geometry={nodes.Box020_crate_0.geometry} material={materials.crate} position={[-546.973, 391.052, 131.547]} rotation={[-Math.PI / 2, 0, 0.116]} />
          <mesh geometry={nodes.Box021_crate_0.geometry} material={materials.crate} position={[-546.973, 417.362, 131.547]} rotation={[-Math.PI / 2, 0, 0.142]} />
          <mesh geometry={nodes.sardines_crate_sardines_0.geometry} material={materials.crate_sardines} position={[-546.435, 444.074, 131.236]} rotation={[-Math.PI / 2, 0, 0.161]} />
          <mesh geometry={nodes.sardines001_crate_sardines_0.geometry} material={materials.crate_sardines} position={[-510.639, 496.893, 36.903]} rotation={[-Math.PI / 2, 0, 0.163]} />
          <mesh geometry={nodes.sardines002_crate_sardines_0.geometry} material={materials.crate_sardines} position={[-449.368, 470.503, 39.206]} rotation={[-Math.PI / 2, 0, 0.083]} />
          <mesh geometry={nodes.sardines003_crate_sardines_0.geometry} material={materials.crate_sardines} position={[-715.532, 417.44, 225.307]} rotation={[-Math.PI / 2, 0, 0.169]} />
          <mesh geometry={nodes.sardines004_crate_sardines_0.geometry} material={materials.crate_sardines} position={[-620.706, 444.102, 131.786]} rotation={[-Math.PI / 2, 0, 0.063]} />
          <mesh geometry={nodes.crate_crate_ice_0.geometry} material={materials.crate_ice} position={[-700.278, 470.178, 130.544]} rotation={[-Math.PI / 2, 0, 0.132]} />
          <mesh geometry={nodes.crate001_crate_ice_0.geometry} material={materials.crate_ice} position={[-687.268, 493.676, 41.389]} rotation={[-Math.PI / 2, 0, 0.132]} />
          <mesh geometry={nodes.crate002_crate_ice_0.geometry} material={materials.crate_ice} position={[-590.93, 492.209, 35.113]} rotation={[-Math.PI / 2, 0, 0.021]} />
          <mesh geometry={nodes.Box022_crate_0.geometry} material={materials.crate} position={[-478.891, 364.285, 140.637]} rotation={[-Math.PI / 2, 0, 0.149]} />
          <mesh geometry={nodes.Box023_crate_0.geometry} material={materials.crate} position={[-478.891, 387.814, 140.637]} rotation={[-Math.PI / 2, 0, 0.149]} />
          <mesh geometry={nodes.crate003_crate_ice_0.geometry} material={materials.crate_ice} position={[-479.869, 414.14, 140.486]} rotation={[-Math.PI / 2, 0, 0.155]} />
          <mesh geometry={nodes.fish_fish_0.geometry} material={materials.fish} position={[-518.481, 500.825, 276.946]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.sardines005_crate_sardines_0.geometry} material={materials.crate_sardines} position={[-88.987, 492.624, -62.185]} rotation={[-Math.PI / 2, 0, 0.083]} />
          <mesh geometry={nodes.sardines006_crate_sardines_0.geometry} material={materials.crate_sardines} position={[-83.778, 492.624, -164.891]} rotation={[-Math.PI / 2, 0, 0.171]} />
          <mesh geometry={nodes.Box024_crate_0.geometry} material={materials.crate} position={[-11.299, 365.473, -21.279]} rotation={[-Math.PI / 2, 0, -1.569]} />
          <mesh geometry={nodes.sardines007_crate_sardines_0.geometry} material={materials.crate_sardines} position={[-11.128, 392.236, -22.219]} rotation={[-Math.PI / 2, 0, -1.575]} />
          <mesh geometry={nodes.Box025_crate_0.geometry} material={materials.crate} position={[-11.52, 365.473, -100.087]} rotation={[-Math.PI / 2, 0, -1.395]} />
          <mesh geometry={nodes.sardines008_crate_sardines_0.geometry} material={materials.crate_sardines} position={[-11.188, 392.236, -100.982]} rotation={[-Math.PI / 2, 0, -1.4]} />
          <mesh geometry={nodes.crate004_crate_ice_0.geometry} material={materials.crate_ice} position={[-156.857, 471.909, -74.72]} rotation={[-Math.PI / 2, 0, 0.155]} />
          <mesh geometry={nodes.Box026_crate_0.geometry} material={materials.crate} position={[-448.826, 364.285, 38.661]} rotation={[-Math.PI / 2, 0, 0.116]} />
          <mesh geometry={nodes.Box027_crate_0.geometry} material={materials.crate} position={[-448.826, 391.052, 38.661]} rotation={[-Math.PI / 2, 0, 0.116]} />
          <mesh geometry={nodes.Box028_crate_0.geometry} material={materials.crate} position={[-448.826, 417.362, 38.661]} rotation={[-Math.PI / 2, 0, 0.089]} />
          <mesh geometry={nodes.Box029_crate_0.geometry} material={materials.crate} position={[-448.826, 443.74, 38.661]} rotation={[-Math.PI / 2, 0, 0.116]} />
          <mesh geometry={nodes.board_board_0.geometry} material={materials.board} position={[-509.399, 400.269, -962.419]} rotation={[-1.383, 0, 0]} />
          <mesh geometry={nodes.stone1_stone_stone_0.geometry} material={materials.stone_stone} position={[770.879, 72.769, -750.395]} rotation={[-Math.PI / 2, 0, 1.222]} />
          <mesh geometry={nodes.stone002_stone_stone_0.geometry} material={materials.stone_stone} position={[692.071, 72.769, -517.045]} rotation={[1.384, -0.253, 1.919]} />
          <mesh geometry={nodes.stone003_stone_stone_0.geometry} material={materials.stone_stone} position={[837.101, 90.414, -906.532]} rotation={[2.048, -0.988, 0.519]} />
          <mesh geometry={nodes.stone2_stone_stone_0.geometry} material={materials.stone_stone_0} position={[770.437, 171.401, -715.749]} rotation={[-Math.PI / 2, Math.PI / 6, -Math.PI / 2]} />
          <mesh geometry={nodes.stone004_stone_stone_0.geometry} material={materials.stone_stone_0} position={[858.652, 171.401, -659.763]} rotation={[1.077, -0.47, -1.81]} />
          <mesh geometry={nodes.stone3_stone_stone_0.geometry} material={materials.stone_stone_1} position={[845.964, 111.136, -1108.551]} rotation={[-Math.PI / 2, 0, -2.269]} />
          <mesh geometry={nodes.stone005_stone_stone_0.geometry} material={materials.stone_stone_1} position={[672.729, 50.035, -305.597]} rotation={[1.228, -0.275, -0.921]} />
          <mesh geometry={nodes.stone4_stone_stone_0.geometry} material={materials.stone_stone_2} position={[984.504, 64.585, -812.48]} rotation={[-Math.PI / 2, 0, -1.134]} />
          <mesh geometry={nodes.stone006_stone_stone_0.geometry} material={materials.stone_stone_2} position={[817.665, 64.585, -496.302]} rotation={[-Math.PI, -0.436, -Math.PI / 2]} />
          <mesh geometry={nodes.stone007_stone_stone_0.geometry} material={materials.stone_stone_0} position={[1007.813, 115.993, -993.559]} rotation={[-Math.PI / 2, -1.396, 0.611]} />
          <mesh geometry={nodes.stone008_stone_stone_0.geometry} material={materials.stone_stone} position={[1197.753, 72.769, -259.922]} rotation={[-1.935, -0.241, -1.918]} />
          <mesh geometry={nodes.stone009_stone_stone_0.geometry} material={materials.stone_stone_1} position={[1295.409, 47.129, -477.739]} rotation={[-2.56, -0.166, 1.607]} />
          <mesh geometry={nodes.stone010_stone_stone_0.geometry} material={materials.stone_stone_0} position={[1328.268, 64.706, -33.847]} rotation={[1.077, -0.47, -1.81]} />
          <mesh geometry={nodes.stone011_stone_stone_0.geometry} material={materials.stone_stone_0} position={[1357.008, 64.706, -292.4]} rotation={[-1.988, 0.208, -0.458]} />
          <mesh geometry={nodes.stone012_stone_stone_0.geometry} material={materials.stone_stone_0} position={[1417.582, 64.706, -172.304]} rotation={[-3.01, -1.028, -0.994]} />
          <mesh geometry={nodes.stone013_stone_stone_0.geometry} material={materials.stone_stone} position={[1135.319, 53.102, -683.749]} rotation={[-0.278, -0.337, 1.477]} />
          <mesh geometry={nodes.stone014_stone_stone_0.geometry} material={materials.stone_stone_2} position={[1309.982, 64.585, 275.741]} rotation={[2.574, -0.375, -1.8]} />
          <mesh geometry={nodes.stone015_stone_stone_0.geometry} material={materials.stone_stone_0} position={[1206.58, 64.706, 603.594]} rotation={[0.881, 0.341, -2.664]} />
          <mesh geometry={nodes.stone016_stone_stone_0.geometry} material={materials.stone_stone_1} position={[1064.947, 111.136, 832.54]} rotation={[2.805, 0.67, -1.357]} />
          <mesh geometry={nodes.stone017_stone_stone_0.geometry} material={materials.stone_stone_0} position={[1260.119, 64.706, 695.662]} rotation={[-2.673, -0.854, -0.72]} />
          <mesh geometry={nodes.stone018_stone_stone_0.geometry} material={materials.stone_stone_2} position={[947.338, 187.996, 914.764]} rotation={[0.82, -1.366, -1.365]} />
          <mesh geometry={nodes.stone019_stone_stone_0.geometry} material={materials.stone_stone_0} position={[971.157, 64.706, 1057.101]} rotation={[1.077, -0.47, -1.81]} />
          <mesh geometry={nodes.stone020_stone_stone_0.geometry} material={materials.stone_stone_0} position={[910.286, 64.706, 1061.868]} rotation={[-0.801, 0.393, -1.926]} />
          <mesh geometry={nodes.Loft001_palm_0.geometry} material={materials.palm} position={[934.443, 481.295, -943.603]} rotation={[Math.PI, -0.078, 0.428]} />
          <mesh geometry={nodes.Cylinder006_barrel_0.geometry} material={materials.barrel} position={[-371.506, 366.481, 44.807]} rotation={[-Math.PI / 2, 0, 0.395]} />
          <mesh geometry={nodes.sardines009_crate_sardines_0.geometry} material={materials.crate_sardines} position={[-409.291, 362.17, 144.263]} rotation={[-Math.PI / 2, 0, 0.161]} />
          <mesh geometry={nodes.flowers_flowerpot2_0.geometry} material={materials.flowerpot2} position={[-1115.151, 402.511, -404.6]} rotation={[-Math.PI / 2, 0, 0.362]} />
          <mesh geometry={nodes.plant1_flowerpot2_0.geometry} material={materials.flowerpot2} position={[-1131.562, 401.473, -72.328]} rotation={[-Math.PI / 2, 0, -0.96]} />
          <mesh geometry={nodes.flower1_flowerpot2_0.geometry} material={materials.flowerpot2} position={[-1184.375, 399.897, -51.481]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.ochids_flowerpot2_0.geometry} material={materials.flowerpot2} position={[-1142.801, 410.585, 580.947]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.plant002_flowerpot2_0.geometry} material={materials.flowerpot2} position={[-368.072, 1248.157, -309.131]} rotation={[-Math.PI / 2, 0, -0.96]} />
          <mesh geometry={nodes.plant003_flowerpot2_0.geometry} material={materials.flowerpot2} position={[-334.724, 1235.23, -291.014]} rotation={[-Math.PI / 2, 0, -2.356]} />
          <mesh geometry={nodes.flowers001_flowerpot2_0.geometry} material={materials.flowerpot2} position={[-379.159, 1254.934, -41.64]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.flowerbunch_flowerpot2_0.geometry} material={materials.flowerpot2} position={[-204.818, 1040.702, -111.626]} rotation={[-Math.PI / 2, 0, 0.087]} />
          <mesh geometry={nodes.flowerbunch001_flowerpot2_0.geometry} material={materials.flowerpot2} position={[-162.476, 1364.197, -662.992]} rotation={[-Math.PI / 2, 0, 0.087]} />
          <mesh geometry={nodes.flowerbunchB_flowerpot2_0.geometry} material={materials.flowerpot2} position={[-200.695, 1039.99, -271.501]} rotation={[-Math.PI / 2, 0, 0.087]} />
          <mesh geometry={nodes.flowerbunchB001_flowerpot2_0.geometry} material={materials.flowerpot2} position={[-159.745, 1102.641, -716.178]} rotation={[-Math.PI / 2, 0, 0.087]} />
          <mesh geometry={nodes.flowerbunchB002_flowerpot2_0.geometry} material={materials.flowerpot2} position={[-173.422, 1365.105, -552.956]} rotation={[-Math.PI / 2, 0, 0.087]} />
          <mesh geometry={nodes.flowerbunchB003_flowerpot2_0.geometry} material={materials.flowerpot2} position={[-173.398, 1100.951, -578.962]} rotation={[-Math.PI / 2, 0, 0.087]} />
          <mesh geometry={nodes.flowerbunch002_flowerpot2_0.geometry} material={materials.flowerpot2} position={[-887.558, 812.919, -666.543]} rotation={[-Math.PI / 2, 0, 0.087]} />
          <mesh geometry={nodes.flowerbunchB004_flowerpot2_0.geometry} material={materials.flowerpot2} position={[-1148.555, 1117.417, -111.961]} rotation={[-Math.PI / 2, 0, 0.087]} />
          <mesh geometry={nodes.flowerbunchB005_flowerpot2_0.geometry} material={materials.flowerpot2} position={[-1133.121, 1117.417, -300.088]} rotation={[-Math.PI / 2, 0, 0.087]} />
          <mesh geometry={nodes.Object001_flowerpot2_0.geometry} material={materials.flowerpot2} position={[-1170.543, 410.811, -3.002]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.flowerbunchB006_flowerpot2_0.geometry} material={materials.flowerpot2} position={[-1138.33, 397.742, 48.526]} rotation={[-Math.PI / 2, 0, -1.222]} />
          <mesh geometry={nodes.Object002_flowerpot2_0.geometry} material={materials.flowerpot2} position={[-209.78, 743.799, -340.868]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object003_flowerpot2_0.geometry} material={materials.flowerpot2} position={[-541.616, 763.838, 15.631]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.bigplant_plant_0.geometry} material={materials.plant} position={[-1067.213, 1417.091, -323.535]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.bigplant001_plant_0.geometry} material={materials.plant} position={[-1067.213, 1417.091, -323.535]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.bigplant002_plant_0.geometry} material={materials.plant} position={[-326.827, 1211.438, -354.019]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.bench_bench_0.geometry} material={materials.bench} position={[-1073.077, 430.028, 834.38]} rotation={[Math.PI, 0, -0.601]} />
          <mesh geometry={nodes.bench001_bench_0.geometry} material={materials.bench} position={[-106.614, 183.922, 548.567]} rotation={[-Math.PI, 0, 0.873]} />
          <mesh geometry={nodes.bench002_bench_0.geometry} material={materials.bench} position={[384.746, 183.922, -305.051]} rotation={[Math.PI, 0, 0.175]} />
          <mesh geometry={nodes.flag_flag_0.geometry} material={materials.flag} position={[-1119.908, 1424.884, -32.471]} rotation={[-Math.PI / 2, 0, 1.545]} />
          <mesh geometry={nodes.Plane001_seagull_0.geometry} material={materials.seagull} position={[-47.856, 796.909, -660.24]} rotation={[-Math.PI, 0, 0]} />
          <mesh geometry={nodes.type1_seagull_seagull_flying_0.geometry} material={materials.seagull_flying} position={[-95.346, 1731.739, -160.484]} rotation={[2.805, -0.477, -0.06]} />
          <mesh geometry={nodes.type1_seagull001_seagull_flying_0.geometry} material={materials.seagull_flying} position={[341.521, 1002.187, -6.652]} rotation={[-2.359, -0.433, 1.378]} />
          <mesh geometry={nodes.type1_seagull002_seagull_flying_0.geometry} material={materials.seagull_flying} position={[451.648, 1201.403, 837.182]} rotation={[2.892, -0.169, -0.043]} />
          <mesh geometry={nodes.type2_seagull_seagull_flying_0.geometry} material={materials.seagull_flying_0} position={[771.533, 554.097, 645.686]} rotation={[1.793, -0.955, -2.105]} />
          <mesh geometry={nodes.type2_seagull001_seagull_flying_0.geometry} material={materials.seagull_flying_0} position={[612.033, 617.352, -1197.864]} rotation={[-2.678, -0.71, 0.477]} />
          <mesh geometry={nodes.type2_seagull002_seagull_flying_0.geometry} material={materials.seagull_flying_0} position={[-65.169, 885.166, -693.292]} rotation={[2.518, -0.562, -2.089]} />
          <mesh geometry={nodes.type1_seagull003_seagull_flying_0.geometry} material={materials.seagull_flying} position={[973.384, 377.363, 590.023]} rotation={[2.634, -0.142, 0.309]} />
          <mesh geometry={nodes.boat1_boat_0.geometry} material={materials.boat} position={[313.858, 73.751, 903.457]} rotation={[-Math.PI / 2, 0, 2.334]} />
          <mesh geometry={nodes['boat003_05_-_Default_0'].geometry} material={materials['05_-_Default']} position={[61.803, 75.002, 1152.737]} rotation={[-Math.PI / 2, 0, 2.512]} />
          <mesh geometry={nodes.boat2_boat2_0.geometry} material={materials.boat2} position={[846.502, 74.646, 380.481]} rotation={[-Math.PI / 2, 0, 1.883]} />
          <mesh geometry={nodes.thingy001_docks_0.geometry} material={materials.docks} position={[-125.92, 113.622, 738.545]} rotation={[-Math.PI / 2, 0, 0.724]} />
          <mesh geometry={nodes.thingy002_docks_0.geometry} material={materials.docks} position={[325.681, 113.622, 350.027]} rotation={[-Math.PI / 2, 0, 0.901]} />
          <mesh geometry={nodes.rope_docks_0.geometry} material={materials.docks_0} position={[-126.823, 116.526, 740.427]} rotation={[-1.93, -0.135, 1.415]} />
          <mesh geometry={nodes.rope001_docks_0.geometry} material={materials.docks_0} position={[-126.823, 116.526, 740.427]} rotation={[-1.888, -0.108, -0.453]} />
          <mesh geometry={nodes.rope002_docks_0.geometry} material={materials.docks_0} position={[326.704, 116.526, 346.537]} rotation={[-1.888, -0.108, -0.453]} />
          <mesh geometry={nodes.bench003_bench_0.geometry} material={materials.bench} position={[-1362.373, 429.8, 244.62]} rotation={[-Math.PI, 0, -0.243]} />
          <mesh geometry={nodes.Torus001_YOUR_MATERIAL_0.geometry} material={materials.YOUR_MATERIAL} position={[530.314, 183.411, 273.421]} rotation={[Math.PI / 2, -1.255, -2.067]} />
          <mesh geometry={nodes.Torus002_YOUR_MATERIAL_0.geometry} material={materials.YOUR_MATERIAL} position={[20.727, 77.324, 1161.462]} rotation={[Math.PI / 2, -0.11, -Math.PI]} />
          <mesh geometry={nodes.Torus003_YOUR_MATERIAL_0.geometry} material={materials.YOUR_MATERIAL} position={[487.827, 115.626, 907.534]} rotation={[1.654, 1.279, 2.432]} />
          <mesh geometry={nodes.paddle_YOUR_MATERIAL_0.geometry} material={materials.YOUR_MATERIAL_0} position={[873.878, 146.063, 375.261]} rotation={[1.59, -0.051, 1.578]} />
          <mesh geometry={nodes.paddle001_YOUR_MATERIAL_0.geometry} material={materials.YOUR_MATERIAL_0} position={[873.878, 77.853, 375.261]} rotation={[1.59, -0.051, -1.413]} />
          <mesh geometry={nodes.paddle2_paddle2_0.geometry} material={materials.paddle2} position={[58.512, 142.425, 1139.542]} rotation={[-1.595, 0.04, -0.682]} />
          <mesh geometry={nodes.paddle003_paddle2_0.geometry} material={materials.paddle2} position={[248.482, 154.79, 1210.622]} rotation={[-0.514, -0.609, 2.223]} />
          <mesh geometry={nodes['paddle004_05_-_Default_0'].geometry} material={materials['05_-_Default_0']} position={[223.239, 143.26, 832.098]} rotation={[-1.542, 0.002, -0.574]} />
          <mesh geometry={nodes['paddle005_05_-_Default_0'].geometry} material={materials['05_-_Default_0']} position={[225.513, 143.26, 827.785]} rotation={[-1.625, -0.014, -0.761]} />
          <mesh geometry={nodes.Box030_crate_0.geometry} material={materials.crate} position={[375.033, 71.168, 975.859]} rotation={[-Math.PI / 2, 0, 0.116]} />
          <mesh geometry={nodes.Box031_crate_0.geometry} material={materials.crate} position={[984.918, 141.992, 453.053]} rotation={[-Math.PI / 2, 0, -1]} />
          <mesh geometry={nodes.sardines010_crate_sardines_0.geometry} material={materials.crate_sardines} position={[985.568, 168.755, 452.354]} rotation={[-Math.PI / 2, 0, -0.971]} />
          <mesh geometry={nodes.tree_tree_0.geometry} material={materials.tree} position={[-1250.268, 358.283, 558.176]} rotation={[-Math.PI / 2, 0, 2.504]} />
          <mesh geometry={nodes.tree001_tree_0.geometry} material={materials.tree} position={[-1373.763, 358.283, 5.481]} rotation={[-Math.PI / 2, 0, -0.968]} />
          <mesh geometry={nodes.sardines_tag_pricetag_0.geometry} material={materials.pricetag} position={[-508.797, 472.59, 92.682]} rotation={[-Math.PI, 0, 0]} />
          <mesh geometry={nodes.sardines_tag001_pricetag_0.geometry} material={materials.pricetag} position={[-691.783, 449.766, 226.408]} rotation={[-Math.PI, 0, 0.47]} />
          <mesh geometry={nodes.salmon_tag_pricetag_0.geometry} material={materials.pricetag_0} position={[-719.378, 495.07, 98.403]} rotation={[Math.PI, 0, -0.652]} />
          <mesh geometry={nodes.tuna_tag_pricetag_0.geometry} material={materials.pricetag_1} position={[-392.528, 437.832, 107.609]} rotation={[-3.14, -0.033, 0.047]} />
          <mesh geometry={nodes.tuna_tag001_pricetag_0.geometry} material={materials.pricetag_1} position={[-249.102, 498.07, -69.948]} rotation={[-3.14, -0.033, -2.875]} />
          <mesh geometry={nodes.sardines2_tag_pricetag_0.geometry} material={materials.pricetag_2} position={[-44.839, 421.496, -101.347]} rotation={[Math.PI, 0, -1.54]} />
          <mesh geometry={nodes.sardines_tag002_pricetag_0.geometry} material={materials.pricetag} position={[-138.209, 518.015, -24.009]} rotation={[Math.PI, 0, -3.037]} />
          <mesh geometry={nodes.sardines2_tag001_pricetag_0.geometry} material={materials.pricetag_2} position={[-527.105, 525.994, 19.194]} rotation={[-3.124, 0.169, -0.104]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('environment/city2.glb')


const City2 = () => {
  const currentMode = useSelector((state) => state.darkMode)

  return (
    <Canvas 
    flat
    camera={{fov:65,position:[8,3,-3]}}
    >
{
  currentMode ?   <pointLight color="white" intensity={0.7} position={[10, 10, 10]} /> : <ambientLight/>
}
<OrbitControls enableZoom={false} />
<Center>
  <Suspense fallback={FallbackLoader}>
<City2Model />
  </Suspense>
</Center>
    </Canvas>
  )
}
export default City2