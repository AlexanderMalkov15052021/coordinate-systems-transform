import { useEffect, useRef } from "react";

import Scene from "../Scene/Scene";
import styles from "./ThreeScene.module.css"
import { Render } from "../Render/Render";
import { TransformStor } from "@/entities";
import { observer } from "mobx-react-lite";
import ApplyBtn from "../../ApplyBtn/ApplyBtn";
import { onDraggingChangedTransformControls } from "@/helpers/events/onDraggingChangedTransformControls";
import { onKeydownTransformControls } from "@/helpers/events/onKeydownTransformControls";

const ThreeScene = observer(() => {
    const sceneRef = useRef<HTMLDivElement>(null);

    const {
        store: { values, transformControlsMode, setTransformParams, setParams, setTransformControlsMode },
    } = TransformStor;

    useEffect(() => {

        const scene = Scene(sceneRef.current, values, transformControlsMode);

        const renderer = Render({ ...scene, values });

        const draggingHandler = (evt: any) => onDraggingChangedTransformControls(evt, scene, setTransformParams);

        const keydownHandler = (evt: any) => onKeydownTransformControls(
            evt, scene, values, setTransformParams, setParams, setTransformControlsMode
        );

        scene.transformControls.addEventListener('dragging-changed', draggingHandler);

        window.addEventListener('keydown', keydownHandler);

        return () => {
            renderer.setAnimationLoop(null);

            sceneRef.current && sceneRef.current.removeChild(renderer.domElement);

            scene.transformControls.removeEventListener('dragging-changed', draggingHandler);

            window.removeEventListener('keydown', keydownHandler);

        }
    }, [values]);

    return (
        <>
            <ApplyBtn />
            <div
                ref={sceneRef}
                className={styles.scene}
            >
            </div>
        </>
    );
});

export default ThreeScene;
