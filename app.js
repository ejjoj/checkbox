const PositiveMessage = () => <p>Możesz obejrzeć film.</p>;
const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu, jeśli masz mniej niż 16 lat.</p>;

class TicketShop extends React.Component {

  state = {
    isConfirmed: false,
    isFormSubmitted: false
  }

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false
    });
  }

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <PositiveMessage/>;
      } else {
        return <NegativeMessage/>;
      }
    } else {
      return null;
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      });
    }
  }

  render() {
    return(
      <>
        <form onSubmit={this.handleFormSubmit}>
          <h1>Kup bilet na horror roku!</h1>
          <input id='age' type="checkbox" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed}/>
          <label htmlFor='age'>Mam conajmniej 16 lat</label>
          <br />
          <br />
          <button>Kup bilet</button>
          {this.displayMessage()}
        </form>
      </>
    )
  }
}

ReactDOM.render(<TicketShop />, document.getElementById('root'));