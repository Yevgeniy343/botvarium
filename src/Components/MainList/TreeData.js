const treeData = [
  {
    id: "1",
    label: "Documents",
    children: [
      {
        id: "2",
        label: "Document 1-1",
        children: [
          {
            id: "3",
            label: "Document-0-1.doc",
            children: [
              {
                id: "4",
                label: "Document-0-1.doc",
              },
              {
                id: "5",
                label: "id 5",
                children: [
                  {
                    id: "9",
                    label: "children of id 5",
                    children: [
                      {
                        id: "10",
                        label: "children of id 9",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "6",
            label: "Document-0-2.doc",
            children: [
              {
                id: "7",
                label: "Document-0-1.doc",
              },
              {
                id: "8",
                label: "Document-0-1.doc",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default treeData;
