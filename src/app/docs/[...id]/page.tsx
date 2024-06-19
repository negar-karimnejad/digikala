import React from 'react'

function Docs({params}:{params:{id:string}}) {

  return (
    <div>Docs {params.id}</div>
  )
}

export default Docs