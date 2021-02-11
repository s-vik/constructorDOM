import banner from "./assets/images/sg1.png";
import ship from "./assets/images/destiny.png";
import { TitleBlock, TextBlock, ColumnsBlock, ImageBlock } from "./classes/blocks";

export const model = [
  new TitleBlock("Конструктор сайтов на чистом JavaScript", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #172050, #493240)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),
  new TextBlock("Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusamus voluptatem voluptate corrupti velit itaque.",
    {
      tag: "p",
      styles: {
        "font-size": "1.2rem",
        color: "#144cb7",
        padding: "2rem",
        "text-align": "center",
        "border-bottom": "1px solid #ccc",
      },
    }
  ),
  new ImageBlock(ship, {
    alt: "banner",
  }),
  new ColumnsBlock(
    [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusamus voluptatem voluptate corrupti velit itaque.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusamus voluptatem voluptate corrupti velit itaque.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusamus voluptatem voluptate corrupti velit itaque.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusamus voluptatem voluptate corrupti velit itaque.",
    ],
    {
      styles: {
        background: "linear-gradient(to right, #172050, #493240)",
        color: "#fff",
        "line-height": "2",
        padding: "2rem",
      },
    }
  ),
  new ImageBlock(banner, {
    alt: "banner",
  }),
];
