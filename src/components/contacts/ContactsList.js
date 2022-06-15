import ContactCard from "./ContactCard";

const ContactList = ({ contacts = [] }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        backgroundColor: "lightgray",
        padding: "2rem",
        margin: "2rem 0",
      }}
    >
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          firstName={contact.firstName}
          lastName={contact.lastName}
          phoneNumber={contact.phoneNumber}
          profilePic={contact.profilePic}
        />
      ))}
    </div>
  );
};

export default ContactList;
