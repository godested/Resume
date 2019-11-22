import React, { ElementType } from 'react';
import { Wrapper } from 'core/components/Wrapper';
import { ReactComponent as EmailIcon } from 'core/assets/icons/email.svg';
import { ReactComponent as TelegramIcon } from 'core/assets/icons/telegram.svg';
import { ReactComponent as LinkedInIcon } from 'core/assets/icons/linkedin.svg';
import { ReactComponent as GithubIcon } from 'core/assets/icons/github.svg';
import { useResume } from 'core/providers/Resume';
import classes from './styles.module.scss';

const ICONS_MAP: Record<string, ElementType> = {
  Email: EmailIcon,
  Telegram: TelegramIcon,
  LinkedIn: LinkedInIcon,
  GitHub: GithubIcon,
};

export function Contacts() {
  const { contacts } = useResume();

  return (
    <Wrapper className={classes.Container}>
      <ul className={classes.ContactsList}>
        {contacts.map(contact => {
          const Icon = ICONS_MAP[contact.name];
          return (
            <li key={contact.name} className={classes.ContactsItem}>
              <a
                className={classes.ContactsLink}
                target="_blank"
                rel="noopener noreferrer"
                title={contact.name}
                href={
                  contact.type === 'email'
                    ? `mailto:${contact.value}`
                    : contact.value
                }
              >
                {contact.name}
                <Icon fill="#fff" className={classes.ContactsIcon} />
              </a>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}
