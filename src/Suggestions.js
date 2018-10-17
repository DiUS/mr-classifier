import React from 'react'
import { talky } from './talky';

const onClick = (item, onSelect) => {
  onSelect(item)
  talky(item)
}

const Suggestions = ({ suggestions, onSelect }) => (
  <div className='Suggestions'>
    {suggestions.length < 1 && <div className='NoSuggestions'>Please draw something in the canvas above</div> }
    {suggestions.map(item => (
      <div key={item} className='Suggestion' onClick={() => onClick(item, onSelect)}>{item}</div>
      )
    )}
  </div>
)

export default Suggestions
