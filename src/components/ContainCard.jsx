import { Box } from '@mui/material'
import Card from './Card'

export default function ContainCard({ characters }) {
    return (
        <Box sx={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
            {characters && characters.map(({ id, name, species, gender, image, status }) => {
                return (
                    <Card key={id} id={id} name={name} species={species} image={image} gender={gender} status={status} />
                )
            })}
        </Box>
    )
}
