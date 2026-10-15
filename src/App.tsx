import { Route, Routes } from 'react-router'

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main>
            <h1 className="text-3xl font-bold">中国奶龙中学</h1>
          </main>
        }
      />
    </Routes>
  )
}
