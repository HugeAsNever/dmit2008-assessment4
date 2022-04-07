import styled from "styled-components";

const PanelStyles = styled.div `
    width: calc(100% - 25rem);
    color: #546E7A;
    padding: 3rem;
    margin-top: 1rem;
    min-height: 90vh;
    background-color: #e2e2e5;
    margin-left:1rem;
    margin-right:1rem;

    
`;

const PanelButton  = styled.button`
  border:none;
  background-color: transparent;
  font-size: 1.3rem;
`;

const PanelTitle = styled.div `

    
    
    h2{
        font-size: 2.5rem;
        font-weight: bold;
    
    }
    
`;

const PanelBarItems = styled.ul`
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding-left:0.5rem;
    min-height:4rem; 

    h3{
        font-size: 1.5rem;
        color: #546E7A;
    }
`;

const PanelBarItem = styled.li`
    
`;

const PanelBody = styled.div`
    margin: 2rem 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    
`;




export { PanelStyles, PanelButton, PanelTitle, PanelBarItems, PanelBarItem, PanelBody };