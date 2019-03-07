import React from 'react'
import { Grid, Cell } from 'react-md'

import RepoCard from './RepoCard'

const RepoList = (props) => {
  return (
    <Grid>
      {
        props.repos && props.repos.map((repo, idx) => {
          return (
            <Cell key={idx} size={6}>
              <RepoCard repo={repo} selectRepo={(e) => props.selectRepo(e, repo)} />
            </Cell>
          )
        })
      }
    </Grid>
  )
}

export default RepoList
