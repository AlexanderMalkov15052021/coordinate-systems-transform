import { TransformStor } from "@/entities";
import { Button } from "antd/lib";
import { observer } from "mobx-react-lite";
import styles from "./ShowDashboard.module.css"

const ShowDashboard = observer(() => {
    const {
        store: { isShowDashboard, setDashboardState },
    } = TransformStor;

    const btnClickHandler = () => {
        setDashboardState(!isShowDashboard);
    }

    return <>
        <Button onClick={btnClickHandler} className={styles.btn} type={"primary"}>
            {isShowDashboard ? "Система координат" : "Настройки"}
        </Button>
    </>
});

export default ShowDashboard;