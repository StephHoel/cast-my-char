import { ActorProps } from "./actor"

export type ActorModalProps = {
  actor: ActorProps | null
  onClose: () => void
}