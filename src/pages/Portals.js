import React, { useState, useEffect } from 'react'
import { zorbasData } from './../zorbasmedia'
import axios from 'axios'

import './Portals.css'

function Portals() {
  const [data, setData] = useState(zorbasData)

  useEffect(() => {
    axios
      .get(
        'https://react-minin-6f99d-default-rtdb.europe-west1.firebasedatabase.app/'
      )
      .then((response) => console.log(response.data))
  }, [])

  return (
    <div className='portal-container'>
      <div className='portal__content'>
        <h1>Порталы</h1>
        <div className='portal__last-news'>
          <hr />
          {data.map((elem) => {
            return (
              <div key={elem.title}>
                <div className='portal-main-news'>
                  <h3>{elem.title}</h3>
                  <div className='portal__news-block'>
                    <p className='portal__preview-text'>{elem.preview}</p>
                    <img
                      className='portal__preview-img'
                      src={elem.img}
                      alt='preview'
                    />
                  </div>
                  <div className='portal__info'>
                    <div>
                      <a
                        className='portal__link'
                        href={elem.link}
                        rel='noreferrer'
                        target='_blank'
                      >
                        Статья
                      </a>
                    </div>
                    <div>{elem.time}</div>
                  </div>
                </div>
                <hr />
              </div>
            )
          })}
        </div>
      </div>
      <div className='portal__aside'>Some Additional Information</div>
    </div>
  )
}

export default Portals
