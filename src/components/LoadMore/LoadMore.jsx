import { Container, ButtonLoadMore } from './LoadMore.styled';
const LoadMore = ({ onClick, loading }) => {
  return (
    <Container>
      <ButtonLoadMore onClick={onClick} disabled={loading}>
        {loading ? 'Loading...' : 'Load More'}
      </ButtonLoadMore>
    </Container>
  );
};

export default LoadMore;
