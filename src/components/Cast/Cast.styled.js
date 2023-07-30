import styled from 'styled-components';


export const CastBox= styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 20px;
`;

export const CastCard = styled.li`
 max-width: 200px;
    background-color: #f0f8ff;
    border-radius: 10px;
    padding: 10px;
  }
`;

export const CastImg = styled.img`
 border-radius: 10px;
    margin-bottom: 10px;
`;

export const CastDescription = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const CastText = styled.p`
  font-weight: 500;
    margin-bottom: 7px;
    font-size: 16px;
    list-style: 1.625;
`;