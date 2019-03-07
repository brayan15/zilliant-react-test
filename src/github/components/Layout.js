import React, { Component } from 'react'
import { CircularProgress, Snackbar } from 'react-md'
import { getUser } from '../actions/GetUser';
import { getRepos } from '../actions/GetRepos';
import TopBar from './TopBar'
import Sidebar from './Sidebar'
import { connect } from "react-redux";
//import { connect } from '../store'

class Layout extends Component {

  componentDidMount() {
    this.props.getUser()
  }

  render() {
    const { isFetchingUser, children, errorMsg, dismissError, user } = this.props
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
          onDismiss={dismissError}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    user: state.GetUserReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
