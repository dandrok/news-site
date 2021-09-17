import styled from 'styled-components'

const Figure = styled.figure`
  flex: 100 25 270px;
  /* background-color: violet; */
  font-family: 'Playfair Display', serif;
  margin-bottom: 30px;
  /* padding: 0;
  transition: all 0.5s;

  &:hover {
    background-color: rgba(158, 158, 158, 0.177);
    border-radius: 8px;
    border: solid 1px rgba(158, 158, 158, 1);
    padding: 1rem;
  } */
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

const Article = ({ key, id, name, gender, image }) => {
  return (
    <>
      <Figure>
        <img
          src={image}
          alt='placeholder img'
          style={{ width: '100%', borderRadius: '8px' }}
        />
        <Title>
          <h2>{name}</h2>
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
