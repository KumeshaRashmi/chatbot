import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypingAnim = () => {
  return (
    <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    "Explore the World of Your Personal AI Companion",
    1000,
    "Let KUMIAI-Bot Enhance Your Experience with Intelligent Conversations",
    1500,
  ]}
  speed={50}
  style={{ fontSize: '50px',color:"white",display:"inline-block",textShadow:"1px 1px 20px #000", fontWeight:"bold" }}
  repeat={Infinity}
/>
  )
}

export default TypingAnim;