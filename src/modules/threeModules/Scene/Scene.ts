import { FieldType, TransformControlsMode } from "@/types";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TransformControls } from "three/examples/jsm/controls/TransformControls";

function Scene(
    sceneRef: HTMLDivElement | null,
    values: FieldType | null,
    transformControlsMode: TransformControlsMode,
) {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        sceneRef ? globalThis.innerWidth / globalThis.innerHeight : 1,
        0.1,
        1000
    );

    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    sceneRef && renderer.setSize(globalThis.innerWidth, globalThis.innerHeight);
    sceneRef && sceneRef.appendChild(renderer.domElement);

    scene.add(new THREE.AxesHelper(10));

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 10, 10);
    scene.add(directionalLight);

    const amLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(amLight);

    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;
    orbitControls.enableZoom = true;
    orbitControls.autoRotate = false;
    orbitControls.minDistance = 0;
    orbitControls.maxDistance = 1000;
    orbitControls.enablePan = true;
    orbitControls.dampingFactor = 0.25;
    orbitControls.enabled = true;

    const transformControls = new TransformControls(camera, renderer.domElement);

    transformControls.setMode(transformControlsMode);

    transformControls.position?.set(values?.changePoint_1X ?? 0, values?.changePoint_1Y ?? 0, 0);

    scene.add(transformControls);

    return { scene, camera, renderer, orbitControls, transformControls };
}

export default Scene;
