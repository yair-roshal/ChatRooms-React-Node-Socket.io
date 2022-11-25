const { nanoid } = require('nanoid')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db/messages.json')
const db = low(adapter)

module.exports = (io, socket) => {
    const getMessages = () => {
        const messages = db.get('messages').value()
        io.in(socket.roomId).emit('messages', messages)
    }

    const addMessage = (message) => {
        db.get('messages')
            .push({
                messageId: nanoid(8),
                createdAt: new Date(),
                roomId: socket.roomId,
                ...message,
            })
            .write()

        getMessages()
    }

    socket.on('message:get', getMessages)
    socket.on('message:add', addMessage)
}
