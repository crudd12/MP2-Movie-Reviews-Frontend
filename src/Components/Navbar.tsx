import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LiveTvIcon from '@mui/icons-material/LiveTv';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

const Navbar: React.FC = () => {

    // // Placeholder function for handleCloseNavMenu
    // const handleCloseNavMenu = () => {
    //     // Your code here
    // };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <LiveTvIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        JEDCV
                    </Typography>
                    <LiveTvIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        JEDCV
                    </Typography>
                    {/* Uncomment and use the below code if needed */}
                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button sx={{ my: 2, color: 'white', display: 'block' }} href={'/'} onClick={handleCloseNavMenu}>Movies</Button>
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;




// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import LiveTvIcon from '@mui/icons-material/LiveTv';

// function Navbar() {

//     return (
//         <AppBar position="static">
//             <Container maxWidth="xl">
//                 <Toolbar disableGutters>
//                     <LiveTvIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component="a"
//                         href="/"
//                         sx={{
//                             mr: 2,
//                             display: { xs: 'none', md: 'flex' },
//                             fontFamily: 'monospace',
//                             fontWeight: 700,
//                             letterSpacing: '.3rem',
//                             color: 'inherit',
//                             textDecoration: 'none',
//                         }}
//                     >
//                         JEDCV
//                     </Typography>
//                     <LiveTvIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//                     <Typography
//                         variant="h5"
//                         noWrap
//                         component="a"
//                         href="/"
//                         sx={{
//                             mr: 2,
//                             display: { xs: 'flex', md: 'none' },
//                             flexGrow: 1,
//                             fontFamily: 'monospace',
//                             fontWeight: 700,
//                             letterSpacing: '.3rem',
//                             color: 'inherit',
//                             textDecoration: 'none',
//                         }}
//                     >
//                         JEDCV
//                     </Typography>
//                     {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                         <Button sx={{ my: 2, color: 'white', display: 'block' }} href={'/'} onClick={handleCloseNavMenu}>Movies</Button>
//                     </Box> */}
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// }
// export default Navbar;