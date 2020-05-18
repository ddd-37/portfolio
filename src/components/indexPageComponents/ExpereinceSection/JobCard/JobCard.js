import React from "react"
import PropTypes from "prop-types"
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"

import jobCardStyles from "./JobCard.module.scss"

const JobCard = ({ jobTitle, company, duration, location, children }) => (
  <div className={jobCardStyles.jobCard}>
    <h3>{jobTitle}</h3>
    <div>
      <h4>{company}</h4>
      <FaCalendarAlt size=".75rem" />
      <span>{duration}</span>
      <FaMapMarkerAlt size=".75rem" />
      <span>{location}</span>
      {children}
    </div>
  </div>
)

JobCard.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default JobCard
