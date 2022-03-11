export interface Caruselinfo{
    file:any,
    absalute_url:string,
}

export interface Caruselstate{
    data:Caruselinfo
}

export enum CaruselActionTypes {
    CARUSEL_ADD_INFO= 'CARUSEL_ADD_INFO',
}


interface CaruselAddInfoAction {
    type: CaruselActionTypes.CARUSEL_ADD_INFO;
    payload: Caruselinfo;
}

export type CaruselAction =
CaruselAddInfoAction