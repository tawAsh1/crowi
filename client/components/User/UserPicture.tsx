import React from 'react'
import { User } from 'client/types/crowi'

interface Props {
  user: User
  size: string
}

// TODO UserComponent?
export default class UserPicture extends React.Component<Props> {
  static defaultProps = {
    user: {},
    size: null,
  }

  getUserPicture(user) {
    // from swig.setFilter('picture', function(user)

    if (user.image && user.image != '/images/userpicture.png') {
      return user.image
    } else {
      return '/images/userpicture.png'
    }
  }

  getClassName() {
    let className = ['picture', 'picture-rounded']
    if (this.props.size) {
      className.push('picture-' + this.props.size)
    }

    return className.join(' ')
  }

  render() {
    const user = this.props.user

    return <img src={this.getUserPicture(user)} alt={user.username} className={this.getClassName()} />
  }
}
