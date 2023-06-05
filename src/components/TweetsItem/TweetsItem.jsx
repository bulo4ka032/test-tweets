import Vector from 'images/Vector.svg'

const TweetsItem = ({user, onClick}) => {
    const {id, user: name, followers, avatar, tweets, isFollow} = user;
    const roundTweets = Math.round(tweets)
return <li key={id}>
    <img src={Vector} alt="logo" />
    <img src={avatar} alt="avatar" />
    <div>
        <p>{name}</p>
        <p>{roundTweets}{' '}Tweets</p>
        <p>{followers}{' '}Followers</p>
    </div>
    <button onClick={onClick(id)}>{isFollow ? 'Following' : 'Follow'}</button>
</li>
}

export default TweetsItem