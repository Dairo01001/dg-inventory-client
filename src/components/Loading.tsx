import { Skeleton } from './ui/skeleton'

export const Loading = () => {
  return (
    <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 transform">
      <Skeleton className="h-[125px] w-[125px] rounded-full" />
    </div>
  )
}

export default Loading
