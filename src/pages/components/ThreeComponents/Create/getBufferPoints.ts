import { normalNumComponents, positionNumComponents, uvNumComponents } from "@/constants";
import * as THREE from "three";

type Conf = {
    point_1: {
        x: number,
        y: number
    },
    point_2: {
        x: number,
        y: number
    },
    point_3: {
        x: number,
        y: number
    },
    angle: number;
    color: number;
}

export const getBufferPoints = (conf: Conf) => {

    const firstObjPos = [
        conf.point_1.x, conf.point_1.y, 0,  // left
        conf.point_2.x, conf.point_2.y, 0,  // right
        conf.point_3.x, conf.point_3.y, 0  // top
    ];
    const firstObjNormals = [0, 0, 1, 0, 0, 1, 0, 0, 1];
    const firstObjUVs = [0, 0, 1, 0, 0, 1];

    const firstObjGeom = new THREE.BufferGeometry();

    firstObjGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(firstObjPos), positionNumComponents));

    firstObjGeom.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(firstObjNormals), normalNumComponents));

    firstObjGeom.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(firstObjUVs), uvNumComponents));

    const firstObjMat = new THREE.MeshLambertMaterial({ color: conf.color, opacity: .5, transparent: true, wireframe: true });
    firstObjMat.side = THREE.DoubleSide;

    const firstObj = new THREE.Mesh(firstObjGeom, firstObjMat);

    return firstObj;
}