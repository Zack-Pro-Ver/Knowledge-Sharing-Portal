import { Stack } from "../../elements"
import BadgesCards from "./BadgesCards"
import { BadgesHeader } from "./BadgesHeader"
import BadgesMainCards from "./BadgesMainCards"

export const Badges = () => {
  return (
    <Stack direction="column" spacing={4} justifyContent="center">
      <BadgesHeader />
      <BadgesCards />
      <BadgesMainCards />
    </Stack>
  )
}
