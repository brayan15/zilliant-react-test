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
              {/* <RepoCard repo={repo} selectRepo={selectRepo} /> */}
              <RepoCard repo={repo} onChangeEvent={(e) => props.onChange(e, repo)} />
            </Cell>
          )
        })
      }
    </Grid>
  )
}

export default RepoList
