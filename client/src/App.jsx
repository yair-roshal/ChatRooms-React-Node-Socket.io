import { NameForm } from 'components/NameForm'
import { RoomsList } from 'components/RoomsList'
import { RoomPage } from 'components/RoomPage'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact={true} element={<NameForm />} />
                <Route path='/rooms' element={<RoomsList />} />
                <Route path='/rooms/:roomId' element={<RoomPage />} />
            </Routes>
        </BrowserRouter>
    )
}
