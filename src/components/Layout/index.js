import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Card from '@material-ui/core/Card';

import './styles.scss';

const Layout = ({
  children,
  compact,
}) => (
  <section
    className={cn(
      'layout',
      { 'layout--compact': compact },
    )}
  >
    <Card className="layout__card">
      {children}
    </Card>
  </section>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  compact: PropTypes.bool,
};

Layout.defaultProps = {
  compact: false,
};

export default Layout;
