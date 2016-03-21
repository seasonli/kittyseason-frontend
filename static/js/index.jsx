var React = require('react/addons');
var $ = require('npm-zepto');
var Mui = require('material-ui');


React.render(
  <Mui.AppBar
    title="kittyseason" 
    iconElementLeft={
      <Mui.IconButton>
        <Mui.FontIcon className="muidocs-icon-action-home" />
      </Mui.IconButton>
    }
  />,
  $('.header-wrapper').get(0)
);