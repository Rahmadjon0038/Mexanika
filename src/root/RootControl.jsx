import React from 'react'
import Home from '../components/home/Home'
import Bir_KuchKuchlarsistemasiTengsiretuvchikuch from '../components/StatikaBolim_bir/Bir_KuchKuchlarsistemasiTengsiretuvchikuch'
import AxiomsSection from '../components/StatikaBolim_bir/Ikki_axsioma'
import ForcesIntersection from '../components/StatikaBolim_bir/Uch_uchKuchMuozanati'
import ProjectionAndProblems from '../components/StatikaBolim_bir/Tort_KuchningProyeksiyasi'
import ForceMoment from '../components/StatikaBolim_bir/Besh_NuqtagaNisbatan_kuchM'
import MomentVector from '../components/StatikaBolim_bir/Ollti_NuqtagaNisKuchM'
import VarignonTheorem from '../components/StatikaBolim_bir/Yetti_Varinion_teoremasi'
import ForceMomentOnAxis from '../components/StatikaBolim_bir/Saakiz_OqqnaNKuchM'
import CoupleMoment from '../components/StatikaBolim_bir/toqqiz_juftKuchMomenti'
import ConnectionsAndReactions from '../components/StatikaBolim_bir/On_BoshlanGichtUR'

function RootControl() {
  return (
    <div>
      <Home />
      {/* <Bir_KuchKuchlarsistemasiTengsiretuvchikuch /> */}
      {/* <AxiomsSection/> */}
      {/* <ForcesIntersection/> */}
      {/* <ProjectionAndProblems/> */}
      {/* <ForceMoment/> */}
      {/* <MomentVector/> */}
      {/* <VarignonTheorem/> */}
      {/* <ForceMomentOnAxis/> */}
      {/* <CoupleMoment/> */}
      <ConnectionsAndReactions/>
    </div>
  )
}

export default RootControl
