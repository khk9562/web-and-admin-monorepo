import React from 'react'
import { NavLink } from 'react-router-dom'
import { CButton, CCol, CContainer, CNavLink, CRow } from '@coreui/react'

const Page500 = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <span className="clearfix">
              <h1 className="float-start display-3 me-4">500</h1>
              <h4 className="pt-3">{`알 수 없는 에러가 발생하였습니다 :(`}</h4>
              <p className="text-body-secondary float-start">
                일시적으로 현재 페이지를 찾을 수 없습니다.
              </p>
            </span>
          </CCol>
        </CRow>
        <CRow className="justify-content-center text-center">
          <CCol md={'auto'}>
            <CButton color="dark">
              <CNavLink to="/home" as={NavLink}>
                홈으로 가기
              </CNavLink>
            </CButton>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page500
