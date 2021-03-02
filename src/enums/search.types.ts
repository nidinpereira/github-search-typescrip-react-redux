import {SuccessPayload} from "../interfaces/SuccessPayload.interface";
import {ErrorPayload} from "../interfaces/ErrorPayload.interface";


export type FetchDataFromApiType = null | string | SuccessPayload | ErrorPayload;
