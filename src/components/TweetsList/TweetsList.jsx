import TweetsItem from "components/TweetsItem/TweetsItem"
import { UsersList } from "./TweetsList.styled"
const TweetsList = ({users, onClick}) => {
 return <UsersList>
    {users.map(user => {
        return <TweetsItem key={user.id} onClick={onClick} user={user}/>
    })}
 </UsersList>
}

export default TweetsList