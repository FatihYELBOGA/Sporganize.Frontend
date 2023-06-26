const topNavOfUser = [
    { id: 1, label: 'Homepage', href: '/Home' },
    { id: 2, label: 'Reservations', href: '/Reservations' },
    { id: 3, label: 'Teams', href: '/Teams' },
    { id: 4, label: 'Tournaments', href: '/Tournaments' },
    { id: 5, label: 'Profile', href: '/Profile' },
  ];

export const getTopNavOfUser = () => {
  return topNavOfUser;
};

const topNavOfOwner = [
  { id: 1, label: 'Tournaments', href: '/OwnerTournaments' },
  { id: 2, label: 'Reservations', href: '/OwnerReservations' },
  { id: 3, label: 'About', href: '/About' }
];

export const getTopNavOfOwner = () => {
  return topNavOfOwner;
};  