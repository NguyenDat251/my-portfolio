import { contactNames, contactLink } from "./constants";
import { getContactIconComponent } from "./helpers";

export default function ContactMethodFooter() {
  return (
    <div className="flex justify-around w-full mt-4 md:hidden">
      {contactNames.map((contactName, index) => (
        <div className="contact-method__component" key={contactName}>
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
        </div>
      ))}
    </div>
  );
}
