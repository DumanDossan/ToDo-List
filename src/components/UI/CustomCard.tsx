import { Card, Typography } from "antd"

type TProps = {
    title: string
}

const CustomCard = ({ title }: TProps) => {
  return (
    <Card>
        <Typography>{title}</Typography>
    </Card>
  )
}

export default CustomCard