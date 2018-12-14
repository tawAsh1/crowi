import React from 'react'
import UserPicture from 'components/User/UserPicture'
import PageListMeta from './PageListMeta'
import PagePath from './PagePath'
import { Page as PageType } from 'client/types/crowi'

interface Props {
  page: PageType
  linkTo: string
  excludePathString: string
  isActive: boolean
  children?: React.ReactChild
  onClick?: () => void
}

export default class Page extends React.Component<Props> {
  static defaultProps = {
    page: {},
    linkTo: '',
    excludePathString: '',
    isActive: false,
  }

  render() {
    const { page, linkTo, excludePathString, isActive, children, ...props } = this.props
    const link = linkTo === '' ? page.path : linkTo
    const active = this.props.isActive ? 'active' : ''
    return (
      <li className={`page-list-li ${active}`} {...props}>
        {children}
        <UserPicture user={page.revision.author} />
        <a className="page-list-link" href={link}>
          <PagePath page={page} excludePathString={excludePathString} />
        </a>
        <PageListMeta page={page} />
      </li>
    )
  }
}
