import React from 'react';
import { render } from 'react-dom';
import { v4 as uuid4 } from 'uuid';

import Main from './Main';

window.DatoCmsPlugin.init((plugin) => {
  plugin.startAutoResizer();

  const container = document.createElement('div');
  document.body.appendChild(container);

  const value = plugin.getFieldValue(plugin.fieldPath);

  if (value) {
    plugin.toggleField(plugin.fieldPath, false);
  } else {
    const nextId = uuid4();
    plugin.setFieldValue(plugin.fieldPath, nextId);
  }

  render(<Main plugin={plugin} />, container);
});
