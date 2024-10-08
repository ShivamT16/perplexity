import { FaRegStar } from "react-icons/fa";
import { HiMiniCpuChip } from "react-icons/hi2";
import { BiDollarCircle } from "react-icons/bi";
import { MdOutlineColorLens } from "react-icons/md";
import { LiaMedalSolid } from "react-icons/lia";
import { IoTvOutline } from "react-icons/io5";

export const Categories = [
    {
        icon: <FaRegStar />  ,
        category: "Top"
    },
    {
        icon:  <HiMiniCpuChip/> ,
        category: "Tech & Science"
    },
    {
        icon: <BiDollarCircle/> ,
        category: "Finance"
    },
    {
        icon: <MdOutlineColorLens/> ,
        category: "Arts & Culture"
    },
    {
        icon: <LiaMedalSolid/> ,
        category: "Sports"
    },
    {
        icon: <IoTvOutline size="1rem" /> ,
        category: "Entertainment"
    }
]

export const Article = [
    {
    heading: "Tokyo Expands Underground Cavern",
    description: "Tokyo is expanding its underground flood defense system, known as the Cathedral complex, to combat the increasing threat of extreme weather events fueled by climate change. As reported by Reuters, the city is launching a seven-year, $250 million initiative to upgrade its infrastructure, including reinforcing levees, improving drainage systems, and constructing new reservoirs to handle more intense rainfall and prevent flooding in densely populated areas.",
    image: "https://www.tokyoweekender.com/wp-content/uploads/2021/03/Tokyo-Discharge-Channel-Tour-Tokyo-Weekender-feature-1024x683.jpg",
    category: "Top"
    },
    {
      heading: "The .io Ownership Battle",
      description: "The .io domain, linked to the British Indian Ocean Territory, is at the center of a contentious ownership battle involving the UK, Mauritius, and the Chagossian people, as geopolitical shifts and ethical concerns about digital colonialism emerge with the UK's decision to transfer control of the Chagos Archipelago to Mauritius.",
      image: "https://pplx-res.cloudinary.com/image/upload/v1727987295/user_uploads/fwcqpgmox/io.jpg",
      category: "Top"
    },
    {
      heading: "WWW Foundation Shut Down",
      description: "According to recent reports, the World Wide Web Foundation, founded by Sir Tim Berners-Lee in 2009 to promote an open and accessible internet, has announced its closure after 15 years of operation, citing the achievement of its primary mission as global internet access has reached nearly 70%.",
      image: "https://media.gettyimages.com/id/1164279583/photo/sir-tim-berners-lee-attends-campus-party-italia-2019.jpg?s=1024x1024&w=gi&k=20&c=ztRcad68xLf2qXONcBHq7kkWbx1zSkeb6j0UME-_1ag=",
      category: "Top"
    },
    {
      heading: "31-year Golden Owl Hunt",
      description: "After 31 years, the legendary French treasure hunt for the Golden Owl has finally concluded, as reported by BBC News. On October 3, 2024, it was announced that the buried replica of the golden owl statuette had been discovered, bringing an end to one of the world's longest-running scavenger hunts.",
      image: "https://ichef.bbci.co.uk/news/800/cpsprodpb/90FD/production/_102771173_2016-03-2015.48.40.jpg.webp",
      category: "Top"
    },
    {
      heading: "Moon-Powered Orbital Tugs",
      description: "According to TechCrunch, Argo Space Corp has secured $7.9 million in funding for its ambitious plan to develop a reusable orbital transfer vehicle powered by water extracted from the Moon, aiming to revolutionize in-space transportation and refueling capabilities.",
      image: "https://techcrunch.com/wp-content/uploads/2024/10/argo-space-corp.jpg",
      category: "Tech & Science"
    },
    {
      heading: "Four-Legged Robot Climbs Ladders",
      description: "Researchers have developed a quadrupedal robot capable of autonomously climbing vertical ladders, marking a significant advancement in robotic mobility and versatility. As reported by TechCrunch, this innovation builds upon the proliferation of four-legged robots like Boston Dynamics' Spot, showcasing their potential for complex tasks in industrial environments.",
      image: "https://wordpress-assets.futurism.com/2019/11/watch-dog-like-robot-climb-ladder.jpg",
      category: "Tech & Science"
    },
    {
      heading: "Michigan Reactor Restart",
      description: "The Palisades nuclear power plant in Michigan is poised to make history as the first U.S. nuclear reactor to restart after being shut down, backed by a $1.52 billion federal loan guarantee and additional state funding. This landmark project, aimed at reviving a critical source of carbon-free energy, is expected to power 800,000 homes and create hundreds of jobs upon its planned restart in 2025, pending regulatory approval.",
      image: "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1727980983/getty_uploads/639359612.jpg",
      category: "Tech & Science"
    },
    {
      heading: "California AI Deepfake Law Blocked",
      description: "A federal judge has blocked California's new law targeting AI-generated election deepfakes, just weeks after it was signed by Governor Gavin Newsom, citing First Amendment concerns and potential overreach in regulating political speech. The ruling comes in response to a lawsuit filed by a content creator who posted a satirical AI-generated video of Vice President Kamala Harris, which was later reposted by Elon Musk, sparking a public dispute with Governor Newsom.",
      image: "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1727969405/getty_uploads/2159615518.jpg",
      category: "Tech & Science"
    },
    {
      heading: "Oil Prices Jump",
      description: "As reported by CNBC, oil prices have surged this week, with U.S. crude jumping nearly 5% amid escalating tensions in the Middle East and concerns over potential Israeli retaliation against Iran's oil infrastructure.",
      image: "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1728013075/getty_uploads/1590134758.jpg",
      category: "Finance"
    }, 
    {
      heading: "Helene Disrupts Semiconductor Market",
      description: "ccording to reports from Sky News, Hurricane Helene has disrupted production at critical high-purity quartz mines in North Carolina, potentially impacting the global semiconductor industry and raising concerns about supply chain vulnerabilities in chip manufacturing.",
      image: "https://pplx-res.cloudinary.com/image/fetch/s--_H3vyWwp--/t_thumbnail/https://platform.vox.com/wp-content/uploads/sites/2/2024/09/Helene-NOAA.jpg%3Fcrop%3D3.2797567332754%252C0%252C93.440486533449%252C100%26quality%3D90%26strip%3Dall",
      category: "Finance"
    }, 
    {
      heading: "Facebook's $2B Creator Payout",
      description: "According to Meta, Facebook paid content creators over $2 billion in 2024, with payouts for Reels and short videos growing by more than 80% during this period. The social media giant is now consolidating its monetization programs into a streamlined Facebook Content Monetization hub, aiming to simplify the process for creators to earn from various content formats.",
      image: "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1727301652/getty_uploads/2173576388.jpg",
      category: "Finance"
    }, 
    {
      heading: "PepsiCo Buys Siete Foods for $1.2B",
      description: "PepsiCo has announced a significant acquisition in the food industry, agreeing to purchase Siete Foods, a Mexican-American brand known for its heritage-inspired products, for $1.2 billion. As reported by CNBC, this marks PepsiCo's first major food acquisition in nearly five years, aligning with the company's strategy to expand its multicultural portfolio and healthier food offerings.",
      image: "https://pplx-res.cloudinary.com/image/fetch/s--Eh40Pmnp--/t_thumbnail/https://www.bakingbusiness.com/ext/resources/2024/10/01/SieteFoods.jpg%3Fheight%3D667%26t%3D1727794009%26width%3D1001",
      category: "Finance"
    },
    {
      heading: "Mike Kelley: Ghost Superman",
      description: "Tate Modern in London unveils Ghost and Spirit, the first major UK survey exhibition of American artist Mike Kelley, showcasing his influential and experimental practice that spanned from drawings to multimedia installations. The exhibition, running from October 3rd, 2024 to March 9th, 2025, explores Kelley's provocative works that challenge societal norms and delve into themes of absence, ritual, and identity.",
      image: "https://www.designboom.com/wp-content/uploads/2024/10/mike-kelley-tate-modern-exhibition-designboom-07.jpg",
      category: "Arts & Culture"
    },
    {
      heading: "Junk Dealer's Picasso Discovery",
      description: "According to reports from The Guardian, a painting discovered by a junk dealer in a Capri cellar in 1962 has been identified as an original Picasso portrait, potentially worth millions of dollars, following expert analysis of its distinctive signature and style.",
      image: "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1725048022/getty_uploads/1316314695.jpg",
      category: "Arts & Culture"
    },
    {
      heading: "Netherlands Returns Stolen Art to Indonesia",
      description: "The Netherlands has taken a significant step in addressing its colonial past by returning 288 stolen artifacts to Indonesia, marking its second major repatriation effort since 2020 and positioning itself at the forefront of European initiatives to return colonial-era acquisitions.",
      image: "https://pplx-res.cloudinary.com/image/fetch/s--1JnextMQ--/t_thumbnail/https://bnn-news.com/wp-content/uploads/2023/07/25060700200_02e4d5c6db_k.jpg",
      category: "Arts & Culture"
    },
    {
      heading: "City Bans Fossil Fuel Travel Ads",
      description: "The Hague has made history by becoming the first city in the world to pass a binding local law banning advertisements for fossil fuel products and carbon-intensive services like cruise ships and air travel, effective January 1, 2025. This groundbreaking decision sets a precedent for other cities looking to address climate change through advertising restrictions.",
      image: "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1727909061/getty_uploads/524602672.jpg",
      category: "Arts & Culture"
    },
    {
      heading: "Tigers-Guardians Playoff Showdown",
      description: "As reported by the Associated Press, the Detroit Tigers and Cleveland Guardians, longtime AL Central rivals and Midwest neighbors, are set to face off in the postseason for the first time in October, marking a historic moment for these division competitors.",
      image: "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1728095540/getty_uploads/2175950834.jpg",
      category: "Sports"
    },
    {
      heading: "Cousins' Record-Breaking Performance",
      description: "Kirk Cousins delivered a record-breaking performance, throwing for 509 yards and four touchdowns, as the Atlanta Falcons secured a thrilling 36-30 overtime victory against the Tampa Bay Buccaneers on Thursday night.",
      image: "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1728036024/getty_uploads/2175708181.jpg",
      category: "Sports"
    },
    {
      heading: "López Goals Eliminate Dallas",
      description: "Hernán López scored two goals as the San Jose Earthquakes defeated FC Dallas 3-2, eliminating the Texas team from playoff contention in Major League Soccer. The victory marked a significant moment for the Earthquakes, who despite being at the bottom of the league standings, managed to dash the postseason aspirations of their opponents.",
      image: "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1727971431/getty_uploads/2176321050.jpg",
      category: "Sports"
    },
    {
      heading: "Badosa Halts Zhang's Run",
      description: "Paula Badosa halted Zhang Shuai's impressive comeback run at the China Open, securing a 6-1, 7-6 (4) victory to advance to the semifinals. The 19th-ranked Spaniard continued her own resurgence, having won 28 of her last 35 matches since May and reaching the semifinals in three of her past five tournaments.",
      image: "https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1727949644/getty_uploads/2176366165.jpg",
      category: "Sports"
    },
    {
      heading: "Pink Floyd Sold for $400M",
      description: "According to reports from the Financial Times and Variety, legendary British rock band Pink Floyd has sold their recorded music catalog, along with name and likeness rights, to Sony Music for approximately $400 million, marking one of the largest such deals in recent years.",
      image: "https://pplx-res.cloudinary.com/image/fetch/s--D5_dmTcr--/t_thumbnail/https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/pink-floyd-in-pink-michael-ochs-archives.jpg",
      category: "Entertainment"
    },
    {
      heading: "Joker Sequel Debuts",
      description: "The highly anticipated sequel Joker: Folie à Deux, starring Joaquin Phoenix and Lady Gaga, has made its debut, garnering mixed reviews but a 12-minute standing ovation at its Venice Film Festival premiere. This musical follow-up to the 2019 hit Joker features Phoenix reprising his role as Arthur Fleck alongside Gaga's introduction as Harley Quinn, with the film incorporating song and dance elements to express the characters' inner psyches.",
      image: "https://pplx-res.cloudinary.com/image/fetch/s--EjjVJAYU--/t_thumbnail/https://variety.com/wp-content/uploads/2024/08/Joker-folie-a-deux.jpg",
      category: "Entertainment"
    },
    {
      heading: "Disney's Star Wars Performance",
      description: "As reported by The Hollywood Reporter, Disney's stewardship of the Star Wars franchise has been marked by high budgets, scrapped projects, and fan backlash, prompting an analysis of whether the entertainment giant has been successful in managing the beloved sci-fi saga.",
      image: "https://image.cnbcfm.com/api/v1/image/107020533-1645747862894-0110ZO_0743KP.JPG?h=1045&v=1645747944&vtcrop=y&w=1858",
      category: "Entertainment"
    },
    {
      heading: "Billy Crystal's Dark Thriller",
      description: "Based on reports from TheWrap, Apple TV+ has released the first trailer for Before, a psychological thriller series starring Billy Crystal as a child psychologist with a dark secret, marking the comedian's foray into the horror genre.",
      image: "https://www.goldderby.com/wp-content/uploads/2024/10/Before_Photo_010301.jpg",
      category: "Entertainment"
    }
 ]