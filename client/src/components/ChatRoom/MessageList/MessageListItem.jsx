import TimeAgo from 'react-timeago'
import Card from '@mui/material/Card'
import ListItem from '@mui/material/ListItem'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

export const MessageListItem = ({ msg }) => {
    const { messageText, senderName, createdAt } = msg
    return (
        <ListItem>
            <Card sx={{ width: '95%' }}>
                <CardHeader
                    title={senderName}
                    subheader={<TimeAgo date={createdAt} />}
                ></CardHeader>

                <Card>
                    <CardContent>{messageText}</CardContent>
                </Card>
            </Card>
        </ListItem>
    )
}
