
import { Image } from 'antd/lib';
import { TransformStor } from "@/entities"
import DownloadBtn from "../DownloadBtn/DownloadBtn"
import LoadingBlock from "../LoadingBlock/LoadingBlock"
import MapSettings from "../MapSettings/MapSettings"
import ShowDashboard from "../ShowDashboard/ShowDashboard"
import ThreeScene from "../ThreeComponents/ThreeScene/ThreeScene"
import TypeErrorMessage from "../TypeErrorMessage/TypeErrorMessage"
import UploadForm from "../UploadForm/UploadForm"
import { observer } from 'mobx-react-lite';

const MainContent = observer(() => {

    const {
        store: { isShowDashboard },
    } = TransformStor;

    return <main className={"main-block"}>
        <ShowDashboard />

        {
            isShowDashboard
                ? <>
                    <Image className={"mainImg"} preview={false} src="img/svg/ak.svg"></Image>

                    <UploadForm />

                    <TypeErrorMessage />

                    <LoadingBlock />

                    <MapSettings />

                    <DownloadBtn />
                </>
                : <>
                    <ThreeScene />
                </>
        }

    </main>
});

export default MainContent