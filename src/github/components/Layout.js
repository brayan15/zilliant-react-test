import React, { Component } from 'react'
import { CircularProgress, Snackbar } from 'react-md'
import { getUser } from '../actions/GetUser';
import { hideMessageError } from '../actions/GetRepos';
import TopBar from './TopBar'
import Sidebar from './Sidebar'
import { connect } from "react-redux";

class Layout extends Component {

  componentDidMount() {
    this.props.getUser()
  }


  render() {
    const { isFetchingUser, children, errorMsg, user, hideMessageError } = this.props
    const toasts = errorMsg ? [{ text: errorMsg }] :[]
    return (
      <div>
        {
          isFetchingUser
            ? <CircularProgress id='main-progress' />
            : <div>
              <TopBar user={user}/>
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

const mapStateToProps = state => {
  return { 
    user: state.GetUserReducer.user,
    errorMsg: state.GetReposReducer.errorMsg,
    isFetchingUser: state.GetUserReducer.isFetchingUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
    hideMessageError: () => dispatch(hideMessageError(null))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
