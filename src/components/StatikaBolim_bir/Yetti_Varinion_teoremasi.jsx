import React from "react";
import MathJax from "react-mathjax";
import image1_18 from '../../assets/image1_18.png'
function VarignonTheorem() {
    return (
        <MathJax.Provider>
            <div className="min-h-screen bg-gray-100 text-gray-800 flex justify-center items-center p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-[1940px] w-full">
                    <h1 className="text-2xl font-bold text-center mb-6">
                        1.7 – §. Varignon teoremasi
                    </h1>
                    <p className="mb-4">
                        Masalalar yechishda ko‘p qo‘llaniladigan, fransuz mexanik olimi P’ier Varignon nomi bilan yuritiladigan teorema bilan tanishasiz.
                    </p>
                    <h2 className="text-lg font-bold mb-4">Teorema:</h2>
                    <p className="mb-4">
                        Kuchdan biror nuqtaga nisbatan olingan moment, kuchning tashkil etuvchilaridan mazkur nuqtaga nisbatan olingan momentlarining geometrik yig‘indisiga teng.
                    </p>
                    <h2 className="text-lg font-bold mb-4">Isbot:</h2>
                    <p className="mb-4">
                        Jismning biror <MathJax.Node inline formula={"A"} /> nuqtasiga 
                        <MathJax.Node inline formula={"\\vec{R}"} /> kuch qo‘yilgan bo‘lib, uning koordinata o‘qlaridagi proyeksiyalari, ya’ni tashkil etuvchilari berilgan bo‘lsin.
                    </p>
                    <MathJax.Node formula={"\\vec{R}_x, \\vec{R}_y, \\vec{R}_z"} />
                    <p className="mb-4">
                        Kuchlardan <MathJax.Node inline formula={"O"} /> nuqtaga nisbatan momentlar olib, ularni o‘zaro geometrik qo‘shaylik (1.18 – shakl):
                    </p>
                    <div className="text-center my-6">
                        <img
                            src={image1_18}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                        />
                    </div>
                    <MathJax.Node formula={"[\\vec{r}_A, \\vec{R}_x] + [\\vec{r}_A, \\vec{R}_y] + [\\vec{r}_A, \\vec{R}_z] = [\\vec{r}_A, (\\vec{R}_x + \\vec{R}_y + \\vec{R}_z)]"} />
                    <p className="mb-4">
                        <MathJax.Node inline formula={"\\vec{R}_x + \\vec{R}_y + \\vec{R}_z = \\vec{R}"} /> bo‘lgani uchun:
                    </p>
                    <MathJax.Node formula={"[\\vec{r}_A, (\\vec{R}_x + \\vec{R}_y + \\vec{R}_z)] = [\\vec{r}_A, \\vec{R}]"} />
                    <p className="mb-4">Demak:</p>
                    <MathJax.Node formula={"mom_o(\\vec{R}) = mom_o(\\vec{R}_x) + mom_o(\\vec{R}_y) + mom_o(\\vec{R}_z)"} />
                    <p className="mb-4">(1.17)</p>
                    <p className="mb-4">Teorema isbotlandi.</p>
                </div>
            </div>
        </MathJax.Provider>
    );
}

export default VarignonTheorem;