import React, { Component } from 'react'
import { CircularProgress } from 'react-md'

import { connect } from "react-redux"
import { getRepos } from '../actions/GetRepos';
import RepoList from './RepoList'
import RepoDetail from './RepoDetail'

class Repos extends Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.props.getRepos()
    console.log(this.props)
    // const { updateRepos, lastSuccessfulReposFetch } = this.props

    // const now = new Date()
    // if (!lastSuccessfulReposFetch) {
    //   updateRepos()
    // } else if ((now - lastSuccessfulReposFetch) / 1000 > 300) {
    //   updateRepos()
    // }

  }

  onClick (e, repo) {
    // Call function selectRepo(repo.id)
    console.log(repo.id)
  }

  render() {
    const {
      isFetchingRepos,
      repos,
      selectedRepo,
      selectRepo,
      unselectRepo
    } = this.props
    return (
      isFetchingRepos
        ? <CircularProgress id='repos-progress' />
        : selectedRepo
          ? <RepoDetail repo={selectedRepo} unselectRepo={unselectRepo} />
          : <RepoList repos={repos} selectRepo={selectRepo} onChange={this.onClick} />
    )
  }
}

const mapStateToProps = state => {
  return { 
    repos: state.GetReposReducer.repos,
    errorMsg: state.GetReposReducer.errorMsg,
    isFetchingRepos: state.GetReposReducer.isFetchingRepos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRepos: () => dispatch(getRepos())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Repos);
