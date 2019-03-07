import React from 'react'
import { Toolbar, Avatar, Button } from 'react-md'

const TopBar = (props) => {
  const avatar = props.user
    ? <Avatar key='avt' src={props.user.avatar_url} />
    : <Avatar key='avt' />
  const name = props.user ? props.user.login : ''
  //const button = <Button onClick={updateAll} icon>replay</Button>
  const button = <Button icon>replay</Button>
  return (
    <Toolbar fixed colored nav={avatar} title={name} actions={button} />
  )
}

export default TopBar
