import styled from 'styled-components';
import logo from './../../logo.png';

const AppBarStyles   = styled.nav`
    box-shadow:  0 0 2px 1px grey;
    padding: 0.5rem 1rem;
    height: 6rem;
    background-color: #E8EAF6;
     
`;
const AppBarGroup = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
`;

const AppBarGroupItem = styled.div`
    margin: 0 2rem;
`;


const AppBarItems = styled.ul`
    display:flex;
    justify-content: space-between;
    align-items:center;
    
`;

const AppBarItem = styled.li`
    margin: 0.5rem;
`;

const CompanyLogo = styled.img.attrs({src: `${logo}`})`
    max-height: 5rem;
    
`;

export {AppBarStyles, AppBarItem, AppBarItems, AppBarGroup, AppBarGroupItem, CompanyLogo};