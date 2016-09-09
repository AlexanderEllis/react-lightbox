var Lightbox = React.createClass({
  render:function(){
    return (
      <div id="lightbox">
        <div id="lightbox-background"></div>
        <div id="lightbox-foreground">
          <p>Are you sure?</p>
          <form>
            <input type="button" value="Yes" />
            <input type="button" value="No" />
          </form>
        </div>
      </div>
    );
  }
});

var Light = React.createClass({
  render: function() {
    var status = this.props.status.on ? "on" : "off" ;
    return (
      <span>The light is {status}.</span>
    );
  }
});

var Button = React.createClass({
  render: function() {
    return (
      <div>
        <form>
          <input type="button" value="Switch!" />
        </form>
        <Lightbox />
      </div>
    );
  }
});

var Switch = React.createClass({
  render: function() {
    return (
      <div>
        <Light status={this.props.status} />
        <Button />
      </div>
    );
  }
});

var STATUS = {on: true};

ReactDOM.render(
  <Switch status = {STATUS} />,
  document.getElementById('react-container')
);
