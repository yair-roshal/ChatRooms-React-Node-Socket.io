import { Room } from './Room'
import { useState, useEffect } from 'react'
import { Loading } from 'components/Loading'
import { roomsAll } from 'data/rooms_db'

export function RoomsList() {
    const [rooms, setRooms] = useState(roomsAll)

    useEffect(() => {
        setRooms(rooms)
    }, [rooms])

    if (!rooms) {
        return <Loading />
    }

    return (
        <section className='roomsList'>
            <div className='roomsList-center'>
                {rooms.map((item) => {
                    return <Room key={item.id} room={item} />
                })}
            </div>
        </section>
    )
}
