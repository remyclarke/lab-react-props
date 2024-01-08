const DonationForm = (props) => {
  return (
    <div>
    <section classname="donation">
      <h3>You could be donation <span className="secondary">#{props.donations.length + 1}!</span></h3>
    </section>
    <form>
      <label htmlFor="name">Name
      <input 
      id="name" 
      name="name" 
      type="text" 
      placeholder="Your name..."/>
      </label>
      <label htmlFor="caption">Caption
      <input id="caption"
      name="caption"
      placeholder="Add a brief message..."
      type="text" />
      </label>
      <label htmlFor="amount">Amount
      <input id="amount" 
      name="amount"
      type="text" 
      placeholder="0"/>
      </label>
      <button>Donate!</button>
    </form>
    </div>
  )
}

export default DonationForm