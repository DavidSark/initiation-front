

// let chaussures = [
//   {
//     marque: 'Nike',
//     titre: 'Jordan Air',
//     collector: true,
//     taillesDispo: [28, 29, 30],
//     prix: 300,
//     elements: {
//       lacets: 'rouge',
//       corps: 'blanc',
//       semelle: 'bleu',
//     },
//   },
//   {
//     marque: 'Vans',
//     titre: 'Old Skool',
//     collector: false,
//     taillesDispo: [34, 36, 38],
//     prix: 70,
//     elements: {
//       lacets: 'noir',
//       corps: 'marron',
//     },
//   },
//   {
//     marque: 'Adidas',
//     titre: 'Stan Smith',
//     collector: false,
//     taillesDispo: [40, 42, 44],
//     prix: 100,
//     elements: {
//       lacets: 'vert',
//       corps: 'blanc',
//     },
//   },
//   {
//     marque: 'Nike',
//     titre: 'Air Force',
//     collector: true,
//     taillesDispo: [36, 37, 38],
//     prix: 200,
//     elements: {
//       lacets: 'bleu',
//       corps: 'marron',
//     },
//   },
//   {
//     marque: 'Nike',
//     titre: 'Air Max',
//     collector: true,
//     taillesDispo: [36, 38, 40],
//     prix: 900,
//     elements: {
//       lacets: 'jaune',
//       corps: 'vert',
//     },
//   },
//   {
//     marque: 'Vans',
//     titre: 'Era',
//     collector: false,
//     taillesDispo: [30, 32, 40],
//     prix: 40,
//     elements: {
//       lacets: 'bleu',
//       corps: 'noir',
//     },
//   },
//   {
//     marque: 'Vans',
//     titre: 'Sk8',
//     collector: false,
//     taillesDispo: [28, 30, 26],
//     prix: 40,
//     elements: {
//       lacets: 'bleu',
//       corps: 'noir',
//       languette: 'rouge',
//     },
//   },
//   {
//     marque: 'Vans',
//     titre: 'Old Skool',
//     collector: false,
//     taillesDispo: [36, 28, 60],
//     prix: 60,
//     elements: {
//       lacets: 'blanc',
//       corps: 'noir',
//       languette: 'noir',
//     },
//   },
//   {
//     marque: 'Nike',
//     titre: 'Nike SB',
//     collector: false,
//     taillesDispo: [30, 31, 32],
//     prix: 50,
//     elements: {
//       lacets: 'blanc',
//       corps: 'noir',
//     },
//   },
//   {
//     marque: 'Adidas',
//     titre: 'Old Skool',
//     collector: false,
//     taillesDispo: [29, 30, 32],
//     prix: 70,
//     elements: {
//       lacets: 'rouge',
//       corps: 'bleu',
//     },
//   },
// ];



// // const simpsons = ["Homer", "Marge", ["Bart","Lisa","Maggie"]];
// // // console.log(simpsons[1]);
// // // console.log(simpsons[2][2]);


// // //boucles
// // simpsons.forEach((simpson, index) =>{
// //     //si simpsons === array
// //     if(Array.isArray(simpson)){
// //         simpson.forEach((enfant)=>{
// //             console.log(enfant);
// //         })
// //     }else {
// //         console.log(simpson)
// //     }
// // });

// // 1. Faire une boucle sur tout le tableau et de log les chaussures une par une

// //mon code :
// // for(var i = 0; i < chaussures.length; i++){
// //     console.log(chaussures[i]);
// // };

// //correction :
// chaussures.forEach((chaussure)=>{
//   // console.log(chaussure)
// })


// // 2. Log un tableau de toutes les Nikes
// //le filtre crée un nouveau tableau avec l'élément en question

// //mon code : 
// //   let marqueNike = chaussures.filter(function(marque){
// //     return marque.marque == "Nike"
// //   });
// //   console.log(marqueNike);

// //correction :
// let nikes = chaussures.filter(({marque})=>{
//   return marque === 'Nike';
// });

// // console.log(nikes);



// // 3. Log du prix des Vans "Old Skool"
// //   let oldSkool = chaussures.filter(function(prix){
// //    if(prix.marque == 'Vans'){
// //     return console.log(`le prix des Vans Old Skool est de ${prix.prix}€`)
// // }
// //   })


// chaussures.filter(({marque, titre}) => marque === 'Vans' && titre === "Old Skool").forEach(({prix}) =>{
//   // console.log(prix)
// })


// // 4. Log un tableau de toutes les chaussures collector
// //mon code 
// //   let chaussureCollector = chaussures.filter(function(collector){
// //     return collector.collector == true
// //   })
// //   console.log(chaussureCollector);

// //correction:
// let collectors = chaussures.filter(({collector})=> collector)
// console.log(collectors)


// // 5. Log couleur lacets de la vans Sk8

// //mon code :
// //     let lacetsRougeSk8 = chaussures.filter(function(lacets){
// //        if(lacets.marque == 'Vans' && 
// //         lacets.titre == 'Sk8'
// //        ){
// //             return console.log(`la couleur de la vans sk8 est ${lacets.elements.lacets}`)
// //        }
// //   })

// //correction :
// //   let {
// //     element: {lacets},
// //   } = chaussures.find(({titre})=> titre === 'Sk8');
// //   console.log(lacets);


// // 6. Changer la couleur de la vans Sk8 en violet et log la chaussure

// //mon code 
// //   chaussures[6].elements.lacets = "violet";
// //   //console.log(chaussures[6].elements.lacets);
// //   console.log(chaussures[6])

// //correction :
// // let index = chaussures.findIndex(({titre})=> titre === 'Sk8');
// //   console.log(index);
// //   chaussures[index].elements.lacets = 'violet';

// //   let {
// //     element: {lacets: lacets2},
// //   } = chaussures.find(({titre})=> titre === 'Sk8');
// //   console.log(lacets2);


// // 7. Plus compliqué : Log le montant total de Toutes les Nikes
// // let totalNike = 0;

// // chaussures.forEach(function (nike){
// //     if(nike.marque === 'Nike'){
// //         totalNike += nike.prix
// //     }
// // })
// // console.log(`Le prix total des chaussures Nike est de : ${totalNike}€`);

// //correction : 
// let total = nikes.reduce((accumulator, chaussure)=> {
//   return accumulator + chaussure.prix
// }, 0);
// console.log(total);