import React from 'react'
import { 
  Container, Wrapper, LinkedInIcon, SearchInput, HomeIcon, 
  NotificationsIcon, ProfileCircle, CaretDownIcon 
} from './styles'

const DesktopHeader: React.FC = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <div className="left">
            <LinkedInIcon />
            <SearchInput placeholder="Pesquisar" />
          </div>
          
          <div className="right">
            <nav>
              <button className="active">
                <HomeIcon />
                <span>Início</span>
              </button>
              
              <button>
                <NotificationsIcon />
                <span>Notificações</span>
              </button>
              
              <button>
                <ProfileCircle src="https://avatars0.githubusercontent.com/u/32916464" />
                <span>Eu <CaretDownIcon /></span>
              </button>
            </nav>
          </div>
        </Wrapper>
      </Container>
    </div>
  )
}

export default DesktopHeader