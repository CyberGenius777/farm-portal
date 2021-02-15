import React from 'react'
import { authRoutes } from './routes'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import { INTERESTING_RESOURCES } from './consts'

import styles from './css/App.css'

function App() {
  return (
    <div className='wrapper'>
      <div className='menu'>
        <nav className='nav-container'>
          <ul className='nav'>
            <li className='nav__item'>
              <NavLink
                className='nav__link'
                to='/portals'
                activeStyle={styles.active}
                exact
              >
                Порталы
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink
                className='nav__link'
                to='/interesting-resources'
                activeStyle={styles.active}
                exact
              >
                Интересные ресурсы
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink
                className='nav__link'
                to='/youtube-channels'
                activeStyle={styles.active}
                exact
              >
                Каналы Youtube
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink
                className='nav__link'
                to='/traffic-analysis'
                activeStyle={styles.active}
                exact
              >
                Анализ трафика
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink
                className='nav__link'
                to='/affiliate-programs'
                activeStyle={styles.active}
                exact
              >
                Партнерки
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink
                className='nav__link'
                to='/terminology'
                activeStyle={styles.active}
                exact
              >
                Терминология
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink
                className='nav__link'
                to='/services'
                activeStyle={styles.active}
                exact
              >
                Сервисы
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className='content'>
        <Switch>
          {authRoutes.map(({ path, Component }) => {
            return <Route exact key={path} path={path} component={Component} />
          })}
          <Redirect activeStyle={styles.active} to={INTERESTING_RESOURCES} />
        </Switch>
      </div>
    </div>
  )
}

export default App
