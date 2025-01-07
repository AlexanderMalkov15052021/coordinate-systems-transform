import { emptyMooe } from "@/helpers/emptyMooe/emptyMooe";
import { getNewCoordsWhenTurning } from "@/helpers/math";
import { FieldType, laneMark, MooeDoc, TransformControlsMode } from "@/types";
import { makeAutoObservable } from "mobx";

class TransformStor {
    isLoading: boolean = false;
    refFileName: string | null = null;
    loadingTime: number[] = [0, 0];
    isMessageShow: boolean = false;
    isShowDashboard: boolean = true;
    href: string = "";
    mooeDoc: MooeDoc = emptyMooe;
    mooeStr: string = "";
    summaryAngle: number = 0;

    transformControlsMode: TransformControlsMode = "translate";

    transformParams: { coords: { x: number, y: number }, angle: number } = { coords: { x: 0, y: 0 }, angle: 0 }
    tmpTransformParams: { coords: { x: number, y: number }, angle: number } = { coords: { x: 0, y: 0 }, angle: 0 }

    values: FieldType = {
        srcPoint_1X: 0,
        srcPoint_1Y: -2,
        srcPoint_2X: 0,
        srcPoint_2Y: -5,
        srcPoint_3X: 3,
        srcPoint_3Y: -5,

        changePoint_1X: 2,
        changePoint_1Y: -3,
        changePoint_2X: 2,
        changePoint_2Y: -6,
        changePoint_3X: 5,
        changePoint_3Y: -6,

        angle: 0
    };

    constructor() {
        makeAutoObservable(this);
    }

    setTransformControlsMode = (mode: TransformControlsMode) => this.transformControlsMode = mode;

    setLoadingTime = (val: number[]) => this.loadingTime = val;
    setIsMessageShow = (val: boolean) => this.isMessageShow = val;
    setRefFileName = (val: string | null) => this.refFileName = val;
    setIsLoading = (val: boolean) => this.isLoading = val;

    applyCoordsTransform = () => {
        const shiftX = this.tmpTransformParams.coords.x;
        const shiftY = this.tmpTransformParams.coords.y;
        const angle = this.tmpTransformParams.angle;

        const getNewCoordsBezierWhenTurning = (x: number, y: number, angle: number) => {
            const newX = Math.cos(angle) * x - Math.sin(angle) * -y;
            const newY = Math.sin(angle) * x + Math.cos(angle) * -y;

            return { x: newX, y: newY * -1 }
        }

        this.mooeDoc.mLaneMarks.map((obj: laneMark) => {
            obj.mLaneMarkXYZW.x += shiftX;
            obj.mLaneMarkXYZW.y += shiftY;

            const coords = getNewCoordsWhenTurning(
                obj.mLaneMarkXYZW.x,
                obj.mLaneMarkXYZW.y,
                angle
            );

            obj.mLaneMarkXYZW.x = coords.x;
            obj.mLaneMarkXYZW.y = coords.y;

        });


        this.mooeDoc.mRoads.map((obj: any) => {

            if (obj.mLanes[0].mLaneType === 3) {
                obj.mLanes[0].mArcControl.x += shiftX;
                obj.mLanes[0].mArcControl.y += shiftY;

                const coords = getNewCoordsWhenTurning(
                    obj.mLanes[0].mArcControl.x,
                    obj.mLanes[0].mArcControl.y,
                    angle
                );

                obj.mLanes[0].mArcControl.x = coords.x;
                obj.mLanes[0].mArcControl.y = coords.y;
            }

            if (obj.mLanes[0].mLaneType === 2) {

                obj.mLanes[0].m_BezierControl1.x += shiftX * 50;
                obj.mLanes[0].m_BezierControl1.y += -shiftY * 50;

                obj.mLanes[0].m_BezierControl2.x += shiftX * 50;
                obj.mLanes[0].m_BezierControl2.y += -shiftY * 50;


                const coords1 = getNewCoordsBezierWhenTurning(
                    obj.mLanes[0].m_BezierControl1.x,
                    obj.mLanes[0].m_BezierControl1.y,
                    angle
                );

                obj.mLanes[0].m_BezierControl1.x = coords1.x;
                obj.mLanes[0].m_BezierControl1.y = coords1.y;


                const coords2 = getNewCoordsBezierWhenTurning(
                    obj.mLanes[0].m_BezierControl2.x,
                    obj.mLanes[0].m_BezierControl2.y,
                    angle
                );

                obj.mLanes[0].m_BezierControl2.x = coords2.x;
                obj.mLanes[0].m_BezierControl2.y = coords2.y;

            }

            if (obj.mLanes[0].mLaneType === 1) {
                obj.mLanes[0].mBezierControl.x += shiftX;
                obj.mLanes[0].mBezierControl.y += shiftY;

                const coords = getNewCoordsWhenTurning(
                    obj.mLanes[0].mBezierControl.x,
                    obj.mLanes[0].mBezierControl.y,
                    angle
                );

                obj.mLanes[0].mBezierControl.x = coords.x;
                obj.mLanes[0].mBezierControl.y = coords.y;
            }

        });

        this.setHref(JSON.stringify(this.mooeDoc));
    }

    setTMPParams = (params: { coords: { x: number, y: number }, angle: number }) => {

        this.tmpTransformParams = {
            coords: {
                x: this.tmpTransformParams.coords.x + params.coords.x,
                y: this.tmpTransformParams.coords.y + params.coords.y
            },
            angle: this.tmpTransformParams.angle + params.angle
        };

    }

    setParams = (values: FieldType) => {

        this.setTMPParams({
            coords: { x: this.transformParams.coords.x, y: this.transformParams.coords.y },
            angle: this.transformParams.angle
        });

        this.applyCoordsTransform();

        this.isLoading = true;

        const coordsX: number = this.transformParams.coords.x;
        const coordsY: number = this.transformParams.coords.y;

        const transformAngle: number = this.transformParams.angle;

        const changePoint_1 = getNewCoordsWhenTurning(
            Number(values.changePoint_1X) + coordsX,
            Number(values.changePoint_1Y) + coordsY,
            transformAngle
        );

        const changePoint_2 = getNewCoordsWhenTurning(
            Number(values.changePoint_2X) + coordsX,
            Number(values.changePoint_2Y) + coordsY,
            transformAngle
        );

        const changePoint_3 = getNewCoordsWhenTurning(
            Number(values.changePoint_3X) + coordsX,
            Number(values.changePoint_3Y) + coordsY,
            transformAngle
        );


        this.values = {
            srcPoint_1X: values.srcPoint_1X,
            srcPoint_1Y: values.srcPoint_1Y,
            srcPoint_2X: values.srcPoint_2X,
            srcPoint_2Y: values.srcPoint_2Y,
            srcPoint_3X: values.srcPoint_3X,
            srcPoint_3Y: values.srcPoint_3Y,

            changePoint_1X: changePoint_1.x,
            changePoint_1Y: changePoint_1.y,
            changePoint_2X: changePoint_2.x,
            changePoint_2Y: changePoint_2.y,
            changePoint_3X: changePoint_3.x,
            changePoint_3Y: changePoint_3.y,

            angle: this.summaryAngle + transformAngle,
        };


        this.setTransformParams({ coords: { x: 0, y: 0 }, angle: 0 });

        this.setSummaryAngle(transformAngle);

        this.isLoading = false;

    }

    setTransformParams = (params: { coords: { x: number, y: number }, angle: number }) => {

        this.transformParams = params;

    }

    setSummaryAngle = (angle: number) => {

        this.summaryAngle += angle;

    }

    setHref = (doc: string) => {

        const file = new Blob([doc as unknown as string], { type: 'application/json' });
        const url = URL.createObjectURL(file);

        this.href = url;
    }

    setMOOEDoc = (mooeStr: string) => {
        this.mooeStr = mooeStr;
        this.mooeDoc = JSON.parse(mooeStr);
        this.setHref(mooeStr);
    }

    setDashboardState = (val: boolean) => {
        this.isShowDashboard = val;
    }
}

export const store = new TransformStor();
