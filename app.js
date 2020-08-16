const ValidationMessage = (props) => {
  const {txt} = props
  return (
    <p>{txt}</p>
  );
}

const OrderForm = (props) => {
  return(
      <form onSubmit={props.onSubmit}>
        <input
          id='age'
          type="checkbox"
          onChange={props.onChange}
          checked={props.checked}
        />
        <label htmlFor='age'>Mam conajmniej 16 lat</label>
        <br />
        <br />
        <button>Kup bilet</button>
      </form>
    );
}

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

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      });
    }
  }

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt='Możesz obejrzeć film.'/>;
      } else {
        return <ValidationMessage txt='Nie możesz obejrzeć tego filmu, jeśli masz mniej niż 16 lat.'/>;
      }
    } else {
      return null;
    }
  }

  render() {

    return(
      <>
        <h1>Kup bilet na horror roku!</h1>
        <OrderForm
          onChange={this.handleCheckboxChange}
          onSubmit={this.handleFormSubmit}
          checked={this.state.isConfirmed}
        />
        {this.displayMessage()}
      </>
    )
  }
}

ReactDOM.render(<TicketShop />, document.getElementById('root'));