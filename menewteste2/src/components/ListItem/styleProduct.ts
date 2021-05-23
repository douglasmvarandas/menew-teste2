import styled from 'styled-components';

export const Item = styled.div`
    background: var(--Button);
    margin: 1rem 0;
    border-radius: 0.25rem;

    display: flex;

    align-items: center;
    justify-content: space-between;

    padding: 1rem;
    flex-direction: row;
    overflow-x: scroll;
`;
export const Content = styled.div`
    max-width: 24rem;
    padding: 0.75rem;
    background: #FFF0F5;
    border-radius: 0.50rem;

    display: flex;
    flex-direction: column;

    margin-left: 1rem;

    align-items: center;

    text-align: center;

    cursor: pointer;


    img {
        max-width: 20rem;
        border-radius: 2rem;

        margin: 0 auto;
    }
`;