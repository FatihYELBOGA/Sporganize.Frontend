const topNavOfUser = [
    { id: 1, label: 'Homepage', href: '/Home' },
    { id: 2, label: 'Reservations', href: '/reservations' },
    { id: 3, label: 'Teams', href: '/teams' },
    { id: 4, label: 'Tournaments', href: '/tournaments' },
    { id: 5, label: 'Profile', href: '/profile' },
  ];

export const getTopNavOfUser = () => {
  return topNavOfUser;
};

const topNavOfOwner = [
  { id: 1, label: 'Tournaments', href: '/owner-tournaments' },
  { id: 2, label: 'Reservations', href: '/owner-reservations' },
  { id: 3, label: 'Facilities', href: '/sport-facilities' },
  
];

export const getTopNavOfOwner = () => {
  return topNavOfOwner;
};  