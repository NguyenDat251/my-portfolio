import "./ContactMethod.scss";
import { contactNames, contactLink } from "./constants";
import { getContactIconComponent } from "./helpers";

export default function ContactMethod() {
  return (
    <>
      <ul className="fixed bottom-0 flex-col hidden gap-6 contact-method__boundary md:flex left-8">
        {contactNames.map((contactName, index) => (
          <li className="contact-method__component" key={contactName}>
            {contactName === "Gmail" ? (
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nguyenquocdat2511998@gmail.com "
                key={index}
                target="_blank"
                rel="noreferrer"
                aria-label="mail"
              >
                {getContactIconComponent(contactName)}
              </a>
            ) : (
              <a
                href={contactLink[index]}
                key={index}
                target="_blank"
                rel="noreferrer"
                aria-label={"contact link " + index}
              >
                {getContactIconComponent(contactName)}
              </a>
            )}
          </li>
        ))}
        <div className="vertical-line"></div>
      </ul>
    </>
  );
}
