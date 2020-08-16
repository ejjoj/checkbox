const displayMessage = (isConfirmed, isFormSubmitted) => {
  if (isFormSubmitted) {
    if (isConfirmed) {
      return <ValidationMessage txt='Możesz obejrzeć film.'/>;
    } else {
      return <ValidationMessage txt='Nie możesz obejrzeć tego filmu, jeśli masz mniej niż 16 lat.'/>;
    }
  } else {
    return null;
  }
}

const ValidationMessage = (props) => {
  const {txt} = props
  return (
    <p>{txt}</p>
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

  // displayMessage = () => {
  //   if (this.state.isFormSubmitted) {
  //     if (this.state.isConfirmed) {
  //       return <ValidationMessage txt='Możesz obejrzeć film.'/>;
  //     } else {
  //       return <ValidationMessage txt='Nie możesz obejrzeć tego filmu, jeśli masz mniej niż 16 lat.'/>;
  //     }
  //   } else {
  //     return null;
  //   }
  // }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      });
    }
  }

  render() {
    const {isConfirmed, isFormSubmitted} = this.state;

    return(
      <>
        <form onSubmit={this.handleFormSubmit}>
          <h1>Kup bilet na horror roku!</h1>
          <input id='age' type="checkbox" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed}/>
          <label htmlFor='age'>Mam conajmniej 16 lat</label>
          <br />
          <br />
          <button>Kup bilet</button>
          {displayMessage(isConfirmed, isFormSubmitted)}
        </form>
      </>
    )
  }
}

ReactDOM.render(<TicketShop />, document.getElementById('root'));