import { AppBar, Toolbar, Container, Avatar } from "@mui/material"

const Header = () => {
    return (
        <Container maxWidth='lg'>
            <AppBar position="static" colorTransparent>
                <Toolbar>
                    <Avatar src='../public/favicon.ico' alt='Emmanuel F. Morales Jr.' />
                </Toolbar>
            </AppBar>
        </Container>
    )
}

export default Header
