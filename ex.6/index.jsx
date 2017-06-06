import React from 'react'
import ReactDom from 'react-dom'
import Family from './family'
import Member from './member'

 ReactDom.render(
     <Family lastname="Silva">
         <Member name="Guilherme"/>
         <Member name="Rafael"/>
         <Member name="Júlia"/>
     </Family> 
 , document.getElementById('app'))
