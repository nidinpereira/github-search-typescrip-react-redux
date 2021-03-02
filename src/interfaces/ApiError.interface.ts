
/**
 * apiError, is an interface which describes the object which will be sent to reduced in case we get an API error
 */
export interface ApiError {
    code: number;
    message: string;
}
