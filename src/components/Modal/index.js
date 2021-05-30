import { ModalInfo } from '../Modalnfo'
import { ModalBtn, ModalContainer, Icon } from './styles'
import PropTypes from 'prop-types'

const Modal = ({ showModal, setShowModal, modalCountry, setModalCountry }) => (
  showModal
    ? <ModalContainer showModal={showModal}>
        <ModalBtn onClick={() => setShowModal(false)}>
                    <Icon className="fas fa-long-arrow-alt-left" />
                    Back
        </ModalBtn>
        <ModalInfo country={modalCountry} setCountry={setModalCountry}/>
    </ModalContainer>
    : <div></div>
)

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  modalCountry: PropTypes.object.isRequired,
  setModalCountry: PropTypes.func.isRequired
}

export { Modal }
