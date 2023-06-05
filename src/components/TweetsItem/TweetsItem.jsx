import Vector from 'images/Vector.svg';
import main from 'images/main.png';
import {
  UserItem,
  Logo,
  Avatar,
  Container,
  Name,
  DescrT,
  DescrF,
  Button,
  Border,
  Root,
  MainImg
} from './TweetsItem.styled';

const TweetsItem = ({ user, onClick }) => {
  const { id, user: name, followers, avatar, tweets, isFollow } = user;
  const roundTweets = Math.round(tweets);
  return (
    <UserItem key={id}>
      <Logo src={Vector} alt="logo" width="76" height="72" />
      <MainImg src={main} alt="decor" width="308" height="168" />
      <Root>
      <Border>
            <Avatar src={avatar} alt="avatar" width="62" height="62" />
      </Border></Root>
      <Container>
        <Name>{name}</Name>
        <DescrT>{roundTweets} Tweets</DescrT>
        <DescrF>{followers} Followers</DescrF>
      </Container>
      <Button data-follow={isFollow} onClick={() => onClick(id)}>
        {isFollow ? 'Following' : 'Follow'}
      </Button>
    </UserItem>
  );
};

export default TweetsItem;
