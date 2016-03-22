var React = require('react/addons');
var $ = require('npm-zepto');
var Mui = require('material-ui');


var FeedUi = {};

FeedUi.FeedDialog = React.createClass({
  getInitialState: function() {
    return {
      open: this.props.open || false
    };
  },
  render: function () {
    var actions = [
      <Mui.FlatButton
        label="取消"
        primary={true}
      />,
      <Mui.FlatButton
        label="添加"
        primary={true}
      />
    ];

    return ( <Mui.Dialog
        title="添加一条记录"
        modal={
          true
        } 
        open={
          this.state.open
        }
        actions={
          actions
        }
        >
      添加一条记录</Mui.Dialog>
    );
  },
  handleOpen: function () {
    this.setState({open: true});
  }
});


// Entrance
var header = React.render( < Mui.AppBar title = "kittyseason"
  iconElementLeft={
    <Mui.IconButton>
      <Mui.FontIcon className="muidocs-icon-action-home" />
    </Mui.IconButton>
  }
  iconElementRight={
    <Mui.FlatButton label="New"
      onClick={
        function () {
          feeddialog.handleOpen();
        }
      }
    />
  }
  />,
  $('.header-wrapper').get(0)
);

var feeddialog = React.render(<FeedUi.FeedDialog />, $('.dialog-wrapper').get(0));