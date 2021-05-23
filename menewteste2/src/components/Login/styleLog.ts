import styled from 'styled-components';

export const Overlay = styled.div`
    background: var(--background);
    width: 100%;
    height: 100%;

    margin: 0 auto;

    position: fixed;
    top: 0;

    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    visibility: visible;

    opacity: 0.95;
`;

export const LogBox = styled.form`
    background: #DC143C;
    width: 29rem;
    height: 31rem;

    position: relative;

    border: none;
    border-radius: 0.75rem;
    opacity: 100%;

    padding: 1rem;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    img {
        max-width: 5rem;
        margin-top: -3rem;
        margin-bottom: 0.4rem;
        background: white;
    }

    h1 {
        font-family: monospace;
        font-size: 1.7rem;

        color: var(--GreyMenu);

        margin-bottom: 1rem;
        border-bottom: solid 1px var(--GreyMenu);

        -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
    filter: (15px 10px 5px rgba(0,0,0,.5));
    };

    input {
        border: none;
        margin-top: 1rem;
        border-radius: 0.50rem;

        padding: 0.50rem;

        font-size: 1rem;

        -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
         filter: (15px 10px 5px rgba(0,0,0,.5));

     };

`;

export const ChecBox = styled.div`
        border: none;
        margin: 0 auto;
        border-radius: 0.50rem;

        
        font-size: 1rem;

        display: flex;
        align-items: center;
        justify-content: center;

        -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
         filter: (15px 10px 5px rgba(0,0,0,.5));

         input {
             margin-left: -4rem;
             margin-top: 0.4rem;
         }

         label {
             color: var(--GreyMenu);
             -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
         filter: (15px 10px 5px rgba(0,0,0,.5));

         font-weight: 600;

         margin-left: 0.5rem;

         margin-top: 0.4rem;
         };

`;

export const Buttons = styled.div`
    padding: 0.4rem;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    button {
        margin-left: 2.5rem;

        border: none;
        border-radius: 0.25rem;

        background: var(--Button);
        opacity: 0.6;

        padding: 0.16rem;
        width: 6rem;
        height: 1.5rem;

        text-align: center;

        margin-top: 2.2rem;

        cursor: pointer;

        transition: filter 0.2s;

        -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
    filter: (15px 10px 5px rgba(0,0,0,.5));

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const Cancel = styled.div`
    border: 1px solid white;
    border-radius: 0.25rem;

    background: var(--Button);
    opacity: 0.6;

    padding: 0.16rem;
    width: 6rem;
    height: 1.5rem;

    text-align: center;

    margin-top: 1rem;

    transition: filter 0.2s;

    cursor: pointer;

    -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
    filter: (15px 10px 5px rgba(0,0,0,.5));

    &:hover {
        filter: brightness(0.9);
    }

   
`;

export const SemCadastro = styled.div`
    padding: 0.5rem;
    border-top: solid 1px var(--GreyMenu);

    margin-top: 2rem;
    margin-bottom: -2rem;

    cursor: pointer;

    color: white;

   
    &:hover {
        transition: filter 0.2s;
        -webkit-transform: scale(1.2);
         transform: scale(1.2);
    }
`