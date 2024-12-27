import { TransformStor } from "@/entities";
import { observer } from "mobx-react-lite";

const TypeErrorMessage = observer(() => {

    const {
        store: { isMessageShow },
    } = TransformStor;

    return isMessageShow && <p className={"message"}>Необходим файл с расширением .mooe</p>
});

export default TypeErrorMessage;