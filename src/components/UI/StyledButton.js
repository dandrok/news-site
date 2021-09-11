import styled from 'styled-components'

const StyledButton = styled.button`
  background: blueviolet;
  display: flex;
  border: gray;
  border-radius: 0;
  padding: 1rem 1.25rem;
  color: whitesmoke;
  transition: opacity 0.5s;
  transition: outline outline-offset 1s;
  transform: scale(1);

  :hover {
    opacity: 60%;
    /* transform: scale(0.9); */
  }
  :active {
    outline-offset: 3px;
    outline: 3px dashed blueviolet;
    background-color: black;
  }
`
export default StyledButton
