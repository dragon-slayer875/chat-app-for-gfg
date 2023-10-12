import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
                projectId='9f8d32c0-24ef-44d3-9200-984a3bef16ac'
                username = {props.user.username}
                secret = {props.user.secret}
                style={{height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage