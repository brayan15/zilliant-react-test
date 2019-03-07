import React, { Component } from 'react'
import { CircularProgress, Snackbar } from 'react-md'
import { connect } from "react-redux"

import { getUser } from '../actions/GetUser'
import { hideMessageError } from '../actions/GetRepos'
import { refreshDatas } from '../actions/Refresh'
import TopBar from './TopBar'
import Sidebar from './Sidebar'

class Layout extends Component {

  componentDidMount() {
    const { getUser, lastSuccessfullUserFetch } = this.props
    const now = new Date()
    if (!lastSuccessfullUserFetch) {
      getUser()
    } else if ((now - lastSuccessfullUserFetch) / 1000 > 300) {
      getUser()
    }
  }


  render() {
    const { isFetchingUser, children, errorMsg, user, hideMessageError, refreshDatas } = this.props
    const toasts = errorMsg ? [{ text: errorMsg }] :[]
    return (
      <div>
        {
          isFetchingUser
            ? <CircularProgress id='main-progress' />
            : <div>
              <TopBar user={user} updateAll={refreshDatas}/>
              <div className='main-container'>
                <Sidebar  user={user}/>
                {children}
              </div>
            </div>
        }
        <Snackbar
          id='error-snackbar'
          toasts={toasts}
          onDismiss={hideMessageError}
        />
      </div>
    )
  }
}

const getUserReducerFromState = (state, property) => state[property]

const mapStateToProps = state => {
  return { 
    user: getUserReducerFromState(state.GetUserReducer, 'user'),
    errorMsg: getUserReducerFromState(state.GetReposReducer, 'errorMsg'),
    isFetchingUser: getUserReducerFromState(state.GetUserReducer, 'isFetchingUser'),
    lastSuccessfullUserFetch: getUserReducerFromState(state.GetUserReducer, 'lastSuccessfullUserFetch')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
    hideMessageError: () => dispatch(hideMessageError(null)),
    refreshDatas: () => dispatch(refreshDatas())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
