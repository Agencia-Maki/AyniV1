import React from "react"
import {
  CCol,
  CForm,
  CFormInput
} from '@coreui/react-pro'

const Modal = (props) => {
  const {validated, handleChange, currentData} = props
  const {formRef} = props

  return (
    <>
      <CForm className="row g-3 needs-validation"
        noValidate
        validated={validated}
        ref={formRef}
      >
        <CCol>
          <CFormInput
            value={currentData.name}
            name="name"
            onChange={handleChange}
            type="text"
            id="validationServer01"
            label="Nombre del Tipo de Pago"
            feedbackInvalid="Porfavor ingrese un nombre de Banco."
            required
          />
        </CCol>
        <CCol>
          <CFormInput
            value={currentData.description}
            name="slug"
            onChange={handleChange}
            type="text"
            id="validationServer02"
            label="Descripción del Tipo de Pago"
            feedbackInvalid="Porfavor ingrese una abreviatura de Banco (unico)."
            required
          />
        </CCol>
      </CForm>

    </>
  )
}

export default Modal