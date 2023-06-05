import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const Container = styled.div`
display: flex;
justify-content: center;
text-align: center;
`

export const ButtonLoadMore = styled(Button)`
    
    background: #5736A3;
    color: #EBD8FF;

    &:hover, &:focus {
        background: #5736A3;
    color: #EBD8FF;
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    }
`