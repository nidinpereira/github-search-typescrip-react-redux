import React from "react";
import {ApiError} from "../../interfaces/ApiError.interface";

export function ErrorPage(props: { error: ApiError }): JSX.Element {
    return  (
      <div className={props.error.message ?'error-page' : 'hide'}>
        <h1>Oops, Something went wrong.</h1>
        <p>
          it was working fine on our machine :P.
        </p>
      </div>
    );
}
