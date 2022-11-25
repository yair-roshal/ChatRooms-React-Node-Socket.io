import loadingGif from '../images/gif/loading-arrow.gif'

export function Loading() {
    return (
        <div className='loading'>
            <h4>rooms data loading...</h4>
            <img src={loadingGif} alt='' />
        </div>
    )
}
