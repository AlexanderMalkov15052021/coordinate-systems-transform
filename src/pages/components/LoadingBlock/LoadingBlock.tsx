import { TransformStor } from "@/entities";
import { Spin } from "antd/lib";
import { observer } from "mobx-react-lite";
import styles from "./LoadingBlock.module.css";

const LoadingBlock = observer(() => {
    const {
        store: { isLoading },
    } = TransformStor;

    return (
        isLoading && <div className={styles.loadingBlock}>
            <p className={"converting"}>Конвертирование файла...</p>
            {/* <div className={"counter"}>
                <span style={{ color: "rgba(0, 0, 0, 0.88)" }}>{loadingTime && loadingTime[0]}</span>
                <span> - мин. : </span>
                <span style={{ color: "rgba(0, 0, 0, 0.88)" }}>{loadingTime && loadingTime[1]}</span>
                <span> - сек.</span>
            </div> */}
            <Spin size={"large"} />
        </div>
    );
});

export default LoadingBlock;
