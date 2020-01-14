import { SELECT_IDCHAT, PUSH_CHAT } from "../../types";

const initialState = {
  categoryList: [
    {
      name: "Love",
      id: "chatid1"
    },
    {
      name: "Develop",
      id: "chatid2"
    },
    {
      name: "Home",
      id: "chatid3"
    }
  ],
  idChat: "",
  chats: [
    {
      idChat: "chatid1",
      menssages: [
        {
          userId: "user1",
          menssage: "hello 1"
        },
        {
          userId: "user2",
          menssage: "hello 2"
        },
        {
          userId: "user3",
          menssage: "hello 3"
        }
      ],
      usersId: ["user1", "user2", "user3"]
    },
    {
      idChat: "chatid2",
      menssages: [
        {
          userId: "user1",
          menssage: "hello 1"
        },
        {
          userId: "user2",
          menssage: "hello 2"
        }
      ],
      usersId: ["user1", "user2"]
    },
    {
      idChat: "chatid3",
      menssages: [
        {
          userId: "user1",
          menssage: "hello 1"
        },
        {
          userId: "user3",
          menssage: "hello 3"
        }
      ],
      usersId: ["user1", "user3"]
    },
    {
      idChat: "user1",
      menssages: [
        {
          userId: "user1",
          menssage: "hello 1"
        }
      ],
      usersId: ["user1"]
    },
    {
      idChat: "user2",
      menssages: [
        {
          userId: "user2",
          menssage: "hello 2"
        }
      ],
      usersId: ["user2"]
    },
    {
      idChat: "user3",
      menssages: [
        {
          userId: "user3",
          menssage: "hello 3"
        }
      ],
      usersId: ["user3"]
    },
    {
      idChat: "user4",
      menssages: [
        {
          userId: "user4",
          menssage: "hello 4"
        }
      ],
      usersId: ["user4"]
    },
    {
      idChat: "user5",
      menssages: [
        {
          userId: "user5",
          menssage: "hello 5"
        }
      ],
      usersId: ["user5"]
    }
  ],
  users: [
    {
      id: "user1",
      name: "Marta",
      photo:
        "https://www.socialtools.me/blog/wp-content/uploads/2016/04/foto-de-perfil.jpg"
    },
    {
      id: "user2",
      name: "Messi",
      photo:
        "https://www.mundodeportivo.com/r/GODO/MD/p5/MasQueDeporte/Imagenes/2018/10/24/Recortada/img_femartinez_20181010-125104_imagenes_md_otras_fuentes_captura-kcOG-U452531892714hYG-980x554@MundoDeportivo-Web.JPG"
    },
    {
      id: "user3",
      name: "Veronica",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLVnFSFw-9-9nUibqBs4HdawHHxcpo8IO4has3-33P0Ic9_RWx&s"
    },
    {
      id: "user4",
      name: "Sandra",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKAcrRmrTnD4EfpU5aiYEKI_t6gqVSeNvDcyCarzEeorxt48fBXQ&s"
    },
    {
      id: "user5",
      name: "Manuel",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpAf-ExUcz4t-SWiQIn37l4Se5dMXOpDpUUpqI3Zub-0tWJyq2&s"
    },
    {
      id: "user123",
      name: "user123",
      photo:
        "https://joanboira.com/wp-content/uploads/2019/10/Retrato-de-perfil-profesional-1.jpg"
    }
  ]
};
export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_IDCHAT:
      return {
        ...state,
        idChat: action.payload
      };
    case PUSH_CHAT:
      return {
        ...state,
        chats: action.payload
      };
    default:
      return state;
  }
}
