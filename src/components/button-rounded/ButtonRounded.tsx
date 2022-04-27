import {
  Button
} from './styles';

type Props = {
  label: string,
  onClick: () => void
  type?: "button" | "submit" | "reset"
}

const ButtonRounded = ({
  label,
  type = "button",
  onClick
}: Props) => {
  return (
    <Button 
      onClick={onClick}
      type={type}
    >
      {label}
    </Button>
  )
}

export default ButtonRounded;