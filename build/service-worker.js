"use strict";var precacheConfig=[["/ElectionHistories/index.html","9a5021d0c9aa158514a9b301b4036056"],["/ElectionHistories/static/css/main.a136eb67.css","6c6a56ddde73b3702b3e7cd4126c187d"],["/ElectionHistories/static/js/main.c73fa1ba.js","cd941f23ca28d550792ea693d8a72d15"],["/ElectionHistories/static/media/1789030.478fa702.geojson","478fa7028df4a440d798158286c12d8d"],["/ElectionHistories/static/media/1789080.cd05dd08.geojson","cd05dd088f9ba087c5e65578b077345e"],["/ElectionHistories/static/media/1790040.3eb4ffb4.geojson","3eb4ffb48ea985e65d66009f8f6567e2"],["/ElectionHistories/static/media/1790050.e2d4557a.geojson","e2d4557acf465e83a59873471955d823"],["/ElectionHistories/static/media/1791030.17c4ddd8.geojson","17c4ddd888c0c3f6525c909b10b0161f"],["/ElectionHistories/static/media/1791090.32b306c4.geojson","32b306c4a954ab22754db8bc30e0d492"],["/ElectionHistories/static/media/1792030.fcb7aad6.geojson","fcb7aad65ee557e302023a525aa9dd5f"],["/ElectionHistories/static/media/1792060.72b20d4a.geojson","72b20d4ab9c4a9562533b7617f0e007c"],["/ElectionHistories/static/media/1794010.72b20d4a.geojson","72b20d4ab9c4a9562533b7617f0e007c"],["/ElectionHistories/static/media/1795100.d8a4e5bf.geojson","d8a4e5bf687aab034ead1603c1ff23a8"],["/ElectionHistories/static/media/1796060.0a238d49.geojson","0a238d490504e8582cacb4de2673d53a"],["/ElectionHistories/static/media/1798040.94dad31a.geojson","94dad31a0c604a3bab76b52da4bb42b6"],["/ElectionHistories/static/media/1800070.c0149ed1.geojson","c0149ed11498a68779c49ccc85d53430"],["/ElectionHistories/static/media/1800071.7ef08fb8.geojson","7ef08fb8938a169f80a79828c8374788"],["/ElectionHistories/static/media/1800100.c61be662.geojson","c61be662cb36b940c1a314a92cd6ebf2"],["/ElectionHistories/static/media/1802040.0d17410a.geojson","0d17410a9334a56fd4a5335cb43896e9"],["/ElectionHistories/static/media/1803030.a348bfa5.geojson","a348bfa55a99caac666687d5b5ba6860"],["/ElectionHistories/static/media/1803040.30148f41.geojson","30148f413dd288981a230809fe820d07"],["/ElectionHistories/static/media/1804030.07007bd2.geojson","07007bd2e7227995a3af0c77f1401713"],["/ElectionHistories/static/media/1804100.da811cae.geojson","da811caee9003f10dae41743352a7952"],["/ElectionHistories/static/media/1805010.07694e9f.geojson","07694e9fc6b55418ced45893bd33edd8"],["/ElectionHistories/static/media/1805070.4ce31058.geojson","4ce31058f4342db78c2286774c539a18"],["/ElectionHistories/static/media/1809030.f937c86c.geojson","f937c86c9d9ea5a12cadc98ded0edd9a"],["/ElectionHistories/static/media/1810040.84f2ac11.geojson","84f2ac11c96d5d2346a3d65788147f17"],["/ElectionHistories/static/media/1810100.bc7892be.geojson","bc7892be985217b4c53df34fbdda07f4"],["/ElectionHistories/static/media/1812040.a54517d8.geojson","a54517d8a0acd2d7db639d96e948dc91"],["/ElectionHistories/static/media/1812050.4c9948ab.geojson","4c9948abf0718f2d9fe9d35c8607a212"],["/ElectionHistories/static/media/1812060.dcf42a76.geojson","dcf42a7680aff420df4c51d138e44462"],["/ElectionHistories/static/media/1813040.404bdcb5.geojson","404bdcb56e39a122e93bb55472c26367"],["/ElectionHistories/static/media/1816120.c5c7bc4b.geojson","c5c7bc4b4e4237636fec66ad8bf04d81"],["/ElectionHistories/static/media/1817030.82e8e989.geojson","82e8e98984dcb821b3558ccb7c2d67ca"],["/ElectionHistories/static/media/1817120.92ed4089.geojson","92ed40899cc26256da06f1b14d5bc032"],["/ElectionHistories/static/media/1818100.cd37736c.geojson","cd37736cf789d10eb75e42e2ccaf5996"],["/ElectionHistories/static/media/1818120.9ad25722.geojson","9ad257222fb58bb87b80add73e7145d2"],["/ElectionHistories/static/media/1819030.2738e8b5.geojson","2738e8b5100cfdc87ba7e94ec4587431"],["/ElectionHistories/static/media/1819120.0850315f.geojson","0850315f4098b6f212e78c1594518b4b"],["/ElectionHistories/static/media/1820030.cb505892.geojson","cb5058926cb7ff5cf97cfb9ab8e5473b"],["/ElectionHistories/static/media/1821070.be9a695b.geojson","be9a695bb3b2c20e62a14cae3802561d"],["/ElectionHistories/static/media/1821080.4c9520f7.geojson","4c9520f74433d93a070741167bd0b51b"],["/ElectionHistories/static/media/1821090.4c9520f7.geojson","4c9520f74433d93a070741167bd0b51b"],["/ElectionHistories/static/media/1821091.57cb028c.geojson","57cb028cbb8f1530beab78d918325eda"],["/ElectionHistories/static/media/1822030.69390566.geojson","693905662ad4bc6c71ca6e35a0ecce6d"],["/ElectionHistories/static/media/1824110.3ceb1a91.geojson","3ceb1a91a4ec8316ddfe2169bf5ffd7a"],["/ElectionHistories/static/media/1825010.48511713.geojson","48511713a1e8ee0c85d11e534fc36234"],["/ElectionHistories/static/media/1828050.a894375c.geojson","a894375c072ebc69e5275ad0a21100b3"],["/ElectionHistories/static/media/1834060.c52dfb0c.geojson","c52dfb0c0a6566976b146e04f3bba4aa"],["/ElectionHistories/static/media/1836030.56df4b48.geojson","56df4b480ba702f3cb9fa606c81f5614"],["/ElectionHistories/static/media/1836060.171a075a.geojson","171a075acf45eb1d882a506773e4111a"],["/ElectionHistories/static/media/1836070.fc4c9239.geojson","fc4c9239d003d01c599f3b55bcf78b9c"],["/ElectionHistories/static/media/1837010.9ad683bb.geojson","9ad683bbfcd6b9f8873bd14afa96d20c"],["/ElectionHistories/static/media/1837030.9cc134cc.geojson","9cc134cc237b49d9d8b405fed095cc0d"],["/ElectionHistories/static/media/1838070.39c1e710.geojson","39c1e710e43f4fc5f7938f37ab63083f"],["/ElectionHistories/static/media/1842110.eeee8601.geojson","eeee8601038dc6b340376e0ebce8bbe9"],["/ElectionHistories/static/media/1845030.bb4b692a.geojson","bb4b692a822a017f239b031263290490"],["/ElectionHistories/static/media/1845120.a0da1a75.geojson","a0da1a759283393b58fab367a107f11e"],["/ElectionHistories/static/media/1846060.9341a445.geojson","9341a4457fe7065b4b870b45561d62e9"],["/ElectionHistories/static/media/1846080.9341a445.geojson","9341a4457fe7065b4b870b45561d62e9"],["/ElectionHistories/static/media/1846120.a254e971.geojson","a254e971b14e95b88eabeb53db74ed18"],["/ElectionHistories/static/media/1847010.a254e971.geojson","a254e971b14e95b88eabeb53db74ed18"],["/ElectionHistories/static/media/1847030.462e43c4.geojson","462e43c4782eb0f5478fcba630246dbb"],["/ElectionHistories/static/media/1848020.9f30b7fa.geojson","9f30b7faf81671da9beca9aa0651c45f"],["/ElectionHistories/static/media/1848050.255ac855.geojson","255ac855f00306599e702362895d61a1"],["/ElectionHistories/static/media/1848080.f062bfcb.geojson","f062bfcb730b11b9a42b371ababbe7f5"],["/ElectionHistories/static/media/1849030.17cd2989.geojson","17cd2989544f5307ff43d2b5c5ad6170"],["/ElectionHistories/static/media/1850090.84c95b84.geojson","84c95b84e41cbd5444ec5bd9c4c8ef84"],["/ElectionHistories/static/media/1853030.21fe8f3e.geojson","21fe8f3e8987266d321f801fb9598822"],["/ElectionHistories/static/media/1853120.334ea4b3.geojson","334ea4b373c0a40b61e03ab4a4ba9cd7"],["/ElectionHistories/static/media/1854050.2b0c99df.geojson","2b0c99df3a228c0b2fcb089c9ef8d67e"],["/ElectionHistories/static/media/1858050.3efc0e7d.geojson","3efc0e7d4ce7d7c7e300112a5fb802af"],["/ElectionHistories/static/media/1859020.6ea2cf3d.geojson","6ea2cf3da10215ac5b82c21d79a401a5"],["/ElectionHistories/static/media/1860020.a6d1f46d.geojson","a6d1f46d630a79f721014dea36ac3fa8"],["/ElectionHistories/static/media/1860120.12e5f610.geojson","12e5f61032639dd5e4cae04747a37b1f"],["/ElectionHistories/static/media/1861010.41328510.geojson","41328510e90a4eac3a7e26c419b3156a"],["/ElectionHistories/static/media/1861011.8a02248d.geojson","8a02248d2959dd8d90a9bc15c7f81d0f"],["/ElectionHistories/static/media/1861012.a9d0e6f6.geojson","a9d0e6f623aa5e98bacaa505ab790e6c"],["/ElectionHistories/static/media/1861013.c3346e12.geojson","c3346e12477f6c6a3d5380bb91f1bd36"],["/ElectionHistories/static/media/1861014.46e85df5.geojson","46e85df5a7e2b13319fbe9483f1855c5"],["/ElectionHistories/static/media/1861015.27adaf99.geojson","27adaf99f9ea01b19fe0f32bedcce5e2"],["/ElectionHistories/static/media/1861020.71afbe39.geojson","71afbe390a0c4025c985eebcc1d7ee8e"],["/ElectionHistories/static/media/1861021.d5a132e0.geojson","d5a132e0509fea15c58155cd66ac395f"],["/ElectionHistories/static/media/1861022.71a494a9.geojson","71a494a9c686950e40b54819108f382f"],["/ElectionHistories/static/media/1861030.1b9b8a80.geojson","1b9b8a802eec82caa1c6d9bac0084ce0"],["/ElectionHistories/static/media/1861031.b8b0287a.geojson","b8b0287af63842c3b04e843ffd9419ed"],["/ElectionHistories/static/media/1861040.e7f1ecc0.geojson","e7f1ecc08d3f0ce81308d9e535bd9729"],["/ElectionHistories/static/media/1861041.f9bcc4cc.geojson","f9bcc4cc1b6807c29a625fe54098b7b2"],["/ElectionHistories/static/media/1861050.0f1e1148.geojson","0f1e11489a30d9a0a2d86fe9f0859d11"],["/ElectionHistories/static/media/1861051.677523ed.geojson","677523eda1a897c456095fbd23599a10"],["/ElectionHistories/static/media/1861052.44e308a1.geojson","44e308a101faa8b4c059611c2411fb50"],["/ElectionHistories/static/media/1861053.edc98ff2.geojson","edc98ff2160ae167c00a590503617531"],["/ElectionHistories/static/media/1861054.17f760a8.geojson","17f760a8a09798bbdc21b6514ea4c64b"],["/ElectionHistories/static/media/1861070.7c53b048.geojson","7c53b048a318889061bb912e231b0fd4"],["/ElectionHistories/static/media/1861080.09d8a743.geojson","09d8a743fbdabf4b3a3f475bc702a541"],["/ElectionHistories/static/media/1861100.93779d79.geojson","93779d794fd5da3ede339fa5182e769e"],["/ElectionHistories/static/media/1861110.bc4d454d.geojson","bc4d454d748619eeacb241cecf05cc3e"],["/ElectionHistories/static/media/1861120.e7e4ce34.geojson","e7e4ce34df2bbd5a6fa33523dcd05532"],["/ElectionHistories/static/media/1861121.b89ece86.geojson","b89ece86e9ae10b00f5859160252391f"],["/ElectionHistories/static/media/1862070.ffd52724.geojson","ffd527241a54769314cf66cd439b9fde"],["/ElectionHistories/static/media/1863020.b6209d6e.geojson","b6209d6e7bc960b1085a689c7cced89c"],["/ElectionHistories/static/media/1863030.cbd25c6a.geojson","cbd25c6a8b6aa407f34be544aa5552d8"],["/ElectionHistories/static/media/1863060.916ee77e.geojson","916ee77eaa967e8548c209cb34321e3e"],["/ElectionHistories/static/media/1864050.c781f078.geojson","c781f078e91616ca29fbccd611450c83"],["/ElectionHistories/static/media/1864100.bf31ec24.geojson","bf31ec24a40b12f66c1d7c8884cafc3d"],["/ElectionHistories/static/media/1865040.0fa7a016.geojson","0fa7a01672d209956d9538bc4c7d6a48"],["/ElectionHistories/static/media/1866050.fa3264dd.geojson","fa3264dda40e36bc33045ed2fe74b2ac"],["/ElectionHistories/static/media/1866070.871041de.geojson","871041de0b5b63d55f975a6a017dfdc6"],["/ElectionHistories/static/media/1867010.caa3075d.geojson","caa3075d8810547d5cb3c8c0e520e9a7"],["/ElectionHistories/static/media/1867030.42f091cf.geojson","42f091cfd57c53282fa2261f27d389b2"],["/ElectionHistories/static/media/1867100.ef656ce6.geojson","ef656ce6211954ba727be18226a22159"],["/ElectionHistories/static/media/1868060.13f8a67f.geojson","13f8a67fc8268082d47dd747be6ed230"],["/ElectionHistories/static/media/1868061.3242b904.geojson","3242b904b7fcdde8746bca7018c6f32f"],["/ElectionHistories/static/media/1868070.a4048316.geojson","a40483161b9c040a826ae1daabc52635"],["/ElectionHistories/static/media/1868071.90816e24.geojson","90816e2490014be493827d9d0f4e9e60"],["/ElectionHistories/static/media/1868072.7480dbef.geojson","7480dbef1cd72b3d0d85692df65b7aa5"],["/ElectionHistories/static/media/1868073.212dc2cd.geojson","212dc2cd95a578f8276fad4e7b4e7530"],["/ElectionHistories/static/media/1870010.e2ad7736.geojson","e2ad7736d457fa484e08e5c3f27c57f2"],["/ElectionHistories/static/media/1870020.30fe6350.geojson","30fe635088be51b23145cc2f0c5011ab"],["/ElectionHistories/static/media/1870030.adacae11.geojson","adacae112e0c6664e4200535e832b8de"],["/ElectionHistories/static/media/1870070.f4f32d08.geojson","f4f32d08c053bd1d2bed59da87072b27"],["/ElectionHistories/static/media/1872100.f4f32d08.geojson","f4f32d08c053bd1d2bed59da87072b27"],["/ElectionHistories/static/media/1876080.b658dd8e.geojson","b658dd8eeb3301e53b67ac4fbd1c98f0"],["/ElectionHistories/static/media/1882030.b658dd8e.geojson","b658dd8eeb3301e53b67ac4fbd1c98f0"],["/ElectionHistories/static/media/1884050.8e0a9ea5.geojson","8e0a9ea5102528b821060f1c67e60146"],["/ElectionHistories/static/media/1889110.dc7e0a9b.geojson","dc7e0a9b01b44a3e7f39f705cba44fd4"],["/ElectionHistories/static/media/1889111.9583b5f7.geojson","9583b5f7a29128de90002bbad3a7d664"],["/ElectionHistories/static/media/1889112.6ae101af.geojson","6ae101afbc1a482305e9372d4fcf4ec6"],["/ElectionHistories/static/media/1890050.3888ef16.geojson","3888ef16d0157b25cabacc91eb277ca9"],["/ElectionHistories/static/media/1890070.3f803199.geojson","3f80319922b7badaf112fdb217b50b00"],["/ElectionHistories/static/media/1890071.e50730e4.geojson","e50730e48d75756873c8a39eae60b68a"],["/ElectionHistories/static/media/1894070.f434df26.geojson","f434df2630188c2e5fc7430e320971c5"],["/ElectionHistories/static/media/1896010.6ccc71ce.geojson","6ccc71ce2c80ca351a2feb0d3ebe2813"],["/ElectionHistories/static/media/1896050.6407fb56.geojson","6407fb565c2586797805e80ca266e11b"],["/ElectionHistories/static/media/1898080.d969c485.geojson","d969c485ee2cb7f3d262cfdc278ecfe7"],["/ElectionHistories/static/media/1900060.d969c485.geojson","d969c485ee2cb7f3d262cfdc278ecfe7"],["/ElectionHistories/static/media/1903100.d969c485.geojson","d969c485ee2cb7f3d262cfdc278ecfe7"],["/ElectionHistories/static/media/1907110.63df25e5.geojson","63df25e570ae78f1a9919f4ae7035116"],["/ElectionHistories/static/media/1912010.444f3853.geojson","444f38537edaa266e5bc829fab419859"],["/ElectionHistories/static/media/1912020.ddea0509.geojson","ddea0509d93cf25a57a045f189de4126"],["/ElectionHistories/static/media/1912080.3f5d5e74.geojson","3f5d5e743d5c741fb3eb43a01a3909d9"],["/ElectionHistories/static/media/1921030.3f5d5e74.geojson","3f5d5e743d5c741fb3eb43a01a3909d9"],["/ElectionHistories/static/media/1959010.fe8d2c62.geojson","fe8d2c62b46ea9f5cab72fa5a39f328a"],["/ElectionHistories/static/media/1959080.5f28ba59.geojson","5f28ba59ad0c323f370f69c53260f6b8"],["/ElectionHistories/static/media/Aaron Burr - 1796.dc129a20.jpg","dc129a207bbe49d374163b24dd1d69cd"],["/ElectionHistories/static/media/Aaron Burr - 1800.dc129a20.jpg","dc129a207bbe49d374163b24dd1d69cd"],["/ElectionHistories/static/media/Abraham Lincoln (I) - 1864.abdf480f.jpg","abdf480f7c1b112c00de57f1932e8dcf"],["/ElectionHistories/static/media/Abraham Lincoln - 1860.8b1e6105.jpg","8b1e6105b9b82f423052cc2ef738707d"],["/ElectionHistories/static/media/Adlai Stevenson - 1952.a642c3d7.jpg","a642c3d753d06fb3f765ba93b5f98bae"],["/ElectionHistories/static/media/Adlai Stevenson - 1956.c2f3f246.jpg","c2f3f24658ce836ec1268d9152b1be36"],["/ElectionHistories/static/media/Al Smith - 1928.4410a842.jpg","4410a842d0bb50f0ace0349e26b97b74"],["/ElectionHistories/static/media/Albert Gore, Jr. - 2000.883db505.jpg","883db50518cd521d2c976daa37418320"],["/ElectionHistories/static/media/Alfred M. Landon - 1936.f2b99e46.jpg","f2b99e4693f08784b51e6ddc423958fc"],["/ElectionHistories/static/media/Allan Benson - 1916.459d71c7.jpg","459d71c7f06ff30f923c09445ee84c9d"],["/ElectionHistories/static/media/Allan Benson - 1920.459d71c7.jpg","459d71c7f06ff30f923c09445ee84c9d"],["/ElectionHistories/static/media/Alton B. Parker - 1904.3d2ad0b4.jpg","3d2ad0b446d74140742587e7ac7cbf98"],["/ElectionHistories/static/media/Andrew Jackson (I) - 1832.850f4c83.jpg","850f4c8361d40393fb35d5cdde36d0b1"],["/ElectionHistories/static/media/Andrew Jackson - 1824.850f4c83.jpg","850f4c8361d40393fb35d5cdde36d0b1"],["/ElectionHistories/static/media/Andrew Jackson - 1828.850f4c83.jpg","850f4c8361d40393fb35d5cdde36d0b1"],["/ElectionHistories/static/media/B. Gratz Brown - 1872.c2927ee4.jpg","c2927ee42d6c5d3ca675254d67c33002"],["/ElectionHistories/static/media/Barack H. Obama - 2008.ed17cae1.jpg","ed17cae1e2f9444f492e1c29baf81f61"],["/ElectionHistories/static/media/Barack H. Obama - 2012.f8dad108.jpg","f8dad108955fb8dd1fe12e6de7767cf5"],["/ElectionHistories/static/media/Barry M. Goldwater - 1964.dbcc4051.jpg","dbcc40516aee08fbcfc81012c0d7adb2"],["/ElectionHistories/static/media/Benjamin Harrison (I) - 1892.40f9f9a0.jpg","40f9f9a0e89d29a0ae7eb278a6df2a9d"],["/ElectionHistories/static/media/Benjamin Harrison - 1888.1cdced37.jpg","1cdced37fcd3a16ebadce0c539adf2e6"],["/ElectionHistories/static/media/Calvin Coolidge (I) - 1924.0fd2eec8.jpg","0fd2eec81c0786adbd6b9ca534ed8264"],["/ElectionHistories/static/media/Charles C. Pinckney - 1800.7e18634e.jpg","7e18634ea7780da337b787dea0640c9b"],["/ElectionHistories/static/media/Charles C. Pinckney - 1804.7e18634e.jpg","7e18634ea7780da337b787dea0640c9b"],["/ElectionHistories/static/media/Charles C. Pinckney - 1808.7e18634e.jpg","7e18634ea7780da337b787dea0640c9b"],["/ElectionHistories/static/media/Charles E. Hughes - 1916.adf8b53a.jpg","adf8b53a18ed9834a7d1c6aa26056ac4"],["/ElectionHistories/static/media/Charles J. Jenkins - 1872.05d9ed18.jpg","05d9ed185f6e7fe15f2b900e20b79dd9"],["/ElectionHistories/static/media/Daniel Webster - 1836.7f5de3b6.jpg","7f5de3b60081d57c0c0f4c12a994097b"],["/ElectionHistories/static/media/David Davis - 1872.ac4cbdc3.jpg","ac4cbdc3858fd4f02dce0dee99d34d03"],["/ElectionHistories/static/media/De Witt Clinton - 1812.09b94086.jpg","09b94086c30350fd080c9e0ac65ffb35"],["/ElectionHistories/static/media/Donald J. Trump - 2016.fa75d188.jpg","fa75d188d102cf6beecaa17bc56dbf14"],["/ElectionHistories/static/media/Dr. Evan McMullin - 2016.b4c4e63e.jpg","b4c4e63ea6de48bd73b2df2042d27007"],["/ElectionHistories/static/media/Dwight D. Eisenhower (I) - 1956.0cfc3cdb.jpg","0cfc3cdb9ff4030d759e779284f34f85"],["/ElectionHistories/static/media/Dwight D. Eisenhower - 1952.6c0681c9.jpg","6c0681c90a7d40c2d0cd49dee4ab274f"],["/ElectionHistories/static/media/Eugene Debs - 1904.197a7f5a.jpg","197a7f5a26094c36ecae83451c2ba8a9"],["/ElectionHistories/static/media/Eugene V. Debs - 1912.a162fe65.jpg","a162fe650588a94d3b4e1cfe3be99d60"],["/ElectionHistories/static/media/Franklin D. Roosevelt (I) - 1936.8d644102.jpg","8d6441029c92f24d9064344dc9604ff9"],["/ElectionHistories/static/media/Franklin D. Roosevelt (I) - 1940.dbb126c8.jpg","dbb126c819d73bfb913b444b8f8f4f64"],["/ElectionHistories/static/media/Franklin D. Roosevelt (I) - 1944.73452772.jpg","7345277226fb1444254d6e43a50b2cd1"],["/ElectionHistories/static/media/Franklin D. Roosevelt - 1932.0cb774f0.jpg","0cb774f08c42ff50d8339cd994201457"],["/ElectionHistories/static/media/Franklin Piece - 1852.11a1a83b.jpg","11a1a83ba1cfb5fbe44bde9672bc0b13"],["/ElectionHistories/static/media/Gary E. Johnson - 2012.c1b9cad4.jpg","c1b9cad4f38269c79c685854b9f33db5"],["/ElectionHistories/static/media/Gary E. Johnson - 2016.c1b9cad4.jpg","c1b9cad4f38269c79c685854b9f33db5"],["/ElectionHistories/static/media/George B. McClellan - 1864.a31448db.jpg","a31448db964cdf3cfc1b60f2acf7d9f7"],["/ElectionHistories/static/media/George C. Wallace - 1968.2c20d5c1.jpg","2c20d5c19e3d5f0648b6d83098018a4e"],["/ElectionHistories/static/media/George Clinton - 1792.f3541da1.jpg","f3541da188b354aef2e9fbc0b8bc5731"],["/ElectionHistories/static/media/George Clinton - 1808.f3541da1.jpg","f3541da188b354aef2e9fbc0b8bc5731"],["/ElectionHistories/static/media/George H. W. Bush (I) - 1992.11ba5d01.jpg","11ba5d01f60b993b014d0d703b744119"],["/ElectionHistories/static/media/George H. W. Bush - 1988.c2bd4cc3.jpg","c2bd4cc34d1f0e5c5b49a0190ea0cce1"],["/ElectionHistories/static/media/George McGovern - 1972.1d28848e.jpg","1d28848e75c7e621320269f70f3926b3"],["/ElectionHistories/static/media/George W. Bush (I) - 2004.acb31f41.jpg","acb31f413c16cb50988183ec1e0d6cfb"],["/ElectionHistories/static/media/George W. Bush - 2000.3ee40bdd.jpg","3ee40bdd7b80a027e466ccc446d7edd1"],["/ElectionHistories/static/media/George Washington (I) - 1792.60de1672.jpg","60de1672662c9569d812c5e48248aee2"],["/ElectionHistories/static/media/George Washington - 1788.60de1672.jpg","60de1672662c9569d812c5e48248aee2"],["/ElectionHistories/static/media/Gerald R. Ford (I) - 1976.1b69a1c8.jpg","1b69a1c89b3fd26c706703ad10b019dc"],["/ElectionHistories/static/media/Grover Cleveland - 1884.c1d51c06.jpg","c1d51c06997297a055be98e203025e8a"],["/ElectionHistories/static/media/Grover Cleveland - 1888.c1d51c06.jpg","c1d51c06997297a055be98e203025e8a"],["/ElectionHistories/static/media/Grover Cleveland - 1892.8d5e3e53.jpg","8d5e3e53b655b80a30ead72188eb056a"],["/ElectionHistories/static/media/Harry F. Byrd - 1960.651d4fff.jpg","651d4fff2444dab92a17e0d286667091"],["/ElectionHistories/static/media/Harry S. Truman (I) - 1948.3d83bce9.jpg","3d83bce9696aa7c17e49cab82732c1b7"],["/ElectionHistories/static/media/Henry Clay - 1824.50d35c70.jpg","50d35c7076fe4aab3313adbed24f2308"],["/ElectionHistories/static/media/Henry Clay - 1832.50d35c70.jpg","50d35c7076fe4aab3313adbed24f2308"],["/ElectionHistories/static/media/Henry Clay - 1844.32c3c732.jpg","32c3c732ffcbfbb0c389a752e5629b7c"],["/ElectionHistories/static/media/Henry Wallace - 1948.c20973f8.jpg","c20973f8a6233845a1599136d0b501c5"],["/ElectionHistories/static/media/Herbert Hoover (I) - 1932.b75650c9.jpg","b75650c9b179f9622bd46bec33ef13ad"],["/ElectionHistories/static/media/Herbert Hoover - 1928.de6ddb7b.jpg","de6ddb7b374bba630bf33eb34156dff9"],["/ElectionHistories/static/media/Hillary R. Clinton - 2016.4ee69d54.jpg","4ee69d541ce1d0419b28e50959963d4e"],["/ElectionHistories/static/media/Horace Greeley - 1872.adb049de.jpg","adb049de718ff14240e82a178ebc006f"],["/ElectionHistories/static/media/Horatio Seymour - 1868.b9cbc1eb.jpg","b9cbc1eba7a10d773af3cd7da8d25011"],["/ElectionHistories/static/media/Hubert H. Humphrey - 1968.96df3851.jpg","96df3851bfc687f0f8abd5d019cb2eb7"],["/ElectionHistories/static/media/Hugh L. White - 1836.e72d6d6e.jpg","e72d6d6e38de908013ae83b03c58c071"],["/ElectionHistories/static/media/J. Storm Thurmond - 1948.e83c8bc1.jpg","e83c8bc140f5a7256860a36395e10338"],["/ElectionHistories/static/media/James A. Garfield - 1880.f318b424.jpg","f318b4240afaab0ee5bb17cfea274162"],["/ElectionHistories/static/media/James B. Weaver - 1880.f7be246f.jpg","f7be246f151bb76976fcbcf59eea5f4f"],["/ElectionHistories/static/media/James B. Weaver - 1892.61ac8723.jpg","61ac8723c33cdbee645f30881269f30f"],["/ElectionHistories/static/media/James Buchanan - 1856.4f7a6fe7.jpg","4f7a6fe7a9db5513268cedfa72ec7faa"],["/ElectionHistories/static/media/James G. Blaine - 1884.86222c06.jpg","86222c06d8ecc51de2b7e2955bd85ca8"],["/ElectionHistories/static/media/James K. Polk - 1844.4e1a9f46.jpg","4e1a9f464fc946955ecbf6eb4a029c3b"],["/ElectionHistories/static/media/James M. Cox - 1920.90691d87.jpg","90691d87b4a2a27efec90319f3b56aa8"],["/ElectionHistories/static/media/James Madison (I) - 1812.4976a992.jpg","4976a99266e482423d5651458e0e59e0"],["/ElectionHistories/static/media/James Madison - 1808.4976a992.jpg","4976a99266e482423d5651458e0e59e0"],["/ElectionHistories/static/media/James Monroe (I) - 1820.1901c3db.jpg","1901c3db8d03947c5d380d653cfe354a"],["/ElectionHistories/static/media/James Monroe - 1816.f06abbbf.jpg","f06abbbfce58058c0d50ac39e2d181c6"],["/ElectionHistories/static/media/Jimmy Carter (I) - 1980.0318a956.jpg","0318a9560f395aa6dddc368f69dab143"],["/ElectionHistories/static/media/Jimmy Carter - 1976.0318a956.jpg","0318a9560f395aa6dddc368f69dab143"],["/ElectionHistories/static/media/John Adams (I) - 1800.c8cc8401.jpg","c8cc840121f445c0ab4419b5d40b0cbd"],["/ElectionHistories/static/media/John Adams - 1788.a78a5653.jpg","a78a565361efe79805b4e3f87a59841d"],["/ElectionHistories/static/media/John Adams - 1792.a78a5653.jpg","a78a565361efe79805b4e3f87a59841d"],["/ElectionHistories/static/media/John Adams - 1796.a78a5653.jpg","a78a565361efe79805b4e3f87a59841d"],["/ElectionHistories/static/media/John Anderson - 1980.7de663ea.jpg","7de663eabece4056642f80bda060dc0a"],["/ElectionHistories/static/media/John Bell - 1860.81ddfad1.jpg","81ddfad174acdc4dc80d9facb73f6a74"],["/ElectionHistories/static/media/John C. Beckinridge - 1860.ff84aca7.jpg","ff84aca7a06ab0f352bae9d336f21a2f"],["/ElectionHistories/static/media/John C. Frémont - 1856.d9dc6fdd.jpg","d9dc6fdd8614e30b67ae5804f3cf2bfe"],["/ElectionHistories/static/media/John F. Kennedy - 1960.98c1650e.jpg","98c1650ef30af00b8b795337aa5e49bb"],["/ElectionHistories/static/media/John F. Kerry - 2004.6b48e319.jpg","6b48e3199b78b4c8c3e81b91433c210b"],["/ElectionHistories/static/media/John Floyd - 1832.3be8efeb.jpg","3be8efebaca61f5ecd9f591b14d67e3e"],["/ElectionHistories/static/media/John P. Hale - 1852.568c75de.jpg","568c75de3641173c27db9c56f7d8347e"],["/ElectionHistories/static/media/John Quincy Adams (I) - 1828.f9cd4052.jpg","f9cd4052a8051a97ae57cc30837a7953"],["/ElectionHistories/static/media/John Quincy Adams - 1820.f9cd4052.jpg","f9cd4052a8051a97ae57cc30837a7953"],["/ElectionHistories/static/media/John Quincy Adams - 1824.f9cd4052.jpg","f9cd4052a8051a97ae57cc30837a7953"],["/ElectionHistories/static/media/John S. McCain - 2008.1cd575f8.jpg","1cd575f85bfb2cdadf75ac4d968b4f8f"],["/ElectionHistories/static/media/John W. Davis - 1924.b667d5d1.jpg","b667d5d1506a6fbd630a0a6e2ebb42ee"],["/ElectionHistories/static/media/Lewis Cass - 1848.c46d8780.jpg","c46d878082fea79930dbb08d18dc3912"],["/ElectionHistories/static/media/Lyndon B. Johnson (I) - 1964.e19daa57.jpg","e19daa57a8dec4679fedf0e27f027469"],["/ElectionHistories/static/media/Martin Van Buren (I) - 1840.ee224a66.jpg","ee224a66aa9f207bae2bccd8946ba554"],["/ElectionHistories/static/media/Martin Van Buren - 1836.1d0b4ace.jpg","1d0b4aceb6d296fa1df5d4d3ed6beb28"],["/ElectionHistories/static/media/Martin Van Buren - 1848.73868943.jpg","738689435bdabccd46a3eaaeac9b573f"],["/ElectionHistories/static/media/Michael S. Dukakis - 1988.f8901979.jpg","f8901979dd24a346b0b3f8e7ca8e83e1"],["/ElectionHistories/static/media/Millard Fillmore - 1856.c198ceca.jpg","c198cecad91563fd4b7a7c3474ad84fb"],["/ElectionHistories/static/media/Ralph Nader - 2000.9e519d8c.jpg","9e519d8c10f2bb3dcbbdb8ed61c33942"],["/ElectionHistories/static/media/Richard M. Nixon (I) - 1972.66ff820f.jpg","66ff820faca08b109dcd1307f794c049"],["/ElectionHistories/static/media/Richard M. Nixon - 1960.d2246a82.jpg","d2246a82640a5481684cf7a0c884ad32"],["/ElectionHistories/static/media/Richard M. Nixon - 1968.3f7c7081.jpg","3f7c70819dd175275234f0751a132c2a"],["/ElectionHistories/static/media/Robert Dole - 1996.9b2f9f1d.jpg","9b2f9f1d4f92d62afd87d2509adbb104"],["/ElectionHistories/static/media/Robert M. La Follette Sr. - 1924.a342f5c6.jpg","a342f5c6221f620f4d691c4d99c5f5e5"],["/ElectionHistories/static/media/Ronald Reagan (I) - 1984.9a228dc8.jpg","9a228dc85e66acec1c03cd970485397d"],["/ElectionHistories/static/media/Ronald Reagan - 1980.e93d2a20.jpg","e93d2a20d25fb209928a4028bda0767a"],["/ElectionHistories/static/media/Ross Perot - 1992.f4edf544.jpg","f4edf544c937389f348ce7e32f1e87c8"],["/ElectionHistories/static/media/Ross Perot - 1996.f4edf544.jpg","f4edf544c937389f348ce7e32f1e87c8"],["/ElectionHistories/static/media/Rufus King - 1816.c2ad6f07.jpg","c2ad6f07237d1e47b55bf7d7a7a87468"],["/ElectionHistories/static/media/Rutherford B. Hayes - 1876.fb769468.jpg","fb7694682542298eaa520af58292ddc4"],["/ElectionHistories/static/media/Samuel J. Tilden - 1876.04073581.jpg","040735811d6158ef4d1ff5d197147310"],["/ElectionHistories/static/media/Stephen A. Douglas - 1860.173eeeab.jpg","173eeeab6d3c06b73a1833551f8c8edb"],["/ElectionHistories/static/media/Theodore Roosevelt (I) - 1904.26322fc8.jpg","26322fc8ba7d574ba9d111b61b691132"],["/ElectionHistories/static/media/Theodore Roosevelt - 1912.133cd170.jpg","133cd1700b28195ac275c7ca0d18e326"],["/ElectionHistories/static/media/Thomas A. Hendricks - 1872.46480c5b.jpg","46480c5b2390dd4d2394e6764f32551b"],["/ElectionHistories/static/media/Thomas E. Dewey - 1944.95cda66f.jpg","95cda66f5ceddccf4dd7fc3557d4c4e3"],["/ElectionHistories/static/media/Thomas E. Dewey - 1948.95cda66f.jpg","95cda66f5ceddccf4dd7fc3557d4c4e3"],["/ElectionHistories/static/media/Thomas Jefferson - 1796.50af9b5c.jpg","50af9b5c90e2bc5befa1fc6e920959d3"],["/ElectionHistories/static/media/Thomas Jefferson - 1800.cdd7a595.jpg","cdd7a5958a1a591f7d7113c086dc4d0e"],["/ElectionHistories/static/media/Thomas Jefferson - 1804.cdd7a595.jpg","cdd7a5958a1a591f7d7113c086dc4d0e"],["/ElectionHistories/static/media/Thomas Pinckney - 1796.5a1bac9d.jpg","5a1bac9da3b9b702a4839446e9c14983"],["/ElectionHistories/static/media/Ulysses S. Grant (I) - 1872.7e2d97c1.jpg","7e2d97c1230a2d7a8a0316f60ee040ff"],["/ElectionHistories/static/media/Ulysses S. Grant - 1868.7e2d97c1.jpg","7e2d97c1230a2d7a8a0316f60ee040ff"],["/ElectionHistories/static/media/W. Mitt Romney - 2012.0b1a96ee.jpg","0b1a96ee005e861f5b52d0cbff481d78"],["/ElectionHistories/static/media/Walter F. Mondale - 1984.63a802f9.jpg","63a802f93923e7bc6345690b93aafb23"],["/ElectionHistories/static/media/Warren G. Harding - 1920.fc9961fc.jpg","fc9961fcc256f3c4cb18421f1275d051"],["/ElectionHistories/static/media/Wendell L. Willkie - 1940.fc6c8e43.jpg","fc6c8e43242e5dda9bf7c1bf847ef04e"],["/ElectionHistories/static/media/William H. Crawford - 1824.616b1785.jpg","616b17855d18fb9e652e87afca383568"],["/ElectionHistories/static/media/William H. Harrison - 1836.f368f81c.jpg","f368f81c376815af225d4ef01f43e1d3"],["/ElectionHistories/static/media/William H. Harrison - 1840.1a8ec0f2.jpg","1a8ec0f2a1087be05b68b24dcacbc30f"],["/ElectionHistories/static/media/William Howard Taft (I) - 1912.90828985.jpg","908289855e47486b48a1c32a72bda2a8"],["/ElectionHistories/static/media/William Howard Taft - 1908.eb5dbe1e.jpg","eb5dbe1e0bf6151d0b5a6b9d9037f692"],["/ElectionHistories/static/media/William J. Clinton (I) - 1996.a33d0edf.jpg","a33d0edfa2a55b7c7d2993537b4a128d"],["/ElectionHistories/static/media/William J. Clinton - 1992.a33d0edf.jpg","a33d0edfa2a55b7c7d2993537b4a128d"],["/ElectionHistories/static/media/William Jennings Bryan - 1896.764cbe46.jpg","764cbe46cac2c54e6705ef8e11fdda6d"],["/ElectionHistories/static/media/William Jennings Bryan - 1900.a52293aa.jpg","a52293aa8115329772c3bd3f5c6dfb77"],["/ElectionHistories/static/media/William Jennings Bryan - 1908.c750b170.jpg","c750b17067f5c970ccfd55f345a2290b"],["/ElectionHistories/static/media/William McKinley - 1896.0ee3c2bc.jpg","0ee3c2bcdbfef9c9303135913f03a242"],["/ElectionHistories/static/media/William McKinley - 1900.4cf9ddb8.jpg","4cf9ddb85164bea9dad2b4803bc47711"],["/ElectionHistories/static/media/William Wirt - 1832.8320205d.jpg","8320205d288fc91df567fd68a2630f1b"],["/ElectionHistories/static/media/Willie Person Mangum - 1836.73258216.jpg","7325821661c72d8cdacc8e10c635f217"],["/ElectionHistories/static/media/Winfield Scott - 1852.e22b3570.jpg","e22b35706080a430d1d7209ee5f66b28"],["/ElectionHistories/static/media/Winfield Scott Hancock - 1880.ee3f3365.jpg","ee3f3365fe1838f126ce7bca54b67dd4"],["/ElectionHistories/static/media/Woodrow Wilson (I) - 1916.57a20863.jpg","57a208631a7718ea5753b4ea2f5ab79a"],["/ElectionHistories/static/media/Woodrow Wilson - 1912.57a20863.jpg","57a208631a7718ea5753b4ea2f5ab79a"],["/ElectionHistories/static/media/Zachary Taylor - 1848.41ade076.jpg","41ade076fe4c55a583dcfd9d42150914"],["/ElectionHistories/static/media/envelope.9d3eb552.svg","9d3eb552e4ce50699104b40fc1521267"],["/ElectionHistories/static/media/info.36349a33.svg","36349a33e5a633508c350fa891e5a143"],["/ElectionHistories/static/media/logo.9d3eb552.svg","9d3eb552e4ce50699104b40fc1521267"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,i){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=i),a.toString()},cleanResponse=function(i){return i.redirected?("body"in i?Promise.resolve(i.body):i.blob()).then(function(e){return new Response(e,{headers:i.headers,status:i.status,statusText:i.statusText})}):Promise.resolve(i)},createCacheKey=function(e,i,a,c){var t=new URL(e);return c&&t.pathname.match(c)||(t.search+=(t.search?"&":"")+encodeURIComponent(i)+"="+encodeURIComponent(a)),t.toString()},isPathWhitelisted=function(e,i){if(0===e.length)return!0;var a=new URL(i).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var i=new URL(e);return i.hash="",i.search=i.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(i){return a.every(function(e){return!e.test(i[0])})}).map(function(e){return e.join("=")}).join("&"),i.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var i=e[0],a=e[1],c=new URL(i,self.location),t=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(i){if(!a.has(i)){var e=new Request(i,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+i+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(i,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(i){return i.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return i.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(i){if("GET"===i.request.method){var e,a=stripIgnoredUrlParameters(i.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var t="/ElectionHistories/index.html";!e&&"navigate"===i.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],i.request.url)&&(a=new URL(t,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&i.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',i.request.url,e),fetch(i.request)}))}});