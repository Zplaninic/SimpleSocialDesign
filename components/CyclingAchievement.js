import styles from '../styles/Achievement.module.scss'
import React, { Fragment } from 'react'

const CyclingAchievement = (props) => (
  <Fragment>
    <p>
      You cycled {props.date} {props.km} km, earned {props.currency} CC
    </p>
    <hr></hr>
  </Fragment>

)

export default CyclingAchievement
