export function EmptyResult(props: { showEmptyResultPage: boolean }) {
    return (
        <div className={props.showEmptyResultPage ? '' : 'hide'}>
            <div>
                <img className='no-result' src="empty-result.png" alt="no result"/>
                <h1 className='emptySearchText'>no results found! try entering another query</h1>
            </div>
        </div>
    );
}
