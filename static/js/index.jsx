var React = require('react/addons');
var Mui = require('material-ui');
var $ = require('zepto');


React.render(
  <Mui.AppBar
    title="Kittyseason" 
    iconElementLeft={
      <Mui.IconButton>
        <Mui.FontIcon className="muidocs-icon-action-home" />
      </Mui.IconButton>
    }
  />,
  $('.header-wrapper').get(0)
);