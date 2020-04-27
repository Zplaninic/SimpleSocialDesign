import React, { Fragment } from 'react'

const DonationAchievment = (props) => (
  <Fragment>
    <p>
      You donated on {props.date} {props.currency} CC for {props.donation}
    </p>
    <hr></hr>
  </Fragment>

)

export default DonationAchievment
