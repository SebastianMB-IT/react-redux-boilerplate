import React from 'react'
import LeftContentBlock from './LeftContentBlock'
import RightContentBlock from './RightContentBlock'

const ContentBlock = (props) => {
  if (props.type === 'left') {
    return (
      <LeftContentBlock
        title={props.title}
        content={props.content}
        button={props.button}
        section={props.section}
        icon={props.icon}
        id={props.id}
      />
    )
  }
  if (props.type === 'right') {
    return (
      <RightContentBlock
        title={props.title}
        content={props.content}
        button={props.button}
        icon={props.icon}
        id={props.id}
      />
    )
  }
  return null
}

export default ContentBlock
