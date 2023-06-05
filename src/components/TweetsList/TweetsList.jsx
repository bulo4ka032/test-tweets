import TweetsItem from "components/TweetsItem/TweetsItem"

const TweetsList = ({users, onClick}) => {
 return <ul>
    {users.map(user => {
        return <TweetsItem key={user.id} onClick={onClick} user={user}/>
    })}
 </ul>
}

export default TweetsList