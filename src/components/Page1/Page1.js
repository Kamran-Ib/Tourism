import React from 'react'
import styles from './Page1.module.css'
import g from '../../photo/les.jpg'
import i from '../../photo/zontik2.jpg'
import j from '../../photo/Xankendi.jpg'
import h from '../../photo/azig.jpg'
import Btn from '../Btn/Btn'
import natur from '../../photo/nature.gif'
import Footer from '../Footer/Footer'
function Page1() {
    
    return (

         
        <div className={styles.container}>

            <section className={styles.gif}>
                  <img src={natur} alt="nature"/>
            </section>
            
            <h1>Qarabağ</h1>
            <p>Qarabağ Azərbaycanın qədim tarixi bölgələrindən biridir. Bu bölgə Kiçik Qafqaz dağları ilə Kür və Araz çayları arasındakı ərazini əhatə edir. Bəzi məlumatlara görə, "Qarabağ" anlayışı VII əsrdən etibarən işlənməyə başlanmış, XII əsrdən etibarən isə geniş yayılmışdı. "Qarabağ" "qara" və "bağ" türk-Azərbaycan sözlərinin birləşməsindən əmələ gəlmişdir ("qara" sözü türk dillərində, o cümlədən Azərbaycan dilində, rəng bildirməklə yanaşı, "böyük", "qalın", "sıx" mənasında da işlənir). Tədqiqatçılar "Qarabağ"ın "böyük bağ", "səfalı bağ" mənasında işlədildiyini də bildirirlər.</p>
            <img src={g} alt="mese"/>
            <h2>Qarabağın turizm potensialı</h2>
            <p>Qarabağın turizm potensialı olduqca zəngindir, burada turizmin çox növləri - eko turizm, dağ turizmi, qış turizmi, ov turizmi, sağlamlıq turizminin inkişafı üçün bütün imkanlar var. Azərbaycanın bu qədim tarixə malik olan bölgəsi özünün flora və faunası, mətbəxi, tarixi mədəni-dini abidələri, qədim qalaları, körpüləri, meşələri, bulaqları və s. görməli məkanları ilə turistləri cəlb edəcək. Qarabağ turziminin inkişafı üçün yeni marşrutlar yaradılmalıdır. Dağlıq ərazi olduğundan, dağçılıq və alpinizm turizmi xüsusi qeyd edilməlidir. Bundan başqa, gəzintilər, aktiv və ekstremal turizmi inkişaf etdirmək olar.</p>
                 
             
                    <div className={styles.susa}>
                        <div>
                            <h2>Şuşa</h2>
                            <p> Dəniz səviyyəsindən 1400 metrə hündürlükdə yerləşən Azərbaycan mədəniyyətinin incisi Şuşanın tarixi abidələri, özünəməxsus arxitekturası yeni turizm marşrutlarının yaradılmasına imkan verir:
                            Şuşa mülayim iqlim şəraitinə, mineral suları isə müalicəvi xüsusiyyətlərə malikdir. 
                            Bunlar da turizm üçün çox yararlı istiqamətlərdir. Burada tanınmış bəstəkarlar, muğam ustadları, 
                            incəsənət xadimləri yetişib. Bütün bunlar imkan verir ki, burada turistlər üçün maraqlı olan marşrutlar yaradaraq onları təqdim etmək.<br/><br/>
                            </p>
                        </div>
                       
                       
                        <figure >
                          
                            <img src={i} alt="selale"/>
                            <figcaption > Daşaltı dərəsi: ‘Çətir şəlaləsi’</figcaption>
                        </figure>


                    </div>
                
                <div className={styles.xankendi}>
                    <figure >
                          
                          <img src={j} alt="Xankendi"/>
                          <figcaption >"Xankendi mənzərəsi"</figcaption>
                      </figure>

                    

                     <div>
                       <h2>Xankəndi</h2>
                       <p>Dağlıq Qarabağın mərkəzi. Qarqarçayının sahilində, Qarabağ silsiləsinin şərq ətəyində, Bakıdan 329 km aralıda yerləşir.Xankəndi şəhəri şimaldan Kəlbəcər, Tərtər, Ağdərə, Ağdam, cənubdan Şuşa, şərqdən Xocavənd, qərbdən Laçın, mərkəzdən isə Xocalı və Əsgəran rayonları ilə əhatə olunmuşdur. Ərazisinin çox hissəsi dağlıq, dağətəyi zonada keçir.
                        Xankəndi və onun ətrafında bir çox qiymətli bitki növləri yetişir.Buranın iqlimi əsasən mülayimdir. Dağlıq ərazidə yerləşdiyi üçün qışda ərazi soyuq, yayda isə sərin keçir.</p>
                    </div>
                </div>

                 
                  <div className={styles.xocavend}>
                    <div>
                      <h2>Xocavənd</h2>
                       <p>Qarabağ dünyanın ən qədim insan məskənlərindən biridir. Xocavənd rayonunun yaxınlığında yerləşən Azıx mağarasından alimlər qədim insanların necə yaşadıqlarını göstərən maraqlı tapıntılar aşkar etmişlər. Burada tapılmış ən qiymətli nümunə qədim insanın alt çənə sümüyüdür. Həmin insan yaşadığı mağaranın adına uyğun olaraq “Azıx adamı” adlandırılmışdır. Bu tapıntıya görə Azərbaycan “Avropanın ən qədim sakinləri” xəritəsinə daxil edilmişdir.</p>
                    </div>
                  <figure>
                       <img src={h} alt=""/>
                       <figcaption>Azıx kəndi: ‘Azıx mağarasının girişi’</figcaption>
                       </figure>
                          </div>

                          <Btn/>
                          <Footer/>
         </div>
    )
}
export default Page1