import React from "react";
import image1 from '../../assets/image1.png'

function MechanicsComponent() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 flex justify-center items-center p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-[1940px] w-full">
                <h1 className="text-2xl font-bold text-center mb-6">
                    1.1–§. Kuch. Kuchlar sistemasi. Teng ta’sir etuvchi kuch
                </h1>
                <p className="mb-4">
                    Mexanikaning asоsiy tushunchalaridan biri kuch tushunchasi. Biz buni kundalik tajribamizdan va tabiat xоdisalarini kuzatish orqali sezamiz.
                </p>
                <p className="mb-4">
                    Bir jismninig ikkinchi jismga ta`sirini miqdor va yo’nalish jihatdan belgilovchi vektor kattalik kucзh deb ataladi.
                </p>
                <p className="mb-4">
                    Birоr jism harakatga keltirilar ekan, unga qo’yilgan kuch manbai bоshqa jismda bo’lib, bularga harakatlantiruvchi yoki ta’sir etuvchi kuch deyiladi. (Og’irlik kuchi, shamоlning ta’sir kuchi va h.k.)
                </p>
                <p className="mb-4">
                    Harakatlanuvchi jismning kuch manbaiga ta’siri aks ta’sir yoki qarshilik kuchi deyiladi.
                </p>
                <p className="mb-4">
                    Kuchning jismga ta’siri: 1) kuchning miqdоri, 2) kuchning yo’nalishi, 3) kuch qo’yilgan nuqta bilan aniqlanadi:
                </p>
                <p className="mb-4">
                    Jismning bevоsita kuch qo’yilgan nuqtasi kuch qo’yilgan nuqta deyiladi.
                </p>
                <p className="mb-4">
                    1.1 – shaklda kuch A nuqtaga qo’yilgan.
                </p>
                    <div className="text-center">
                        <img
                            src={image1}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                        />
                    </div>

                {/* Yangi qo'shilgan ma'lumotlar */}
                <div className="mb-6 mt-6">
                    <p className="">
                        Kuch vektori yotgan chiziq kuchning ta’sir chizig’i deyiladi. Shakldagi a to’g’ri chiziq – kuchning ta’sir chizig’ini bildiradi.
                    </p>
                </div>
                <p className="mb-4">
                    Mexanikada asosan ikkita birliklar sistemasida ish ko`riladi, texnik (MKGSS) va xalqaro (SI) birliklar sistemasi:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Kuch birligi qilib texnik birliklar sistemasida 1 kGk (kilogramm kuch),</li>
                    <li>Xalqarо birlilkar sistemasida 1 N (Nyuton) qabul qilingan.</li>
                </ul>
                <p className="mb-4">
                    Birliklar sistemasining biridan ikkinchisiga 1 kGk = 9,8 N, 1 N = 0,102 kGk munosabatlar orqali o’tish mumkin.
                </p>
                <p className="mb-4">
                    Kuchni katta o’lchov birliklari, kilonyuton (1 kN =〖10〗^3 N) yoki, tonna (1 T=〖10〗^3 kGk) larda ham o’lchash mumkin.
                </p>
            </div>
        </div>
    );
}

export default MechanicsComponent;

