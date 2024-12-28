import { TransformStor } from "@/entities";
import { Button } from "antd/lib";
import { observer } from "mobx-react-lite";
import styles from "./ApplyBtn.module.css";

const ApplyBtn = observer(() => {
    const {
        store: { values, setParams },
    } = TransformStor;

    const btnClickHandler = () => {
        setParams(values);
    }

    return <div className={styles.btnWrapper}>
        <Button onClick={btnClickHandler} className={styles.btn} type={"primary"}>
            Применить
        </Button>
    </div>
});

export default ApplyBtn;