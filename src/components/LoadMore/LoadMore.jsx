import { Button } from "@mui/material";
const LoadMore = ({onClick, loading}) => {
    return <Button onClick={onClick} disabled={loading}>{loading ? 'Loading...' : 'Load More'}</Button>
}

export default LoadMore;
