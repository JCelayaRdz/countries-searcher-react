import { ModalInfo } from "../Modalnfo"
import { ModalBtn, ModalContainer, Icon} from "./styles"

export const Modal = ({showModal, setShowModal, modalCountry}) => (
    showModal ? 
    <ModalContainer showModal={showModal}>
                <ModalBtn onClick={() => setShowModal(false)}>
                    <Icon className="fas fa-long-arrow-alt-left" />
                    Back
                </ModalBtn>
                <ModalInfo country={modalCountry}/>
            </ModalContainer>
    :
    <div></div>
)