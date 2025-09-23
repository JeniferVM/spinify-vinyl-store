import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  id: number;
  name: string;
  author: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    id: 1,
    name: "The Dark Side of the Moon",
    author: "Pink Floyd",
    price: 45,
    description:
      "Obra maestra conceptual de 1973 que exploró temas universales como el tiempo, la muerte y la locura. Incluye 'Money' y 'Time'.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
    categoryId: 1,
    stock: 15,
  },
  {
    id: 2,
    name: "Abbey Road",
    author: "The Beatles",
    price: 48,
    description:
      "El último álbum grabado por The Beatles en 1969, famoso por su portada del cruce peatonal y 'Come Together'.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
    categoryId: 1,
    stock: 12,
  },
  {
    id: 3,
    name: "Thriller",
    author: "Michael Jackson",
    price: 42,
    description:
      "El álbum más vendido de todos los tiempos (1982). Incluye 'Billie Jean', 'Beat It' y el icónico 'Thriller'.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png",
    categoryId: 2,
    stock: 20,
  },
  {
    id: 4,
    name: "Back to Black",
    author: "Amy Winehouse",
    price: 38,
    description:
      "Álbum de 2006 que catapultó a Amy al estrellato mundial. Incluye 'Rehab' y 'Back to Black'.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b0/AmyWinehouse-BacktoBlack.jpg",
    categoryId: 6,
    stock: 14,
  },
  {
    id: 5,
    name: "The Wall",
    author: "Pink Floyd",
    price: 47,
    description:
      "Ópera rock de 1979 sobre el aislamiento y la alienación. Incluye 'Another Brick in the Wall' y 'Comfortably Numb'.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/13/PinkFloydWallCoverOriginalNoText.jpg",
    categoryId: 1,
    stock: 18,
  },
  {
    id: 6,
    name: "Hotel California",
    author: "Eagles",
    price: 44,
    description:
      "Álbum de 1976 que define el rock americano. La canción título es una de las más reconocidas de todos los tiempos.",
    image: "https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg",
    categoryId: 1,
    stock: 16,
  },
  {
    id: 7,
    name: "Born to Run",
    author: "Bruce Springsteen",
    price: 41,
    description:
      "Obra maestra de 1975 que estableció a Springsteen como 'The Boss'. Rock americano en su máxima expresión.",
    image: "https://upload.wikimedia.org/wikipedia/en/4/46/Born_to_Run.jpg",
    categoryId: 1,
    stock: 13,
  },
  {
    id: 8,
    name: "Rumours",
    author: "Fleetwood Mac",
    price: 43,
    description:
      "Álbum de 1977 nacido del caos personal de la banda. Incluye 'Go Your Own Way' y 'Don't Stop'.",
    image: "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG",
    categoryId: 2,
    stock: 17,
  },
  {
    id: 9,
    name: "The Joshua Tree",
    author: "U2",
    price: 40,
    description:
      "Álbum de 1987 que llevó a U2 al estrellato mundial. Incluye 'With or Without You' y 'Where the Streets Have No Name'.",
    image: "https://upload.wikimedia.org/wikipedia/en/6/6b/The_Joshua_Tree.png",
    categoryId: 1,
    stock: 15,
  },
  {
    id: 10,
    name: "Led Zeppelin IV",
    author: "Led Zeppelin",
    price: 46,
    description:
      "Álbum sin título oficial de 1971, hogar de 'Stairway to Heaven'. Una de las obras cumbres del hard rock.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg",
    categoryId: 1,
    stock: 11,
  },
  {
    id: 11,
    name: "OK Computer",
    author: "Radiohead",
    price: 44,
    description:
      "Álbum de 1997 que redefinió el rock alternativo. Una visión distópica de la era digital con 'Paranoid Android'.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png",
    categoryId: 3,
    stock: 12,
  },
  {
    id: 12,
    name: "Purple Rain",
    author: "Prince",
    price: 42,
    description:
      "Álbum y película de 1984 que estableció a Prince como superestrella. Incluye 'Purple Rain' y 'When Doves Cry'.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/9c/Purple_Rain_%28album%29.jpg",
    categoryId: 2,
    stock: 14,
  },
  {
    id: 13,
    name: "Sgt. Pepper's Lonely Hearts Club Band",
    author: "The Beatles",
    price: 50,
    description:
      "Obra maestra psicodélica de 1967 que cambió para siempre la música popular. Incluye 'Lucy in the Sky with Diamonds'.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/50/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg",
    categoryId: 1,
    stock: 10,
  },
  {
    id: 14,
    name: "Bad",
    author: "Michael Jackson",
    price: 40,
    description:
      "Álbum de 1987 que consolidó a Jackson como el Rey del Pop. Incluye 'Smooth Criminal' y 'Man in the Mirror'.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/51/Michael_Jackson_-_Bad.png",
    categoryId: 2,
    stock: 18,
  },
  {
    id: 15,
    name: "Wish You Were Here",
    author: "Pink Floyd",
    price: 46,
    description:
      "Tributo a Syd Barrett de 1975. Incluye 'Shine On You Crazy Diamond' y la canción título que da nombre al álbum.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a4/Pink_Floyd%2C_Wish_You_Were_Here_%281975%29.png",
    categoryId: 1,
    stock: 14,
  },
  {
    id: 16,
    name: "Physical Graffiti",
    author: "Led Zeppelin",
    price: 48,
    description:
      "Álbum doble de 1975 que muestra la versatilidad de la banda. Incluye 'Kashmir' y 'Trampled Under Foot'.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e3/Led_Zeppelin_-_Physical_Graffiti.jpg",
    categoryId: 4,
    stock: 13,
  },
  {
    id: 17,
    name: "The Chronic",
    author: "Dr. Dre",
    price: 35,
    description:
      "Álbum de 1992 que definió el G-funk y lanzó carreras. Incluye 'Nuthin' but a 'G' Thang' con Snoop Dogg.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/27/Dr_Dre_The_Chronic.jpg",
    categoryId: 6,
    stock: 16,
  },
  {
    id: 18,
    name: "Nevermind",
    author: "Nirvana",
    price: 39,
    description:
      "Álbum de 1991 que llevó el grunge al mainstream. 'Smells Like Teen Spirit' definió una generación.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
    categoryId: 5,
    stock: 19,
  },
  {
    id: 19,
    name: "What's Going On",
    author: "Marvin Gaye",
    price: 37,
    description:
      "Obra maestra socialmente consciente de 1971. Incluye 'Mercy Mercy Me' y la canción título.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/74/Marvin_Gaye_-_What%27s_Going_On.jpg",
    categoryId: 3,
    stock: 15,
  },
  {
    id: 20,
    name: "Born in the U.S.A.",
    author: "Bruce Springsteen",
    price: 38,
    description:
      "Álbum de 1984 que llevó a Springsteen al estrellato mundial. Crítica social envuelta en rock anthémico.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/01/Born_in_the_U.S.A._%28album%29.jpg",
    categoryId: 1,
    stock: 17,
  },
  {
    id: 21,
    name: "Illmatic",
    author: "Nas",
    price: 36,
    description:
      "Debut de 1994 considerado uno de los mejores álbumes de hip-hop. Líricas complejas sobre la vida en Queens.",
    image: "https://upload.wikimedia.org/wikipedia/en/2/27/IllmaticNas.jpg",
    categoryId: 6,
    stock: 14,
  },
  {
    id: 22,
    name: "Blue",
    author: "Joni Mitchell",
    price: 41,
    description:
      "Álbum introspectivo de 1971 que estableció a Mitchell como una de las mejores compositoras. Incluye 'River'.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/JoniMitchell-Blue.jpg",
    categoryId: 7,
    stock: 12,
  },
  {
    id: 23,
    name: "The Velvet Underground & Nico",
    author: "The Velvet Underground",
    price: 43,
    description:
      "Debut de 1967 producido por Andy Warhol. Influyente álbum underground con 'Heroin' y 'Sunday Morning'.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0c/VU_and_Nico.jpg",
    categoryId: 5,
    stock: 11,
  },
  {
    id: 24,
    name: "Kind of Blue",
    author: "Miles Davis",
    price: 45,
    description:
      "Obra maestra del jazz modal de 1959. Incluye 'So What' y 'All Blues'. Esencial en cualquier colección.",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9c/KindofBlue.jpg",
    categoryId: 8,
    stock: 13,
  },
  {
    id: 25,
    name: "Random Access Memories",
    author: "Daft Punk",
    price: 44,
    description:
      "Álbum de 2013 que revitalizó el disco-funk. Incluye 'Get Lucky' con Pharrell Williams y Nile Rodgers.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg",
    categoryId: 9,
    stock: 16,
  },
  {
    id: 26,
    name: "A Love Supreme",
    author: "John Coltrane",
    price: 47,
    description:
      "Suite espiritual de 1965 considerada una de las mejores grabaciones de jazz. Música como búsqueda divina.",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c7/A_Love_Supreme.jpg",
    categoryId: 8,
    stock: 10,
  },
  {
    id: 27,
    name: "Highway 61 Revisited",
    author: "Bob Dylan",
    price: 42,
    description:
      "Álbum de 1965 donde Dylan 'se volvió eléctrico'. Incluye 'Like a Rolling Stone', una de las mejores canciones jamás escritas.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/6a/Bob_Dylan_-_Highway_61_Revisited.jpg",
    categoryId: 7,
    stock: 15,
  },
  {
    id: 28,
    name: "The Miseducation of Lauryn Hill",
    author: "Lauryn Hill",
    price: 40,
    description:
      "Debut en solitario de 1998 que ganó 5 Grammys. Mezcla perfecta de hip-hop, R&B y soul con mensaje social.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/57/Lauryn_Hill_-_The_Miseducation_of_Lauryn_Hill.png",
    categoryId: 3,
    stock: 18,
  },
  {
    id: 29,
    name: "Discovery",
    author: "Daft Punk",
    price: 43,
    description:
      "Álbum de 2001 que perfeccionó la música dance electrónica. Incluye 'One More Time' y 'Harder Better Faster Stronger'.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/Daft_Punk_-_Discovery.jpg",
    categoryId: 9,
    stock: 14,
  },
  {
    id: 30,
    name: "Ready to Die",
    author: "The Notorious B.I.G.",
    price: 37,
    description:
      "Debut de 1994 que estableció a Biggie como rey del East Coast rap. Incluye 'Juicy' y 'Big Poppa'.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/f/f5/Biggie_Ready_to_Die.jpg",
    categoryId: 6,
    stock: 16,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
