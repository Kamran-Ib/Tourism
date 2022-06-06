import React,{useState} from 'react'
import Home2 from '../Home2/Home2'
import Slider from '../Slider/Slider'
import styles from './Home.module.css'
import b from '../../photo/fire.jpg'

import e from '../../photo/seki.jpg'

import f from '../../photo/atew.jpg'
import Footer from '../Footer/Footer'
import Btn from '../Btn/Btn'

function Home() {
    
    const [photo,setPhoto]=useState([
        {
          img: e,
          name: "Şəki",
          id: 1,
         

        },
        {
            img: "https://xeberle.com/uploads/posts/2016-11/1479842812_goyerchin.jpg",
            name: "Sumqayıt",
            id:2,
           
        },
        {
            img: f,
            name: "Baki Atəşgah",
            id: 3,
          
        },
    ])
    
    
    return (
            

              

        <div className={styles.home}>
                   <Slider/>
                   
                  <h1>AZƏRBAYCAN</h1>
                <h3>Odlar Yurdu - Azərbaycan</h3> 
 
           
          
              <div className={styles.info}>
                
                 <p>Müasir dünyada turizm hər bir ölkə üçün iqtisadiyyatın ən dinamik inkişaf edən 
                     sahələrindən biri sayılır. Azərbaycanda da bu sahənin inkişafına ciddi diqqət göstərilməkdədir. 
                     Turizm artıq bütün dünyada ən gəlirli sahələrdən birinə, geniş və sürətlə inkişaf edən iqtisadi 
                     sektora çevrilib. Turizm sektorunun davamlı olaraq inkişaf etməsi və genişlənməsi bu sektoru
                      sosial-iqtisadi tərəqqidə əsas aparıcı qüvvəyə çevirib. Bu, özünü yeni iş yerlərinin yaradılması,
                       turizmlə bağlı müəssisələrin və infrastrukturun qurulmasında göstərir.
                </p>
               
                <img src={b} alt="baku"/>
               
                      <p> Azərbaycan kontekstində də ölkənin diversifikasiyası, regionların inkişafı üçün məhz bu sənaye həlledici 
                          əhəmiyyət kəsb edir. Turizmdə Azərbaycanın rəqabət imkanları çox yüksəkdir. Təbii sərvətlərimiz, rəngarəng
                          iqlimimiz, zəngin tarixi-mədəni irsimiz cəlbedici turizm məhsulu yaratmaq üçün mühüm zəmindir. Bununla bərabər,
                          Azərbaycan dövləti turizm sahəsinin inkişafını iqtisadiyyatın qeyri-neft sektoru üzrə prioritet istiqamət elan
                          edib. Son 10 il ərzində ölkədə turizmin təşviqi ilə bağlı görülən işlər, aparılan islahatlar, qəbul edilən dövlət
                          proqramları, normativ-hüquqi bazanın təkmilləşdirilməsi bunu bir daha sübut edir. Bu tədbirlər nəticəsində Azərbaycanda 
                          turizm sənayesi yeni mərhələyə qədəm qoyub, ölkəmiz dünyada yeni turizm istiqaməti kimi tanınmağa başlayıb, beynəlxalq
                           turizm bazarına inteqrasiya ilbəil daha geniş şəkildə təmin olunur.
                 </p>
            </div> 
 
               {
                photo.map(
                    (i)=>{return <Home2 className={styles.container} data={i} key={i.id}/>
                            }
                )
               }  


                 <h2>Təbiətimiz</h2>
                 <hr/>
               <p className={styles.tebiet} >Vətənimizin təbiəti çox gözəl və rəngarəngdir. Azərbaycanda başıqarlı dağlar, geniş yaşıl düzənliklər var.

                Ölkəmizin şimalında Böyük Qafqaz, qərbində və cənub-qərbində Kiçik Qafqaz, cənub-şərqində Talış dağları uzanır. Bazardüzü, Şahdağ, Babadağ, Dəlidağ, İlandağ Azərbaycanın ən uca dağları və dağ zirvələridir. Ölkəmizin ən hündür zirvəsi Bazardüzüdür. Onun hündürlüyü 4466 m-dir.

                Ölkəmiz təbii ehtiyatlarla zəngindir. Təbii ehtiyatlara insanın yaşaması üçün istifadəsi mümkün olan hər şey daxildir. Faydalı qazıntılar, torpaq, su mənbələri, meşələr, okean və dənizlər təbii ehtiyatlardır.

                Azərbaycanda Yer kürəsində mövcud olan 11 iqlim tipindən 9-u vardır. Azərbaycanın iqlimi ölkəmizdə müxtəlif növ bitkilərin əkib-becərilməsi üçün əlverişli şərait yaratmışdır.

                Ölkəmizdə 8300-dən çox çay, 250-dən çox göl və su anbarı vardır. Kür və Araz Azərbaycanın ən böyük çaylarıdır. Bu çaylar Türkiyə dağlarından axıb gəlir, Azərbaycanın ərazisində birləşərək Xəzər dənizinə tökülür. Xəzər dünyanın ən böyük gölüdür. Ərazisi çox böyük olduğuna və dənizə aid bir çox xüsusiyyətlərinə görə onu dəniz adlandırırlar.
                </p>  
                        <Btn/>
              
                
               <Footer/>  
   



            
        </div>


    )
}
export default Home