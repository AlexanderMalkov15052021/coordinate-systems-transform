import { FieldType } from "@/types";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TransformControls } from "three/examples/jsm/controls/TransformControls";

function Scene(
    sceneRef: HTMLDivElement | null,
    values: FieldType | null,
    setTransformParams: (params: {
        coords: {
            x: number;
            y: number;
        };
        angle: number;
    }) => void
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

    transformControls.setMode('translate');

    transformControls.position?.set(values?.changePoint_1X ?? 0, values?.changePoint_1Y ?? 0, 0);

    scene.add(transformControls);

    transformControls.addEventListener('dragging-changed', function (event: any) {
        orbitControls.enabled = !event.value;

        const x = transformControls.children[2].position.x;
        const y = transformControls.children[2].position.y;
        const angle = transformControls.children[2].rotation.z;

        setTransformParams({ coords: { x, y }, angle });

    });

    window.addEventListener('keydown', function (event) {
        const shift = 0.0001;

        switch (event.key) {
            case 't':
                transformControls.setMode('translate');
                break;
            case 'е':
                transformControls.setMode('translate');
                break;
            case 'r':
                transformControls.setMode('rotate');
                break;
            case 'к':
                transformControls.setMode('rotate');
                break;
            case 's':
                transformControls.setMode('scale');
                break;
            case 'ы':
                transformControls.setMode('scale');
                break;
            case 'ArrowLeft':

                transformControls.children[2].position.x -= shift;

                setTransformParams({
                    coords: {
                        x: transformControls.children[2].position.x,
                        y: transformControls.children[2].position.y
                    },
                    angle: transformControls.children[2].rotation.z
                });

                break;
            case 'ArrowRight':

                transformControls.children[2].position.x += shift;

                setTransformParams({
                    coords: {
                        x: transformControls.children[2].position.x,
                        y: transformControls.children[2].position.y
                    },
                    angle: transformControls.children[2].rotation.z
                });

                break;
            case 'ArrowUp':

                transformControls.children[2].position.y += shift;

                setTransformParams({
                    coords: {
                        x: transformControls.children[2].position.x,
                        y: transformControls.children[2].position.y
                    },
                    angle: transformControls.children[2].rotation.z
                });

                break;
            case 'ArrowDown':

                transformControls.children[2].position.y -= shift;

                setTransformParams({
                    coords: {
                        x: transformControls.children[2].position.x,
                        y: transformControls.children[2].position.y
                    },
                    angle: transformControls.children[2].rotation.z
                });

                break;
            case ',':

                transformControls.children[2].rotation.z -= shift;

                setTransformParams({
                    coords: {
                        x: transformControls.children[2].position.x,
                        y: transformControls.children[2].position.y
                    },
                    angle: transformControls.children[2].rotation.z
                });

                break;
            case '.':

                transformControls.children[2].rotation.z += shift;

                setTransformParams({
                    coords: {
                        x: transformControls.children[2].position.x,
                        y: transformControls.children[2].position.y
                    },
                    angle: transformControls.children[2].rotation.z
                });

                break;
            case 'б':

                transformControls.children[2].rotation.z -= shift;

                setTransformParams({
                    coords: {
                        x: transformControls.children[2].position.x,
                        y: transformControls.children[2].position.y
                    },
                    angle: transformControls.children[2].rotation.z
                });

                break;
            case 'ю':

                transformControls.children[2].rotation.z += shift;

                setTransformParams({
                    coords: {
                        x: transformControls.children[2].position.x,
                        y: transformControls.children[2].position.y
                    },
                    angle: transformControls.children[2].rotation.z
                });

                break;
            default:
                break;
        }
    });

    return { scene, camera, renderer, orbitControls, transformControls };
}

export default Scene;
