import { MessageChain, MessageType } from "../features/chat/types";

export const RESPONSE_DATA: Record<string, MessageChain> = {
  "Who are my top performing influencer?": [
    {
      type: MessageType.text,
      data: "The top performer is John Doe (9.8), followed by Jane Smith (9.5) and Alan Chan (9.2)",
    },
    {
      type: MessageType.table,
      data: [
        { influencer: "John Doe", performance: "9.8/10" },
        { influencer: "Jane Smith", performance: "9.5/10" },
        { influencer: "Alan Chan", performance: "9.2/10" },
        { influencer: "Emily Davis", performance: "9.0/10" },
        { influencer: "Michael Brown", performance: "8.8/10" },
        { influencer: "Sophia Wilson", performance: "8.5/10" },
      ],
      columns: [
        { title: "Influencer", dataIndex: "influencer", key: "influencer" },
        {
          title: "Performance",
          dataIndex: "performance",
          key: "performance",
        },
      ],
    },
    {
      type: MessageType.text,
      data: "I can also provide you the overall performances of all influencer by categories.",
    },
  ],
  "What category of influencer has performed the best?": [
    {
      type: MessageType.text,
      data: "The number one performing category is 'Tech' with a performance score of 90/100. Following it are Fashion (85) and Fitness (75).",
    },
    {
      type: MessageType.chart,
      data: [
        { category: "Tech", performance: 90 },
        { category: "Fashion", performance: 85 },
        { category: "Fitness", performance: 75 },
        { category: "Lifestyle", performance: 60 },
        { category: "Comedy", performance: 50 },
        { category: "Education", performance: 40 },
      ],
    },
    {
      type: MessageType.text,
      data: "I can also provide you the performance of a specific influencer.",
    },
  ],
  "What category of influencer has performed the worst?": [
    {
      type: MessageType.text,
      data: "The category with the worst performance is 'Education' with a performance score of 40/100. Above it are Comedy (50) and Lifestyle (60).",
    },
    {
      type: MessageType.chart,
      data: [
        { category: "Education", performance: 40 },
        { category: "Comedy", performance: 50 },
        { category: "Lifestyle", performance: 60 },
        { category: "Fitness", performance: 75 },
        { category: "Fashion", performance: 85 },
        { category: "Tech", performance: 90 },
      ],
    },
    {
      type: MessageType.text,
      data: "Do you also want to explore why the 'Lifestyle' category has lower performance or look at top influencer in this category?",
    },
  ],
  "How is the performance of influencer Alan Chan?": [
    {
      type: MessageType.text,
      data: "He has a performance rating of 9.2/10 and currently ranked 3 among all your influencer.",
    },
  ],
};

export const SUGGESTIONS = [
  "Who are my top performing influencer?",
  "What category of influencer has performed the best?",
  "What category of influencer has performed the worst?",
  "How is the performance of influencer Alan Chan?",
];
