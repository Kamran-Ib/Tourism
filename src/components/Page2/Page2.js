import React,{useState} from 'react'
import styles from './Page2.module.css'
import Page2a from '../Page2a/Page2a'
import k from "../../photo/korpu.jpg"
import l from '../../photo/istisu.jpg'
import m from '../../photo/turbe.jpg'
import kepenek from '../../photo/nature1.gif'
import Btn from '../Btn/Btn'
import Footer from '../Footer/Footer'
 function Page2() {

    const[sekil,setSekil]=useState([
        {
           img: "https://www.hiddenwords.net/wp-content/uploads/untitled-1-of-1-42.jpg?gid=5",
           name: "Ağdam ",
           text: " Dəniz səviyyəsindən yüksəkliyi 410 metr, maksimum yüksəklik 1365 metrdir. İqlimi əsasən mülayim isti  quraq subtropikdir. Dağətəyi yerlərdə yüksəklik artdıqca iqlim mülayimləşir. Ən çox yağıntı dağətəyi sahələrə düşür. İllik yağıntı 300–550 mm-dir.Rayonun ərazisindən Qarqar və Xaçın çayları axır. Ağdam rayonunun ərazisində qədim tarixə malik olan çoxlu memarlıq və incəsənt abidələri var. Üzərlik Təpə abidəsi, Xaçındərbənd kəndindəki Qutlu Sarı Musa oğlu günbəzi (1314-cü il)",
           id: 1
        },
        {
            img: "https://www.7news.az/file/pic/xeber/2020-12/1606973374_uy88.jpg",
            name: "Laçın ",
            text: "Laçın rayonu Azərbaycanın cənub-qərbində, dağlıq ərazidə yerləşir.Rayon ərazisindəki Ağoğlan çayı sahilində IX əsrdə inşa edilmiş və uzun müddət fəaliyyət göstərmiş Ağoğlan monastır kompleksi yerləşir.Rayon respublikamızın təbii sərvətlərilə zəngin guşələrindəndir. Ərazisində dünyada nadir ağac növlərindən hesab olunan qırmızı dəmirağac meşələri, çox sayda mineral su bulaqları, kobalt, uran, civə, qızıl, dəmir, müxtəlif rəngli mərmər yataqları, cürbəcür dərman bitkiləri vardır. ",
            id: 2
         },
         {
            img: "http://photos.wikimapia.org/p/00/07/24/99/70_full.jpg",
            name: "Füzuli ",
            text: "Füzuli Qarabağ dağ silsiləsinin cənub şərq ətəklərindən Araz çayına qədər maili düzənlik və alçaq sahələri əhatə edir. O, Cəbrayıl, Xocavənd, Ağcabədi, Beyləqan rayonları və Araz çayı boyunca İranla həmsərhəddir.Füzuli rayonun ərazisi tarixi, mədəniyyət və memarlıq abidələri, mağara və kurqanlar, çoxlu sayda türbə, qəbirüstü abidələr, at, qoç fiqurları, körpülərlə zəngindir.Qarğabazar karvansarası — Füzuli rayonudən 8 kilometr cənubda yerləşən Qarğabazar kəndi qədim yaşayış məskənlərindən biridir. ",
            id: 3
         },
         {
            img: "https://portal.azertag.az/sites/default/files/xudaferin4_0.jpg",
            name: " Cəbrayıl ",
            text: "Cəbrayıl rayonu Azərbaycanın tarixi abidələri, eyni zamanda dini təyinatlı abidələri ilə zəngin rayonlarından hesab olunur.Cəbrayıl rayonunun ərazisi sement, mərmər, mişar daşı və digər qiymətli tikinti materialları ilə zəngindir. Dəmir filizi, hətta neft yataqlarının olduğu da məlumdur. Xudafərin körpüsü də Cəbrayıl rayonunda yerləşir. Bu körpü haqqında ilk məlumat VIII–IX əsrlərə aiddir. Xudafərin körpüsü Cənubi Azərbaycanla Şimali Azərbaycanın orta əsr şəhərlərini birləşdirən, karvan yolunun üstündə tikilib.  ",
            id: 4
         },
    ])


    return (
        <div className={styles.container}>
         
         <section>
             <img src={kepenek} alt=""/>
         </section>

           <h1>Dağlıq Qarabağın ətrafında olan Azərbaycan əraziləri</h1>
             <p>Dağlıq Qarabağ Muxtar Vilayətinə (DQMV) daxil olmayan və ermənilər tərəfindən tam və ya qismən işğal olunmuş 7 rayon, keçmiş Dağlıq Qarabağ Muxtar Vilayətinə 
                 daxil olmayan, Birinci Qarabağ müharibəsi (1988-1994) dövründə Ermənistan tərəfindən işğal olunmuş və İkinci Qarabağ müharibəsi (2020) başlanana (27.09.2020)
                  qədər işğal altında qalmış ərazi.<br/>'Bizimdi!'</p>
          
              
                   <div className={styles.qubadli}>
                       <div>
                   <h2>Qubadlı</h2>
                      <p>Qubadlı rayonunun səthi, əsasən, dağlıqdır.Rayonda əsasən, qəhvəyi dağ-meşə torpaqları yayılmışdır. Əsas bitki örtüyü kollu və seyrək meşəli çəmənlərdir. Dağ meşələri (fıstıq, palıd, vələs və s.) var. Meşələrin sahəsi 13,2 min hektardır. Heyvanları ayı, canavar, vaşaq, tülkü,  süleysin, oxlu kirpi və s-dir. Quşlardan boz kəklik, turac, qırqovul və s. var. Rayonda Qubadlı yasaqlığı təşkil edilib.
                           İqlimi əsasən mülayim isti və quru subtropikdir. <br/>Zəngəzur ərazisində ən qədim yaşayış məskəni Qubadlı rayonunun Balahəsənli kəndində aşkar edilmişdir. Xatırladaq ki, IV əsrə aid edilən "Sığınacaq" tipli bu yaşayış yeri Daranlar deyilən ərazidə yerləşir. Qubadlının Muradxanlı kəndindəki V əsrə aid Qalalı, Əliquluuşağı kəndindəki Göy Qala abidələri, XIV əsrə aid Yazı Düzündəki Cavanşir türbəsi, Dəmirçilər kəndindəki iki türbə, XVII əsrə aid Gürcülü kəndində olan türbə.
                      </p>
                      </div>
                        <figure>
                            <img src={k} alt="korpu"/>
                            <figcaption> Qubadlı rayonunu. Hacı Bədəl körpüsü</figcaption>
                        </figure>
                    </div>
  
                    
                    <div className={styles.kelbecer}>
                        <figure>
                            <img src="https://i.pinimg.com/originals/aa/7f/e0/aa7fe024c0d6b499c0421d681e753e27.jpg" alt=""/>
                            <figcaption>Kəlbəcər.İstisu </figcaption>
                        </figure>
                        <div>
                            <h2>Kəlbəcər</h2>
                        <p>Azərbaycanın cənnət məkanı olan Kəlbəcər rayonunun ərazisini başdan-başa gülüstan adlandırmaq olar. Otuz mindən artıq bulağı olan, ilin bütün dövrlərində, hər çeşmə başında qonağı olan Kəlbəcər rayonu təbiətin muzeyidir. Rayon ərazisində 4 mindən artıq bitki növü bitir ki, bunlardan da 200-ü dərman bitkisidir. Zəngin meşələr diyarı olan Kəlbəcərdə yüzlərlə mineral bulaqlar mövcuddur.
                        Kəlbəcərə dünya şöhrəti qazandırmış Yuxarı İstisu, Aşağı İstisu, Keşdək, Qarasu, Mozçay, Bağırsaq, Qotursu kimi çox böyük müalicə - balneoloji təsirə malik mineral su yataqları da (ümumi istismar ehtiyatları 3093 m3/gün) işğal ərazisində yerləşir.
                        Təbiətin Kəlbəcərə bəxş etdiyi min bir nemətdən biri də bizi dünyaya tanıdan və loğman kimi neçə milyon insanı sağaldaraq həyata qaytaran dirlik suyu – İSTİSUDUR.
                        </p>
                        </div>
                    </div>
                   
                    
                    <div className={styles.zengilan}>
                     <div>
                     <h2>Zəngilan</h2>
                      <p>Qərbdə dağlıq və şərqdə düzənlikdir. Ərazisində Yura, Təbaşir və Neogen-Antropogen çöküntüləri yayılmışdır. Faydalı qazıntıları: tikinti daşı, əhəng xammalı, qızıl, qara mərmər və s.Ərazisinin çox yerində qışı quraq keçən mülayim isti iqlim təşkil edir.
                      Dünyada yegane olan təbii çinar meşəsi Zəngilan rayonu ərazisində yerləşir. Bu meşə "Bəsitçay" Dövlət Təbiət Qoruğu kimi tanınır. Bakıdan 420 km. məsafədə yerləşir.
                      Qoruqda yaşı 1500 il, hündürlüyü 53-54 m. , diametri 4 m.-ə çatan çinarlar var.
                      Rayonun Məmmədbəyli kəndində olan türbə dövrümüzə qədər salamat gəlib çatan abidələrdəndir. Günbəzin yuxarı hissəsi azca dağılmışdır. Türbə piramidal günbəzlərlə örtülmüş səkkizgüşəli prizmadan ibarətdir.
                      </p>
                      </div>
                      <figure>
                            <img src={m} alt=""/>
                            <figcaption>Məmmədbəylidə türbə </figcaption>
                        </figure>
                    </div>



         
          {
              sekil.map(
                  (i)=> {return <Page2a className={styles.foto}
                                 img={i.img} 
                                 name={i.name}
                                 text={i.text}
                                 key={i.id}    />}
              )
          }

           <div className={styles.umumi}>
              <p>
                İşğaldan azad edilmiş ərazilərimizin böyük iqtisadi potensialı və təbii ehtiyatları var: bu ərazilər həm yerli və xarici investisiyaların cəlbi, həm də əhalinin məşğulluğunun təmin edilməsi baxımından dövlət siyasətinin bir parçası olacaq.
                Azad edilən rayonlar işğaldan əvvəl üzümçülük, pambıqçılıq, taxılçılıq, heyvandarlıq sahəsində xüsusi paya malik idi. Bu ərazilərin aqrar istehsal və ixrac potensialı kifayət qədər böyükdür. Xüsusilə Şuşa, Füzuli, Kəlbəcər və Zəngilan əraziləri böyük turizm potensialına malikdir. Dünyanın ən qədim insan məskənlərindən olan Azıx mağarası Füzuli rayonu ərazisində yerləşir. Bu rayonlarda daxili və gəlmə turizm imkanları kifayət qədər böyükdür. İsti su mənbələri ilə zəngin Kəlbəcərdə sağlamlıq turizmiinkişaf etdirilməli, mədəniyyət turizm marşrutları bərpa olunmalıdır. Erməni vandalizminə məruz qalan ərazilərin əvvəlki vəziyyətinə qaytarılması müəyyən müddət və vəsait tələb etsə də, əminəm ki, qısa zamanda orada əhatəli layihələr reallaşadırlacaq.
                Azərbaycanın ümumi daxili məhsulunda aqrar və turizm sektorunun payı az olsa da, bu iki sektor məşğulluğa kifayət qədər təsir göstərən sahələrdir. Bu baxımdan, əmək qabiliyyətli əhalinin məşğulluğu üçün böyük perspektiv yaranır. Genişmiqyaslı bərpafəaliyyətləri və yeni infrastrukturun qurulması tikinti sektorunun qarşısında yeni üfüqlər açır.
             </p>
          </div> 
 <Footer/> 

              <Btn/>
            
        </div>
    )
}
export default Page2