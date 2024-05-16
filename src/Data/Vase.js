//Vase.js
const vases = [
    {
      "Reference No.": "1-001",
      "Artifact Type": "Calyx-kraters",
      "Inventory ID": "Syracuse 36334",
      "Provenience": "Fusco necropolis",
      "Height": 42.5,
      "Diameter": "Not specified",
      "Bibliographic References": "PP, no. 1, pi. 1 a; PPSupp, no. 1; LCS, p. 203, no. 26; Suppl. Ill, p. 99, no. 48; IGD III. 1, 3; Gogos, OJh 55, 1984, p. 45, fig. 13; A.J. N. W. Prag, The Oresteia, pi. 35 d.",
      "Imagery Description": "(a) Orestes, Electra and Pylades at the tomb of Agamemnon, (b) young satyr and maenad",
      "Additional Notes": "For a different interpretation [Iphigenia in Tauris] of the obverse, see Carlo Anti, Dioniso 10, 1947, pp. 124-36; the problem is discussed in PPSupp, pp. 25-26; see also Kossatz-Diessmann, Dramen des Aischylos, pp. 94 and 96.",
      image: '/assets/vases_images/P-1-4.png',
    },
    {
        "Reference No.": "3-014",
        "Artifact Type": "Alabastra",
        "Inventory ID": "Paestum 20347",
        "Provenience": "C. Licinella (1967)",
        "Height": 18,
        "Diameter": "Not specified",
        "Bibliographic References": "PP, no. 293; PPSupp, no. 406; Schauenburg, Jdl 87, 1972, p. 277, fig. 33.",
        "Imagery Description": "Standing draped woman with wreath and phiale facing nude Eros, holding wreath in right hand. Palmette leaves between them.",
        "Additional Notes": "Not specified",
        image: '/assets/vases_images/P-8-2.png',
      },
      {
        "Reference No.": "3-015",
        "Artifact Type": "Alabastra",
        "Inventory ID": "Madrid 11568",
        "Provenience": "Madrid",
        "Height": 17,
        "Diameter": "Not specified",
        "Bibliographic References": "PP, no. 293; PPSupp, no. 406; Schauenburg, Jdl 87, 1972, p. 277, fig. 33.",
        "Imagery Description": "Standing draped woman with wreath and phiale facing nude Eros, holding wreath in right hand. Palmette leaves between them.",
        "Additional Notes": "Not specified",
        image: '/assets/vases_images/P-13-1.png',
      },
      {
        "Reference No.": "3-639",
        "Artifact Type": "Alabastra",
        "Inventory ID": "Los Angeles, Dechter coll.",
        "Provenience": "from C. Andriuolo (1971), T. 18",
        "Height": 28.5,
        "Diameter": "Not specified",
        "Bibliographic References": "Not specified",
        "Imagery Description": "(a) Seated woman with fan by laver, Eros, (b) draped woman with fillet",
        "Additional Notes": "With this may be compared an alabastron in Toulouse (26.387) with (a) seated woman, (b) Eros.",
        image: '/assets/vases_images/P-14-1.png',
      },
      {
        "Reference No.": "3-640",
        "Artifact Type": "Alabastra",
        "Inventory ID": "Rennes D 895.1.67",
        "Provenience": "from same tomb",
        "Height": 26.2,
        "Diameter": "Not specified",
        "Bibliographic References": "Not specified",
        "Imagery Description": "(a) Seated Eros, (b) floral",
        "Additional Notes": "Not specified",
        image: '/assets/vases_images/P-14-2.png',
      },
      {
        "Reference No.": "3-678",
        "Artifact Type": "Alabastron (frr.)",
        "Inventory ID": "Paestum",
        "Provenience": "",
        "Height": 19,
        "Diameter": "Not specified",
        "Bibliographic References": "PAdd, no. A 372",
        "Imagery Description": "(a) Draped woman, (b) fragment of upper part of Eros.",
        "Additional Notes": "Not specified.",
        image: '/assets/vases_images/P-15-1.png',
      },
      {
        "Reference No.": "3-435",
        "Artifact Type": "Bell-kraters",
        "Inventory ID": "Benevento from Montesarchio, T. 1421",
        "Provenience": "",
        "Height": 42,
        "Diameter": "Not specified",
        "Bibliographic References": "Not specified",
        "Imagery Description": "(a) Woman putting incense on thymiaterion, (b) nude youth moving to right and looking back left, drapery over both arms, tambourine in right hand, spray in left",
        "Additional Notes": "Not specified",
        image: '/assets/vases_images/P-16-1.png',
      },
      {
        "Reference No.": "3-436",
        "Artifact Type": "Bell-kraters",
        "Inventory ID": "Louvre K 267",
        "Provenience": "Not specified",
        "Height": 32,
        "Diameter": 36,
        "Bibliographic References": "PPSupp, no. 466",
        "Imagery Description": "(a) Woman with mirror seated on altar, (b) standing woman with wreath",
        "Additional Notes": "Not specified",
        image: '/assets/vases_images/P-17-1.png',
      },
      {
        "Reference No.": "3-456",
        "Artifact Type": "Bell-kraters",
        "Inventory ID": "S. Agata 140",
        "Provenience": "",
        "Height": 34.5,
        "Diameter": "Not specified",
        "Bibliographic References": "PAdd, no. A 271",
        "Imagery Description": "(a) Nude youth with raised foot by altar, (b) seated woman.",
        "Additional Notes": "Not specified",
        image: '/assets/vases_images/P-19-1.png',
      },
    {
      "Reference No.": "1-002",
      "Artifact Type": "Calyx-kraters",
      "Inventory ID": "West Berlin F 3296",
      "Provenience": "Palazzuolo",
      "Height": 52,
      "Diameter": 51,
      "Bibliographic References": "PP, no. 2, pis. 2 a and 3 a; PPSupp, no. 2; LCS, p. 203, no. 27; Suppl. Ill, p. 99, no. 49; van der Meer, BABesch 52-3, 1977-8, fig. 40; Trendall, Festschrift Hemelrijk, p. 159, fig. 2.",
      "Imagery Description": "(a) Punishment of Dirce and Lykos, (b) maenad between two satyrs",
      "Additional Notes": "Not specified",
      image: '/assets/vases_images/P-20-1.png',
    },
    {
      "Reference No.": "1-003",
      "Artifact Type": "Calyx-kraters",
      "Inventory ID": "Palermo 2198 (old no. 3480)",
      "Provenience": "Gela",
      "Height": 32.5,
      "Diameter": "Not specified",
      "Bibliographic References": "LCS, p. 203, no. 28a, pi. 80,1 (reverse); Suppl. Ill, p. 99, no. 51.",
      "Imagery Description": "(a) Standing draped woman, resting r. arm on pillar, Eros beside seated woman looking into mirror, half-draped youth; bust of silen, above, (b) draped woman with fillet in r. hand, young satyr bending forward with phiale in r. hand",
      "Additional Notes": "Not specified",
      image: '/assets/vases_images/P-23-2.png',
    },
    {
      "Reference No.": "1-004",
      "Artifact Type": "Calyx-kraters",
      "Inventory ID": "Vatican U 21 (inv. 17969)",
      "Provenience": "Not specified",
      "Height": 42,
      "Diameter": 40,
      "Bibliographic References": "PP, no. 3, pi. 3 c (obverse); PPSupp, no. 3, pi. 2 a (reverse); LCS, p. 203, no. 28; Suppl. Ill, p. 99, no. 50.",
      "Imagery Description": "(a) Three maenads and a satyr, (b) two draped youths",
      "Additional Notes": "Not specified",
      image: '/assets/vases_images/P-25-1.png',
    },
    {
      "Reference No.": "1-005",
      "Artifact Type": "Calyx-kraters",
      "Inventory ID": "Vienna 986",
      "Provenience": "Not specified",
      "Height": 37.5,
      "Diameter": "Not specified",
      "Bibliographic References": "PP, no. 4, pi. 3 d; PPSupp, no. 4; LCS, p. 204, no. 29; Suppl. Ill, p. 99, no. 52; LIMC III, p. 923, Eros 872, pi. 658, 6.",
      "Imagery Description": "(a) Maenad, with Eros, seated between two silens, (b) two draped women, l. with thyrsus, r. with pomegranate and fillet",
      "Additional Notes": "For the open box below the seated maenad to r., cf. no. 3.",
      image: '/assets/vases_images/P-29-2.png',
    },
    {
      "Reference No.": "1-006",
      "Artifact Type": "Calyx-kraters",
      "Inventory ID": "Madrid 11568",
      "Provenience": "Not specified",
      "Height": 31,
      "Diameter": "Not specified",
      "Bibliographic References": "PPSupp, no. 5, pi. 1 a and b; LCS, p. 204, no. 30; Suppl. Ill, p. 99, no. 53.",
      "Imagery Description": "(a) Phlyax scene—Zeus, with thunderbolt in l. hand and stick in r., between two phlyakes, l. with basket on his head, r. playing the flute, (b) two draped youths, l. with thyrsus, r. with stick",
      "Additional Notes": "Not specified",
      image: '/assets/vases_images/P-29-5.png',
    },
    {
      "Reference No.": "1-007",
      "Artifact Type": "Bell-kraters",
      "Inventory ID": "Syracuse 36332",
      "Provenience": "Fusco necropolis",
      "Height": 43.5,
      "Diameter": "Not specified",
      "Bibliographic References": "PP, no. 5, pis. 2 A and 3 b; PPSupp, no. 6; LCS, p. 204, no. 31; Suppl. Ill, p. 100, no. 54.",
      "Imagery Description": "(a) Theseus, holding sword and scabbard, and Athena, with spear and shield, with two Amazons, (b) two Amazons",
      "Additional Notes": "For the pose of Athena, cf. BM 1882,0311. 4 (D. von Bothmer in LIMC I, p. 739, no. 47, pl. 470).",
      image: '/assets/vases_images/P-31-4.png',
    },
    {
      "Reference No.": "1-008",
      "Artifact Type": "Bell-kraters",
      "Inventory ID": "Göttingen 562",
      "Provenience": "Not specified",
      "Height": 41.7,
      "Diameter": "Not specified",
      "Bibliographic References": "PP, no. 6, pi. 4 a and b; PPSupp, no. 7; LCS, p. 204, no. 32; Suppl. Ill, p. 100, no. 55.",
      "Imagery Description": "(a) Kitharoidos and citharist, (b) two Amazons",
      "Additional Notes": "Not specified",
      image: '/assets/vases_images/P-36-2.png',
    },
    {
      "Reference No.": "1-009",
      "Artifact Type": "Bell-kraters",
      "Inventory ID": "Athens 14754 (B 254)",
      "Provenience": "Nola",
      "Height": 41.3,
      "Diameter": "Not specified",
      "Bibliographic References": "PP, no. 7, pis. 4 a and 5 a; PPSupp, no. 8; LCS, p. 204, no. 33; Suppl. Ill, p. 100, no. 56.",
      "Imagery Description": "(a) Youth leaning on staff, two women, l. with mirror, r. with cista, Eros between, (b) two Amazons",
      "Additional Notes": "Not specified",
      image: '/assets/vases_images/P-37-1.png',
    },
    {
      "Reference No.": "1-010",
      "Artifact Type": "Bell-kraters",
      "Inventory ID": "Copenhagen 4758",
      "Provenience": "Not specified",
      "Height": 44,
      "Diameter": "Not specified",
      "Bibliographic References": "PP, no. 8, pi. 5 b and 6 a; PPSupp, no. 9; LCS, p. 204, no. 34; Suppl. Ill, p. 100, no. 57.",
      "Imagery Description": "(a) Phlyax scene—old woman, wearing large nose-ring, between two comic actors, (b) two Amazons",
      "Additional Notes": "Not specified",
      image: '/assets/vases_images/P-38-1.png',
    },
    {
        "Reference No.": "3-457",
        "Artifact Type": "Bell-krater",
        "Inventory ID": "Naples 1876 (inv. 82614) from Abella",
        "Provenience": "",
        "Height": 26,
        "Diameter": "Not specified",
        "Bibliographic References": "PP, no. 340; PPSupp, no. 458",
        "Imagery Description": "(a) Youth with fillet and spray, (b) draped woman with fillet and spray.",
        "Additional Notes": "Not specified",
        image: '/assets/vases_images/P-41-1.png',
      },
      {
        "Reference No.": "3-458",
        "Artifact Type": "Bell-krater",
        "Inventory ID": "Genoa 1225",
        "Provenience": "",
        "Height": 32,
        "Diameter": 27,
        "Bibliographic References": "PPSupp, no. 457; CVA, IV Gs, pi. 1,1-3",
        "Imagery Description": "(a) Nude youth bending forward in front of altar, (b) standing draped woman, with phiale.",
        "Additional Notes": "Not specified",
        image: '/assets/vases_images/P-43-1.png',
      },
      {
        "Reference No.": "3-499",
        "Artifact Type": "Bell-krater",
        "Inventory ID": "Paestum, from C. Spina-Gaudo (1979), T. 75",
        "Provenience": "Not specified",
        "Height": "Not specified",
        "Diameter": 21,
        "Bibliographic References": "Not specified",
        "Imagery Description": "(a) Female head, (b) Female head",
        "Additional Notes": "Not specified",
        image: '/assets/vases_images/P-45-1.png',
      },
    {
      "Reference No.": "1-011",
      "Artifact Type": "Bell-kraters",
      "Inventory ID": "Tübingen L 290",
      "Provenience": "Not specified",
      "Height": 43.5,
      "Diameter": "Not specified",
      "Bibliographic References": "PP, no. 9, pi. 6 b; PPSupp, no. 10; LCS, p. 204, no. 35; Suppl. Ill, p. 100, no. 58.",
      "Imagery Description": "(a) Two draped youths, l. with thyrsus, r. with situla, Eros flying to r., (b) two Amazons",
      "Additional Notes": "For the pose of Eros, cf. nos. 5, 10.",
      image: '/assets/vases_images/P-52-1.png',
    }
    
  ];
  
  export default vases;
  