import styled from 'styled-components';

export const Container = styled.header`
 background: var(--backgroundMenus);

 margin: 0 auto;


display: flex;
align-items: center;
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 1rem 1rem 0.75rem;


    display: flex;
    align-items: center;

    justify-content: space-between;

img {
   max-width: 5rem;
   max-height: 5rem;
   background: white;

   margin-top: 0.50rem;
};

button {
    font-size: 1rem;
    border: 0;
    border-radius: 0.25rem;
    padding: 0 2rem;
    height: 2rem;

    margin: 1rem;

   
    background: var(--Button);

    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
}

h1 {
    color: aquamarine;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    margin: 0 6rem;
}
`;
