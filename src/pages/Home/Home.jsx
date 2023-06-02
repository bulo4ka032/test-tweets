import main from 'images/main.png';
import { Container, Descr, Image, Title } from './Home.styled';

const Home = () => {
  return (
    <Container>
        <Title>Welcome, dear Friend!</Title>
      <Image src={main} alt="chat" />
      <Descr>
        This app is a unique social media application that puts the spotlight
        on user profiles and the number of twits they have posted. It's a
        platform that allows users to discover and connect with others based on
        their profile information and twit activity.
      </Descr>
    </Container>
  );
};

export default Home;
