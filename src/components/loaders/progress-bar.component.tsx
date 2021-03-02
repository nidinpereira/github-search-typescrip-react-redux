import "./progress-bar.component.scss";

export function ProgressBar(props: { showProgressBar: boolean; }): JSX.Element {
    return <div className={ props.showProgressBar ? 'progressBar' : 'hide'}>
        <h1>Loading</h1>
        <svg className="spinner" x="0px" y="0px" viewBox="0 0 150 150">
            <circle className="spinnerInner" cx="75" cy="75" r="60"/>
        </svg>
    </div>

}
