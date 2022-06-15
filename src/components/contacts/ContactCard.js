import { BsFillXCircleFill } from 'react-icons/bs'

const ContactCard = ({ firstName='', lastName='', phoneNumber='', profilePic='' }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <img src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} className="card-img-top" />
                <p className="card-text">{firstName} {lastName}</p>
                <p className="card-text">{phoneNumber}</p>
                <button className="btn btn-danger">
                    <BsFillXCircleFill />
                </button>
            </div>
        </div>
    )
}

export default ContactCard;