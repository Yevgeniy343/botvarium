const treeData = [
  {
    id: "1",
    label: "Level1",
    children: [
      {
        id: "2",
        label: "Level2",
        children: [
          {
            id: "3",
            label: "Level3",
            children: [
              {
                id: "4",
                label: "Level4",
              },
              {
                id: "5",
                label: "Level4",
                children: [
                  {
                    id: "9",
                    label: "Level5",
                    children: [
                      {
                        id: "10",
                        label: "Level6",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "6",
            label: "Level3",
            children: [
              {
                id: "7",
                label: "Level4",
              },
              {
                id: "8",
                label: "Levrl4",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default treeData;
