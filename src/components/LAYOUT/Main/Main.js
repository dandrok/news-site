import Container from '../../UI/Container'
import Article from './Article'

const Main = ({ data }) => {
  return (
    <>
      <Container>
        {data.map((item) => {
          return (
            <Article
              key={item.id}
              id={item.id}
              name={item.name}
              gender={item.gender}
              image={item.image}
            />
          )
        })}
      </Container>
    </>
  )
}

export default Main
