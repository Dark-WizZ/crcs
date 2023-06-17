const dummyData = [
  {
    sno: 1,
    name: 'saharayn universal multipurose society limited',
    address: 'At & P.O. Railway Colony, Gorakkhpur, district-Gorakhpur Uttar Pradesh',
    state: 'UTTAR PRADESH',
    district: 'KUSHI NAGAR',
    areOfOp: 'Haryana, UttarPradesh, Himachal, Punjab',
    sector: 'Credit',
    latlng: [ 26.740462571754662, 83.88862683222489 ]
  },
  {
    sno: 2,
    name: 'JMJ Multi state Agro Cooperative Society Ltd.',
    address: 'TC 48/1442-1, Sreeniva, Parekkati House, Chathankulangara Temple South, Puthurkkara, Ayyanthole, Thrissur 680003 Kerala',
    state: 'KERALA',
    registrationDate: '13/10/2022',
    areOfOp: 'Bihar, West bengal, Odisha',
    sector: 'Agro',
    latlng: [ 10.3528744, 76.5120396 ]
  },
  {
    sno: 3,
    name: 'Devbhoomi Agro Multi state Cooperative Society Ltd.',
    address: 'S/o Sateesh Kumar, Tejupur, Haridwar, Uttarakhand 247661',
    state: 'UTTARAKHAND',
    registrationDate: '04/10/2022',
    areOfOp: 'Tamil Nadu, karnataks',
    sector: 'Agro',
    latlng: [ 30.0417376, 79.089691 ]
  },
  {
    sno: 4,
    name: 'Aarya Multi Specialty Cooperative Hospital and Hospital and Research Center ltd.',
    address: 'Gate No 165, Nimgaon (T), Madha, Solapur, 413210 maharashtra',
    state: 'MAHARASHTRA',
    registrationDate: '04/10/2022',
    areOfOp: 'Haryana, Punajb',
    sector: 'Health/Hospital',
    latlng: [ 18.9068356, 75.6741579 ]
  },
  {
    sno: 5,
    name: 'Agriculture Development Cooperative Federation',
    address: 'A/P 344, Lower Ground Floor, Sector 86, Preet City, SAS Nagar, Mohali, Punjab\r\n' +
      '160055',
    state: 'PUNJAB',
    registrationDate: '22/09/2022',
    areOfOp: 'Manipur, Meghalaya',
    sector: 'Federation',
    latlng: [ 30.9293211, 75.5004841 ]
  },
  {
    sno: 6,
    name: 'Prosperity Multi state Housing Cooperative Society ltd.',
    address: 'Jayem Arcade 385 A6, First Floor,\r\n' +
      'Kamarajar Road, Peelamedu, Coimbatore 641004',
    state: 'TAMIL NADU',
    registrationDate: '15/09/2022',
    areOfOp: 'Maharashtra, Gujarat, Rajasthan',
    sector: 'Housing',
    latlng: [ 10.9094334, 78.3665347 ]
  },
  {
    sno: 7,
    name: 'Greenfield Multi state Agro Allied and Marketing Cooperative Society Ltd. (GMAAMCS)',
    address: 'Plot No 92, H.No 4-487, New Balaji Nagar Colony, Meerpet, Behind Janapriya Apartments, Hyderabad 500097 Telangana',
    state: 'TELANGANA',
    registrationDate: '12/09/2022',
    areOfOp: 'Gujarat, Rajasthan',
    sector: 'Agro',
    latlng: [ 17.8495919, 79.1151663 ]
  },
  {
    sno: 8,
    name: 'Shri Sharda Agro Multi state Co- operative Society Ltd.',
    address: 'Shri Sharda Agro Multi state Co-operative Society Ltd.',
    state: 'UTTAR PRADESH',
    registrationDate: '02/09/2022',
    areOfOp: 'Maharashtra,Goa.Karnataka, Andhra Pradesh',
    sector: 'Agro',
    latlng: [ 27.1303344, 80.859666 ]
  },
  {
    sno: 9,
    name: 'Nature Delight Multi state Cooperative Dairy & Agro Products Ltd.',
    address: 'Kalas Gate, No 1189, A/P Kalas, Indapur, Pune 413105 Maharashtra',
    state: 'MAHARASHTRA',
    registrationDate: '31/08/2022',
    areOfOp: 'Andhra Pradesh, Telangna',
    sector: 'Agro',
    latlng: [ 18.9068356, 75.6741579 ]
  },
  {
    sno: 10,
    name: 'Travancore Cochin Tourism Cooperative Society Ltd',
    address: 'Idukki, Kerala 685584',
    state: 'KERALA',
    district: 'IDUKKI',
    registrationDate: '31/08/2022',
    areOfOp: 'Madhya Pradesh, Chhatisgarh, Jharkhan, Bihar',
    sector: 'Tourism',
    latlng: [ 9.8497872, 76.9797914 ]
  },
  {
    sno: 11,
    name: 'Janamaitheri Agricultural Cooperative Society Ltd.',
    address: 'Janamaitheri Agricultural Cooperative Society Ltd.',
    state: 'KERALA',
    district: 'THIRUVANANTHAPURAM',
    registrationDate: '16/08/2022',
    areOfOp: 'Maharashtra, Gujarat, Rajasthan',
    sector: 'Agro',
    latlng: [ 8.5241122, 76.9360573 ]
  },
  {
    sno: 12,
    name: 'Swaraj Multipurpose Federation of Cooperative Society Ltd',
    address: 'Shop No 2, Yadav Market, Opposite Radha Ballav mandir, Palla Chowk, Tilak Road,\r\n' +
      'Faridabad 121001 Haryana',
    state: 'HARYANA',
    registrationDate: '16/08/2022',
    areOfOp: 'Gujarat, Rajasthan',
    sector: 'Federation',
    latlng: [ 29, 76 ]
  },
  {
    sno: 13,
    name: 'Green Safe Multi state Agriculture Cooperative Society Ltd.',
    address: 'Coimbatore, Tamil Nadu',
    state: 'TAMIL NADU',
    district: 'COIMBATORE',
    registrationDate: '12/08/2022',
    areOfOp: 'Haryana, Delhi',
    sector: 'Agro',
    latlng: [ 11.0018115, 76.9628425 ]
  },
  {
    sno: 14,
    name: 'Mango Growers cooperative society Ltd. (MANCO)',
    address: 'Visakhapatnam',
    state: 'ANDHRA PRADESH',
    district: 'VISAKHAPATANAM',
    registrationDate: '10/08/2022',
    areOfOp: 'Haryana, Delhi, UttarPradesh, ',
    sector: 'Agro',
    latlng: [ 17.75540018053525, 83.25426909508256 ]
  },
  {
    sno: 15,
    name: 'Srijan Krishi Vipnan Multi state Cooperative Society Ltd.',
    address: 'Lucknow',
    state: 'UTTAR PRADESH',
    district: 'LUCKNOW',
    registrationDate: '29/07/2022',
    areOfOp: 'Uttrakhand, Himachal Pradesh, Jammu & Kashmir',
    sector: 'Agro',
    latlng: [ 26.8381, 80.9346001 ]
  },
  {
    sno: 16,
    name: 'Kamal Multispeciality Cooperative Hospital & Research center Ltd.',
    address: 'Beed Maharashtra',
    state: 'MAHARASHTRA',
    district: 'BEED',
    registrationDate: '22/07/2022',
    areOfOp: 'Maharashtra, Gujarat, Rajasthan',
    sector: 'Health/Hospital',
    latlng: [ 18.9918442, 75.90978399809711 ]
  },
  {
    sno: 17,
    name: 'Nagebaba Multi Specialty Cooperative Hospital and Research Center Ltd.',
    address: 'Ahmednagar',
    state: 'MAHARASHTRA',
    district: 'AHMEDNAGAR',
    registrationDate: '24/06/2022',
    areOfOp: 'Haryana, Punjab, Rajasthan',
    sector: 'Health/Hospital',
    latlng: [ 19.162772500000003, 74.85802430085195 ]
  },
  {
    sno: 18,
    name: 'The Urban Care Multi state Agro Cooperative Society Ltd.',
    address: 'Kerala',
    state: 'KERALA',
    district: 'KOZHIKODE',
    registrationDate: '27/06/2022',
    areOfOp: 'Haryana, Rajasthan',
    sector: 'Agro',
    latlng: [ 11.2450558, 75.7754716 ]
  },
  {
    sno: 19,
    name: 'Bharathikerkar Fishermen Cooperative Ltd. (BHARATHIKERKAR)',
    address: 'Kerala',
    state: 'KERALA',
    district: 'THRISSUR',
    registrationDate: '27/06/2022',
    areOfOp: 'Gujarat, Rajasthan, Haryana, Delhi',
    sector: 'Fisheries',
    latlng: [ 10.5256264, 76.2132542 ]
  },
  {
    sno: 20,
    name: 'Swayam Samruddhi Multi state Cooperative Society Ltd.',
    address: 'Hyderabad, Telangana',
    state: 'TELANGANA',
    district: 'HYDERABAD',
    registrationDate: '15/06/2022',
    areOfOp: 'Kerala, karnataka, Maharashtra, Gujarat',
    sector: 'Agro',
    latlng: [ 17.360589, 78.4740613 ]
  },
  {
    sno: 21,
    name: 'Shree Sai Seva Multi Specialty\r\n' +
      'Cooperative Hospital and Research center ltd',
    address: 'Ahmednagar, Maharashtra',
    state: 'MAHARASHTRA',
    district: 'AHMEDNAGAR',
    registrationDate: '15/06/2022',
    areOfOp: 'Maharashtra, Karnataka, Tamil nadu',
    sector: 'Health/Hospital',
    latlng: [ 19.162772500000003, 74.85802430085195 ]
  },
  {
    sno: 22,
    name: 'Venkateshwara Multi state Multi Specialty Hospital and Research Ltd.',
    address: 'Maharashtra',
    state: 'MAHARASHTRA',
    district: 'NASIK',
    registrationDate: '08/06/2022',
    areOfOp: 'Haryana, Gujarat, Maharashtra, Delhi',
    sector: 'Health/Hospital',
    latlng: [ 20.0112475, 73.7902364 ]
  },
  {
    sno: 23,
    name: 'Bharathimanass labour and\r\nConstruction Cooperative Ltd.',
    address: 'Manipur',
    state: 'MANIPUR',
    district: 'BISHNUPUR',
    registrationDate: '06/06/2022',
    areOfOp: 'West bengal, Andhra Pradesh',
    sector: 'Construction',
    latlng: [ 24.562463649999998, 93.8012483746545 ]
  },
  {
    sno: 24,
    name: 'Kairali Agriculture Multi state Cooperative Society Ltd.',
    address: 'Kerala',
    state: 'KERALA',
    district: 'THRISSUR',
    registrationDate: '06/06/2022',
    areOfOp: 'Maharashtra, Gujarat, Rajasthan',
    sector: 'Agro',
    latlng: [ 10.5256264, 76.2132542 ]
  },
  {
    sno: 25,
    name: 'Jewan Kothi Multi state Agro Cooperative Society Ltd.',
    address: 'Uttar Pradesh',
    state: 'UTTAR PRADESH',
    district: 'BASTI',
    registrationDate: '06/06/2022',
    areOfOp: 'Haryana, UttarPradesh, Himachal, Punjab',
    sector: 'Agro',
    latlng: [ 26.724789, 82.79326865024002 ]
  },
  {
    sno: 26,
    name: 'Bharathimanass Agriculture\r\nCooperative Ltd. (BHARATHIMANAS)',
    address: 'Manipur',
    state: 'MANIPUR',
    district: 'BISHNUPUR',
    registrationDate: '03/06/2022',
    areOfOp: 'Bihar, West bengal, Odisha',
    sector: 'Agro',
    latlng: [ 24.562463649999998, 93.8012483746545 ]
  },
  {
    sno: 27,
    name: 'Youth Employability Skill Training\r\nCooperative Educational Society Ltd.',
    address: 'PATHANAMTHITTA',
    state: 'KERALA',
    district: 'ERNAKULAM',
    registrationDate: '02/06/2022',
    areOfOp: 'Tamil Nadu, karnataks',
    sector: 'Others',
    latlng: [ 9.98408, 76.2741457 ]
  },
  {
    sno: 28,
    name: 'Jai Ratnagarbha Agriculture Multi state Cooperative Society Ltd.',
    address: 'Prayag Raj, uttar Pradesh',
    state: 'UTTAR PRADESH',
    district: 'BAREILLY',
    registrationDate: '28/05/2022',
    areOfOp: 'Haryana, Punajb',
    sector: 'Agro',
    latlng: [ 28.457876, 79.40557093743058 ]
  },
  {
    sno: 29,
    name: 'Shikharji Multi state Agro Processing and Marketing Cooperative Society\r\n' +
      'Ltd',
    address: 'Buldana, Maharashtra',
    state: 'MAHARASHTRA',
    district: 'BULDHANA',
    registrationDate: '27/05/2022',
    areOfOp: 'Manipur, Meghalaya',
    sector: 'Agro',
    latlng: [ 20.5646029, 76.40866785795339 ]
  },
  {
    sno: 30,
    name: 'News Agriculture Export & Marketing Cooperative society Ltd.',
    address: 'Kalkaji, Delhi',
    state: 'NEW DELHI',
    district: 'NEW DELHI',
    registrationDate: '21/05/2022',
    areOfOp: 'Maharashtra, Gujarat, Rajasthan',
    sector: 'Agro',
    latlng: [ 28.5681531, 77.2054264 ]
  },
  {
    sno: 31,
    name: 'Krashnadi Multi state Vehicle Services Cooperative Society Ltd.',
    address: 'Beed, maharashtra',
    state: 'MAHARASHTRA',
    district: 'BEED',
    registrationDate: '12/05/2022',
    areOfOp: 'Gujarat, Rajasthan',
    sector: 'Others',
    latlng: [ 18.9918442, 75.90978399809711 ]
  },
  {
    sno: 32,
    name: 'Lotus Multi Specialty Cooperative Hospital and Research Center Ltd.',
    address: 'Osmanabad, Maharashtra',
    state: 'MAHARASHTRA',
    district: 'BEED',
    registrationDate: '27/04/2022',
    areOfOp: 'Maharashtra,Goa.Karnataka, Andhra Pradesh',
    sector: 'Health/Hospital',
    latlng: [ 18.9918442, 75.90978399809711 ]
  },
  {
    sno: 33,
    name: 'Keshavraj Multi Speciality Cooperative Hospital & Research Centre Ltd',
    address: 'Osmanabad, Maharashtra',
    state: 'MAHARASHTRA',
    district: 'OSMANABAD',
    registrationDate: '27/04/2022',
    areOfOp: 'Andhra Pradesh, Telangna',
    sector: 'Health/Hospital',
    latlng: [ 18.16984395, 76.11796321159572 ]
  },
  {
    sno: 34,
    name: 'Keshavraj Multi Speciality Cooperative Hospital & Research Centre Ltd',
    address: 'Kolhaour, Maharashtra',
    state: 'MAHARASHTRA',
    district: 'KOLHAPUR',
    registrationDate: '27/04/2022',
    areOfOp: 'Madhya Pradesh, Chhatisgarh, Jharkhan, Bihar',
    sector: 'Health/Hospital',
    latlng: [ 16.7028412, 74.2405329 ]
  },
  {
    sno: 35,
    name: 'Vanashri Cooperative Power & Agro Progressive ltd',
    address: 'Sangli , Maharashtra',
    state: 'MAHARASHTRA',
    district: 'SANGLI',
    registrationDate: '26/04/2022',
    areOfOp: 'Maharashtra, Gujarat, Rajasthan',
    sector: 'Agro',
    latlng: [ 17.1726928, 74.58676543279755 ]
  },
  {
    sno: 36,
    name: 'Samrudh Marathwada Multi state\r\n' +
      'Vehicle Services Cooperative Society Ltd.',
    address: 'Beed, maharashtra',
    state: 'MAHARASHTRA',
    district: 'BEED',
    registrationDate: '20/04/2022',
    areOfOp: 'Gujarat, Rajasthan',
    sector: 'Others',
    latlng: [ 18.9918442, 75.90978399809711 ]
  },
  {
    sno: 37,
    name: 'Bharathiyajkl Machuwara Samudaay Cooperative Ltd.\r\n(BHARATHIJKLMASACO)',
    address: 'Baramulla, Kashmir',
    state: 'JAMMU AND KASHMIR',
    district: 'BADGAM',
    registrationDate: '18/04/2022',
    areOfOp: 'Haryana, Delhi',
    sector: 'Fisheries',
    latlng: [ 34.0385248, 74.7360163 ]
  },
  {
    sno: 38,
    name: 'Prestige Agro Multi state Cooperative Society Ltd',
    address: 'Uttar Pradesh',
    state: 'UTTAR PRADESH',
    district: 'BULANDSHAHR',
    registrationDate: '01/04/2022',
    areOfOp: 'Haryana, Delhi, UttarPradesh, ',
    sector: 'Agro',
    latlng: [ 28.38886085, 77.97479772598118 ]
  },
  {
    sno: 39,
    name: 'Vidhata Hamal Multi state Cooperative Society Ltd',
    address: 'Bhandara, Maharashtra',
    state: 'MAHARASHTRA',
    district: 'BHANDARA',
    registrationDate: '01/04/2022',
    areOfOp: 'Uttrakhand, Himachal Pradesh, Jammu & Kashmir',
    sector: 'Agro',
    latlng: [ 21.1736978, 79.6451773 ]
  },
  {
    sno: 40,
    name: 'Dr Appasahed Urf Sa. Re. Patil\r\nJayysinghpur Udgaon Sahakari Bank Ltd',
    address: 'Kolhapur, maharashtra',
    state: 'MAHARASHTRA',
    district: 'KOLHAPUR',
    registrationDate: '01/04/2022',
    areOfOp: 'Maharashtra, Gujarat, Rajasthan',
    sector: 'Cooperative Bank',
    latlng: [ 16.7028412, 74.2405329 ]
  },
  {
    sno: 41,
    name: 'Krushisadhna Mahila Multi state Agro Cooperative society Ltd',
    address: 'Nashik maharashtra',
    state: 'MAHARASHTRA',
    district: 'NASIK',
    registrationDate: '01/04/2022',
    areOfOp: 'Haryana, Punjab, Rajasthan',
    sector: 'Agro',
    latlng: [ 20.0112475, 73.7902364 ]
  },
  {
    sno: 42,
    name: 'Seva Sadan Multi Specialty\r\nCooperative Hospital and Research Center Ltd',
    address: 'Gate no. 14, Chaitnya Complex, behind Tahsil karyalaya, Shrigonda Dist - Ahmednagar Pin -413701 (Maharashtra)',
    state: 'MAHARASHTRA',
    district: 'AHMEDNAGAR',
    registrationDate: '21/03/2022',
    areOfOp: 'Haryana, Rajasthan',
    sector: 'Agro',
    latlng: [ 19.162772500000003, 74.85802430085195 ]
  },
  {
    sno: 43,
    name: 'Bulandshahr Agro Multistate cooperative Society Ltd',
    address: 'Mohalla Mahadev, Galimpur Road, Dibai, Bulandshahr, Uttar Pradesh-202393',
    state: 'UTTAR PRADESH',
    district: 'BULANDSHAHR',
    registrationDate: '21/03/2022',
    areOfOp: 'Gujarat, Rajasthan, Haryana, Delhi',
    sector: 'Agro',
    latlng: [ 28.38886085, 77.97479772598118 ]
  },
  {
    sno: 44,
    name: 'B K Dhanlakshmi Multi state Agro Cooperative Society Limited',
    address: 'Mayflower signature, Office 7B, 7th Floor, Avinashi Road, Peelumedu, Coimbatore- 641004, Tamil Nadu',
    state: 'TAMIL NADU',
    district: 'COIMBATORE',
    registrationDate: '08/03/2022',
    areOfOp: 'Kerala, karnataka, Maharashtra, Gujarat',
    sector: 'Agro',
    latlng: [ 11.0018115, 76.9628425 ]
  },
  {
    sno: 45,
    name: 'The Walmik Multi state Cooperative Handloom Weavers Cooperative Society Ltd',
    address: 'Plot No 63, Aoodumbae, Gurudev nagar, Nandanavan, Hanuman Nagar, Nagpur 440009, Maharashtra',
    state: 'MAHARASHTRA',
    district: 'NAGPUR',
    registrationDate: '21/02/2022',
    areOfOp: 'Maharashtra, Karnataka, Tamil nadu',
    sector: 'Industrial/Textile',
    latlng: [ 21.1498134, 79.0820556 ]
  },
  {
    sno: 46,
    name: 'Ente Naadu Multi state Agro Co- operative Society Ltd.',
    address: 'ST George High School, Aluva- Munnar Road, Kothamangalam, Ernakulam,\r\n' +
      '686691, Kerala',
    state: 'KERALA',
    district: 'ERNAKULAM',
    registrationDate: '03/02/2022',
    areOfOp: 'Haryana, Gujarat, Maharashtra, Delhi',
    sector: 'Agro',
    latlng: [ 9.98408, 76.2741457 ]
  },
  {
    sno: 47,
    name: 'Rajsidhi Cooperative Cotton & Agro Industries Ltd',
    address: 'Ahmednagar 414401, Maharashtra',
    state: 'MAHARASHTRA',
    district: 'AHMEDNAGAR',
    registrationDate: '12/01/2022',
    areOfOp: 'Maharashtra, Gujarat, Rajasthan',
    sector: 'Agro',
    latlng: [ 19.162772500000003, 74.85802430085195 ]
  },
  {
    sno: 48,
    name: 'Natural Agro Farming Multi state Cooperative Society Ltd.',
    address: 'D77, S/F, East of Kailash, New delhi 110065',
    state: 'NEW DELHI',
    district: 'NEW DELHI',
    registrationDate: '12/01/2022',
    areOfOp: 'Kerala, karnataka, Maharashtra, Gujarat',
    sector: 'Agro',
    latlng: [ 28.5681531, 77.2054264 ]
  },
  {
    sno: 49,
    name: 'Mansa Development Cooperative Society Ltd',
    address: '41 Sukh Sagar, phase 4 colony, near Mittal College, Rasal, Kharod Bhopal 38, Madhya Pradesh',
    state: 'MADHYA PRADESH',
    district: 'BHOPAL',
    registrationDate: '12/10/2021',
    areOfOp: 'Haryana, Delhi',
    sector: 'Agro',
    latlng: [ 23.2584857, 77.401989 ]
  },
  {
    sno: 50,
    name: 'Om Agro Multi state Cooperative society Ltd',
    address: 'Ahulana (Gohana) Sonipat Haryana 131301',
    state: 'HARYANA',
    district: 'SONIPAT',
    registrationDate: '22/11/2021',
    areOfOp: 'Haryana, Delhi',
    sector: 'Agro',
    latlng: [ 29.0033144, 77.0167323 ]
  },
  {
    sno: 51,
    name: 'Ramchandra Multi Speciality Cooperative Hospital & Research Center Ltd',
    address: 'S.No. 2/2, Near SBI bank, Savakar Colony, Islampur, Walwa, Sangli 415409,\r\n' +
      'Maharashtra',
    state: 'MAHARASHTRA',
    district: 'SANGLI',
    registrationDate: '10/11/2021',
    areOfOp: 'Haryana, UttarPradesh, Himachal, Punjab',
    sector: 'Health/Hospital',
    latlng: [ 17.1726928, 74.58676543279755 ]
  },
  {
    sno: 52,
    name: 'Mudra Agriculture & Skill Development Multistate Cooperative Society Ltd',
    address: '15-A, 3-4-757/22, APHB Building Near Raghavendra Swamy Temple Opposite Telangana Grameena Bank, Barkatputra, Hyderabad 500027',
    state: 'TELANGANA',
    district: 'ADILABAD',
    registrationDate: '12/04/2017',
    areOfOp: 'Bihar, West bengal, Odisha',
    sector: 'Agro',
    latlng: [ 19.5, 78.5 ]
  },
  {
    sno: 53,
    name: 'The Bhuj Mercantile Coop. Bank Ltd',
    address: 'Vyapar Bhawan, Mithakhali 6 Roads, Ahmedabad-380006(Gujarat)',
    state: 'GUJARAT',
    district: 'AHMADABAD',
    registrationDate: '14/09/2021',
    areOfOp: 'Tamil Nadu, karnataks',
    sector: 'Cooperative Bank',
    latlng: [ 23.0216238, 72.5797068 ]
  },
  {
    sno: 54,
    name: 'Heaven Multi state Agro Cooperative Society Ltd',
    address: 'Kh No 403, Babhani Nagar, Andar, Sominath Nagar, Ward No. 7, Deoria Kasiya Bypass Road, Deoria , Uttar Pradesh 274001',
    state: 'UTTAR PRADESH',
    district: 'MORADABAD',
    registrationDate: '14/09/2021',
    areOfOp: 'Haryana, Punajb',
    sector: 'Agro',
    latlng: [ 28.8638424, 78.80577833091104 ]
  },
  {
    sno: 55,
    name: 'The Sutex Cooperative Bank Ltd',
    address: 'Surjaram, Bachkaniwala Bhawan, Near Navjivan Circle, Udhana Magdalla Road, Surat 395017 Gujarat',
    state: 'GUJARAT',
    district: 'VALSAD',
    registrationDate: '14/09/2021',
    areOfOp: 'Manipur, Meghalaya',
    sector: 'Cooperative Bank',
    latlng: [ 20.4324018, 73.1411715553577 ]
  },
  {
    sno: 56,
    name: 'The Navbharat Multi state Agro Farming and Marketing Cooperative Society Ltd',
    address: 'Shop No 112, Floor-I, Sharda Arcade, Paliyad Road, Batod Gujarat',
    state: 'GUJARAT',
    district: 'BATOD',
    registrationDate: '09/08/2021',
    areOfOp: 'Maharashtra, Gujarat, Rajasthan',
    sector: 'Agro',
    latlng: [ 22.175399190520885, 71.66083135155507 ]
  },
  {
    sno: 57,
    name: 'BharathiMana Fishermen development Cooperative Society ltd.\r\n' +
      '(BHARATHIMANACO)',
    address: 'Kha- Potshangham Maning, Leikai, PO & PS Bishnupur 795126 Manipur',
    state: 'MANIPUR',
    district: 'BISHNUPUR',
    registrationDate: '06/07/2021',
    areOfOp: 'Gujarat, Rajasthan',
    sector: 'Fisheries',
    latlng: [ 24.562463649999998, 93.8012483746545 ]
  },
  {
    sno: 58,
    name: 'Agrovision Farmer Multi state Cooperative Society Ltd.',
    address: 'H.No 3, Gate No 1, Krishna Colony, Near Universal School, Gorakhpur Kasya Road, Deoria, Uttar Pradesh 274001',
    state: 'UTTAR PRADESH',
    district: 'DEORIA',
    registrationDate: '27/05/2021',
    areOfOp: 'Maharashtra,Goa.Karnataka, Andhra Pradesh',
    sector: 'Agro',
    latlng: [ 26.42384715, 83.76273169028727 ]
  },
  {
    sno: 59,
    name: 'Chitrakoot Multi state Agriculture Marketing Cooperative Society Ltd. (CMAMCS)',
    address: 'H.No 104, Village & Post Sahewa, thana-\r\n' +
      'Girwan, Tehsil Atarra, Banda, Uttar Pradesh 210120',
    state: 'UTTAR PRADESH',
    district: 'BANDA',
    registrationDate: '29/04/2021',
    areOfOp: 'Andhra Pradesh, Telangna',
    sector: 'Agro',
    latlng: [ 25.6258081, 80.44895991095466 ]
  },
  {
    sno: 60,
    name: 'CP Agrotech Multi state Cooperative Society Ltd.',
    address: 'C/O Manoj Kumar, Mohalla-Kannon Goyan, Kasba- Jhinjhana, Jhinjhana Rural, Shamli, Uttar Pradesh 247773',
    state: 'UTTAR PRADESH',
    district: 'MUZAFFARNAGAR',
    registrationDate: '16/03/2021',
    areOfOp: 'Madhya Pradesh, Chhatisgarh, Jharkhan, Bihar',
    sector: 'Agro',
    latlng: [ 29.44800635, 77.74068502568672 ]
  },
  {
    sno: 61,
    name: 'Simplydesi Selfhelp Products, Processing and Marketing Multi state Cooperative Society Ltd',
    address: '52, Ananda Park Extension, East Punjabi Bagh, New Delhi 110026',
    state: 'NEW DELHI',
    district: 'NEW DELHI',
    registrationDate: '24/02/2021',
    areOfOp: 'Maharashtra, Gujarat, Rajasthan',
    sector: 'Fisheries',
    latlng: [ 28.5681531, 77.2054264 ]
  },
  {
    sno: 62,
    name: 'Bharati North East Fisherman Co-operative Ltd. (BHARATICO)',
    address: 'C/O Swambha Basumatary, near Simlaguri Post Office, Simlaguri, Dhaliagaon,\r\n' +
      'Chirang(BTR), Assam 783381',
    state: 'ASSAM',
    district: 'CHIRANG',
    registrationDate: '15/02/2021',
    areOfOp: 'Gujarat, Rajasthan',
    sector: 'Fisheries',
    latlng: [ 26.6464231, 90.62415698729875 ]
  },
  {
    sno: 63,
    name: 'Chambal Agriculture Marketing Cooperative Ltd',
    address: '525, rajput Nagar, Bharouli road, Bhind, Madhya Pradesh 477001',
    state: 'MADHYA PRADESH',
    district: 'BHIND',
    registrationDate: '15/01/2021',
    areOfOp: 'Haryana, Delhi',
    sector: 'Marketing',
    latlng: [ 26.5, 78.75 ]
  },
  {
    sno: 64,
    name: 'Sharda Agro Multi state Cooperative Society Ltd',
    address: 'Bhopal, Madhya Pradesh',
    state: 'MADHYA PRADESH',
    district: 'BHOPAL',
    registrationDate: '14/12/2020',
    areOfOp: 'Haryana, Delhi, UttarPradesh, ',
    sector: 'Agro',
    latlng: [ 23.2584857, 77.401989 ]
  },
  {
    sno: 65,
    name: 'N E Railway Cooperative Credit Society Ltd,',
    address: 'Chief Worshop Manager Office, NE Railway, Izzatnagar, Bareilly, Uttar Pradesh',
    state: 'UTTAR PRADESH',
    district: 'BAREILLY',
    registrationDate: '24/11/2020',
    areOfOp: 'Uttrakhand, Himachal Pradesh, Jammu & Kashmir',
    sector: 'Credit',
    latlng: [ 28.457876, 79.40557093743058 ]
  },
  {
    sno: 66,
    name: 'Ramraja Multi state Agro Cooperative Society ltd.',
    address: '102, Eligent Tower, Royal City, Shivpuri Road, Jhansi, 284003 Uttar Pradesh',
    state: 'UTTAR PRADESH',
    district: 'JHANSI',
    registrationDate: '12/11/2020',
    areOfOp: 'Maharashtra, Gujarat, Rajasthan',
    sector: 'Agro',
    latlng: [ 25.531031149999997, 78.65268901605349 ]
  },
  {
    sno: 67,
    name: 'Vitthal Rao Shinde Sahakari Sahkar Karkhana Ltd',
    address: 'Gangamainagar, Post Pimpalner, Taluka Madha, Solapur, 413210 Maharashtra',
    state: 'MAHARASHTRA',
    district: 'SOLAPUR',
    registrationDate: '05/11/2020',
    areOfOp: 'Haryana, Punjab, Rajasthan',
    sector: 'Industrial/Textile',
    latlng: [ 17.84990665, 75.27632027348457 ]
  },
  {
    sno: 68,
    name: 'Ambika Multi state Health Service for the Weaker Section Cooperative Society Ltd',
    address: 'Sai Illam, Floor-2, 53/2, Bharatheshwarar,\r\n' +
      '3rd Street, Kodambakkam, Chennai 600024, Tamil Nadu',
    state: 'TAMIL NADU',
    district: 'CHENNAI',
    registrationDate: '14/09/2020',
    areOfOp: 'Haryana, Rajasthan',
    sector: 'Agro',
    latlng: [ 13.0836939, 80.270186 ]
  },
  {
    sno: 69,
    name: 'The UP Kisan Development cooperative Society Ltd',
    address: '65, Bheem Nagar, Vijay Khand 2, Gomti Nagar, Lucknow-226010, Uttar Pradesh',
    state: 'UTTAR PRADESH',
    district: 'LUCKNOW',
    registrationDate: '10/08/2020',
    areOfOp: 'Gujarat, Rajasthan, Haryana, Delhi',
    sector: 'Agro',
    latlng: [ 26.8381, 80.9346001 ]
  },
  {
    sno: 70,
    name: 'Farmtrade Agro Multi state Marketing Cooperative Ltd',
    address: 'B-92. Mayfiels Garden Sector 48, Gurugram- 122002',
    state: 'HARYANA',
    district: 'GURGAON',
    registrationDate: '10/08/2020',
    areOfOp: 'Kerala, karnataka, Maharashtra, Gujarat',
    sector: 'Marketing',
    latlng: [ 28.42826235, 77.00270014657752 ]
  },
  {
    sno: 71,
    name: 'Bihar state handloom Weavers Cooperative Union Ltd (BISHCOTEX)',
    address: 'Handloom Bhawan, Rajendra Place, Patna, Bihar',
    state: 'BIHAR',
    district: 'PATNA',
    registrationDate: '14/07/2020',
    areOfOp: 'Maharashtra, Karnataka, Tamil nadu',
    sector: 'Agro',
    latlng: [ 25.6093239, 85.1235252 ]
  },
  {
    sno: 72,
    name: 'Radhika Agricultural Cooperative Society Ltd',
    address: 'Swami Puran Colony, Nai Basti, Jhansi 284002, Uttar Pradesh',
    state: 'UTTAR PRADESH',
    district: 'JHANSI',
    registrationDate: '24/04/2020',
    areOfOp: 'Haryana, Gujarat, Maharashtra, Delhi',
    sector: 'Agro',
    latlng: [ 25.531031149999997, 78.65268901605349 ]
  },
  {
    sno: 73,
    name: 'Farm to Foreign Exports Entrepreneur Development Multi state Cooperative Society Ltd',
    address: 'H.No. 6-9, Gundugolanu(P.O), Bhimadole (Mandal), Andhra Pradesh-534427',
    state: 'ANDHRA PRADESH',
    district: 'WEST GODAVARI',
    registrationDate: '16/01/2020',
    areOfOp: 'Haryana, UttarPradesh, Himachal, Punjab',
    sector: 'Agro',
    latlng: [ 17, 81.166667 ]
  },
  {
    sno: 74,
    name: 'Dharitri Jute and Eco Friendly Products Multi state Cooperative Society Ltd',
    address: 'D.No.12-2-42111, Alapati Nagar, Gudimalkapur, Hyderabad-500028, Telangana',
    state: 'TELANGANA',
    district: 'ADILABAD',
    registrationDate: '12/12/2019',
    areOfOp: 'Bihar, West bengal, Odisha',
    sector: 'Agro',
    latlng: [ 19.5, 78.5 ]
  },
  {
    sno: 75,
    name: 'The Malabar Multi state Agro Cooperative Society Limited',
    address: '1st Floor, Aiswarya Complex, Thavakkara, Kannur, Kerala- 670002',
    state: 'KERALA',
    district: 'KANNUR',
    registrationDate: '20/10/2019',
    areOfOp: 'Haryana, Punajb',
    sector: 'Agro',
    latlng: [ 11.8763391, 75.3737987 ]
  },
  {
    sno: 76,
    name: 'Sai Raam Multi state Agri Cooperative Society Ltd',
    address: 'No.6. (D-18), 6th Cross West Extension, Thillai Nagar, Trichy, Tamil Nadu-620008',
    state: 'TAMIL NADU',
    district: 'DHARMAPURI',
    registrationDate: '06/12/2019',
    areOfOp: 'Manipur, Meghalaya',
    sector: 'Agro',
    latlng: [ 12.09680475, 78.19304301026716 ]
  },
  {
    sno: 77,
    name: "Prabhavana Multi state Womens' Jute and Allied Fibre Products Cooperative Society Ltd",
    address: ', House. No 2-2-647/G/18/1, Near Shivam Road, DD Colony, Hyderabad, Telangana\r\n' +
      '500013',
    state: 'TELANGANA',
    district: 'ADILABAD',
    registrationDate: '27/09/2019',
    areOfOp: 'Maharashtra, Gujarat, Rajasthan',
    sector: 'Agro',
    latlng: [ 19.5, 78.5 ]
  },
  {
    sno: 78,
    name: 'The Gayatri Cooperative Urban Bank Ltd',
    address: '7-1,72, 73,74 Gayatri Towers, Tehsil Chowrasta, Jagtial Town, Dist. Jagtail, Telangana',
    state: 'TELANGANA',
    district: 'KARIMNAGAR',
    registrationDate: '23/08/2019',
    areOfOp: 'Gujarat, Rajasthan',
    sector: 'Cooperative Bank',
    latlng: [ 18.4346438, 79.1322648 ]
  },
  {
    sno: 79,
    name: 'Shri Saibaba Multi state Cooperative Dudh Utpadak & Prakriya Sangh Ltd',
    address: 'A/p Lohgaon, Tal- Rahata, Dist. Ahmednagar, PIN 413712 Maharashtra',
    state: 'MAHARASHTRA',
    district: 'AHMEDNAGAR',
    registrationDate: '06/08/2019',
    areOfOp: 'Maharashtra,Goa.Karnataka, Andhra Pradesh',
    sector: 'Dairy',
    latlng: [ 19.162772500000003, 74.85802430085195 ]
  },
  {
    sno: 80,
    name: 'Subhiksha Organic Farmers Multi state Cooperative Society Ltd',
    address: 'Krushi Nivasa, At Kuruvalli,Thirthahalli, Shimoga, Karnataka 577432',
    state: 'KARNATAKA',
    district: 'SHIMOGA',
    registrationDate: '03/07/2019',
    areOfOp: 'Andhra Pradesh, Telangna',
    sector: 'Agro',
    latlng: [ 13.9326093, 75.574978 ]
  },
  {
    sno: 81,
    name: 'The Panipat Urban Cooperative Bank Ltd (PUCB)',
    address: '510/8, G T Road,Panipat, Haryana 132103',
    state: 'HARYANA',
    district: 'PANIPAT',
    registrationDate: '14/05/2019',
    areOfOp: 'Madhya Pradesh, Chhatisgarh, Jharkhan, Bihar',
    sector: 'Cooperative Bank',
    latlng: [ 29.3912753, 76.9771675 ]
  },
  {
    sno: 82,
    name: 'Green Earth Agro Cooperative Society Ltd',
    address: '3/170, Vishwas Khand, Gomti Society , Lucknow 226010, Uttar Pradesh',
    state: 'UTTAR PRADESH',
    district: 'LUCKNOW',
    registrationDate: '03/05/2019',
    areOfOp: 'Maharashtra, Gujarat, Rajasthan',
    sector: 'Agro',
    latlng: [ 26.8381, 80.9346001 ]
  },
  {
    sno: 83,
    name: 'Bihar Cooperative Federation Ltd',
    address: 'Budh Marg, Patna 800001, Bihar',
    state: 'BIHAR',
    district: 'PATNA',
    registrationDate: '03/10/2018',
    areOfOp: 'Gujarat, Rajasthan',
    sector: 'Agro',
    latlng: [ 25.6093239, 85.1235252 ]
  },
  {
    sno: 84,
    name: 'Bharathi Cooperative Housing Society Ltd',
    address: '87-A, Perambur High Road, Perambur Post, Chennai 600011 Tamil Nadu',
    state: 'TAMIL NADU',
    district: 'CHENNAI',
    registrationDate: '18/05/2018',
    areOfOp: 'Haryana, Delhi',
    sector: 'Housing',
    latlng: [ 13.0836939, 80.270186 ]
  },
  {
    sno: 85,
    name: "The Surat People's Cooperative Bank Ltd",
    address: 'Vasudhara Bhavan, Timalyawad, Nanpura, Surat, Gujarat',
    state: 'GUJARAT',
    registrationDate: '28/03/2018',
    areOfOp: 'Haryana, Delhi, UttarPradesh, ',
    sector: 'Cooperative Bank',
    latlng: [ 22.3850051, 71.745261 ]
  },
  {
    sno: 86,
    name: 'Sanmati Sahakari Bank Ltd',
    address: '9/114, Laxmi Market, Ichalkaranji Kolhapur, Maharashtra 416115',
    state: 'MAHARASHTRA',
    district: 'JALGAON',
    registrationDate: '27/03/2018',
    areOfOp: 'Uttrakhand, Himachal Pradesh, Jammu & Kashmir',
    sector: 'Cooperative Bank',
    latlng: [ 20.84351185, 75.52592658756026 ]
  },
  {
    sno: 87,
    name: 'Reserve Bank Staff & Officers cooperative Credit Society Ltd',
    address: 'C/ Reserve Bank of India, Amar Building, 2nd Floor, Sir P Road, Fort, Mumbai,\r\n' +
      '400001, Maharashtra',
    state: 'MAHARASHTRA',
    district: 'MUMBAI',
    registrationDate: '13/02/2018',
    areOfOp: 'Maharashtra, Gujarat, Rajasthan',
    sector: 'Credit',
    latlng: [ 19.0759899, 72.8773928 ]
  },
  {
    sno: 88,
    name: 'Dev Lok Housing Cooperative Ltd',
    address: 'A-55, Dwarka, Sector-19, New Delhi',
    state: 'NEW DELHI',
    district: 'NEW DELHI',
    registrationDate: '02/02/2018',
    areOfOp: 'Haryana, Punjab, Rajasthan',
    sector: 'Housing',
    latlng: [ 28.5681531, 77.2054264 ]
  },
  {
    sno: 89,
    name: 'Maa Vaishno Agro Multi state Cooperative Society Ltd',
    address: 'Shop No. 25, Block-A, Old LIC Building, Near BSNL Exchange, Super Market, Lalitpur,\r\n' +
      '284403, Uttar Pradesh',
    state: 'UTTAR PRADESH',
    district: 'LALITPUR',
    registrationDate: '19/01/2018',
    areOfOp: 'Haryana, Rajasthan',
    sector: 'Agro',
    latlng: [ 24.70038485, 78.51866758648347 ]
  },
  {
    sno: 90,
    name: 'Sree Balki Multi state Cooperative Housing Society Ltd',
    address: 'No. 9, Elango Street, Kabilar, Nagar,\r\n' +
      'Manavala Nagar, Tiruvallur 602002, Tamil Nadu',
    state: 'TAMIL NADU',
    district: 'THIRUVALLUR',
    registrationDate: '05/01/2018',
    areOfOp: 'Gujarat, Rajasthan, Haryana, Delhi',
    sector: 'Housing',
    latlng: [ 13.13014755, 79.92435386254968 ]
  },
  {
    sno: 91,
    name: 'Southern Multi state Agro Cooperative Society Ltd,',
    address: '27 Gokulam, Mount Pleasant Road, Conoor , Ooty, Tamil Nadu 643102',
    state: 'TAMIL NADU',
    district: 'COIMBATORE',
    registrationDate: '19/12/2017',
    areOfOp: 'Kerala, karnataka, Maharashtra, Gujarat',
    sector: 'Agro',
    latlng: [ 11.0018115, 76.9628425 ]
  },
  {
    sno: 92,
    name: 'Dombivli Nagari Sahakari Bank Ltd',
    address: 'Plot No P-52, MIDC Phase-II, Kalyan Shil Road, Dombovli (East) Maharashtra 421204',
    state: 'MAHARASHTRA',
    district: 'THANE',
    registrationDate: '28/07/2017',
    areOfOp: 'Maharashtra, Karnataka, Tamil nadu',
    sector: 'Cooperative Bank',
    latlng: [ 19.1943294, 72.9701779 ]
  },
  {
    sno: 93,
    name: 'Lucknow Division Insurance Employees Cooperative Credit Society Ltd',
    address: 'Jeevan Prakash Building, 30, Hazratganj , Lucknow, Uttar Pradesh 226001',
    state: 'UTTAR PRADESH',
    district: 'LUCKNOW',
    registrationDate: '11/07/2017',
    areOfOp: 'Haryana, Gujarat, Maharashtra, Delhi',
    sector: 'Credit',
    latlng: [ 26.8381, 80.9346001 ]
  },
  {
    sno: 94,
    name: 'The Kalyan Janata Sahakari Bank Ltd',
    address: 'Kalyanam astu, Om Vijaykrishna, Apt, Adharwadi, Kalyan, West, Thane\r\n' +
      'Maharashtra 421301',
    state: 'MAHARASHTRA',
    district: 'THANE',
    registrationDate: '24/03/2017',
    areOfOp: 'West bengal, Andhra Pradesh',
    sector: 'Cooperative Bank',
    latlng: [ 19.1943294, 72.9701779 ]
  },
  {
    sno: 95,
    name: 'The Eastern Railway Employees\r\n' +
      'Cooperative Bank Limited (Eastern & North East Frontier Railway Employees Co-\r\n' +
      'operative Bank Ltd.)',
    address: '17, Neta Ji Subhash Road, Kolkata 700001',
    state: 'WEST BENGAL',
    district: 'MALDAH',
    registrationDate: '22/03/2017',
    areOfOp: 'Maharashtra, Gujarat, Rajasthan',
    latlng: [ 25.046841999999998, 88.18732054821916 ]
  },
  {
    sno: 96,
    name: 'Purvanchal Krishi Avam Kisan kalyan Multi state Cooperative Society Ltd',
    address: 'House No. 799, Vill: Taraya Sujan, Post : Tarya Sujan, Block : Seorahi, Tehsil :\r\n' +
      'Tamkihi Raj, Dist. Kushinagar, Pin 274409,\r\n' +
      'Uttar Pradesh',
    state: 'UTTAR PRADESH',
    district: 'KUSHI NAGAR',
    registrationDate: '06/03/2017',
    areOfOp: 'Gujarat, Rajasthan, Haryana, Delhi',
    sector: 'Agro',
    latlng: [ 26.740462571754662, 83.88862683222489 ]
  },
  {
    sno: 97,
    name: 'The Ajara Urban Cooperative Bank Limited',
    address: '393-B, Main Road Ajara, Kolhapur, 416505, Maharashtra',
    state: 'MAHARASHTRA',
    district: 'KOLHAPUR',
    registrationDate: '17/02/2017',
    areOfOp: 'Kerala, karnataka, Maharashtra, Gujarat',
    sector: 'Cooperative Bank',
    latlng: [ 16.7028412, 74.2405329 ]
  },
  {
    sno: 98,
    name: 'Bihar state Housing Cooperative Federation Ltd',
    address: 'Lalit Bhawan, Bailey Road, Patna , Bihar 800014',
    state: 'BIHAR',
    district: 'BUXAR',
    registrationDate: '19/10/2016',
    areOfOp: 'Maharashtra, Karnataka, Tamil nadu',
    sector: 'Housing',
    latlng: [ 25.562071500000002, 84.01567204651289 ]
  },
  {
    sno: 99,
    name: 'The Navodit Cooperative Urban Thrift & Credit Society Ltd',
    address: '147, South Amarkali, Delhi 110051',
    state: 'NEW DELHI',
    district: 'NEW DELHI',
    registrationDate: '27/09/2016',
    areOfOp: 'Haryana, Gujarat, Maharashtra, Delhi',
    sector: 'Credit',
    latlng: [ 28.5681531, 77.2054264 ]
  },
  {
    sno: 100,
    name: 'Lokseva Multi state Credit Cooperative Society Ltd',
    address: 'A/p Tisgaon Pravara, Rahata, Ahmednagar 413712 Maharashtra',
    state: 'MAHARASHTRA',
    district: 'NAGPUR',
    registrationDate: '26/09/2016',
    areOfOp: 'West bengal, Andhra Pradesh',
    sector: 'Credit',
    latlng: [ 21.1498134, 79.0820556 ]
  }
]

export default dummyData