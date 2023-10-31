import { Route, Routes } from "react-router-dom";
import * as path from 'path';

interface Props{
  children: JSX.Element[] | JSX.Element
}

function RoutesWithNotFound({children}: Props) {
  return (
    <Routes>
      {children}
      <Route path='*' element={<div>Not found</div>} />
    </Routes>
  )
}
export default RoutesWithNotFound;