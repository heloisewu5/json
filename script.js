let pageTitleElement;
let outputGridElement;
let projectDisplayElement;

let portfolioCollection = [
  {
    "itemTitle" : "flowers beside the river",
    "category" : "2D",
    "id" : "flowers",
    "description" : "Medium | color pencil and acrylic. 30 x 21 cm. I collected flowers in my hometown by the lake of Kaohsiung Museum of Fine Art, Taiwan. I found them beside the road and decided to draw them as I watched the sun goes down. Instead of duplicating the flower as exactly it is, the flowly lines are meant to depict a more organic form. 'En plein air', the technique defined as drawing life paintings in outdoor environment, is used to juxtapose with the typical studio painting or traditional still life techniques.",
    "image" : "IMG_1431.jpg"
  },
  {
    "itemTitle" : "幻. / illusions",
    "category" : "3D",
    "id" : "ceramic",
    "description" : "Medium | ceramic installation. Dimensions Variable (9 pieces). The medium of ceramic and the irregularity of the forms are intended to express that imperfections are natural and inevitable. Thus, being perfect is an illusion because there is no route to reach the ultimate perfection. Perhaps, accepting to be imperfect is already a form of being perfect. I utlized white clay and left its original skin uncolored. I want to emphasize the different forms with the same medium, that one creates many illusions for themselves. The pressed marks and folds of the clay are as like imaginary, as if you could press them and manipulate their shapes but you could not.",
    "image" : "allcera.png"
  },
  {
    "itemTitle" : "舞. / dancing ceramics",
    "category" : "2D",
    "id" : "blue",
    "description" : "Medium | color pencil, acrylic, whiteout, charcoal, 54 x 39 cm. This piece intends to showcase the contradiction of a perfectly copied still life image versus the ceramic installation Illusion, which consists of organic forms that are seemingly alive. Different from traditional still life drawing, I incorporated mixed media materials with a more vibrant color palette and furious lines.",
    "image" : "IMG_2903_3.jpg"
  },
  {
    "itemTitle" : "On the Clouds",
    "category" : "2D",
    "id" : "crayon",
    "description" : "Medium | crayon, oil, cotton. 55 x 39 cm. Using cotton to wrap around the edge of the painting contrasts with the conventional farming method. The material choice of cotton creates a lightweight feeling for the eyes. A realistic style of flowers in a vase exemplifies the traditional way of painting still life objects.",
    "image" : "IMG_9325_jpg.jpg"
  },
  {
    "itemTitle" : "On the Bed",
    "category" : "3D",
    "id" : "collage",
    "description" : "Medium | mixed media. 30 x 40 cm. This collage has a more pragmatic approach. Objects were carefully considered for placement and arrangement. The color scheme mimics the postmodern style with a light pastel cream palette. This piece exemplifies the meaning of collage with a more regulated mind and design principles, contrasting the typical 'Dadaism' way of collaging: let things be the way they are without overly controlling them. Yet the choice of mixed media breaks the conventional rule of a two-dimensional painting.",
    "image" : "IMG_9290_jpg.jpg"
  },
  {
    "itemTitle" : "waves",
    "category" : "3D",
    "id" : "arch",
    "description" : "Medium | mixed media. 40 x 50 cm. Setting apart from common arrangements of architectural models, this piece intends to exemplify how spaces, values of light and shadow can be created in organic lines. This piece was inspired by the nature, that I believe nothing from the nature is formed by perfect straight lines. This piece focuses on how space can be manipulated. In result, I placed stripes of paper crossing over the glass frame. Looking at the piece from multiple angles, there would be different shapes of light and shadow created depending on where you are and when you are observing it. This piece demonstrates: how lines form the space we can see from human eyes, how shape defines the kind of space we see, and how light establishes natural values and gradients of shadow. ",
    "image" : "IMG_1757.jpg"
  },
  {
    "itemTitle" : "Still life practice",
    "category" : "2D",
    "id" : "charcoal",
    "description" : "Medium | charcoal. 55 x 39 cm. This piece intends to showcase the conventional ways and standardized perfection in art. The sketch is sharp and clean, with a clear focus on the still life object. This work juxtaposes with other pieces in this exhibition to exemplify the contradictory feeling of perfectionism. Placing it on the edge of the exhibition, the idea extends further from standardized lines into more abstract drawings. ",
    "image" : "IMG_1605_2.jpg"
  },
  {
    "itemTitle" : "pink",
    "category" : "2D",
    "id" : "pink",
    "description" : "Medium | color pencil. 27 x 39 cm. I intended to create the abstract line drawings as if they form a maze of web of complex feelings, such as the frustration of having perfectionism standards for self. When you push yourself to optimize something, it is like entering a maze, and you are never going to find that end goal of perfection. Echoing with the ceramics, the line-making is more of a physical process rather than an image-making pursuit.",
    "image" : "IMG_1759.jpg"
  },
  {
    "itemTitle" : "blue1",
    "category" : "2D",
    "id" : "digital",
    "description" : "Medium | digital art. The piece echoes the work 'dancing ceramics'. It shows various compositions of organic shapes, like the ceramic series Illusion. The piece also incorporates the idea of irregularity. There is no right or wrong in art. Instead, art is a multifaceted experience and has different approaches, like these compositions.",
    "image" : "blue.jpg"
  },
  {
    "itemTitle" : "white ceramics",
    "category" : "2D",
    "id" : "white",
    "description" : "Medium | color pencil, crayon, pastels",
    "image" : "IMG_1453.jpg"
  },

  {
    "itemTitle" : "Out of control",
    "category" : "3D",
    "id" : "heart",
    "description" : "Medium | mixed media. In this piece, I intend to express the compulsion of desiring perfection vs. remaining something that is unrefined and pure. The choice of collage represents how artists tend to create pieces with an intuitive flow, yet it is difficult to control the mind when striving to make a piece good through multiple edits and arrangements. Ultimately, minds go out of control.",
    "image" : "IMG_6465_jpg.jpg"
  },

  {
    "itemTitle" : "about me",
    "category" : "aboutme",
    "id" : "aboutme",
    "description" : "under construction...",
    "image" : "me.jpg"
  },

  {
    "itemTitle" : "The Matcha Site",
    "category" : "digital",
    "id" : "matcha",
    "description" : "Tools: Sublime Text (HTML, CSS, Javascript), Adobe Photoshop. Midterm project for Intro to Web Development DM-UY 2193 course for the Integrated Design & Media major at NYU. Link: http://heloisewu5.github.io/matchasite/",
    "image" : "thematchasite.png"
  },
  {
    "itemTitle" : "Sound & Vision",
    "category" : "digital",
    "id" : "soundnvision",
    "description" : "Tools: Adobe Premiero pro. A project for Still and Moving Images DM-UY 2263 course for the Integrated Design & Media major at NYU. Link: https://www.youtube.com/watch?v=2nBvLIK9rdM&ab_channel=HeloiseWu",
    "image" : "soundnvision.png"
  },
  {
    "itemTitle" : "Future casting: A Memory Palace",
    "category" : "digital",
    "id" : "futurecasting",
    "description" : "Tools: Blender, Adobe Premiero pro. Final project for Ideation & Prototyping DM-UY 1143 course for the Integrated Design & Media major at NYU. Link: https://www.youtube.com/watch?v=wym_Gb2LCQs&ab_channel=HeloiseWu",
    "image" : "memory.png"
  },
   {
    "itemTitle" : "Interactive Kiosk",
    "category" : "digital",
    "id" : "kiosk",
    "description" : "Tools: Adobe XD, Adobe Illustrator. Final project for Visual Foundation Studio DM-UY 1123 course for the Integrated Design & Media major at NYU. ",
    "image" : "capri.png"
  },
  
  {
    "itemTitle" : "Zodiac Placemat",
    "category" : "digital",
    "id" : "mat",
    "description" : "Tools: Adobe Indesign, Adobe Illustrator. A project for Visual Foundation Studio DM-UY 1123 course for the Integrated Design & Media major at NYU. ",
    "image" : "placemat.png"
  },
];

document.addEventListener("DOMContentLoaded", function(){

  /* Get page element references */
  pageTitleElement = document.getElementById("pageTitle");
  outputGridElement = document.getElementById("outputGrid");
  projectDisplayElement = document.getElementById("projectDisplay");

  /* Get URL Params */
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let urlSection = urlParams.get('section');
  let urlID = urlParams.get('id');

  if (urlSection != "item") { /* Display project previews in grid */

    /* Set page title if we are in a specific section */
    if (urlSection == "2D") {
      pageTitleElement.innerText = "2D  w o r k s:";
    }
    else if (urlSection == "3D") {
      pageTitleElement.innerText = "3D w o r k s:";
    }
    else if (urlSection == "digital") {
      pageTitleElement.innerText = "digital  w o r k s:";
    }
    else if (urlSection == "aboutme") {
      pageTitleElement.innerText = "m e:";
    }

    /* Create thumbnails for matching category, or all */
    for (let i = 0; i < portfolioCollection.length; i++) {
      if (portfolioCollection[i]["category"] == urlSection || urlSection == "" || urlSection == null){
        createProjectPreview(portfolioCollection[i]);
      }
    }

  }

  else {
    /* Display individual project by trying to match the "ID" value */
    for (let i = 0; i < portfolioCollection.length; i++) {
      if (portfolioCollection[i]["id"] == urlID) {
        createProjectPage(portfolioCollection[i]);
      }
    }
  }
});


function createProjectPreview(incomingJSON){

  let newPreviewLink = document.createElement("A");
  newPreviewLink.href = "index.html?section=item&id=" + incomingJSON["id"];

  let newPreviewElement = document.createElement("DIV");
  newPreviewLink.appendChild(newPreviewElement);

  let newPreviewTitle = document.createElement("P");
  newPreviewTitle.classList.add("previewTitle");
  newPreviewTitle.innerText = incomingJSON["itemTitle"];
  newPreviewElement.appendChild(newPreviewTitle);

  let newPreviewThumbnail = document.createElement("IMG");
  newPreviewThumbnail.classList.add("thumbnail");
  newPreviewThumbnail.src = incomingJSON["image"];
  newPreviewElement.appendChild(newPreviewThumbnail);

  outputGridElement.appendChild(newPreviewLink);

}

function createProjectPage(incomingJSON) {
  
  pageTitleElement.innerText = incomingJSON["itemTitle"];

  let newProjectElement = document.createElement("DIV");

  let newProjectImage = document.createElement("IMG");
  newProjectImage.classList.add("projectHeroImage");
  newProjectImage.src = incomingJSON["image"];
  newProjectElement.appendChild(newProjectImage);

  let newProjectDescription = document.createElement("P");
  newProjectDescription.classList.add("description");
  newProjectDescription.innerText = incomingJSON["description"];
  newProjectElement.appendChild(newProjectDescription);

  projectDisplayElement.appendChild(newProjectElement);

}