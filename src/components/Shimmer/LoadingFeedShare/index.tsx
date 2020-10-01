import React from 'react'
import { Container } from './styles'

import Panel from '../../Panel'
import Skeleton from '../../Skeleton'

const LoadingFeedShare: React.FC = () => {
  return (
    <div>
      <Container>
        <Panel className="no-shadow">
          <Skeleton className="row-skeleton" />
          <Skeleton className="row-skeleton" />
        </Panel>
      </Container>
    </div>
  )
}

export default LoadingFeedShare
