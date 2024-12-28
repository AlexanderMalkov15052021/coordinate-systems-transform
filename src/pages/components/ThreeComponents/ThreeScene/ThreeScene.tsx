import { useEffect, useRef } from "react";

import Scene from "../Scene/Scene";
import styles from "./ThreeScene.module.css"
import { Render } from "../Render/Render";
import { TransformStor } from "@/entities";
import { observer } from "mobx-react-lite";
import ApplyBtn from "../../ApplyBtn/ApplyBtn";


const ThreeScene = observer(() => {
    const sceneRef = useRef<HTMLDivElement>(null);

    const {
        store: { values, setTransformParams },
    } = TransformStor;

    useEffect(() => {

        const renderer = Render({ ...Scene(sceneRef.current, values, setTransformParams), values });

        return () => {
            renderer.setAnimationLoop(null);

            sceneRef.current && sceneRef.current.removeChild(renderer.domElement);
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
