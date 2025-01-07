import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TransformControls } from "three/examples/jsm/controls/TransformControls";

export const onDraggingChangedTransformControls = (evt: any, scene: {
    scene: Scene;
    camera: PerspectiveCamera;
    renderer: WebGLRenderer;
    orbitControls: OrbitControls;
    transformControls: TransformControls;
}, setTransformParams: (params: {
    coords: {
        x: number;
        y: number;
    };
    angle: number;
}) => void) => {
    scene.orbitControls.enabled = !evt.value;

    const x = scene.transformControls.children[2].position.x;
    const y = scene.transformControls.children[2].position.y;
    const angle = scene.transformControls.children[2].rotation.z;

    setTransformParams({ coords: { x, y }, angle });
}