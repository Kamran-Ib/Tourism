import React,{useState} from 'react' 
import styles from './Page3.module.css'
import Page3a from '../Page3a/Page3a'
import Footer from '../Footer/Footer'
 import Btn from '../Btn/Btn'
// import ReactPlayer from 'react-player'
 function Page3() {

  const[blog,setBlog]=useState([
    {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/15/9c/91/60/baki-snh-m-rnsulzadn.jpg",
      name: "Milli mətbəx",
      text:"Azərbaycan mətbəxi — təkcə xörəklər, onların hazırlanma texnologiyasının üsulları deyil, həm də maddi mədəniyyətin əsas hissəsidir.Mətbəximiz son dərəcə zəngindir.  ",
      par:"Milli mətbəximiz son dərəcə zəngindir. Azərbaycan mətbəxində 2000-ə yaxın xörək məlumdur. İngilis səyyahı Entoni Cenkinsonun şahidliyinə görə, Şamaxıda Abdulla xanın qonağı olarkən onun bir dəfə nahara oturmasına 150 çeşiddə xörək gətirilmiş, süfrə yığışdırıldıqdan sonra daha 140 xörək növü təqdim olunmuşdu.Azərbaycanda qədimlərdən bəri iribuynuzlu və xırdabuynuzlu heyvanın ətindən istifadə olunur.Bizim mətbəxdə ev quşları və vəhşi quşların ətindən və yumurtalarından da geniş istifadə edilir.Balıq yeməklərini bütöv balıqdan, onun iri və xırda tikələrindən, eləcə də balıq farşından hazırlayırlar. Qara, qırmızı və sıxılmış balıq kürülərindən geniş istifadə olunur.Balıq yeməklərini bütöv balıqdan, onun iri və xırda tikələrindən, eləcə də balıq farşından hazırlayırlar. Qara, qırmızı və sıxılmış balıq kürülərindən geniş istifadə olunur.Xəmir xörəkləri və kulinar məmulatları bizim mətbəxdə xüsusi yer tutur. Qeyd edək ki, ətdən və xəmirdən hazırlanmış yeməklərimizin çoxu bütün türk xalqlarına xasdır.Azərbaycan mətbəxində şirniyyat, qənnadı məmulatları, halva xüsusi yer tutur. Buna səbəb Azərbaycanda qədimdən bəri şəkər istehsal edilməsi olmuşdur. Şəkəri şəkər qamışından alırdılar.Turşumuş süddən (qatıq) və sarımsaqdan, sirkə və sarımsaqdan qatılaşdırılmış baldan və ya qaymaqdan meyvə şirələrindən düzəldilən souslardan daha çox istifadə edilir. Balıqla bir yerdə narşərab və ya narşərab əsasında sous verilir. Azərbaycan mətbəxində şirniyyat, qənnadı məmulatları, halva xüsusi yer tutur. Buna səbəb Azərbaycanda qədimdən bəri şəkər istehsal edilməsi olmuşdur. Şəkəri şəkər qamışından alırdılar. Azərbaycan mətbəxində başlıcası dadlı xörəklər və ətirli içkilər deyil, gözəl meyvələr deyil, başlıcası - qonaqdır. Azərbaycanın mətbəx fəlsəfəsinin əsasında qonaq dayanır.  ",
      btn:"Әtrafli",
      sek:"https://i.pinimg.com/736x/91/f9/73/91f97313248714b232fa106923580472.jpg",
      id:"1" ,
    },
    {
      img: "https://eastroute.com/wp-content/uploads/2018/05/az-gosty1.jpg",
      name: "Mədəniyyət",
      text:"Dünyanın ən qədim xalqlarından olan Azərbaycan xalqı özünün tarixi, maddi-mədəniyyət abidələri, zəngin ədəbiyyatı, incəsənəti və musiqi...",
      par:"Dünyanın ən qədim xalqlarından olan Azərbaycan xalqı özünün tarixi, maddi-mədəniyyət abidələri, zəngin ədəbiyyatı, incəsənəti və musiqi mədəniyyəti ilə haqlı olaraq fəxr edir. Azərbaycan xalqının bədii təfəkkür və yaradıcılığına ölkənin gözəl təbiəti, iqlimi, təbii sərvətlərinin zənginliyi də böyük təsir göstərmişdir. Ölkəmizin müxtəlif sənət növlərinin hər biri ayrı ayrılıqda uzun və mürəkkəb inkişaf yolu keçməsinə baxmayaraq, birlikdə vəhdət təşkil edərək Azərbaycan incəsənəti və mədəniyyəti haqqında tam təsəvvür yaratmağa geniş imkan verir. Azərbaycan incəsənəti ölkəmizin təbiəti kimi rəngarəng, dolğun və zəngindir. Azərbaycan xalqının zəngin yaradıcılıq çeşməsində ən mühüm yerlərdən birini onun həyat və məişəti, gündəlik güzəranı ilə bağlı olan xalq sənətləri tutur. Ən qədim dövrlərdən zəmanəmizədək davam edən bu sənət növü xalqın geyimindən tutmuş müxtəlif təsərrüfat məmulatı və bəzəyinə qədər böyük bir sahəni əhatə edir.Təbiidir ki, xalqımızın məişət xüsusiyyətləri, estetik zövgü, bir sözlə milli siması, mənliyi bu sənət növündə özünü xüsusilə parlaq şəkildə büruzə verəcəkdi. Əbəs yerə olmayaraq indi dünyanın ən zəngin muzeylərində Azərbaycan xalq sənətkarlığının bir çox gözəl nümunələri ilə rastlaşmaq olur. Xalqımızın əməyi sayəsində yaranıb onun həyat və məişətində geniş istifadə edilən el sənətimizin böyük və zəngin bir tarixi var. Naxçıvan, Mingəçevir, Gədəbəy,Qazax, Gəncə və s. yerlərdən əldə edilmiş metaldan düzəldilmiş sənət əsərlərinin yaşı 5000 ilə yaxındır. Bu ərazilərdən tapılmış qab-qacaq, silah və bəzək nümunələri tək bir tarixi fakt kimi deyil, həm də onu yaradan sənətkarın ustalıq bacarığından məlumat verən qiymətli mənbədir.",
      btn:"Әtrafli",
      sek:"https://portal.azertag.az/sites/default/files/kover8.jpg",
      id:"2" ,
    },
    {
      img: "https://azvision.az/photos/2019/03/gothi-1553687452.jpg",
      name: "Bələdçi",
      text:"Son illər ölkəmizdə turizmin inkişafı ilə bağlı atılan addımlar respublikamıza turist axınının sürətlənməsinə və turistlərə göstərilən xidmətlərin sayının artmasına səbəb olmuşdur.",
      par:" Son illər ölkəmizdə turizmin inkişafı ilə bağlı atılan addımlar respublikamıza turist axınının sürətlənməsinə, regionlarda yeni turizm infrastrukturlarının yaranmasına və turistlərə göstərilən xidmətlərin sayının artmasına səbəb olmuşdur.Yerli və xarici turistlərə ölkəmizin mövcud turizm imkanları və tarixi ilə bağlı zəruri və düzgün məlumatların verilməsi, turist məmnuniyyətinin təmin edilməsi və turistlərlə kommunikasiyanın düzgün qurulmasında turizm bələdçilərin fəaliyyəti önəmli rol oynayır.Bununla bağlı, aprel ayının 9-da “Hilton” mehmanxanasında Mədəniyyət və Turizm Nazirliyi tərəfindən Azərbaycan Turizm və Menecment Universitetinin nəzdində “Turizm bələdçilərinin və tərçüməçi-gidlərin Attestasiya Komitəsi”ndən bələdçi kartı almış bələdçilərin iştirakı ilə toplantı keçirilmişdir. Toplantının açılışını Mədəniyyət və Turizm Nazirliyinin Turizm şöbəsinin müdiri Aydin İsmiyev açaraq, ölkəmizdə turizmin mövcud vəziyyəti, inkişaf dinamikası, turizm sahəsi ilə bağlı  yaradılmış Assosiasiya və İctimai Birliklər (Azərbaycan Turizm Assosiasiyası, Azərbaycan Sağlamlıq və Termal Turizmə Dəstək İctimai Birliyi, Kənd Yaşıl Turizminin İnkişafına Dəstək İctimai Birliyi) haqqında məlumatlar vermiş, turizm bazarının genişlənməsi, ölkəmizdə fəaliyyət göstərən turizm bələdçilərinin sayının artması və bu sahədə görüləcək işlərin daha sürətləndirilməsi məqsədilə Bələdçilər Assosiasiyasının yaradılması zərurətini qeyd etmişdir.",
      btn:"Әtrafli",
      sek:"https://previews.123rf.com/images/jackmalipan/jackmalipan1807/jackmalipan180700004/104451667-baku-city-old-town-street-view-in-azerbaijan.jpg",
      id:"3" ,
    },
  ])

 return (
   <div>
        <div className={styles.container}>
            {
              blog.map(
                (i)=>{return <Page3a data={i} key={i.id}/>}
              )
            }
         </div>
           <Footer/>
                 <Btn/> 
   </div>
    )
}
export default Page3