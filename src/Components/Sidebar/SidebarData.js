import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export const SidebarData = [

    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/dashboard"
    },
    {
        title: "Playground",
        icon: <SportsEsportsIcon />,
        link: "/Playground"
    },
    {
        title: "Logout",
        icon: <PersonIcon />,
        link: "/"
    }
]


