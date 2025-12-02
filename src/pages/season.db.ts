export interface Season {
  id: number;
  name: string;
  episodes: Episode[];
}

export interface Episode {
  id: number;
  title: string;
  name: string;
  description: string;
  image: string;
}

export const SEASONS: Season[] = [
  {
    id: 1,
    name: "Season 1",
    episodes: [
      {
        id: 1,
        title: "Episode 1: September 1999",
        name: "Episode 1 September 1999",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%201%20September%201999",
      },
      {
        id: 2,
        title: "Episode 2: October 1999",
        name: "Episode 2 October 1999",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%202%20October%201999",
      },
      {
        id: 3,
        title: "Episode 3: November 1999",
        name: "Episode 3 November 1999",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%203%20November%201999",
      },
      {
        id: 4,
        title: "Episode 4: March 2000",
        name: "Episode 4 March 2000",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%204%20March%202000",
      },
      {
        id: 5,
        title: "Episode 5: May 2000",
        name: "Episode 5 May 2000",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%205%20May%202000",
      },
      {
        id: 6,
        title: "Episode 6: November 2000",
        name: "Episode 6 November 2000",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%206%20November%202000",
      },
      {
        id: 7,
        title: "Episode 7: February 2001",
        name: "Episode 7 February 2001",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%207%20February%202001",
      },
      {
        id: 8,
        title: "Episode 8: March 2001",
        name: "Episode 8 March 2001",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%208%20March%202001",
      },
      {
        id: 9,
        title: "Episode 9: April 2001",
        name: "Episode 9 April 2001",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%209%20April%202001",
      },
    ],
  },
  {
    id: 2,
    name: "Season 2",
    episodes: [
      {
        id: 1,
        title: "Episode 1: June 2001",
        name: "Episode 1 June 2001",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%201%20June%202001",
      },
      {
        id: 2,
        title: "Episode 2: July 2001",
        name: "Episode 2 July 2001",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%202%20July%202001",
      },
      {
        id: 3,
        title: "Episode 3: July 2001 - (Pt 2)",
        name: "Episode 3 July 2001 - pt2",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%203%20July%202001%20-%20pt2",
      },
      {
        id: 4,
        title: "Episode 4: October 2001",
        name: "Episode 4 October 2001",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%204%20October%202001",
      },
      {
        id: 5,
        title: "Episode 5: October 2001 - (Pt 2)",
        name: "Episode 5 October 2001 - pt2",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%205%20October%202001%20-%20pt2",
      },
      {
        id: 6,
        title: "Episode 6: October 2001 - (Pt 3)",
        name: "Episode 6 October 2001 - pt3",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%206%20October%202001%20-%20pt3",
      },
      {
        id: 7,
        title: "Episode 7: November 2001",
        name: "Episode 7 November 2001",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%207%20November%202001",
      },
      {
        id: 8,
        title: "Episode 8: December 2001",
        name: "Episode 8 December 2001",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%208%20December%202001",
      },
      {
        id: 9,
        title: "Episode 9: December 2001 - (Pt 2)",
        name: "Episode 9 December 2001 - pt2",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%209%20December%202001%20-%20pt2",
      },
    ],
  },
  {
    id: 3,
    name: "Season 3",
    episodes: [
      {
        id: 1,
        title: "Episode 1: March 2002",
        name: "Episode 1 March 2002",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%201%20March%202002",
      },
      {
        id: 2,
        title: "Episode 2: March 2002 - (Pt 2)",
        name: "Episode 2 March 2002 - pt2",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%202%20March%202002%20-%20pt2",
      },
      {
        id: 3,
        title: "Episode 3: June 2002",
        name: "Episode 3 June 2002",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%203%20June%202002",
      },
      {
        id: 4,
        title: "Episode 4: July 2002",
        name: "Episode 4 July 2002",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%204%20July%202002",
      },
      {
        id: 5,
        title: "Episode 5: July 2002 - (Pt 2)",
        name: "Episode 5 July 2002 - pt2",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%205%20July%202002%20-%20pt2",
      },
      {
        id: 6,
        title: "Episode 6: September 2002",
        name: "Episode 6 September 2002",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%206%20September%202002",
      },
      {
        id: 7,
        title: "Episode 7: October 2002",
        name: "Episode 7 October 2002",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%207%20October%202002",
      },
      {
        id: 8,
        title: "Episode 8: November 2002",
        name: "Episode 8 November 2002",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%208%20November%202002",
      },
      {
        id: 9,
        title: "Episode 9: December 2002",
        name: "Episode 9 December 2002",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%209%20December%202002",
      },
    ],
  },
  {
    id: 4,
    name: "Season 4",
    episodes: [
      {
        id: 1,
        title: "Episode 1: September 2003",
        name: "Episode 1 September 2003",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%201%20September%202003",
      },
      {
        id: 2,
        title: "Episode 2: October 2003",
        name: "Episode 2 October 2003",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%202%20October%202003",
      },
      {
        id: 3,
        title: "Episode 3: November 2003",
        name: "Episode 3 November 2003",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%203%20November%202003",
      },
      {
        id: 4,
        title: "Episode 4: December 2003",
        name: "Episode 4 December 2003",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%204%20December%202003",
      },
      {
        id: 5,
        title: "Episode 5: January 2004",
        name: "Episode 5 January 2004",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%205%20January%202004",
      },
      {
        id: 6,
        title: "Episode 6: April 2004",
        name: "Episode 6 April 2004",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%206%20April%202004",
      },
      {
        id: 7,
        title: "Episode 7: May 2004",
        name: "Episode 7 May 2004",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%207%20May%202004",
      },
      {
        id: 8,
        title: "Episode 8: June 2004",
        name: "Episode 8 June 2004",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%208%20June%202004",
      },
      {
        id: 9,
        title: "Episode 9: June 2004 - (Pt 2)",
        name: "Episode 9 June 2004 - pt2",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%209%20June%202004%20-%20pt2",
      },
      {
        id: 10,
        title: "Episode 10: July 2003",
        name: "Episode 10 July 2003",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%2010%20July%202003",
      },
      {
        id: 11,
        title: "Episode 11: August 2004",
        name: "Episode 11 August 2004",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%2011%20August%202004",
      },
      {
        id: 12,
        title: "Episode 12: December 2004",
        name: "Episode 12 December 2004",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%2012%20December%202004",
      },
    ],
  },
  {
    id: 5,
    name: "Season 5",
    episodes: [
      {
        id: 1,
        title: "Episode 1: May 2005",
        name: "Episode 1 May 2005",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%201%20May%202005",
      },
      {
        id: 2,
        title: "Episode 2: July 2005",
        name: "Episode 2 July 2005",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%202%20July%202005",
      },
      {
        id: 3,
        title: "Episode 3: October 2005",
        name: "Episode 3 October 2005",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%203%20October%202005",
      },
      {
        id: 4,
        title: "Episode 4: December 2005",
        name: "Episode 4 December 2005",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%204%20December%202005",
      },
      {
        id: 5,
        title: "Episode 5: December 2005 - (Pt 2)",
        name: "Episode 5 December 2005 - pt2",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%205%20December%202005%20-%20pt2",
      },
      {
        id: 6,
        title: "Episode 6: September 2006",
        name: "Episode 6 September 2006",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%206%20September%202006",
      },
      {
        id: 7,
        title: "Episode 7: December 2006",
        name: "Episode 7 December 2006",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%207%20December%202006",
      },
      {
        id: 8,
        title: "Episode 8: April 2007",
        name: "Episode 8 April 2007",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%208%20April%202007",
      },
      {
        id: 9,
        title: "Episode 9: May 2007",
        name: "Episode 9 May 2007",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%209%20May%202007",
      },
      {
        id: 10,
        title: "Episode 10: June 2007",
        name: "Episode 10 June 2007",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%2010%20June%202007",
      },
    ],
  },
  {
    id: 6,
    name: "Season 6",
    episodes: [
      {
        id: 1,
        title: "Episode 1: July 2007",
        name: "Episode 1 July 2007",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%201%20July%202007",
      },
      {
        id: 2,
        title: "Episode 2: July 2007 - (Pt 2)",
        name: "Episode 2 July 2007 - pt2",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%202%20July%202007%20-%20pt2",
      },
      {
        id: 3,
        title: "Episode 3: December 2007",
        name: "Episode 3 December 2007",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%203%20December%202007",
      },
      {
        id: 4,
        title: "Episode 4: April 2008",
        name: "Episode 4 April 2008",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%204%20April%202008",
      },
      {
        id: 5,
        title: "Episode 5: April 2008 - (Pt 2)",
        name: "Episode 5 April 2008 - pt2",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%205%20April%202008%20-%20pt2",
      },
      {
        id: 6,
        title: "Episode 6: May 2008",
        name: "Episode 6 May 2008",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%206%20May%202008",
      },
      {
        id: 7,
        title: "Episode 7: June 2008",
        name: "Episode 7 June 2008",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%207%20June%202008",
      },
      {
        id: 8,
        title: "Episode 8: July 2008",
        name: "Episode 8 July 2008",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%208%20July%202008",
      },
      {
        id: 9,
        title: "Episode 9: September 2008",
        name: "Episode 9 September 2008",
        description: "Family video archive.",
        image:
          "https://placehold.co/300x170?text=Episode%209%20September%202008",
      },
      {
        id: 10,
        title: "Episode 10: May 2011",
        name: "Episode 10 May 2011",
        description: "Family video archive.",
        image: "https://placehold.co/300x170?text=Episode%2010%20May%202011",
      },
    ],
  },
];
