import { Link, useParams } from 'react-router-dom'
import { roomsAll } from 'data/rooms_db'
import { useLocalStorage, useChat } from 'hooks'
import { MessageForm } from 'components/ChatRoom/MessageForm/MessageForm'
import { MessageList } from 'components/ChatRoom/MessageList/MessageList'

export function RoomPage() {
    const [username] = useLocalStorage('username')
    const { roomId } = useParams()
    const { image, name } = roomsAll[roomId - 1]
    const { users, messages, sendMessage } = useChat(roomId)

    return (
        <>
            <div className='wrapper'>
                <div className='column-1'>
                    <div className='room'>
                        <p className='room-title'>{name}</p>
                        <div className='img-container2'>
                            <img src={image} alt='chat room' />
                        </div>
                    </div>
                    <div>
                        <p className='title'>Users in this room : </p>
                        {Object.values(users).map(
                            (userObject, index) =>
                                userObject.roomId === roomId &&
                                userObject.online && <p key={index}>{userObject.username}</p>,
                        )}
                    </div>
                    <Link to={`/rooms`} className='btn-primary'>
                        Exit
                    </Link>
                </div>
                <div className='column-2'>
                    <h2 className='text-center'>Chat</h2>
                    <MessageList messages={messages} />
                    <MessageForm username={username} sendMessage={sendMessage} />
                </div>
            </div>
        </>
    )
}
