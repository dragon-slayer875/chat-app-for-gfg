import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
                projectId='e3868a40-3bb9-4766-8434-34f6e73287d2'
                username = {props.user.username}
                secret = {props.user.secret}
                style={{height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage
