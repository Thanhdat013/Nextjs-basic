import StudentDetail from '@/components/swr/StudentDetail'
import * as React from 'react'
const SWRPage = () => {
  return (
    <div>
      <h1>SWR page</h1>

      <ul>
        <li>
          <StudentDetail studentId="lea11ziflg8xoiza" />
          <StudentDetail studentId="lea11ziflg8xoiza" />
          <StudentDetail studentId="lea11ziflg8xoiza" />
        </li>
      </ul>
    </div>
  )
}

export default SWRPage
