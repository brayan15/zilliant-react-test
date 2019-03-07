import React, { Component } from 'react'
import { CircularProgress, Snackbar } from 'react-md'
import { getUser } from '../actions/GetUser';
import TopBar from './TopBar'
import Sidebar from './Sidebar'
import { connect } from "react-redux";

class Layout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: ''
    }
    this.hideMessage = this.hideMessage.bind(this)
  }

  componentDidMount() {
    this.props.getUser()
  }

  hideMessage () {
    this.setState(
      {
        error: null
      }
    )
  }

  render() {
    const { isFetchingUser, children, errorMsg, user } = this.props
    const { error } = this.state
    const toasts = error !== null && errorMsg ? [{ text: errorMsg }] :[]
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
          onDismiss={this.hideMessage}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    user: state.GetUserReducer.user,
    errorMsg: state.GetUserReducer.errorMsg,
    isFetchingUser: state.GetUserReducer.isFetchingUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
