import React from 'react'
import './HomePage.css'
import { HomePageData } from '../../components/HomePageData'

import * as FiIcons from 'react-icons/fi'

export function HomePage() {
  return (
    <div className='page'>
      <div className='big-box'>
        <div className='half-circle'>
          <h3>ภาพรวมตำบล Long Term Care ระดับประเทศ</h3>
        </div>
        <div className='group-small-box'>
          <div className='small-box usercare'>
            <div>
              <h1>UserCare</h1>
            </div>
            <div className='bar'>
              <p className='bar-text'>ดูรายละเอียด</p>
              <FiIcons.FiArrowRightCircle size={16} />
            </div>
          </div>
          <div className='small-box careplan'>
            <div>
              <h1>CarePlan</h1>
            </div>
            <div className='bar'>
              <p className='bar-text'>ดูรายละเอียด</p>
              <FiIcons.FiArrowRightCircle size={16} />
            </div>
          </div>

          <div className='small-box caremanager'>
            <div>
              <h1>CareManager</h1>
            </div>
            <div className='bar'>
              <p className='bar-text'>ดูรายละเอียด</p>
              <FiIcons.FiArrowRightCircle size={16} />
            </div>
          </div>

          <div className='small-box caregiever'>
            <div>
              <h1>CareGiever</h1>
            </div>
            <div className='bar'>
              <p className='bar-text'>ดูรายละเอียด</p>
              <FiIcons.FiArrowRightCircle size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
