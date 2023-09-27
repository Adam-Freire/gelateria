import React from 'react';
import './sabores.css'

import Topo from '../../Topo'
import Rodape from '../../Rodape'


export default function Sabores () {
   return(
     <div>
      <Topo />
         <main>

          <section className='capa-sabores'>
            <div className='titulo-sabores'>
              <h1>NOSSOS SABORES</h1>
            </div>
          </section>

          <section  className="secao-sabor limitar-secao">
            
              <h2> SABORES DE SORVETE</h2>
            <div className='secao-sabores-conteudo limitar-secao'>
              
              <div className='card-sabores'>
                <img src='./assets/sabor-oreo.png' title='Sorevete sabor Oreo' alt='Sorevete sabor Oreo' />
                <div>
                  <h3>Sorvete de Oreo</h3>
                  <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                </div>
              </div >
              <div className='card-sabores'>
              <img src='./assets/sabor-pistache.png' title='Sorevete sabor Pistache' alt='Sorevete sabor Pistache' />
                <div>
                  <h3>Sorvete Pistache</h3>
                  <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                </div>
              </div>
              <div className='card-sabores'>
              <img src='./assets/sabor-cookies-avela.png' title='Sorevete sabor Cookies & Avelã' alt='Sorevete sabor Cookies & Avelã' />
                <div>
                  <h3>Sorvete Cookies & Avelã</h3>
                  <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                </div>
              </div>
              <div className='card-sabores'>
              <img src='./assets/sorbet-kiwi.png' title='Sorevete sabor Kiwi' alt='Sorevete sabor Kiwi' />
                <div>
                  <h3>Sorvete de Kiwi</h3>
                  <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                </div>
              </div>
              <div className='card-sabores'>
              <img src='./assets/sorbet-morango.png' title='Sorevete sabor Morango' alt='Sorevete sabor Morango' />
                <div>
                  <h3>Sorvete de Morango</h3>
                  <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                </div>
              </div>
              <div className='card-sabores'>
              <img src='./assets/sorbet-limao.png' title='Sorevete sabor Limão' alt='Sorevete sabor Limão' />
                <div>
                  <h3>Sorvete de Limão Siciliano</h3>
                  <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                </div>
              </div>
            </div>

          </section>
         </main>
      <Rodape />   
     </div>
   )
}

