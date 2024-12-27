import { TransformStor } from "@/entities";
import { Button } from "antd/lib";
import { observer } from "mobx-react-lite";

const DownloadBtn = observer(() => {
    const {
        store: { href },
    } = TransformStor;

    return <>
        <Button className="buttun-upload" disabled={href ? false : true} type={"primary"}>
            <a
                href={`${href ? href : ""}`} download={"example.mooe"}
            >
                Скачать .mooe
            </a>
        </Button>
    </>
});

export default DownloadBtn;