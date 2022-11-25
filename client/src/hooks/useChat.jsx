import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
import { nanoid } from 'nanoid'
import { useLocalStorage, useBeforeUnload } from 'hooks'

const SERVER_URL = 'http://localhost:5000'

export const useChat = (roomId) => {
    const [users, setUsers] = useState([])
    const [messages, setMessages] = useState([])

    const [userId] = useLocalStorage('userId', nanoid(8))
    const [username] = useLocalStorage('username')

    const socketRef = useRef(null)

    useEffect(() => {
        socketRef.current = io(SERVER_URL, {
            query: { roomId },
        })

        socketRef.current.emit('user:add', { username, userId, roomId })

        socketRef.current.on('users', (users) => {
            setUsers(users)
        })

        socketRef.current.emit('message:get')

        socketRef.current.on('messages', (messages) => {
            const newMessages = []
            messages.map((msg) => msg.roomId === roomId && newMessages.push(msg))
            setMessages(newMessages)
        })

        return () => {
            socketRef.current.disconnect()
        }
    }, [roomId, userId, username])

    const sendMessage = ({ messageText, senderName }) => {
        socketRef.current.emit('message:add', {
            userId,
            messageText,
            senderName,
        })
    }

    useBeforeUnload(() => {
        socketRef.current.emit('user:leave', userId)
    })

    return { users, messages, sendMessage }
}
