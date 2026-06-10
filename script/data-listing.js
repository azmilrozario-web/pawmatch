const data = [
  {
    id: 1,
    name: "Butcher",
    species: "Dog",
    gender: "MALE",
    age: 4,
    category_id: 1,
    description: "Energetic dog who loves belly rubs and outdoor play.",
    imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=764&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Bella",
    species: "Dog",
    gender: "FEMALE",
    age: 2,
    category_id: 1,
    description: "Sweet and playful dog who enjoys adventures.",
    imageUrl: "https://images.unsplash.com/photo-1616549105827-103e19d10c6d?q=80&w=687&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Zoro",
    species: "Dog",
    gender: "MALE",
    age: 5,
    category_id: 1,
    description: "Loyal companion who enjoys long walks.",
    imageUrl: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1740&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Bailey",
    species: "Cat",
    gender: "FEMALE",
    age: 6,
    category_id: 2,
    description: "Independent cat who loves sunny windows.",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Whisker",
    species: "Cat",
    gender: "MALE",
    age: 8,
    category_id: 2,
    description: "Gentle senior cat who loves naps.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1673967831980-1d377baaded2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    name: "Scratch",
    species: "Cat",
    gender: "MALE",
    age: 2,
    category_id: 2,
    description: "Curious kitten full of playful energy.",
    imageUrl: "https://images.unsplash.com/photo-1622977328086-20c43fd49c4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    name: "Max",
    species: "Dog",
    gender: "MALE",
    age: 3,
    category_id: 1,
    description: "Friendly dog who loves running outdoors.",
    imageUrl: "https://images.unsplash.com/photo-1695457601176-b779cf426428?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 8,
    name: "Luna",
    species: "Cat",
    gender: "FEMALE",
    age: 1,
    category_id: 2,
    description: "Playful kitten who loves toys and cuddles.",
    imageUrl: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 9,
    name: "Rocky",
    species: "Dog",
    gender: "MALE",
    age: 5,
    category_id: 1,
    description: "Strong and loyal dog with a calm personality.",
    imageUrl: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 10,
    name: "Milo",
    species: "Cat",
    gender: "MALE",
    age: 4,
    category_id: 2,
    description: "Relaxed indoor cat who enjoys naps.",
    imageUrl: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 11,
    name: "Coco",
    species: "Dog",
    gender: "FEMALE",
    age: 3,
    category_id: 1,
    description: "Happy dog who enjoys meeting new people.",
    imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 12,
    name: "Leo",
    species: "Cat",
    gender: "MALE",
    age: 2,
    category_id: 2,
    description: "Friendly cat who loves attention.",
    imageUrl: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 13,
    name: "Daisy",
    species: "Dog",
    gender: "FEMALE",
    age: 1,
    category_id: 1,
    description: "Young puppy full of excitement and energy.",
    imageUrl: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1000&auto=format&fit=crop"
  },
{
    id: 14,
    name: "Nala",
    species: "Cat",
    gender: "FEMALE",
    age: 5,
    category_id: 2,
    description: "Quiet and affectionate indoor cat.",
    imageUrl: "https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
  {
    id: 15,
    name: "Buddy",
    species: "Dog",
    gender: "MALE",
    age: 7,
    category_id: 1,
    description: "Gentle senior dog who enjoys relaxing walks.",
    imageUrl: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 16,
    name: "Kitty",
    species: "Cat",
    gender: "FEMALE",
    age: 3,
    category_id: 2,
    description: "Sweet cat who loves cozy spaces.",
    imageUrl: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 17,
    name: "Shadow",
    species: "Dog",
    gender: "MALE",
    age: 5,
    category_id: 1,
    description: "Protective dog with a loving heart.",
    imageUrl: "https://images.unsplash.com/photo-1568274604780-30c1bcacb31a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 18,
    name: "Oreo",
    species: "Cat",
    gender: "MALE",
    age: 2,
    category_id: 2,
    description: "Curious cat who enjoys climbing.",
    imageUrl: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1000&auto=format&fit=crop"
  },
{
    id: 13,
    name: "Ruby",
    species: "Dog",
    gender: "FEMALE",
    age: 4,
    category_id: 1,
    description: "Affectionate dog who loves cuddles.",
    imageUrl: "https://images.unsplash.com/photo-1604543219730-fa94b8e359e3?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
  {
    id: 20,
    name: "Simba",
    species: "Cat",
    gender: "MALE",
    age: 1,
    category_id: 2,
    description: "Playful kitten with endless energy.",
    imageUrl: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 21,
    name: "Charlie",
    species: "Dog",
    gender: "MALE",
    age: 2,
    category_id: 1,
    description: "Energetic dog who enjoys fetch games.",
    imageUrl: "https://images.unsplash.com/photo-1668643553876-4e297b29aebd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNtYWxsJTIwZG9nc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 22,
    name: "Misty",
    species: "Cat",
    gender: "FEMALE",
    age: 2,
    category_id: 2,
    description: "Calm cat who enjoys quiet afternoons.",
    imageUrl: "https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 23,
    name: "Bruno",
    species: "Dog",
    gender: "MALE",
    age: 6,
    category_id: 1,
    description: "Loyal dog who loves outdoor adventures.",
    imageUrl: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 24,
    name: "Peanut",
    species: "Cat",
    gender: "MALE",
    age: 3,
    category_id: 2,
    description: "Small playful cat who loves attention.",
    imageUrl: "https://images.unsplash.com/photo-1488740304459-45c4277e7daf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 25,
    name: "Lucy",
    species: "Dog",
    gender: "FEMALE",
    age: 5,
    category_id: 1,
    description: "Friendly family dog who loves children.",
    imageUrl: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 26,
    name: "Tiger",
    species: "Cat",
    gender: "MALE",
    age: 3,
    category_id: 2,
    description: "Senior cat with a calm and loving personality.",
    imageUrl: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 27,
    name: "Rosie",
    species: "Dog",
    gender: "FEMALE",
    age: 2,
    category_id: 1,
    description: "Playful young dog who loves adventures.",
    imageUrl: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];