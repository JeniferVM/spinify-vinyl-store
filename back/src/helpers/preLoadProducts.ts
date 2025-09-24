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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
    name: "Songs in the Key of Life",
    author: "Stevie Wonder",
    price: 42,
    description:
      "Obra maestra de 1976 con clásicos como 'Isn't She Lovely' y 'Sir Duke'.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e2/Songs_in_the_key_of_life.jpg",
    categoryId: 3,
    stock: 10,
  },
  {
    id: 17,
    name: "The College Dropout",
    author: "Kanye West",
    price: 40,
    description:
      "Debut de 2004 con mezcla de gospel, rap y producción innovadora. Incluye 'Jesus Walks'.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg",
    categoryId: 6,
    stock: 19,
  },
  {
    id: 18,
    name: "Horses",
    author: "Patti Smith",
    price: 34,
    description:
      "Debut de 1975 que fusiona poesía y rock; imprescindible en la historia del punk/rock alternativo.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/Cutting_card_from_Patti_Smith%27s_album%2C_Horses.jpg",
    categoryId: 1,
    stock: 12,
  },
  {
    id: 19,
    name: "Loveless",
    author: "My Bloody Valentine",
    price: 38,
    description:
      "Álbum de 1991 que definió el shoegaze: muros de guitarra, texturas y melodías etéreas.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/4b/My_Bloody_Valentine_-_Loveless.png",
    categoryId: 5,
    stock: 10,
  },
  {
    id: 20,
    name: "Electric Ladyland",
    author: "The Jimi Hendrix Experience",
    price: 45,
    description:
      "Doble álbum de 1968 y culminación creativa de Hendrix; mezcla psicodelia, blues y experimentación sonora.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/f/f2/Jimi_Hendrix_-_Electric_Ladyland.jpg",
    categoryId: 1,
    stock: 14,
  },
  {
    id: 21,
    name: "Mezzanine",
    author: "Massive Attack",
    price: 42,
    description:
      "Lanzado en 1998, mezcla trip hop y electronica con atmósferas oscuras; incluye 'Teardrop'.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e9/Massive_Attack_-_Mezzanine.png",
    categoryId: 9,
    stock: 16,
  },

  {
    id: 22,
    name: "Master of Puppets",
    author: "Metallica",
    price: 47,
    description:
      "Tercer disco (1986) de Metallica; hito del thrash/metal con riffs potentes y composición épica.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b2/Metallica_-_Master_of_Puppets_cover.jpg",
    categoryId: 4,
    stock: 13,
  },
  {
    id: 23,
    name: "DAMN.",
    author: "Kendrick Lamar",
    price: 39,
    description:
      "Álbum de 2017 que mezcla hip-hop contemporáneo con reflexiones personales y sociales.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png",
    categoryId: 6,
    stock: 18,
  },
  {
    id: 24,
    name: "Channel Orange",
    author: "Frank Ocean",
    price: 36,
    description:
      "Debut oficial (2012) que combina R&B alternativo, soul y narrativa introspectiva.",
    image: "https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg",
    categoryId: 3,
    stock: 12,
  },
  {
    id: 25,
    name: "Blue Train",
    author: "John Coltrane",
    price: 40,
    description:
      "Clásico del jazz hard-bop (1958) con composiciones inolvidables y un gran quinteto.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/68/John_Coltrane_-_Blue_Train.jpg",
    categoryId: 8,
    stock: 10,
  },

  {
    id: 26,
    name: "A Love Supreme",
    author: "John Coltrane",
    price: 47,
    description:
      "Suite espiritual de 1965 considerada una de las mejores grabaciones de jazz.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/9a/John_Coltrane_-_A_Love_Supreme.jpg",
    categoryId: 8,
    stock: 10,
  },
  {
    id: 27,
    name: "Highway 61 Revisited",
    author: "Bob Dylan",
    price: 42,
    description:
      "Álbum de 1965 donde Dylan amplió su sonido eléctrico; incluye 'Like a Rolling Stone'.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/95/Bob_Dylan_-_Highway_61_Revisited.jpg",
    categoryId: 7,
    stock: 15,
  },
  {
    id: 28,
    name: "The Miseducation of Lauryn Hill",
    author: "Lauryn Hill",
    price: 40,
    description:
      "Debut de 1998 que mezcla soul, R&B y hip-hop; ganador de múltiples Grammys.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/99/The_Miseducation_of_Lauryn_Hill.png",
    categoryId: 3,
    stock: 18,
  },
  {
    id: 29,
    name: "Discovery",
    author: "Daft Punk",
    price: 43,
    description:
      "Álbum de 2001 que perfeccionó la música dance electrónica; incluye 'One More Time'.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a1/Discovery_Daft_Punk_Japan.png",
    categoryId: 9,
    stock: 14,
  },
  {
    id: 30,
    name: "Ready to Die",
    author: "The Notorious B.I.G.",
    price: 37,
    description:
      "Debut de 1994 que marcó el sonido del East Coast rap; incluye 'Juicy' y 'Big Poppa'.",
    image: "https://upload.wikimedia.org/wikipedia/en/9/97/Ready_To_Die.jpg",
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
