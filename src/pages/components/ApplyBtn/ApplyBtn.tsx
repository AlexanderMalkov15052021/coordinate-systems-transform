import { TransformStor } from "@/entities";
import { Button } from "antd/lib";
import { observer } from "mobx-react-lite";
import styles from "./ApplyBtn.module.css";

const ApplyBtn = observer(() => {
    const {
        store: { applyCoordsTransform },
    } = TransformStor;

    const btnClickHandler = () => {
        applyCoordsTransform();
    }

    return <div className={styles.btnWrapper}>
        <Button onClick={btnClickHandler} className={styles.btn} type={"primary"}>
            Применить
        </Button>
    </div>
});

export default ApplyBtn;