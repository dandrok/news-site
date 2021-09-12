import styled from 'styled-components'
import StyledButton from '../../UI/StyledButton'

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 15px;
  margin-top: 32px;
`

const Logo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-family: 'Playfair Display', serif;
`

const LogoBox = styled.span`
  background: #121221;
  border-radius: 4px;
  color: white;
  padding: 8px;
`
const SearchForm = styled.form`
  display: flex;
  gap: 8px;
  align-content: center;
`

const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid #121221 1px;
  border-radius: 4px;
  background: #121221;
  width: 46px;
`

const SearchInput = styled.input`
  border: solid #121221 1px;
`

const Header = () => {
  return (
    <>
      <header>
        <Container>
          <Logo>
            <LogoBox>News</LogoBox>
            <span>Portal</span>
          </Logo>
          <SearchForm>
            <SearchInput type='text' placeholder='Search..' name='search' />
            <SearchBtn type='submit'>
              <svg
                width='29'
                height='30'
                viewBox='0 0 29 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M16.1415 7.5623C18.5924 10.0132 18.5924 13.9868 16.1415 16.4377C13.6907 18.8886 9.71701 18.8886 7.26613 16.4377C4.81526 13.9868 4.81526 10.0132 7.26613 7.5623C9.71701 5.11142 13.6907 5.11142 16.1415 7.5623ZM18.2195 17.1039C20.77 13.8563 20.5488 9.1411 17.5558 6.14808C14.3238 2.91616 9.08384 2.91616 5.85192 6.14808C2.61999 9.38001 2.61999 14.62 5.85192 17.8519C8.84494 20.8449 13.5601 21.0662 16.8077 18.5156C16.8209 18.5304 16.8345 18.5449 16.8486 18.559L21.5302 23.2406C21.9207 23.6311 22.5539 23.6311 22.9444 23.2406C23.3349 22.85 23.3349 22.2169 22.9444 21.8263L18.2629 17.1448C18.2487 17.1307 18.2342 17.117 18.2195 17.1039Z'
                  fill='#fff'
                />
              </svg>
            </SearchBtn>
          </SearchForm>
        </Container>
      </header>
    </>
  )
}

export default Header
