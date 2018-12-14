import React from 'react'
import { translate } from 'react-i18next'
import Tab from 'components/Common/Tab'
import TabItem from 'components/Common/TabItem'
import ShareList from './ShareList'
import AccessLog from './AccessLog'
import Crowi from 'client/util/Crowi'

interface Props {
  t: Function
  crowi: Crowi
}

class AdminShare extends React.Component<Props> {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { t } = this.props
    return (
      <Tab id="admin-share-tabs">
        <TabItem title={t('Shared Pages')}>
          <ShareList crowi={this.props.crowi} />
        </TabItem>
        <TabItem title={t('Access Log')}>
          <AccessLog crowi={this.props.crowi} />
        </TabItem>
      </Tab>
    )
  }
}

export default translate()(AdminShare)
