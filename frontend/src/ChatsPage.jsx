import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
                projectId='5d1c6700-93e6-4027-b175-5986aeeb5f4c'
                username = {props.user.username}
                secret = {props.user.secret}
                style={{height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage
