import React from 'react'

export default {
  title: 'page | Form/List',
}

export const accessible = () => <button>Accessible button</button>

export const inaccessible = () => (
  <button style={{ backgroundColor: 'red', color: 'darkRed' }}>
    Inaccessible button
  </button>
)
