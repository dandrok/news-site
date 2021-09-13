import styled from 'styled-components'

const ContainerArticle = styled.article`
  display: flex;
  margin: 1rem 15px;
  flex-flow: row wrap;
  gap: 30px;
`
const Title = styled.h1`
  margin: 2rem 15px;
`

const Container = ({ children }) => {
  return (
    <>
      <Title>Latest News</Title>
      <ContainerArticle>{children}</ContainerArticle>
    </>
  )
}

export default Container
