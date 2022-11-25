import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLocalStorage } from '../hooks'

export function NameForm() {
    const [username, setUsername] = useLocalStorage('username', 'John')
    const linkRef = useRef(null)

    const handleChangeName = (e) => {
        setUsername(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        linkRef.current.click()
    }

    const trimmed = username.trim()

    return (
        <>
            <main className='join-main'>
                <form onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <label htmlFor='username'>Your name :</label>
                        <input
                            type='text'
                            name='username'
                            id='username'
                            placeholder='Please enter your name...'
                            required
                            value={username}
                            onChange={handleChangeName}
                        />
                    </div>

                    {trimmed && (
                        <Link as={Link} to={`/rooms`} ref={linkRef} className='btn-primary'>
                            ENTER
                        </Link>
                    )}
                </form>
            </main>
        </>
    )
}
