$(document).ready(function(){
    var diaryProducts = [];
    var users = [{
        name: "Cliente",
        username: "client",
        password: "client",
        role: "client",
        email: "client@panaderiapp.com",
        address: "Calle del Cliente, 1º A",
        phone: "643 982 321",
        cardNumber: "9876 5432 1098 7652",
        diaryProducts: [{"title":"Barra de pan","category":"Pan","price":0.9,"description":"El pan rústico elaborado como antaño. Pan de tipo rústico. Preparado al estilo tradicional. Su corteza fina y crujiente cubre una miga elástica con alveolos variados. Desprende un olor y sabor característico al trigo. Combinación exquisita entre corteza, miga y sabor.","image":"pan-de-pueblo.jpg","ingredients":"Harina de trigo y agua","date":"23/12/21","stock":"100","weight":"75 g","client":"client","quantity":"1"},{"title":"Pan gallego","category":"Pan","price":1.1,"description":"¡Viva Galiza! El equilibrio perfecto entre lo rústico y sabroso.","image":"pan-gallego.jpg","ingredients":"Harina de trigo y agua","date":"23/12/21","stock":"100","weight":"100 g ","quantity":"5"},{"title":"Pretzel","category":"Bollería","price":0.7,"description":"Dulcemente alemán.¡Un pecado!","image":"Pretzel.jpg","ingredients":"Harina, azúcar y levadura","date":"23/12/21","stock":"100","weight":"60 g","quantity":"1"},{"title":"Coca de crema","category":"Pasteles","price":0.8,"description":"¡La mejor calidad y sabor en un postre de toda la vida!","image":"pasteles-coca.jpg","ingredients":"Harina, mantequilla, leche, azúcar, huevo, canela y vainilla","date":"23/12/21","stock":"100","weight":"90 g","quantity":"1"},{"title":"Croissant","category":"Bollería","price":0.8,"description":"Desde París con amor. Un clásico de nuestro aparador.","image":"bolleria-croissant.jpg","ingredients":"Hojaldre, mantequilla y huevo","date":"23/12/21","stock":"100","weight":"100 g","quantity":"2"},{"title":"Ensaimada","category":"Bollería","price":0.8,"description":"El orgullo de las Islas Baleares en formato mini. Deliciosa pasta danesa en forma de espiral y recubierta de azúcar glass.","image":"bolleria-ensaimada.jpg","ingredients":"Harina, huevos, manteca de cerdo y azúcar","date":"23/12/21","stock":"100","weight":"100 g","quantity":"2"}]
    },
        {
            name: "Romeo Alonso",
            username: "romeo",
            password: "contraseña123",
            role: "client",
            email: "romeo_alonso@hotmail.com",
            address: "Calle Pez, 23, 6º B",
            phone: "625 582 121",
            cardNumber: "1232 1123 1232 3112",
            diaryProducts: [{"title":"Pan gallego","category":"Pan","price":1.1,"description":"¡Viva Galiza! El equilibrio perfecto entre lo rústico y sabroso.","image":"pan-gallego.jpg","ingredients":"Harina de trigo y agua","date":"23/12/21","stock":"100","weight":"100 g ","quantity":"5"},{"title":"Pretzel","category":"Bollería","price":0.7,"description":"Dulcemente alemán.¡Un pecado!","image":"Pretzel.jpg","ingredients":"Harina, azúcar y levadura","date":"23/12/21","stock":"100","weight":"60 g","quantity":"1"},{"title":"Coca de crema","category":"Pasteles","price":0.8,"description":"¡La mejor calidad y sabor en un postre de toda la vida!","image":"pasteles-coca.jpg","ingredients":"Harina, mantequilla, leche, azúcar, huevo, canela y vainilla","date":"23/12/21","stock":"100","weight":"90 g","quantity":"1"}]
        },
        {
            name: "Pepe González",
            username: "pepe_22",
            password: "pepazo222",
            role: "client",
            email: "pepesito@gmail.com",
            address: "Calle de los Árboles, 29, 2º C",
            phone: "666 23 12 12",
            cardNumber: "1245 1455 2531 2419",
            diaryProducts: [{"title":"Pan gallego","category":"Pan","price":1.1,"description":"¡Viva Galiza! El equilibrio perfecto entre lo rústico y sabroso.","image":"pan-gallego.jpg","ingredients":"Harina de trigo y agua","date":"23/12/21","stock":"100","weight":"100 g ","quantity":"2"},{"title":"Croissant","category":"Bollería","price":0.8,"description":"Desde París con amor. Un clásico de nuestro aparador.","image":"bolleria-croissant.jpg","ingredients":"Hojaldre, mantequilla y huevo","date":"23/12/21","stock":"100","weight":"100 g","quantity":"2"},{"title":"Ensaimada","category":"Bollería","price":0.8,"description":"El orgullo de las Islas Baleares en formato mini. Deliciosa pasta danesa en forma de espiral y recubierta de azúcar glass.","image":"bolleria-ensaimada.jpg","ingredients":"Harina, huevos, manteca de cerdo y azúcar","date":"23/12/21","stock":"100","weight":"100 g","quantity":"2"}]
        },
        {
            name: "Laura Gómez",
            username: "laurita3",
            password: "lala12122222",
            role: "client",
            email: "laurrr@gmail.com",
            address: "Calle Espíritu Santo, 17, 3º D",
            phone: "643 333 111",
            cardNumber: "6576 3653 4534 5345",
            diaryProducts: [{"title":"Hojaldre y carne ","category":"Empanadas","price":7,"description":"La empanada de los más carnívoros","image":"empanadas-carne.jpg","ingredients":"Hojaldre, tomate natural, carne de cerdo, cebolla, berenjena, pimiento y calabacīn","date":"23/12/21","stock":"100","weight":"2 kg","quantity":"1"},{"title":"Hojaldre y atún","category":"Empanadas","price":7,"description":"Un clásico de nuestra gastronomía","image":"empanadas-atun.jpg","ingredients":"Hojaldre, atún, calabacín, tomate natural, berenjena, pimientos y cebolla","date":"23/12/21","stock":"100","weight":"2 kg","quantity":"1"},{"title":"Salmón y philadelphia","category":"Empanadas","price":8.5,"description":"Una explosiva combinación exquisita para tu paladar ","image":"empanadas-slamon.jpg","ingredients":"Hojaldre, queso philadelphia, salmón y cebolla","date":"23/12/21","stock":"100","weight":"2.5 kg","quantity":"1"}]
        },
        {
            name: "Raquel Guerra",
            username: "rakeee",
            password: "*!23521JSmsn",
            role: "client",
            email: "rakel_war@gmail.com",
            address: "Calle San Bernardo, 63, 2º H",
            phone: "622 110 321",
            cardNumber: "4364 7884 4632 4222",
            diaryProducts: [{"title":"Muffin","category":"Bollería","price":0.9,"description":"Tiernas, clásicas y hechas una a una. Un clásico de cualquier panadería que se precie. Elaboradas una a una por nuestro panadero.","image":"bolleria-muffin.jpg","ingredients":"Harina, chocolate y huevo","date":"23/12/21","stock":"100","weight":"70 g","quantity":"1"},{"title":"Pretzel","category":"Bollería","price":0.7,"description":"Dulcemente alemán.¡Un pecado!","image":"Pretzel.jpg","ingredients":"Harina, azúcar y levadura","date":"23/12/21","stock":"100","weight":"60 g","quantity":"1"}]
        },
        {
            name: "Roberto Carlos",
            username: "roberto_3",
            password: "ewtwraasd",
            role: "client",
            email: "rc3@gmail.com",
            address: "Calle del Cliente, 29, 1º A",
            phone: "721 987 567",
            cardNumber: "4253 6778 8822 4679",
            diaryProducts: [{"title":"Pretzel","category":"Bollería","price":0.7,"description":"Dulcemente alemán.¡Un pecado!","image":"Pretzel.jpg","ingredients":"Harina, azúcar y levadura","date":"23/12/21","stock":"100","weight":"60 g","quantity":"1"},{"title":"Coca de crema","category":"Pasteles","price":0.8,"description":"¡La mejor calidad y sabor en un postre de toda la vida!","image":"pasteles-coca.jpg","ingredients":"Harina, mantequilla, leche, azúcar, huevo, canela y vainilla","date":"23/12/21","stock":"100","weight":"90 g","quantity":"2"},{"title":"Milhojas individuales","category":"Pasteles","price":0.8,"description":"¡Un postre de vicio elaborado en nuestro obrador!","image":"pasteles-milhojas-individual.jpg","ingredients":"Hojaldre, azúcar, canela, crema pastelera, limón y naranja","date":"23/12/21","stock":"100","weight":"90 g","quantity":"2"}]
        },
        {
            name: "Manuel Rodriguez",
            username: "mr2",
            password: "2kailsd",
            role: "client",
            email: "mr2@gmail.com",
            address: "Calle Pez, 81, 6º",
            phone: "636 832 674",
            cardNumber: "5788 9986 5433 2212",
            diaryProducts: [{"title":"Coca de crema","category":"Pasteles","price":0.8,"description":"¡La mejor calidad y sabor en un postre de toda la vida!","image":"pasteles-coca.jpg","ingredients":"Harina, mantequilla, leche, azúcar, huevo, canela y vainilla","date":"23/12/21","stock":"100","weight":"90 g","quantity":"4"},{"title":"Barra de pan","category":"Pan","price":0.9,"description":"El pan rústico elaborado como antaño. Pan de tipo rústico. Preparado al estilo tradicional. Su corteza fina y crujiente cubre una miga elástica con alveolos variados. Desprende un olor y sabor característico al trigo. Combinación exquisita entre corteza, miga y sabor.","image":"pan-de-pueblo.jpg","ingredients":"Harina de trigo y agua","date":"23/12/21","stock":"100","weight":"75 g","quantity":"1"},{"title":"Pan mollete","category":"Pan","price":1,"description":"Pan de tipo bollo originario de la región de Antequera. Pan con características propias tales como su miga blanda, esponjosa y de poca cocción. Se elabora con ingredientes naturales.","image":"pan-mollete.jpg","ingredients":"Harina de trigo y agua","date":"23/12/21","stock":"100","weight":"90 g","quantity":"1"},{"title":"Roscón","category":"Pan","price":1.2,"description":"El roscón de toda la vida","image":"pan-roscon.jpg","ingredients":"Harina de trigo y agua","date":"23/12/21","stock":"100","weight":"150 g","quantity":"1"},{"title":"Pan gramado","category":"Pan","price":0.9,"description":"Sabores de la Alhambra. Se caracteriza por su melosidad en boca.","image":"pan-gramado.jpg","ingredients":"Harina de trigo y agua","date":"23/12/21","stock":"100","weight":"110 g","quantity":"1"},{"title":"Pan gallego","category":"Pan","price":1.1,"description":"¡Viva Galiza! El equilibrio perfecto entre lo rústico y sabroso.","image":"pan-gallego.jpg","ingredients":"Harina de trigo y agua","date":"23/12/21","stock":"100","weight":"100 g ","quantity":"1"},{"title":"Croissant","category":"Bollería","price":0.8,"description":"Desde París con amor. Un clásico de nuestro aparador.","image":"bolleria-croissant.jpg","ingredients":"Hojaldre, mantequilla y huevo","date":"23/12/21","stock":"100","weight":"100 g","quantity":"1"}]
        },
        {
            name: "Patricia Rodriguez",
            username: "patriz",
            password: "pass23124",
            role: "client",
            email: "patri_saaddd@gmail.com",
            address: "Corredera Baja de San Pablo, 23, 1º A",
            phone: "6222325581",
            cardNumber: "2312 3664 5645 6457",
            diaryProducts: [{"title":"Coca de crema","category":"Pasteles","price":0.8,"description":"¡La mejor calidad y sabor en un postre de toda la vida!","image":"pasteles-coca.jpg","ingredients":"Harina, mantequilla, leche, azúcar, huevo, canela y vainilla","date":"23/12/21","stock":"100","weight":"90 g","quantity":"2"},{"title":"Pan mollete","category":"Pan","price":1,"description":"Pan de tipo bollo originario de la región de Antequera. Pan con características propias tales como su miga blanda, esponjosa y de poca cocción. Se elabora con ingredientes naturales.","image":"pan-mollete.jpg","ingredients":"Harina de trigo y agua","date":"23/12/21","stock":"100","weight":"90 g","quantity":"4"},{"title":"Roscón","category":"Pan","price":1.2,"description":"El roscón de toda la vida","image":"pan-roscon.jpg","ingredients":"Harina de trigo y agua","date":"23/12/21","stock":"100","weight":"150 g","quantity":"4"},{"title":"Muffin","category":"Bollería","price":0.9,"description":"Tiernas, clásicas y hechas una a una. Un clásico de cualquier panadería que se precie. Elaboradas una a una por nuestro panadero.","image":"bolleria-muffin.jpg","ingredients":"Harina, chocolate y huevo","date":"23/12/21","stock":"100","weight":"70 g","quantity":"3"},{"title":"Tarta de manzana","category":"Bollería","price":1,"description":"Nuestra pequeña reina de manzana.","image":"bolleria-tarta-de-manzana.jpg","ingredients":"Hojaldre, manzana, mantequilla y crema pastelera","date":"23/12/21","stock":"100","weight":"110 g","quantity":"2"},{"title":"Milhojas de crema","category":"Pasteles","price":1,"description":"¡Un postre de vicio elaborado en nuestro obrador!","image":"pasteles-milhojas.jpg","ingredients":"Hojaldre, azúcar, canela, crema pastelera, limón y naranja","date":"23/12/21","stock":"100","weight":" ","quantity":"2"},{"title":"Banda de manzana","category":"Pasteles","price":0.9,"description":"Calidad, frescura y hecha en cada obrador. ¡I-RR-E-S-I-S-T-I-B-L-E!","image":"pasteles-banda-manzana.jpg","ingredients":"Hojaldre, mantequilla, crema pastelera y manzana","date":"23/12/21","stock":"100","weight":"100 g","quantity":"2"}]
        },
        {
            name: "Jose Lopez",
            username: "jlp",
            password: "jlpplj",
            role: "client",
            email: "jlpppppp@gmail.com",
            address: "Calle del Rico, 1, 1º A",
            phone: "672 467 999",
            cardNumber: "",
            diaryProducts: diaryProducts
        },
        {
            name: "Francisco González",
            username: "frrrh",
            password: "qwe231",
            role: "client",
            email: "fad@aol.com",
            address: "Gran Vía, 22, 2º A",
            phone: "678 000 645",
            cardNumber: "",
            diaryProducts: diaryProducts
        },{
        name: "Administrador",
        username: "admin",
        password: "admin",
        role: "admin"
    }];

    localStorage.setItem("registeredUser",null);
    localStorage.setItem("users",JSON.stringify(users));

    var categories = [
        {
            "title":"Pan"
        }
        ,
        {
            "title":"Bollería"
        },
        {
            "title":"Empanadillas"
        },
        {
            "title":"Empanadas"
        },
        {
            "title":"Pasteles"
        }];

    localStorage.setItem("categories", JSON.stringify(categories));

    var specialProducts = [
        {
            "title": "Tarta de orujo gallego",
            "category": "ProductosEspeciales",
            "price": 12,
            "description": "Una exquisita tarta.",
            "image": "tartas-orujo.jpg",
            "ingredients": "Bizcocho, crema, orujo y gelatina ",
            "date":"23/12/21",
            "weight":"800 g"
        },
        {
            "title": "Tarta de tiramisú",
            "category": "ProductosEspeciales",
            "price": 11,
            "description": "Deliciosa fantasía italiana.",
            "image": "tartas-tiramisu.jpg",
            "ingredients": "bizcocho, crema, nata aromatizada con café y cacao espolvoreao ",
            "date":"23/12/21",
            "weight":"850 g "
        },
        {
            "title": "Tarta tres chocolates",
            "category": "ProductosEspeciales",
            "price": 10.50,
            "description": "Tarta con una perfecta combinación de sabores y texturas.",
            "image": "tartas-chocolates.jpg",
            "ingredients": "Tres chocolates, leche, bizcocho y cacao",
            "date":"23/12/21",
            "weight":"950 g"
        },
        {
            "title": "Tarta de oreo",
            "category": "ProductosEspeciales",
            "price": 14,
            "description": "Esta pequeña tarta semifria, gusta tanto a pequeños como a mayores.",
            "image": "tartas-oreo.jpg",
            "ingredients": "Galletas oreo, queso suave y chocolate",
            "date":"23/12/21",
            "weight":"1 kg"
        }
        ];

    localStorage.setItem("specialProducts", JSON.stringify(specialProducts));

    var products = [
        {
            "title":"Barra de pan",
            "category":"Pan",
            "price":0.90,
            "description":"El pan rústico elaborado como antaño. Pan de tipo rústico. Preparado al estilo tradicional. Su corteza fina y crujiente cubre una miga elástica con alveolos variados. Desprende un olor y sabor característico al trigo. Combinación exquisita entre corteza, miga y sabor.",
            "image":"pan-de-pueblo.jpg",
            "ingredients": "Harina de trigo y agua",
            "date":"23/12/21",
            "stock": "100",
            "weight":"75 g"
        },
        {
            "title":"Pan mollete",
            "category":"Pan",
            "price":1,
            "description":"Pan de tipo bollo originario de la región de Antequera. Pan con características propias tales como su miga blanda, esponjosa y de poca cocción. Se elabora con ingredientes naturales.",
            "image":"pan-mollete.jpg",
            "ingredients": "Harina de trigo y agua",
            "date":"23/12/21",
            "stock": "100",
            "weight":"90 g"
        },
        {
            "title":"Roscón",
            "category":"Pan",
            "price":1.20,
            "description":"El roscón de toda la vida",
            "image":"pan-roscon.jpg",
            "ingredients": "Harina de trigo y agua",
            "date":"23/12/21",
            "stock": "100",
            "weight":"150 g"
        },
        {
            "title":"Pan gramado",
            "category":"Pan",
            "price":0.90,
            "description":"Sabores de la Alhambra. Se caracteriza por su melosidad en boca.",
            "image":"pan-gramado.jpg",
            "ingredients": "Harina de trigo y agua",
            "date":"23/12/21",
            "stock": "100",
            "weight":"110 g"
        },
        {
            "title": "Pan gallego",
            "category": "Pan",
            "price": 1.10,
            "description": "¡Viva Galiza! El equilibrio perfecto entre lo rústico y sabroso.",
            "image": "pan-gallego.jpg",
            "ingredients": "Harina de trigo y agua",
            "date":"23/12/21",
            "stock": "100",
            "weight":"100 g "
        },
        {
            "title":"Croissant",
            "category":"Bollería",
            "price":0.80,
            "description":"Desde París con amor. Un clásico de nuestro aparador.",
            "image":"bolleria-croissant.jpg",
            "ingredients": "Hojaldre, mantequilla y huevo",
            "date":"23/12/21",
            "stock": "100",
            "weight":"100 g"
        },
        {
            "title":"Ensaimada",
            "category":"Bollería",
            "price":0.80,
            "description":"El orgullo de las Islas Baleares en formato mini. Deliciosa pasta danesa en forma de espiral y recubierta de azúcar glass.",
            "image":"bolleria-ensaimada.jpg",
            "ingredients": "Harina, huevos, manteca de cerdo y azúcar",
            "date":"23/12/21",
            "stock": "100",
            "weight":"100 g"
        },
        {
            "title":"Tarta de manzana",
            "category":"Bollería",
            "price":1,
            "description":"Nuestra pequeña reina de manzana.",
            "image":"bolleria-tarta-de-manzana.jpg",
            "ingredients": "Hojaldre, manzana, mantequilla y crema pastelera",
            "date":"23/12/21",
            "stock": "100",
            "weight":"110 g"
        },
        {
            "title":"Muffin",
            "category":"Bollería",
            "price":0.90,
            "description":"Tiernas, clásicas y hechas una a una. Un clásico de cualquier panadería que se precie. Elaboradas una a una por nuestro panadero.",
            "image":"bolleria-muffin.jpg",
            "ingredients": "Harina, chocolate y huevo",
            "date":"23/12/21",
            "stock": "100",
            "weight":"70 g"
        },
        {
            "title":"Pretzel",
            "category":"Bollería",
            "price":0.70,
            "description":"Dulcemente alemán.¡Un pecado!",
            "image":"Pretzel.jpg",
            "ingredients": "Harina, azúcar y levadura",
            "date":"23/12/21",
            "stock": "100",
            "weight":"60 g"
        },
        {
            "title":"Coca de crema",
            "category":"Pasteles",
            "price":0.80,
            "description":"¡La mejor calidad y sabor en un postre de toda la vida!",
            "image":"pasteles-coca.jpg",
            "ingredients": "Harina, mantequilla, leche, azúcar, huevo, canela y vainilla",
            "date":"23/12/21",
            "stock": "100",
            "weight":"90 g"
        },
        {
            "title":"Milhojas individuales",
            "category":"Pasteles",
            "price":0.80,
            "description":"¡Un postre de vicio elaborado en nuestro obrador!",
            "image":"pasteles-milhojas-individual.jpg",
            "ingredients": "Hojaldre, azúcar, canela, crema pastelera, limón y naranja",
            "date":"23/12/21",
            "stock": "100",
            "weight":"90 g"
        },
        {
            "title":"Milhojas de crema",
            "category":"Pasteles",
            "price":1,
            "description":"¡Un postre de vicio elaborado en nuestro obrador!",
            "image":"pasteles-milhojas.jpg",
            "ingredients": "Hojaldre, azúcar, canela, crema pastelera, limón y naranja",
            "date":"23/12/21",
            "stock": "100",
            "weight":" "
        },
        {
            "title":"Banda de manzana",
            "category":"Pasteles",
            "price":0.90,
            "description":"Calidad, frescura y hecha en cada obrador. ¡I-RR-E-S-I-S-T-I-B-L-E!",
            "image":"pasteles-banda-manzana.jpg",
            "ingredients": "Hojaldre, mantequilla, crema pastelera y manzana",
            "date":"23/12/21",
            "stock": "100",
            "weight":"100 g"
        },
        {
            "title":"Banda de fruta",
            "category":"Pasteles",
            "price":0.90,
            "description":"Calidad, frescura y hecha en cada obrador. ¡I-RR-E-S-I-S-T-I-B-L-E!",
            "image":"pasteles-banda-fruta.jpg",
            "ingredients": "Hojaldre, mantequilla crema pastelera y fruta de temporada",
            "date":"23/12/21",
            "stock": "100",
            "weight":" ",
        },
        {
            "title":"Hojaldre y atún",
            "category":"Empanadas",
            "price":7,
            "description":"Un clásico de nuestra gastronomía",
            "image":"empanadas-atun.jpg",
            "ingredients": "Hojaldre, atún, calabacín, tomate natural, berenjena, pimientos y cebolla",
            "date":"23/12/21",
            "stock": "100",
            "weight":"2 kg"
        },
        {
            "title":"Hojaldre y carne ",
            "category":"Empanadas",
            "price":7,
            "description":"La empanada de los más carnívoros",
            "image":"empanadas-carne.jpg",
            "ingredients": "Hojaldre, tomate natural, carne de cerdo, cebolla, berenjena, pimiento y calabacīn",
            "date":"23/12/21",
            "stock": "100",
            "weight":"2 kg"
        },
        {
            "title":"Salmón y philadelphia",
            "category":"Empanadas",
            "price":8.50,
            "description":"Una explosiva combinación exquisita para tu paladar ",
            "image":"empanadas-slamon.jpg",
            "ingredients": "Hojaldre, queso philadelphia, salmón y cebolla",
            "date":"23/12/21",
            "stock": "100",
            "weight":"2.5 kg"
        },
        {
            "title":"Lacón y chorizo ",
            "category":"Empanadas",
            "price":8,
            "description":"Una delicia para los sentidos.",
            "image":"empanadas-lacon.jpg",
            "ingredients": "Hojaldre, lacón, chorizo, tomate natural, cebolla, berenjena, pimiento y calabacín",
            "date":"23/12/21",
            "stock": "100",
            "weight":"2.1 kg"
        },
        {
            "title":"Mejillones",
            "category":"Empanadas",
            "price":8.50,
            "description":"No le dejará indiferente.",
            "image":"empanadas-mejillones.jpg",
            "ingredients": "Hojaldre, mejillones en escabeche, tomate natural, cebolla, berenjena, pimiento y calabacín",
            "date":"23/12/21",
            "stock": "100",
            "weight":"2 kg"
        },
        {
            "title":"Queso y bacon",
            "category":"Empanadillas",
            "price":0.90,
            "description":"Una apuesta segura.",
            "image":"bolleria-empanadilla-queso-bacon.jpg",
            "ingredients": "Masa escaldada con bacon y crema de queso",
            "date":"23/12/21",
            "stock": "100",
            "weight":"90 g"
        },
        {
            "title":"De carne",
            "category":"Empanadillas",
            "price":0.90,
            "description":"Nuestra empanadilla al estilo americano.",
            "image":"bolleria-empanadilla-carne.jpg",
            "ingredients": "Masa escaldada con carne 100% vacuno y crema de queso",
            "date":"23/12/21",
            "stock": "100",
            "weight":"90 g"
        },
        {
            "title":"Pisto con atún",
            "category":"Empanadillas",
            "price":0.90,
            "description":"Las empanadillas de la abuela.¡Como las de la abuela!",
            "image":"empanadilla-pisto.jpg",
            "ingredients": "Masa escaldada, tomate, cebolla, berenjena, pimiento y calabacín",
            "date":"23/12/21",
            "stock": "100",
            "weight":"90 g"
        },
        {
            "title": "Espinacas y bechamel",
            "category": "Empanadillas",
            "price": 0.90,
            "description": "¡Verde que te quiero verde! ¡Be healthy!",
            "image": "bolleria-empanadilla-espinacas.jpg",
            "ingredients": "Masa escaldada, espinacas y bechamel",
            "date":"23/12/21",
            "stock": "100",
            "weight":"90 g"

        },
        {
            "title":"Quiche",
            "category":"Empanadillas",
            "price":0.80,
            "description":"Una delicia francesa con 3 sabores a elegir ",
            "image":"bolleria-quiche.jpg",
            "ingredients": "quiche de espárragos, queso y jamón",
            "date":"23/12/21",
            "stock": "100",
            "weight":"90 g"
        }];

    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("cartCounter",0);
    var cartProducts = [];
    var diaryProducts = [];
    var deliveryNotes = [];
    localStorage.setItem("cartProducts",JSON.stringify(cartProducts));
    localStorage.setItem("diaryProducts",JSON.stringify(diaryProducts));
    localStorage.setItem("diaryProductsPaid",JSON.stringify(false));
    localStorage.setItem("deliveryNotes",JSON.stringify(deliveryNotes));

    var count = 1;
    var countdown = setInterval(function(){
        if (count === 0) {
            clearInterval(countdown);
            window.location.href = "login.html";
        }
        count--;
    }, 1000);
});
