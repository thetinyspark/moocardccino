export class Card {
    public id:number = 0; 
    public cost:number = 0; 
    public atk:number = 0; 
    public def:number = 0; 
    public price:number = 0;
    public name:string = ""; 
    public desc:string = ""; 
    public img:string = ""; 
    public type:string = "";
}

// notre classe Card possède la même forme que les données contenues dans 
// le fichier .json, on peut donc tricher un peu et utiliser (encore) un 
// raccourci de typescript.

export const DEFAULT_TYPE:string = "";

export const CARD_TYPES:any[] = [
    {type: "", name:"Tous"},
    {type: "dragon", name:"Dragon"}, 
    {type: "djin", name:"Djin"}, 
    {type: "human", name:"Humain"}, 
    {type: "Youtuber", name:"Youtuber"}
  
];

export const CARD_LIST:Card[] = [
    {
    id: 1,
    name:"Dragon blanc aux yeux bleus", 
    desc: "Il est puissant", 
    cost: 9, 
    atk: 9, 
    def: 9, 
    price: 1600, 
    type:"dragon",
    img: "/assets/dragon.jpg"
  } , 
  {
    id: 2,
    name:"Genie de la lampe", 
    desc: "Je suis, ton meillleuuuurrrrrr amiiiiii.", 
    cost: 8, 
    atk: 8, 
    def: 8, 
    price: 1600, 
    type: "djin",
    img: "/assets/genie.png"
  }, 
  {
    id: 3,
    name:"Aladdin", 
    desc: "Prince ali oui c'est bien lui, ali ababouaaaaa", 
    cost: 4, 
    atk: 3, 
    def: 7, 
    price: 400, 
    type: "human",
    img: "/assets/aladdin.jpg"
  }, 
  {
    id: 4,
    name:"Jasmine", 
    desc: "Ce rêve bleuuuuuuuuu, je n'y crois pas c'est merveilleuuxxx !!", 
    cost: 4, 
    atk: 3, 
    def: 7, 
    price: 400, 
    type: "human",
    img: "/assets/jasmine.jpg"
  }, 
  {
    id: 5,
    name:"Squeezie", 
    desc: "Yo tout le monde c'est squeezie aujourd'hui on va dérouler un thread horreur, c'est parti !", 
    cost: 5, 
    atk: 4, 
    def: 4, 
    price: 600, 
    type: "Youtuber",
    img: "/assets/squeezie.jpeg"
  }, 
  {
    id: 6,
    name:"Cyprien", 
    desc: "Pourquoi ?", 
    cost: 5, 
    atk: 5, 
    def: 3, 
    price: 600, 
    type: "Youtuber",
    img: "/assets/cyprien.jpg"
  }, 
  {
    id: 7,
    name:"Nota Bene", 
    desc: "Mes chers camarades, bien le bonjour !", 
    cost: 5, 
    atk: 5, 
    def: 5, 
    price: 600, 
    type: "Youtuber",
    img: "/assets/nota_bene.png"
  }, 
  {
    id: 8,
    name:"Sciences étonnantes", 
    desc: "Bonjour à tous, aujourd'hui nous allons parler de la courbure de l'espace temps.", 
    cost: 5, 
    atk: 1, 
    def: 9, 
    price: 600, 
    type: "Youtuber",
    img: "/assets/sciences_etonnantes.jpg"
  }
]; 
