const  ContactDetailsCard = ({ contact }) => {
    return (
        <div className="card" style={{ width: "24rem", margin: "2rem" }}>
            <img src={contact?.profilePic} alt={`Profile of ${contact?.firstName}${contact?.lastName}.`} className="card-img-top" />
            <div className="card-body">
                <p>{contact?.firstName} {contact?.lastName}</p>
                <dl>
                    <dt>Phone Number</dt>
                    <dd>{contact?.phoneNumber}</dd>

                    <dt>Email</dt>
                    <dd>{contact?.email}</dd>

                    <dt>Address</dt>
                    <dd>{contact?.address}</dd>
                </dl>
            </div>
        </div>
    )
}

export default ContactDetailsCard;