import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    p {
        align-self: flex-end;
        color: #7a1a1a;
        font-size: 0.8rem;
    }

`;

export const Container = styled.div`
    width: 300px;
    border-radius: 4px;
    border:#bbb solid 1px;
    padding: 10px;
    color: #646464;
    background: #FFF;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    & + div {
        margin-top: 8px;
    }
    input {
        background: transparent;
        border:0;
        flex: 1;
        width: 100%;

    }
    svg {
        margin-right: 16px;
    }
`;