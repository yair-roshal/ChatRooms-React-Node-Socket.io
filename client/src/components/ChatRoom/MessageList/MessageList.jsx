import { useRef, useEffect } from 'react'
import { MessageListItem } from './MessageListItem'
import List from '@mui/material/List'
import { Loading } from 'components/Loading'

const listStyles = {
    height: '70vh',
    border: '1px solid rgba(0,0,0,.4)',
    borderRadius: '4px',
    overflow: 'auto',
}

export const MessageList = ({ messages }) => {
    const messagesEndRef = useRef(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth',
        })
    }, [messages])

    if (!messages) {
        return <Loading />
    }

    return (
        <>
            <List sx={{ bgcolor: '#ececec' }} style={listStyles}>
                {messages.map((msg) => (
                    <MessageListItem key={msg.messageId} msg={msg} />
                ))}
                <span ref={messagesEndRef}></span>
            </List>
        </>
    )
}
