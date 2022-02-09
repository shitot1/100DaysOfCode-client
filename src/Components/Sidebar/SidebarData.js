import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export const SidebarData = [

    {
        title: "Path",
        icon: <WorkspacePremiumIcon />,
        link: "/Path"
    },
    {
        title: "Playground",
        icon: <SportsEsportsIcon />,
        link: "/Playground"
    },
    {
        title: "Personal Details",
        icon: <PersonIcon />,
        link: "/"
    },
    {
        title: "Logout",
        icon: <PersonIcon />,
        link: "/"
    }
]


