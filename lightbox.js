var Lightbox = React.createClass({
  handleChange: function(e) {
    this.props.handleChange();
  },
  render:function(){
    return (
      <div id="lightbox" style={{"display":this.props.display}}>
        <div id="lightbox-background" onClick={this.props.changeLightboxDisplay}></div>
        <div id="lightbox-foreground">
          <p>Are you sure?</p>
          <form>
            <input type="button" value="Yes" onClick={this.handleChange} />
            <input type="button" value="No" onClick={this.props.changeLightboxDisplay}/>
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
      <h3>The light is {status}.</h3>
    );
  }
});

var Button = React.createClass({
  handleChange: function() {
    this.props.handleChange();
  },
  render: function() {

    var display = this.props.lightboxStatus ? "block": "none";
    if (this.props.lightboxStatus) {
      var lightbox = (<Lightbox handleChange={this.handleChange} changeLightboxDisplay={this.props.changeLightboxDisplay} display={display} />)
    }


    return (
      <div>
        <form>
          <input type="button" value="Switch!" onClick={this.props.changeLightboxDisplay}/>
        </form>
        {lightbox}
      </div>
    );
  }
});

var Switch = React.createClass({

  getInitialState: function(){
    return {
      on: true,
      lightbox: false
    };
  },
  handleChange: function() {
    this.setState({
      on: !(this.state.on),
      lightbox: !(this.state.lightbox)
    });
  },
  changeLightboxDisplay: function() {
    this.setState({
      on: (this.state.on),
      lightbox: !(this.state.lightbox)
    });
  },
  render: function() {
    return (
      <div>
        <Light status={this.state} />
        <Button handleChange={this.handleChange} changeLightboxDisplay={this.changeLightboxDisplay} lightboxStatus={this.state.lightbox}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Switch />,
  document.getElementById('react-container')
);
