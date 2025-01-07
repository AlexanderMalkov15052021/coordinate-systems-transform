import { FieldType, TransformControlsMode } from "@/types";
import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TransformControls } from "three/examples/jsm/controls/TransformControls";

export const onKeydownTransformControls = (
    evt: any,
    scene: {
        scene: Scene;
        camera: PerspectiveCamera;
        renderer: WebGLRenderer;
        orbitControls: OrbitControls;
        transformControls: TransformControls;
    },
    values: FieldType,
    setTransformParams: (params: {
        coords: {
            x: number;
            y: number;
        };
        angle: number;
    }) => void,
    setParams: (values: FieldType) => void,
    setTransformControlsMode: (mode: TransformControlsMode) => TransformControlsMode
) => {

    const shift = 0.0001;

    switch (evt.key) {
        case 't':
            setTransformControlsMode('translate');
            setParams(values);
            break;
        case 'е':
            setTransformControlsMode('translate');
            setParams(values);
            break;
        case 'r':
            setTransformControlsMode('rotate');
            setParams(values);
            break;
        case 'к':
            setTransformControlsMode('rotate');
            setParams(values);
            break;
        case 's':
            setTransformControlsMode('scale');
            setParams(values);
            break;
        case 'ы':
            setTransformControlsMode('scale');
            setParams(values);
            break;
        case 'ArrowLeft':

            scene.transformControls.children[2].position.x -= shift;

            setTransformParams({
                coords: {
                    x: scene.transformControls.children[2].position.x,
                    y: scene.transformControls.children[2].position.y
                },
                angle: scene.transformControls.children[2].rotation.z
            });

            break;
        case 'ArrowRight':

            scene.transformControls.children[2].position.x += shift;

            setTransformParams({
                coords: {
                    x: scene.transformControls.children[2].position.x,
                    y: scene.transformControls.children[2].position.y
                },
                angle: scene.transformControls.children[2].rotation.z
            });

            break;
        case 'ArrowUp':

            scene.transformControls.children[2].position.y += shift;

            setTransformParams({
                coords: {
                    x: scene.transformControls.children[2].position.x,
                    y: scene.transformControls.children[2].position.y
                },
                angle: scene.transformControls.children[2].rotation.z
            });

            break;
        case 'ArrowDown':

            scene.transformControls.children[2].position.y -= shift;

            setTransformParams({
                coords: {
                    x: scene.transformControls.children[2].position.x,
                    y: scene.transformControls.children[2].position.y
                },
                angle: scene.transformControls.children[2].rotation.z
            });

            break;
        case ',':

            scene.transformControls.children[2].rotation.z -= shift;

            setTransformParams({
                coords: {
                    x: scene.transformControls.children[2].position.x,
                    y: scene.transformControls.children[2].position.y
                },
                angle: scene.transformControls.children[2].rotation.z
            });

            break;
        case '.':

            scene.transformControls.children[2].rotation.z += shift;

            setTransformParams({
                coords: {
                    x: scene.transformControls.children[2].position.x,
                    y: scene.transformControls.children[2].position.y
                },
                angle: scene.transformControls.children[2].rotation.z
            });

            break;
        case 'б':

            scene.transformControls.children[2].rotation.z -= shift;

            setTransformParams({
                coords: {
                    x: scene.transformControls.children[2].position.x,
                    y: scene.transformControls.children[2].position.y
                },
                angle: scene.transformControls.children[2].rotation.z
            });

            break;
        case 'ю':

            scene.transformControls.children[2].rotation.z += shift;

            setTransformParams({
                coords: {
                    x: scene.transformControls.children[2].position.x,
                    y: scene.transformControls.children[2].position.y
                },
                angle: scene.transformControls.children[2].rotation.z
            });

            break;
        default:
            break;
    }

}