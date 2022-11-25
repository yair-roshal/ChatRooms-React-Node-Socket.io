import { useState } from 'react'

export const MessageForm = ({ username, sendMessage }) => {
    const [text, setText] = useState('')

    const handleChangeText = (e) => {
        setText(e.target.value)
    }

    const handleSendMessage = (e) => {
        e.preventDefault()
        const trimmed = text.trim()
        if (trimmed) {
            sendMessage({ messageText: text, senderName: username })
            setText('')
        }
    }

    return (
        <>
            <form onSubmit={handleSendMessage}>
                <input
                    className='inputInner'
                    value={text}
                    onChange={handleChangeText}
                    type='text'
                    placeholder='Type your message here'
                />
                <button type='submit' className='btn-send'>
                    SEND
                </button>
            </form>
        </>
    )
}
