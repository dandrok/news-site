import styled from 'styled-components'

const Figure = styled.figure`
  flex: 100 25 270px;
  /* background-color: violet; */
  font-family: 'Playfair Display', serif;
  margin-bottom: 30px;
`

const Title = styled.figcaption`
  margin-top: 16px;
  margin-bottom: 24px;
`

const UnderTitle = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;
  font-family: 'Roboto', sans-serif;
  opacity: 60%;
`
const Text = styled.p``

const Article = () => {
  return (
    <>
      <Figure>
        <img
          src='https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
          alt='placeholder img'
          style={{ width: '100%', borderRadius: '8px' }}
        />
        <Title>
          <h2>News Title Lorem Impsum Dolor Sit Amet</h2>
        </Title>
        <UnderTitle>
          <Text>1 Hour Ago</Text>
          <Text>CNN Indonesia</Text>
          <Text></Text>
        </UnderTitle>
      </Figure>
    </>
  )
}

export default Article
