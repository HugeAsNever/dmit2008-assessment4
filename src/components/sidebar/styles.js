import styled from "styled-components";


const SideBarStyles = styled.div `
    width: 25rem;
    color: #546E7A;
    padding: 3rem;
    margin-top: 1rem;
    border-right: 1px solid;
    box-shadow:  5px 0 2px -2px grey;
`;

const SideBarTitle = styled.h1 `
    font-size: 1.5rem;
    
`;

const SideBarButton  = styled.button`
  border:none;
  background-color: transparent;
  font-size: 1.3rem;
`;

const SideBarItems = styled.ul`
    align-items:center;
    margin: 2rem 1rem;
`;

const SideBarItem = styled.li`
    a {
        font-size: 1.3rem;
        margin-left: 0.4rem;
        color: #546E7A;
    }
`;


export { SideBarStyles, SideBarTitle, SideBarButton, SideBarItems, SideBarItem };