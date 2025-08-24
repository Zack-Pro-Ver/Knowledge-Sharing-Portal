import BadgesCards from "./BadgesCards"
import { BadgesHeader } from "./BadgesHeader"
import BadgesMainCards from "./BadgesMainCards"

export const Badges = () => {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <BadgesHeader />
      <BadgesCards />
      <BadgesMainCards />
    </div>
  )
}
