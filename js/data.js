
const artworks = [
  {
    id: 1,
    title: "Dreamer's Soul",
    artist: "ArtVista Studio",
    category: "Modern Art",
    year: 2024,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
    description: "A beautiful artistic expression of creativity."
  },
  {
    id: 2,
    title: "Mountain Serenity",
    artist: "Elena Kapoor",
    category: "Nature Art",
    year: 2023,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "A peaceful mountain landscape."
  },
  {
    id: 3,
    title: "Cosmic Flow",
    artist: "Aanya Sharma",
    category: "Abstract Art",
    year: 2024,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262",
    description: "An expressive abstract artwork."
  },
  {
    id: 4,
    title: "Inner Peace",
    artist: "Vikram Singh",
    category: "Contemporary",
    year: 2023,
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342",
    description: "Minimal lines and peaceful expression."
  },
  {
    id: 5,
    title: "Golden Dreams",
    artist: "Diya Patel",
    category: "Nature Art",
    year: 2024,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
    description: "A colorful celebration of nature."
  },
  {
    id: 6,
    title: "Modern Expressions",
    artist: "Rohan Mehta",
    category: "Modern Art",
    year: 2025,
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9",
    description: "Modern artistic imagination."
  },
  {
    id: 7,
    title: "Ocean Whispers",
    artist: "Arjun Verma",
    category: "Nature Art",
    year: 2024,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "The calm beauty of the ocean."
  },
  {
    id: 8,
    title: "Colorful Mind",
    artist: "Maya Singh",
    category: "Abstract Art",
    year: 2024,
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5",
    description: "A vibrant abstract composition."
  },
  {
    id: 9,
    title: "Blooming Grace",
    artist: "Priya Sharma",
    category: "Nature Art",
    year: 2023,
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
    description: "Beautiful botanical inspiration."
  },
  {
    id: 10,
    title: "Urban Lights",
    artist: "James Taylor",
    category: "Modern Art",
    year: 2024,
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
    description: "A modern city atmosphere."
  },
  {
    id: 11,
    title: "Golden Horizon",
    artist: "Neha Kapoor",
    category: "Nature Art",
    year: 2023,
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8",
    description: "A golden sunset landscape."
  },
  {
    id: 12,
    title: "Creative Soul",
    artist: "Aarav Malhotra",
    category: "Contemporary",
    year: 2025,
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342",
    description: "A contemporary creative composition."
  },
  {
    id: 13,
    title: "Silent Beauty",
    artist: "Sophia Davis",
    category: "Modern Art",
    year: 2024,
    image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4",
    description: "An elegant artistic composition."
  },
  {
    id: 14,
    title: "Forest Dreams",
    artist: "Daniel Park",
    category: "Nature Art",
    year: 2023,
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b",
    description: "A dreamy forest atmosphere."
  },
  {
    id: 15,
    title: "Color Symphony",
    artist: "Olivia Brown",
    category: "Abstract Art",
    year: 2025,
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab",
    description: "A symphony of vivid colors."
  },
  {
    id: 16,
    title: "Peaceful Horizon",
    artist: "Isabella Moore",
    category: "Nature Art",
    year: 2024,
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    description: "A peaceful natural landscape."
  },
  {
    id: 17,
    title: "Artistic Vision",
    artist: "Michael Chen",
    category: "Contemporary",
    year: 2025,
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342",
    description: "A unique contemporary vision."
  },
  {
    id: 18,
    title: "Sunset Dreams",
    artist: "Emma Wilson",
    category: "Nature Art",
    year: 2023,
    image: "https://images.unsplash.com/photo-1472120435266-53107fd0c44a",
    description: "Warm colors of a beautiful sunset."
  },
  {
    id: 19,
    title: "Abstract Emotions",
    artist: "David Miller",
    category: "Abstract Art",
    year: 2024,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262",
    description: "An expressive abstract creation."
  },
  {
    id: 20,
    title: "Nature's Canvas",
    artist: "Grace Lee",
    category: "Nature Art",
    year: 2025,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description: "Nature as a beautiful canvas."
  },
  {
    id: 21,
    title: "Geometric Soul",
    artist: "Michael Lee",
    category: "Modern Art",
    year: 2024,
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5",
    description: "A modern geometric composition."
  },
  {
    id: 22,
    title: "Dreamscape",
    artist: "Olivia Brown",
    category: "Abstract Art",
    year: 2025,
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab",
    description: "A colorful imaginative dreamscape."
  },
  {
    id: 23,
    title: "Floral Symphony",
    artist: "Karan Shetty",
    category: "Nature Art",
    year: 2024,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
    description: "A graceful floral composition."
  },
  {
    id: 24,
    title: "Ethereal World",
    artist: "Diya Patel",
    category: "Contemporary",
    year: 2025,
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    description: "An imaginative contemporary artwork."
  }
];

const categories = [
  "All",
  "Abstract Art",
  "Modern Art",
  "Contemporary",
  "Nature Art"
];

