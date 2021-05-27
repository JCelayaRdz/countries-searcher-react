import { ModalInfo } from '../Modalnfo'
import { ModalBtn, ModalContainer, Icon } from './styles'

export const Modal = ({ showModal, setShowModal, modalCountry, setModalCountry }) => (
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
