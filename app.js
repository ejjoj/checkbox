const PositiveMessage = () => <p>Możesz obejrzeć film.</p>;
const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu, jeśli masz mniej niż 16 lat.</p>;

class CheckboxAgeConfirmation extends React.Component {

  state = {
    isConfirmed: false,
  }

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed
    });
  }

  displayMessage = () => {
    if (this.state.isConfirmed) {
      return <PositiveMessage/>;
    } else {
      return <NegativeMessage/>;
    }
  }

  render() {
    return(
      <>
        <h1>Kup bilet na horror roku!</h1>
        <input id='age' type="checkbox" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed}/>
        <label htmlFor='age'>Mam conajmniej 16 lat</label>
        {this.displayMessage()}
      </>
    )
  }
}

ReactDOM.render(<CheckboxAgeConfirmation/>, document.getElementById('root'));