import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export function Room({ room }) {
    const { id, name, image, description } = room
    return (
        <>
            <article className='room'>
                <div className='img-container'>
                    <img src={image} alt='chat room' />

                    <Link to={`/rooms/${id}`} className='btn-primary room-link'>
                        Enter to Room
                    </Link>
                </div>
                <p className='room-title'>{name}</p>
                <p className='room-description'>{description}</p>
            </article>
        </>
    )
}

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }),
}
