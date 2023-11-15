
import React from 'react'
import Link from 'next/link'

interface Props {
    title1?: string;
    title2?: string;
    title3?: string;
    link1?: string;
    link2?: string;
   
    [rest: string]: any;
  }

function Breadcrump({title1,title2,title3,link1,link2,...rest}: Props) {
  return (
    <div className="text-sm breadcrumbs">
    <ul>
        {title1 && link1 ? <li><Link href={link1}>{title1}</Link></li> : null}
        {title2 && link2 ? <li><Link href={link2}>{title2}</Link></li> : null}
        {title3  ? <li><a>{title3}</a></li> : null}
     
    </ul>
  </div>
  )
}

export default Breadcrump
