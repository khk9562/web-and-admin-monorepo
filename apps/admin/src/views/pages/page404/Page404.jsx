import React from 'react'
import { NavLink } from 'react-router-dom'
import { CButton, CCol, CContainer, CNavLink, CRow } from '@coreui/react'

const Page404 = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <div className="clearfix">
              <h1 className="float-start display-3 me-4">404</h1>
              <h4 className="pt-3">죄송합니다.</h4>
              <p className="text-body-secondary float-start">페이지를 찾을 수 없습니다.</p>
            </div>
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

export default Page404
