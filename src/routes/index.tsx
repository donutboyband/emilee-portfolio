import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
     
    </div>
  )
}
