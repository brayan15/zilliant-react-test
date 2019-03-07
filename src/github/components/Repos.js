import React, { Component } from 'react'
import { CircularProgress } from 'react-md'
import { connect } from "react-redux"

import { getRepos, selectRepo, unSelectRepo } from '../actions/GetRepos'
import RepoList from './RepoList'
import RepoDetail from './RepoDetail'

class Repos extends Component {
  componentDidMount() {

    const { getRepos, lastSuccessfullReposFetch } = this.props
  
    const now = new Date();
    if (!lastSuccessfullReposFetch) {
      getRepos()
    } else if ((now - lastSuccessfullReposFetch) / 1000 > 300) {
      getRepos()
    }
  }

  render() {
    const {
      isFetchingRepos,
      repos,
      selectRepo,
      unSelectRepo,
      selectedRepo
    } = this.props

    return (
      isFetchingRepos
        ? <CircularProgress id='repos-progress' />
        : selectedRepo
          ? <RepoDetail repo={selectedRepo} unSelectRepo={unSelectRepo} />
          : <RepoList repos={repos} selectRepo={selectRepo} />
    )
  }
}

const getReposReducerFromState = (state, property) => state[property]

const mapStateToProps = state => {
  return { 
    repos: getReposReducerFromState(state.GetReposReducer, 'repos'),
    errorMsg: getReposReducerFromState(state.GetReposReducer, 'errorMsg'),
    isFetchingRepos: getReposReducerFromState(state.GetReposReducer, 'isFetchingRepos'),
    selectedRepo: getReposReducerFromState(state.GetReposReducer, 'selectedRepo'),
    lastSuccessfullReposFetch: getReposReducerFromState(state.GetReposReducer, 'lastSuccessfullReposFetch')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRepos: () => dispatch(getRepos()),
    selectRepo: (e, repo) => dispatch(selectRepo(repo.id)),
    unSelectRepo: (e, repo) => dispatch(unSelectRepo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
