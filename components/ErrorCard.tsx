interface IErrorCard {
  title?: string;
  description?: string;
  link?: string | boolean;
  subDescription?: string | boolean;
  subDescriptionV2?: string | boolean;
}

export const ErrorCard = ({
  title = 'Sorry, something went wrong! 🙀',
  description = `Sorry for the inconvenience. 🙇  `,
  subDescription = `Please report this issue on our `,
  link = 'https://discord.com/invite/HkWyY4kPjG',
  subDescriptionV2 = ` channel in discord, and we will get back to you ASAP. `,
}: IErrorCard) => (
  <div className="card glass shadow-lg bg-gray-50 hover:bg-white">
    <div className="card-body">
      <h2 className="card-title text-gray-600">{title}</h2>
      {description && (
        <p className="text-gray-500">
          {description}
          <p>
            {subDescription && subDescription}
            {link && typeof link === 'string' && (
              <a className="link" href={link}>
                #incident-report
              </a>
            )}
            {subDescriptionV2 && subDescriptionV2}
          </p>
        </p>
      )}
    </div>
  </div>
);
