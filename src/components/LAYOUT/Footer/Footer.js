import styled from 'styled-components'

const Foot = styled.footer`
  width: 100%;
  height: 50px;
  border-top: solid gray 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = () => {
  return (
    <>
      <Foot>
        <p style={{ fontSize: '12px', opacity: '0.6' }}>
          {new Date().getFullYear()}
        </p>
      </Foot>
    </>
  )
}

export default Footer
