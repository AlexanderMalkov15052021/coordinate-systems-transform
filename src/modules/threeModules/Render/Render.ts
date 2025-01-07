import * as THREE from "three";
import { getBufferPoints } from "../Create/getBufferPoints";
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FieldType } from '@/types';

type Props = {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    orbitControls: OrbitControls;
    transformControls: TransformControls;
    values: FieldType | null;
}

export const Render = ({ scene, camera, renderer, orbitControls, transformControls, values }: Props) => {

    const points_1 = getBufferPoints({
        point_1: {
            x: values?.changePoint_1X ?? 0,
            y: values?.changePoint_1Y ?? 0
        },
        point_2: {
            x: values?.changePoint_2X ?? 0,
            y: values?.changePoint_2Y ?? 0
        },
        point_3: {
            x: values?.changePoint_3X ?? 0,
            y: values?.changePoint_3Y ?? 0
        },
        angle: values?.angle ?? 0,
        color: 0x0147AB
    });

    const points_2 = getBufferPoints({
        point_1: {
            x: values?.srcPoint_1X ?? 0,
            y: values?.srcPoint_1Y ?? 0
        },
        point_2: {
            x: values?.srcPoint_2X ?? 0,
            y: values?.srcPoint_2Y ?? 0
        },
        point_3: {
            x: values?.srcPoint_3X ?? 0,
            y: values?.srcPoint_3Y ?? 0
        },
        angle: 0,
        color: 0xFF6600
    });

    scene.add(points_1);
    scene.add(points_2);

    transformControls.children.push(points_1);
    transformControls.attach(points_1);

    scene.add(transformControls);

    renderer.setAnimationLoop(_ => {
        orbitControls.update();

        renderer.render(scene, camera);
    });

    return renderer;
}