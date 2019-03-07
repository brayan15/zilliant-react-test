import React, { Component } from 'react'
import { CircularProgress } from 'react-md'

import { connect } from "react-redux"
import { getRepos } from '../actions/GetRepos';
import RepoList from './RepoList'
import RepoDetail from './RepoDetail'

class Repos extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedRepo: null,
    }

    this.selectRepo = this.selectRepo.bind(this);
    this.unSelectRepo = this.unSelectRepo.bind(this);
  }

  componentDidMount() {
    this.props.getRepos()
  }

  selectRepo (e, repo) {
    const selectedRepo = this.props.repos.find(repositore => {
      return repositore.id === repo.id
    })
    this.setState({ selectedRepo:selectedRepo })
  }

  unSelectRepo() {
    this.setState({ selectedRepo:null })
  }

  render() {
    const {
      isFetchingRepos,
      repos,
    } = this.props
    const {
      selectedRepo
    } = this.state

    return (
      isFetchingRepos
        ? <CircularProgress id='repos-progress' />
        : selectedRepo
          ? <RepoDetail repo={selectedRepo} unSelectRepo={this.unSelectRepo} />
          : <RepoList repos={repos} selectRepo={this.selectRepo} />
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
