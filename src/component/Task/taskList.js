import { v4 as uuid } from "uuid";

  export const ColumnsList = {
    [uuid()]: {
      name: "Next Up",
      items: [
        {
          id: uuid(),
          content: {
            emoji: "🤟",
            text: "[Memoji]-Create Prototype Mobile for Get Notification in Principle",
            date: "MAR 26",
          },
        },
        {
          id: uuid(),
          content: {
            emoji: "🥳",
            text: "[OWW] - Draw & animate illustration for OWW 4th anniversary",
            date: "MAR 30",
          },
        },
        {
          id: uuid(),
          content: {
            emoji: "🎮",
            text: "[Metaco] - Create draft desgn for User Journey earning coin on Apps",
            date: "Apr 1",
          },
        },
      ]
    },
    [uuid()]: {
      name: "In Progress",
      items:  [
        {
          id: uuid(),
          content: {
            emoji: "🤟",
            text: "[Lux] - Design Lux Pet Shop Product Page Responsive Website",
            date: "MAR 29",
          },
        },
        {
          id: uuid(),
          content: {
            emoji: "🔥",
            text: "[OWW] - Learn SVGator for Create OWW Animation Part 2",
            date: "MAR 26",
          },
        },
      ],
    },
    [uuid()]: {
      name: "Complete",
      items: [
        {
          id: uuid(),
          content: {
            emoji: "🔥",
            text: "[OWW] - Learn SVGator for Create OWW Animation Part 1",
            date: "MAR 26",
          },
        },
        {
          id: uuid(),
          content: {
            emoji: "🎮",
            text: "[Metaco] - Benchmark Mobile Legend on Earning Diamond",
            date: "MAR 25",
          },
        },
      ],
    },
  };