import styled from 'styled-components';

export const View = styled.div`
    background-color: #EFF6FE;
    border-radius: 10px;
    width: 500px;
    height: 500px;
    box-shadow: 0px 0px 4px rgba( 0, 0, 0, 0.3); /* X Y Blur Spread */ 
    /* display: flex;
    align-items: center;
    justify-content: center; */
`;

export const NewTask = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    width: 300px;
    height: 25px;
    background-color: #EFF6FE;
    border-radius: 20px;
    border: 1px solid #000;
    padding-left: 10px;
    margin: 10px;
    font-size: 16px;
`;

export const AddButton = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 12.5px;
    border: 1px solid #000;
    background-color: #EFF6FE;
`;

export const AllTasks = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;

export const Task = styled.div`
    display: flex;
    align-items:center;
`;

export const InputTask = styled.input`

`;

export const TextTask = styled.text``;

export const Remove = styled.button`
    border:none;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: row;
    margin: 0;
    padding:0;
    background-color: #EFF6FE;
`;

