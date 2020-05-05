import React from "react"
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"

import jobCardStyles from "./JobCard.module.scss"

const JobCard = ({ jobTitle, company, duration, location, children }) => (
  <div className={jobCardStyles.jobCard}>
    <h3>{jobTitle}</h3>
    <h4>{company}</h4>
    <div>
      <FaCalendarAlt size=".75rem" />
      <span>{duration}</span>
      <FaMapMarkerAlt size=".75rem" />
      <span>{location}</span>
      {children}
    </div>
  </div>
)

export default JobCard
