import styled from 'styled-components';

export const MovieList = styled.ul`
display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

export const MovieItem = styled.li`
 max-width: 300px;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover{transform: scale(1.02)};
    // &:hover {cursor: zoom-in};
`;

export const ListTitle = styled.h2`
 font-weight: 500;
    font-size: 20px;
    color: #000;
    text-decoration: none;
    padding: 8px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 10px;
    
    &:hover{color: #0000ff}
`;
export const Img = styled.img`
&:hover {cursor: zoom-in};
`;