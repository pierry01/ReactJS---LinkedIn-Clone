import React from 'react'
import { Container } from './styles'

import Panel from '../../Panel'
import Skeleton from '../../Skeleton'

const LoadingProfilePanel: React.FC = () => {
  return (
    <div>
      <Container>
        <Panel className="no-shadow">
          <Skeleton className="bg-skeleton white" />
          
          <span>
            <Skeleton className="avatar-skeleton" />
            <Skeleton className="row-skeleton" />
            <Skeleton className="row-skeleton" />
          </span>
        </Panel>
      </Container>
    </div>
  )
}

export default LoadingProfilePanel