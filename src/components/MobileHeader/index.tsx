import React from 'react'

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles'

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://avatars0.githubusercontent.com/u/32916464" alt="Profile Circle" />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container>
  )
}

export default MobileHeader