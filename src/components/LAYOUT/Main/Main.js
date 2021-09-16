import Container from '../../UI/Container'
import Article from './Article'

const Main = ({ data }) => {
  return (
    <>
      <Container>
        {data.map((item) => {
          ;<Article
            key={item.id}
            id={item.id}
            status={item.status}
            gender={item.gender}
            image={item.image}
          />
        })}
      </Container>
    </>
  )
}

export default Main
