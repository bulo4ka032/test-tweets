import { Button } from "@mui/material";
import { Container } from "./LoadMore.styled";

const LoadMore = ({onClick, loading}) => {
    return <Container><Button onClick={onClick} disabled={loading}>{loading ? 'Loading...' : 'Load More'}</Button></Container>
}

export default LoadMore;
