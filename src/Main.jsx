import React, { Component } from 'react';
import PropTypes from 'prop-types';

import connectToDatoCms from './connectToDatoCms';
import './style.sass';

@connectToDatoCms(plugin => ({
  developmentMode: plugin.parameters.global.developmentMode,
  fieldValue: plugin.getFieldValue(plugin.fieldPath),
}))

export default class Main extends Component {
  static propTypes = {
    fieldValue: PropTypes.string,
  }

  render() {
    const { fieldValue } = this.props;

    return (
      <div>
        <input type="text" value={fieldValue || ''} onChange={() => {}} />
      </div>
    );
  }
}
