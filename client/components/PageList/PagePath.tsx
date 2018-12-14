import React from 'react'
import { Page } from 'client/types/crowi'

interface Props {
  page: Page
  excludePathString: string
}

export default class PagePath extends React.Component<Props> {
  static defaultProps = { page: {}, excludePathString: '' }

  getShortPath(path) {
    let name = path.replace(/(\/)$/, '')

    // /.../hoge/YYYY/MM/DD 形式のページ
    if (name.match(/.+\/([^/]+\/\d{4}\/\d{2}\/\d{2})$/)) {
      return name.replace(/.+\/([^/]+\/\d{4}\/\d{2}\/\d{2})$/, '$1')
    }

    // /.../hoge/YYYY/MM 形式のページ
    if (name.match(/.+\/([^/]+\/\d{4}\/\d{2})$/)) {
      return name.replace(/.+\/([^/]+\/\d{4}\/\d{2})$/, '$1')
    }

    // /.../hoge/YYYY 形式のページ
    if (name.match(/.+\/([^/]+\/\d{4})$/)) {
      return name.replace(/.+\/([^/]+\/\d{4})$/, '$1')
    }

    // ページの末尾を拾う
    return name.replace(/.+\/(.+)?$/, '$1')
  }

  render() {
    const page = this.props.page
    const pagePath = page.path.replace(this.props.excludePathString.replace(/^\//, ''), '')
    const shortPath = this.getShortPath(pagePath)
    const shortPathEscaped = shortPath.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
    const pathPrefix = pagePath.replace(new RegExp(shortPathEscaped + '(/)?$'), '')

    return (
      <span className="page-path">
        {pathPrefix}
        <strong>{shortPath}</strong>
      </span>
    )
  }
}