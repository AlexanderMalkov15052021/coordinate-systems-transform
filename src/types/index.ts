export type laneMark = {
    mAvoidPointID?: null;
    mBindRoadGroups?: never[];
    mID?: null;
    mIsJockeyEndpoint: boolean;
    mLaneMarkDescript: string;
    mLaneMarkEnName: string;
    mLaneMarkID: number;
    mLaneMarkName: string;
    mLaneMarkSize?: { height: number; length: number; width: number; } |
    { height: number; length: number; width: number; } |
    { height: number; length: number; width: number; };
    mLaneMarkType: number;
    mLaneMarkWidth: number;
    mLaneMarkXYZW: { w: number; x: any; y: any; z: number; } |
    { w: number; x: any; y: any; z: number; } |
    { w: number; x: any; y: any; z: number; } |
    { w: number; x: any; y: any; z: number; } |
    { w: number; x: any; y: any; z: number; } |
    { w: number; x: any; y: any; z: number; };
    mMapName?: string;
    mPrepointID?: null;
    mTaskListName?: string;
    neighborsID: never[];
}

export type MooeDoc = {
    // mAreas: MArea[];
    mLaneMarks: laneMark[];
    mRoads: {
        mBelongJunctionID: number;
        mEndPosition: { x: any; y: any; z: number; } |
        { x: number; y: number; z: number; };
        mLForbiddenLine: never[];
        mLForbiddenLineID: number;
        mLaneCount: number;
        mLanes: {
            mAssistedDrawFlag: boolean;
            mAvoidObstacle: boolean;
            mBezierControl?: {
                x: number;
                y: number;
                z: number;
            },
            mBindMarkAreaID: number;
            mBorder: {
                roadwidth_left: number;
                roadwidth_right: number;
            };
            mDelta: number;
            mDirection: number;
            mEndPos: number;
            mGoalAgain: boolean;
            mLaneDescript: string;
            mLaneID: number;
            mLaneName: string;
            mLanePro: number;
            mLaneType: number;
            mLeftAvoidanceArea: number;
            mLength: number | null;
            mMaxCurvature?: number | null;
            mObstacleDistance: number;
            mObstacleWidth: number;
            mPlannerAgain: boolean;
            mPointOfInterest: never[];
            mPosID: number;
            mRightAvoidanceArea: number;
            mSpeed: number;
            mStartPos: number;
            mWidth: number;
            usesensor: {
                fall_arrest_system: boolean;
                use_bottom_laser: boolean;
                use_front_realsense: boolean;
                use_front_realsense_rgb: boolean;
            };
        }[] |
        {
            mAssistedDrawFlag: boolean;
            mAvoidObstacle: boolean;
            mBindMarkAreaID: number;
            mBorder: { roadwidth_left: number; roadwidth_right: number; };
            mDelta: number;
            mDirection: number;
            mEndPos: number;
            mGoalAgain: boolean;
            mLaneDescript: string;
            mLaneID: number;
            mLaneName: string;
            mLanePro: number;
            mLaneType: number;
            mLeftAvoidanceArea: number;
            mLength: number | null;
            mObstacleDistance: number;
            mObstacleWidth: number;
            mPlannerAgain: boolean;
            mPointOfInterest: never[];
            mPosID: number;
            mRightAvoidanceArea: number;
            mSpeed: number;
            mStartPos: number;
            mWidth: number;
            usesensor: {
                fall_arrest_system: boolean;
                use_bottom_laser: boolean;
                use_front_realsense: boolean;
                use_front_realsense_rgb: boolean;
            };
        }[];
        mLength: number | null;
        mRForbiddenLine: never[];
        mRForbiddenLineID: number;
        mRoadID: number;
        mRoadName: string;
        mStartPosition: { x: any; y: any; z: number; }
        | { x: any; y: any; z: number; };
    }[];
    mSceneMap: MSceneMap;
    mapRotateAngle: number;
};

export interface MSceneMap {
    mGridMsg: MGridMsg
    mMapAttr: MMapAttr
    version: string
}

export interface MMapAttr {
    mMapArea: number
    mMapCrossNum: number
    mMapFloor: number
    mMapLandMark: number
    mMapLaneNum: number
    mMapLength: number
    mMapName: string
    mMapOrigin: MMapOrigin
    mMapResolution: number
    mMapVerion: string
    mMapWidth: number
}

export interface MMapOrigin {
    x: number
    y: number
    z: number
}

export interface MGridMsg {
    data: number
    header: Header
    info: Info
}

export interface Header {
    frame_id: string
    seq: number
    stamp: Stamp
}

export interface Stamp {
    nsecs: number
    secs: number
}

export interface Info {
    height: number
    map_load_time: MapLoadTime
    origin: Origin
    resolution: number
    width: number
}

export interface MapLoadTime {
    nsecs: number
    secs: number
}

export interface Origin {
    orientation: Orientation
    position: Position
}

export interface Orientation {
    w: number
    x: number
    y: number
    z: number
}

export interface Position {
    x: number
    y: number
    z: number
}

export type FieldType = {
    srcPoint_1X: number;
    srcPoint_1Y: number;
    srcPoint_2X: number;
    srcPoint_2Y: number;
    srcPoint_3X: number;
    srcPoint_3Y: number;

    changePoint_1X: number;
    changePoint_1Y: number;
    changePoint_2X: number;
    changePoint_2Y: number;
    changePoint_3X: number;
    changePoint_3Y: number;

    angle: number;
};

export type Coords = {
    id: number; x: number; y: number
};

export type Points = {
    gates: laneMark[],
    targetGatesPoints: laneMark[],
    turningGatesPoints: laneMark[],
    cacheGatesPoints: laneMark[],
    pallets: laneMark[],
    targetPalletsPoints: laneMark[],
    turningPalletsPoints: laneMark[],
    cachePalletsPoints: laneMark[],
    restPoints: laneMark[],
    targetRestPoints: laneMark[],
    turningRestPoints: laneMark[],
    chargePoints: laneMark[],
    targetChargePoints: laneMark[],
    turningChargePoints: laneMark[],
    locationPoints: laneMark[],
};

export type TransformControlsMode = "translate" | "rotate" | "scale";